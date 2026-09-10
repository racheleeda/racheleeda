from typing import Dict, Any

def calculate_overall_industrial_risk(sensors: Dict[str, float], machine_health: float) -> Dict[str, Any]:
    """
    Calculate Overall Industrial Risk (0-100) decomposed into:
    - Machine Risk
    - Environmental / Gas Risk
    - Thermal Risk
    - Dynamic Vibration Risk
    """
    temp = sensors.get("temperature", 65.0)
    vib = sensors.get("vibration", 2.0)
    ammonia = sensors.get("ammonia", 5.0)

    # 1. Machine Risk derived from health
    machine_risk = round(100.0 - machine_health, 1)

    # 2. Gas / Environmental Risk (Ammonia MQ-137)
    # Safe: < 15 ppm -> low risk
    # OSHA Permissible Exposure Limit (PEL) warning: 25-35 ppm -> medium/high risk
    # Critical evacuation: > 50 ppm -> 100% risk
    if ammonia <= 15.0:
        gas_risk = (ammonia / 15.0) * 20.0
    elif ammonia <= 25.0:
        gas_risk = 20.0 + ((ammonia - 15.0) / 10.0) * 30.0
    elif ammonia <= 50.0:
        gas_risk = 50.0 + ((ammonia - 25.0) / 25.0) * 40.0
    else:
        gas_risk = min(100.0, 90.0 + (ammonia - 50.0) * 1.0)

    # 3. Temperature Risk
    if temp <= 65.0:
        temp_risk = max(5.0, (temp / 65.0) * 25.0)
    elif temp <= 85.0:
        temp_risk = 25.0 + ((temp - 65.0) / 20.0) * 45.0
    else:
        temp_risk = min(100.0, 70.0 + (temp - 85.0) * 2.0)

    # 4. Dynamic Vibration Risk
    if vib <= 2.5:
        vib_risk = (vib / 2.5) * 25.0
    elif vib <= 5.0:
        vib_risk = 25.0 + ((vib - 2.5) / 2.5) * 45.0
    else:
        vib_risk = min(100.0, 70.0 + (vib - 5.0) * 5.0)

    # Overall Industrial Risk Weighted Formula
    overall_score = round(
        (machine_risk * 0.35) +
        (gas_risk * 0.30) +
        (temp_risk * 0.15) +
        (vib_risk * 0.20),
        1
    )
    overall_score = min(100.0, max(0.0, overall_score))

    if overall_score >= 70.0:
        level = "HIGH"
    elif overall_score >= 40.0:
        level = "MEDIUM"
    else:
        level = "LOW"

    return {
        "overallScore": overall_score,
        "level": level,
        "machineRisk": machine_risk,
        "gasRisk": round(gas_risk, 1),
        "temperatureRisk": round(temp_risk, 1),
        "vibrationRisk": round(vib_risk, 1)
    }
