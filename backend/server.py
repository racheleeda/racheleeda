import json
import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from datetime import datetime

# Add root directory to sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.database.store import db_store
from backend.ai.health_engine import calculate_machine_health
from backend.ai.risk_engine import calculate_overall_industrial_risk
from backend.ai.feature_engineering import calculate_derived_features
from backend.ai.anomaly_detector import anomaly_detector
from backend.ai.explainable_ai import generate_ai_prediction_and_insights
from backend.ai.chatbot import answer_question
from backend.services.simulation_service import simulation_service
from backend.services.notification_service import dispatch_alert
from backend.services.scene_service import get_3d_scene

PORT = int(os.environ.get("PORT", 8000))
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend", "dist")
if not os.path.exists(FRONTEND_DIR):
    FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")

class IndustrialApiHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

    def _set_cors_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
        self.send_header("Content-Type", content_type)
        self.end_headers()

    def do_OPTIONS(self):
        self._set_cors_headers(204)

    def _send_json(self, data, status=200):
        self._set_cors_headers(status, "application/json")
        self.wfile.write(json.dumps(data, default=str).encode("utf-8"))

    def _send_error(self, message, status=400):
        self._send_json({"error": message, "status": status}, status)

    def _read_json_body(self):
        content_len = int(self.headers.get("Content-Length", 0))
        if content_len == 0:
            return {}
        body = self.rfile.read(content_len)
        try:
            return json.loads(body.decode("utf-8"))
        except Exception:
            return {}

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/")
        query = parse_qs(parsed.query)

        # 1. API Root Health
        if path == "/api" or path == "/api/health":
            self._send_json({
                "status": "ONLINE",
                "service": "AI Smart Retrofit Platform API",
                "version": "1.0.0-industrial",
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return

        # 2. GET /api/machines
        if path == "/api/machines":
            machines = db_store.get_all_machines()
            self._send_json(machines)
            return

        # 3. Specific Machine Routes: /api/machines/{id}...
        if path.startswith("/api/machines/"):
            parts = path.split("/")[3:]
            machine_id = parts[0]
            machine = db_store.get_machine(machine_id)
            if not machine:
                self._send_error(f"Machine with id {machine_id} not found", 404)
                return

            if len(parts) == 1:
                # GET /api/machines/{id}
                self._send_json(machine)
                return
            elif len(parts) == 2 and parts[1] == "sensors":
                # GET /api/machines/{id}/sensors
                history = db_store.get_machine_history(machine_id)
                self._send_json({
                    "machineId": machine_id,
                    "latestSensors": machine["latestSensors"],
                    "history": history
                })
                return
            elif len(parts) == 2 and parts[1] == "health":
                # GET /api/machines/{id}/health
                health_score, status, breakdown = calculate_machine_health(machine["latestSensors"])
                self._send_json({
                    "machineId": machine_id,
                    "healthScore": health_score,
                    "status": status,
                    "breakdown": breakdown,
                    "timestamp": datetime.utcnow().isoformat() + "Z"
                })
                return
            elif len(parts) == 2 and parts[1] == "predictions":
                # GET /api/machines/{id}/predictions
                history = db_store.get_machine_history(machine_id)
                derived = calculate_derived_features(machine["latestSensors"], history)
                health_score, status, _ = calculate_machine_health(machine["latestSensors"])
                anom_score, _ = anomaly_detector.predict_anomaly(machine["latestSensors"], derived)
                predictions = generate_ai_prediction_and_insights(
                    machine_id, machine["latestSensors"], derived, health_score, anom_score
                )
                self._send_json(predictions)
                return

        # 4. GET /api/alerts
        if path == "/api/alerts":
            alerts = db_store.get_alerts()
            self._send_json(alerts)
            return

        if path == "/api/notifications":
            self._send_json(db_store.get_notifications())
            return

        if path == "/api/scene-3d":
            self._send_json(get_3d_scene())
            return

        # 5. GET /api/maintenance
        if path == "/api/maintenance":
            maintenance = db_store.get_maintenance()
            self._send_json(maintenance)
            return

        # 6. GET /api/safety
        if path == "/api/safety":
            zones = db_store.get_zones()
            # Find maximum ammonia and temperature across all machines
            all_machines = db_store.get_all_machines()
            max_ammonia = max(m["latestSensors"]["ammonia"] for m in all_machines)
            max_temp = max(m["latestSensors"]["temperature"] for m in all_machines)

            if max_ammonia > 50.0:
                overall_safety = "CRITICAL"
                ammonia_risk = "CRITICAL"
            elif max_ammonia > 25.0:
                overall_safety = "WARNING"
                ammonia_risk = "WARNING"
            else:
                overall_safety = "SAFE"
                ammonia_risk = "SAFE"

            air_quality = "POOR" if max_ammonia > 35.0 else ("MODERATE" if max_ammonia > 15.0 else "GOOD")
            thermal_risk = "HIGH" if max_temp > 85.0 else "NORMAL"

            self._send_json({
                "overallSafety": overall_safety,
                "ammoniaRisk": ammonia_risk,
                "airQuality": air_quality,
                "thermalRisk": thermal_risk,
                "currentAmmoniaPpm": round(max_ammonia, 1),
                "currentAmbientTemp": round(max_temp, 1),
                "zones": zones,
                "disclaimer": "AI-assisted worker safety and environmental hazard monitor. Not for medical diagnosis.",
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return

        # 7. GET /api/risk
        if path == "/api/risk":
            all_machines = db_store.get_all_machines()
            worst_machine = min(all_machines, key=lambda m: m["healthScore"])
            risk_summary = calculate_overall_industrial_risk(
                worst_machine["latestSensors"], worst_machine["healthScore"]
            )
            self._send_json({
                "focusMachineId": worst_machine["id"],
                "focusMachineName": worst_machine["name"],
                **risk_summary
            })
            return

        # Fallback to static frontend file serving
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/")

        body = self._read_json_body()

        # 1. POST /api/sensors (IoT ESP32 Ingestion)
        if path == "/api/sensors":
            machine_id = body.get("machineId")
            if not machine_id:
                self._send_error("Missing required parameter: machineId", 400)
                return

            db_store.update_machine_sensors(machine_id, body)
            machine = db_store.get_machine(machine_id)
            if not machine:
                self._send_error(f"Machine {machine_id} does not exist", 404)
                return

            # Dynamically recalculate health and anomaly status
            history = db_store.get_machine_history(machine_id)
            derived = calculate_derived_features(machine["latestSensors"], history)
            health_score, status, breakdown = calculate_machine_health(machine["latestSensors"])
            anom_score, is_anom = anomaly_detector.predict_anomaly(machine["latestSensors"], derived)

            machine["healthScore"] = health_score
            machine["status"] = status
            machine["anomalyScore"] = anom_score
            machine["failureRisk"] = max(5.0, round(100.0 - health_score, 1))

            self._send_json({
                "status": "SUCCESS",
                "machineId": machine_id,
                "healthScore": health_score,
                "machineStatus": status,
                "anomalyScore": anom_score,
                "isAnomaly": is_anom,
                "breakdown": breakdown
            })
            return

        # 2. POST /api/simulate/{scenario}
        if path.startswith("/api/simulate/"):
            scenario_key = path.split("/")[3]
            result = simulation_service.trigger_scenario(scenario_key)
            self._send_json(result)
            return

        # 3. POST /api/alerts
        if path == "/api/alerts":
            alert_id = f"ALT-{datetime.utcnow().strftime('%Y%m%d-%H%M%S')}"
            alert = {
                "id": alert_id,
                "machineId": body.get("machineId", "MCH-001"),
                "zone": body.get("zone", "ZONE A"),
                "alertType": body.get("alertType", "Manual Operator Alert"),
                "severity": body.get("severity", "WARNING"),
                "sensor": body.get("sensor", "Operator Input"),
                "currentValue": body.get("currentValue", "N/A"),
                "expectedRange": body.get("expectedRange", "N/A"),
                "aiRecommendation": body.get("aiRecommendation", "Inspect according to standard plant safety procedures."),
                "status": "ACTIVE",
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
            db_store.add_alert(alert)
            self._send_json({**alert, "mobileNotification": dispatch_alert(alert, db_store)}, 201)
            return

        # 4a. POST /api/notifications/dispatch
        if path == "/api/notifications/dispatch":
            alert = body.get("alert")
            if not isinstance(alert, dict):
                self._send_error("Missing alert object", 400)
                return
            self._send_json(dispatch_alert(alert, db_store), 201)
            return

        # 4. POST /api/alerts/{id}/acknowledge
        if path.startswith("/api/alerts/") and path.endswith("/acknowledge"):
            alert_id = path.split("/")[3]
            ack = db_store.acknowledge_alert(alert_id)
            if ack:
                self._send_json({"status": "SUCCESS", "alert": ack})
            else:
                self._send_error("Alert not found", 404)
            return

        # 5. POST /api/maintenance
        if path == "/api/maintenance":
            task_id = f"MNT-{len(db_store.get_maintenance()) + 42:03d}"
            task = {
                "id": task_id,
                "machineId": body.get("machineId", "MCH-001"),
                "machineName": body.get("machineName", "Industrial Machine"),
                "issue": body.get("issue", "Preventative Inspection"),
                "recommendation": body.get("recommendation", "Standard PM procedure"),
                "priority": body.get("priority", "MEDIUM"),
                "status": "SCHEDULED",
                "scheduledDate": body.get("scheduledDate", datetime.utcnow().isoformat() + "Z"),
                "createdDate": datetime.utcnow().isoformat() + "Z"
            }
            db_store.add_maintenance(task)
            self._send_json(task, 201)
            return

        # 6. POST /api/predict
        if path == "/api/predict":
            sensors = body.get("sensors", {
                "temperature": 68.0,
                "vibration": 2.2,
                "current": 10.5,
                "frequency": 50.0,
                "humidity": 55.0,
                "ammonia": 5.0
            })
            derived = calculate_derived_features(sensors, [])
            health_score, _, _ = calculate_machine_health(sensors)
            anom_score, _ = anomaly_detector.predict_anomaly(sensors, derived)
            predictions = generate_ai_prediction_and_insights(
                body.get("machineId", "MCH-CUSTOM"), sensors, derived, health_score, anom_score
            )
            self._send_json(predictions)
            return

        # 7. POST /api/chat
        if path == "/api/chat":
            question = str(body.get("message", "")).strip()
            if not question:
                self._send_error("Missing required parameter: message", 400)
                return
            chat_context = body.get("context", {})
            chat_context = dict(chat_context) if isinstance(chat_context, dict) else {}
            # Keep answers grounded in the backend store, even when the UI has stale or partial state.
            chat_context.update({
                "machines": db_store.get_all_machines(),
                "alerts": db_store.get_alerts(),
                "maintenance": db_store.get_maintenance(),
                "zones": db_store.get_zones(),
            })
            selected_id = chat_context.get("selectedMachineId")
            if selected_id:
                selected = db_store.get_machine(selected_id)
                if selected:
                    chat_context["selectedMachine"] = selected
            result = answer_question(question, body.get("messages", []), chat_context)
            self._send_json({"answer": result.get("answer", "I could not generate an answer."), "provider": result.get("provider", "local-fallback")})
            return

        self._send_error(f"POST endpoint {path} not recognized", 404)

def run_server(port=PORT):
    server_address = ("0.0.0.0", port)
    httpd = ThreadingHTTPServer(server_address, IndustrialApiHandler)
    print(f"============================================================")
    print(f"  AI SMART RETROFIT — INDUSTRIAL COMMAND CENTER BACKEND    ")
    print(f"  Live Server: http://localhost:{port}                     ")
    print(f"  API Docs:    http://localhost:{port}/api/health          ")
    print(f"  Serving UI:  {FRONTEND_DIR}                              ")
    print(f"============================================================")
    httpd.serve_forever()

if __name__ == "__main__":
    run_server()
