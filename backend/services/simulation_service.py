from typing import Dict, Any
from backend.database.store import db_store
from backend.ai.health_engine import calculate_machine_health
from backend.ai.feature_engineering import calculate_derived_features
from backend.ai.anomaly_detector import anomaly_detector
from backend.ai.explainable_ai import generate_ai_prediction_and_insights
from backend.services.notification_service import dispatch_alert
from datetime import datetime

class SimulationService:
    """
    Simulation Engine for Hackathon Demonstrations.
    Allows one-click scenario injection that immediately updates
    telemetry, health scores, anomaly scores, and triggers automated alerts.
    """

    SCENARIOS = {
        "normal": {
            "name": "Normal Operation",
            "temperature": 68.4,
            "vibration": 2.1,
            "current": 10.2,
            "frequency": 50.0,
            "humidity": 58.0,
            "ammonia": 6.2,
            "targetMachine": "MCH-001"
        },
        "overheat": {
            "name": "Simulate Overheating",
            "temperature": 94.6,
            "vibration": 3.8,
            "current": 15.4,
            "frequency": 49.2,
            "humidity": 62.0,
            "ammonia": 8.0,
            "targetMachine": "MCH-002",
            "alertType": "Severe Motor Overheating & Thermal Runaway",
            "severity": "CRITICAL",
            "sensor": "Stator RTD Temperature Probe",
            "currentValue": "94.6°C",
            "expectedRange": "50.0 – 80.0°C",
            "recommendation": "Inspect cooling blower fan shroud and verify lubrication according to plant emergency procedure."
        },
        "vibration": {
            "name": "Simulate High Vibration",
            "temperature": 82.0,
            "vibration": 8.4,
            "current": 16.8,
            "frequency": 47.8,
            "humidity": 56.0,
            "ammonia": 9.2,
            "targetMachine": "MCH-004",
            "alertType": "Critical Mechanical Vibration & Bearing Spalling",
            "severity": "CRITICAL",
            "sensor": "Piezoelectric Accelerometer",
            "currentValue": "8.4 mm/s",
            "expectedRange": "< 4.5 mm/s (ISO 10816)",
            "recommendation": "Emergency bearing alignment required. Initiate controlled shutdown before rotor spalling damages stator windings."
        },
        "overcurrent": {
            "name": "Simulate High Current Overload",
            "temperature": 79.5,
            "vibration": 4.1,
            "current": 26.8,
            "frequency": 48.5,
            "humidity": 60.0,
            "ammonia": 7.5,
            "targetMachine": "MCH-003",
            "alertType": "Excessive Current Draw & Inverter Phase Imbalance",
            "severity": "WARNING",
            "sensor": "Split-Core Current Sensor",
            "currentValue": "26.8 A",
            "expectedRange": "8.0 – 16.0 A",
            "recommendation": "Check mechanical drivetrain for binding friction and verify power phase voltage balance."
        },
        "gas_alert": {
            "name": "Simulate Hazardous Ammonia Gas Leak",
            "temperature": 76.0,
            "vibration": 3.2,
            "current": 13.5,
            "frequency": 49.8,
            "humidity": 84.0,
            "ammonia": 54.8,
            "targetMachine": "MCH-006",
            "alertType": "Hazardous Ammonia Gas Concentration Exceeded",
            "severity": "CRITICAL",
            "sensor": "MQ-137 Toxic Gas Sensor",
            "currentValue": "54.8 ppm",
            "expectedRange": "< 25.0 ppm (OSHA PEL)",
            "recommendation": "ENVIRONMENTAL HAZARD: Ammonia above critical limit in Zone B. Alert supervisor, mandate PPE respirators, verify emergency scrubbers."
        },
        "critical_failure": {
            "name": "Simulate Compound Machine Failure Risk",
            "temperature": 96.2,
            "vibration": 9.2,
            "current": 28.5,
            "frequency": 45.8,
            "humidity": 68.0,
            "ammonia": 28.0,
            "targetMachine": "MCH-002",
            "alertType": "Imminent Multi-Factor Electromechanical Breakdown",
            "severity": "CRITICAL",
            "sensor": "Combined Multi-Sensor Telemetry",
            "currentValue": "96.2°C | 9.2 mm/s | 28.5 A",
            "expectedRange": "Nominal Operating Envelope",
            "recommendation": "IMMEDIATE EMERGENCY: Multiple safety barriers breached. Follow plant emergency procedures and execute safe line isolation."
        }
    }

    def trigger_scenario(self, scenario_key: str) -> Dict[str, Any]:
        scenario = self.SCENARIOS.get(scenario_key)
        if not scenario:
            scenario = self.SCENARIOS["normal"]

        target_id = scenario.get("targetMachine", "MCH-001")
        reading = {
            "temperature": scenario["temperature"],
            "vibration": scenario["vibration"],
            "current": scenario["current"],
            "frequency": scenario["frequency"],
            "humidity": scenario["humidity"],
            "ammonia": scenario["ammonia"]
        }

        # Update machine telemetry in database
        db_store.update_machine_sensors(target_id, reading)
        machine = db_store.get_machine(target_id)
        history = db_store.get_machine_history(target_id)

        # Run AI pipeline
        derived = calculate_derived_features(reading, history)
        health_score, status, breakdown = calculate_machine_health(reading)
        anom_score, is_anom = anomaly_detector.predict_anomaly(reading, derived)

        # Update machine state
        machine["healthScore"] = health_score
        machine["status"] = status
        machine["anomalyScore"] = anom_score
        machine["failureRisk"] = max(5.0, round(100.0 - health_score, 1))

        # Generate alert if abnormal
        alert = None
        mobile_notification = None
        if scenario.get("severity") in ["WARNING", "CRITICAL"]:
            alert = {
                "id": f"ALT-{datetime.utcnow().strftime('%Y%m%d-%H%M%S')}",
                "machineId": target_id,
                "zone": machine["zone"],
                "alertType": scenario.get("alertType", "Abnormal Operating Telemetry"),
                "severity": scenario.get("severity", "WARNING"),
                "sensor": scenario.get("sensor", "Retrofit Transducer"),
                "currentValue": scenario.get("currentValue", f"{reading['temperature']}°C"),
                "expectedRange": scenario.get("expectedRange", "Normal Baseline"),
                "aiRecommendation": scenario.get("recommendation", "Inspect according to plant maintenance SOP."),
                "status": "ACTIVE",
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
            db_store.add_alert(alert)
            mobile_notification = dispatch_alert(alert, db_store)

        ai_insights = generate_ai_prediction_and_insights(
            target_id, reading, derived, health_score, anom_score
        )

        return {
            "scenario": scenario_key,
            "scenarioName": scenario["name"],
            "machineId": target_id,
            "updatedSensors": reading,
            "healthScore": health_score,
            "status": status,
            "anomalyScore": anom_score,
            "generatedAlert": alert,
            "mobileNotification": mobile_notification if alert else None,
            "aiInsights": ai_insights
        }

simulation_service = SimulationService()
