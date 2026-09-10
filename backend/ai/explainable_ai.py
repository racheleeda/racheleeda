from typing import Dict, Any, List

def generate_ai_prediction_and_insights(
    machine_id: str,
    sensors: Dict[str, float],
    derived_features: Dict[str, float],
    health_score: float,
    anomaly_score: float
) -> Dict[str, Any]:
    """
    Explainable AI Prediction Engine
    Translates sensor telemetry patterns into actionable maintenance insights
    with root-cause attribution and safety recommendations.
    """
    temp = sensors.get("temperature", 65.0)
    vib = sensors.get("vibration", 2.0)
    curr = sensors.get("current", 10.0)
    freq = sensors.get("frequency", 50.0)
    amm = sensors.get("ammonia", 5.0)

    vib_change = derived_features.get("vibration_change_rate", 0.0)
    temp_change = derived_features.get("temperature_change_rate", 0.0)
    curr_change = derived_features.get("current_change_rate", 0.0)

    explainable_factors: List[Dict[str, Any]] = []
    potential_issue = "Normal operation"
    recommended_action = "Continue standard scheduled monitoring."
    priority = "LOW"
    window = "Next scheduled routine PM"
    confidence = 92.0
    failure_risk = max(5.0, round(100.0 - health_score, 1))

    # Evaluate dynamic anomalies and identify primary root cause
    if vib > 6.0 and temp > 85.0:
        potential_issue = "Critical Bearing Cage Failure & Thermal Expansion"
        priority = "CRITICAL"
        window = "Immediate / Within 2 hours"
        confidence = 88.5
        recommended_action = "Initiate safe controlled shutdown according to plant SOP. Inspect bearing housing, check alignment, and replace lubricant."
        explainable_factors.append({
            "feature": "Vibration Velocity & Stator Temperature",
            "impact": "CRITICAL",
            "changePercent": vib_change,
            "description": f"Vibration reached {vib} mm/s with stator thermal rise to {temp}°C, indicating dynamic rotor-stator friction."
        })
    elif vib > 4.5:
        potential_issue = "Motor Bearing Degradation & Dynamic Misalignment"
        priority = "HIGH"
        window = "Within 6 hours"
        confidence = 84.0
        recommended_action = "Inspect drive-end bearing, check shaft axial alignment, and re-torque mounting bolts."
        explainable_factors.append({
            "feature": "Vibration Velocity",
            "impact": "HIGH",
            "changePercent": vib_change,
            "description": f"Vibration is at {vib} mm/s (exceeds ISO 10816 4.5 mm/s limit for Rigid Class II machines)."
        })
    elif temp > 82.0:
        potential_issue = "Thermal Dissipation Loss / Motor Overheating"
        priority = "HIGH"
        window = "Within 8 hours"
        confidence = 81.0
        recommended_action = "Inspect external cooling blower shroud, clean ventilation fins, and check ambient inlet temperature."
        explainable_factors.append({
            "feature": "Stator Temperature Probe",
            "impact": "HIGH",
            "changePercent": temp_change,
            "description": f"Stator temperature reached {temp}°C, indicating restricted cooling airflow or winding heat concentration."
        })
    elif curr > 18.0:
        potential_issue = "Excessive Electrical Current / Mechanical Overload"
        priority = "MEDIUM"
        window = "Within 24 hours"
        confidence = 79.0
        recommended_action = "Verify downstream mechanical load, check gearbox resistance, and test supply voltage phase balance."
        explainable_factors.append({
            "feature": "CT Current Sensor",
            "impact": "MEDIUM",
            "changePercent": curr_change,
            "description": f"Motor current draw spiked to {curr} A, indicating abnormal mechanical resistance or supply voltage sag."
        })
    elif amm > 25.0:
        potential_issue = "Hazardous Environmental Ammonia Exposure"
        priority = "HIGH"
        window = "Immediate Environmental Action"
        confidence = 94.0
        recommended_action = "Activate auxiliary ventilation scrubbers, mandate PPE respirator use, and verify duct seal integrity."
        explainable_factors.append({
            "feature": "MQ-137 Gas Sensor",
            "impact": "CRITICAL",
            "changePercent": 50.0,
            "description": f"Ammonia concentration at {amm} ppm exceeds plant environmental safety threshold (25 ppm)."
        })
    else:
        explainable_factors.append({
            "feature": "Multi-Sensor Baseline",
            "impact": "NORMAL",
            "changePercent": 0.0,
            "description": "All sensor telemetry remains within certified baseline operating ranges."
        })

    # Summary synthesis text
    if priority in ["CRITICAL", "HIGH"]:
        root_cause_summary = (
            f"Machine {machine_id} exhibits an abnormal operating pattern: "
            f"Vibration is {vib} mm/s with temperature at {temp}°C and current draw of {curr} A. "
            f"This multi-variate signature strongly indicates {potential_issue.lower()}. "
            f"Immediate inspection is recommended before the next production run."
        )
    else:
        root_cause_summary = (
            f"Machine {machine_id} operates in nominal thermal and mechanical equilibrium. "
            f"Vibration ({vib} mm/s) and temperature ({temp}°C) are consistent with healthy baseline operations."
        )

    disclaimer = (
        "AI-assisted risk detection prototype for decision support. "
        "Estimated predictions do not constitute a guarantee of machine failure nor certified industrial safety override."
    )

    return {
        "machineId": machine_id,
        "potentialIssue": potential_issue,
        "failureRisk": failure_risk,
        "confidence": confidence,
        "recommendedAction": recommended_action,
        "priority": priority,
        "estimatedMaintenanceWindow": window,
        "anomalyScore": anomaly_score,
        "isAnomaly": anomaly_score >= 65.0,
        "explainableFactors": explainable_factors,
        "rootCauseSummary": root_cause_summary,
        "disclaimer": disclaimer
    }
