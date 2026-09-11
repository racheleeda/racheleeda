import json
import os
from urllib import error, request


OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://localhost:11434/api/chat")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2")


def _fallback_answer(question, context):
    question_lower = question.lower()
    selected = context.get("selectedMachine") or {}
    machines = context.get("machines") or []
    alerts = context.get("alerts") or []
    maintenance = context.get("maintenance") or []
    zones = context.get("zones") or []
    def machine_text(machine):
        sensors = machine.get("latestSensors", machine.get("sensors", {}))
        return (
            f"{machine.get('id', 'Unknown')} {machine.get('name', 'machine')} is "
            f"{machine.get('status', 'UNKNOWN')} with {machine.get('healthScore', 'n/a')}% health "
            f"and {machine.get('failureRisk', 'n/a')}% failure risk. "
            f"Readings: {sensors.get('temperature', 'n/a')} C, "
            f"{sensors.get('vibration', 'n/a')} mm/s vibration, "
            f"{sensors.get('current', 'n/a')} A, "
            f"{sensors.get('frequency', 'n/a')} Hz, "
            f"{sensors.get('humidity', 'n/a')}% humidity, "
            f"{sensors.get('ammonia', 'n/a')} ppm ammonia."
        )

    if not selected and machines:
        selected = machines[0]

    mentioned_machine = next(
        (machine for machine in machines if machine.get("id", "").lower() in question_lower
         or machine.get("name", "").lower() in question_lower),
        None,
    )
    if mentioned_machine:
        selected = mentioned_machine

    if not machines:
        return "The backend has no machine telemetry loaded yet. Start the backend with the project virtual environment and refresh the dashboard."

    if any(word in question_lower for word in ("worst", "highest risk", "most risky", "critical machine")):
        worst = min(machines, key=lambda machine: machine.get("healthScore", 100))
        return f"The highest-priority asset is {machine_text(worst)} Inspect it before returning it to normal operation."

    if any(word in question_lower for word in ("alert", "alarm")):
        active = [alert for alert in alerts if alert.get("status") == "ACTIVE"]
        if not active:
            return "There are no active alerts in the backend store."
        summary = "; ".join(f"{alert.get('machineId')}: {alert.get('alertType')} ({alert.get('severity')})" for alert in active[:4])
        return f"There are {len(active)} active alerts. {summary}. Review the Alert Center for recommendations."

    if any(word in question_lower for word in ("maintenance", "repair", "work order", "service")):
        pending = [task for task in maintenance if task.get("status") not in ("COMPLETED", "CLOSED")]
        if not pending:
            return "There are no pending maintenance tasks in the backend store."
        summary = "; ".join(f"{task.get('machineId')}: {task.get('issue')} ({task.get('priority')})" for task in pending[:4])
        return f"There are {len(pending)} pending maintenance tasks. {summary}."

    if any(word in question_lower for word in ("how many", "number of", "count", "fleet", "machines")):
        critical = sum(machine.get("status") == "CRITICAL" for machine in machines)
        warning = sum(machine.get("status") == "WARNING" for machine in machines)
        return f"The fleet has {len(machines)} monitored machines: {critical} critical, {warning} warning, and {len(machines) - critical - warning} normal."

    if any(word in question_lower for word in ("zone", "area", "safety", "ppe", "ammonia", "gas")):
        if zones and "safest" in question_lower:
            safest = min(zones, key=lambda zone: zone.get("ammoniaPpm", zone.get("ammonia", 0)))
            ammonia = safest.get("ammoniaPpm", safest.get("ammonia"))
            return f"{safest.get('zoneName', safest.get('name', safest.get('zoneId')))} is currently the safest zone, with {ammonia} ppm ammonia and {safest.get('machineHealth', safest.get('health', 'n/a'))}% machine health."
        highest_gas = max(zones, key=lambda zone: zone.get("ammoniaPpm", zone.get("ammonia", 0))) if zones else None
        if highest_gas:
            ammonia = highest_gas.get("ammoniaPpm", highest_gas.get("ammonia"))
            return f"{highest_gas.get('zoneName', highest_gas.get('name', highest_gas.get('zoneId')))} has the highest ammonia reading at {ammonia} ppm and is marked {highest_gas.get('safetyStatus', 'UNKNOWN')}. Follow site PPE and evacuation procedures for readings above your approved limit."

    if selected:
        machine_summary = machine_text(selected)
    else:
        machine_summary = f"The dashboard is monitoring {len(machines)} machines."

    if any(word in question_lower for word in ("health", "status", "condition")):
        return f"{machine_summary} Review the machine detail and live telemetry panels for the full breakdown."
    if any(word in question_lower for word in ("ammonia", "gas", "safety", "ppe")):
        return f"{machine_summary} For ammonia above 25 ppm, restrict access, improve ventilation, and follow your plant safety procedure. This assistant does not replace an on-site safety assessment."
    if any(word in question_lower for word in ("temperature", "heat", "overheat")):
        return f"{machine_summary} A rising temperature should be checked against the machine's expected range, cooling system, load, and maintenance history before continued operation."
    if any(word in question_lower for word in ("vibration", "bearing", "noise")):
        return f"{machine_summary} Increasing vibration can indicate bearing wear, imbalance, or misalignment. Inspect the asset and follow the controlled shutdown procedure when limits are exceeded."
    if any(word in question_lower for word in ("alert", "maintenance", "repair", "fix")):
        return f"{machine_summary} Open the Alerts or Maintenance section to review active recommendations and create a work order."

    return (
        f"I can help with the machines, sensors, alerts, maintenance, safety, and predictions shown in this dashboard. "
        f"{machine_summary} Ask a specific question and I will relate the answer to the live platform data."
    )


def answer_question(question, messages=None, context=None):
    """Answer with local Llama/Ollama when available and fall back safely when it is not."""
    context = context if isinstance(context, dict) else {}
    history = messages if isinstance(messages, list) else []
    system_prompt = (
        "You are Aila, the concise industrial operations assistant inside the AI Smart Retrofit dashboard. "
        "Answer questions about the website and the telemetry context supplied below. Never invent readings. "
        "For safety issues, recommend following on-site procedures and escalating to qualified personnel. "
        "If the question is outside the dashboard, say so clearly.\n\n"
        f"Dashboard context:\n{json.dumps(context, default=str)}"
    )
    ollama_messages = [{"role": "system", "content": system_prompt}]
    for message in history[-10:]:
        if message.get("role") in ("user", "assistant") and message.get("content"):
            ollama_messages.append({"role": message["role"], "content": str(message["content"])[:4000]})
    ollama_messages.append({"role": "user", "content": question})

    payload = json.dumps({"model": OLLAMA_MODEL, "messages": ollama_messages, "stream": False}).encode("utf-8")
    try:
        req = request.Request(OLLAMA_URL, data=payload, headers={"Content-Type": "application/json"}, method="POST")
        with request.urlopen(req, timeout=8) as response:
            result = json.loads(response.read().decode("utf-8"))
        answer = result.get("message", {}).get("content", "").strip()
        if answer:
            return {"answer": answer, "provider": f"ollama/{OLLAMA_MODEL}"}
    except Exception:
        # A local model is optional; dashboard answers must still work if it is unavailable or misconfigured.
        pass

    return {"answer": _fallback_answer(question, context), "provider": "local-fallback"}