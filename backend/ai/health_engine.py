from typing import Dict, Any, Tuple

def calculate_machine_health(sensors: Dict[str, float]) -> Tuple[float, str, Dict[str, float]]:
    """
    Transparent Multi-Sensor Health Score Engine (0–100)
    Uses normalized risk bounds with prescribed industrial weights:
    - Temperature: 25%
    - Vibration: 35%
    - Current: 20%
    - Frequency: 20%
    """
    temp = sensors.get("temperature", 65.0)
    vib = sensors.get("vibration", 2.0)
    curr = sensors.get("current", 10.0)
    freq = sensors.get("frequency", 50.0)

    # 1. Temperature Risk (0 to 100)
    # Normal: <= 65°C -> 0% risk. Warning: 80°C -> 50% risk. Critical: >= 95°C -> 100% risk
    if temp <= 65.0:
        temp_risk = max(0.0, (temp - 40.0) / 25.0 * 15.0)
    elif temp <= 80.0:
        temp_risk = 15.0 + ((temp - 65.0) / 15.0) * 35.0
    elif temp <= 95.0:
        temp_risk = 50.0 + ((temp - 80.0) / 15.0) * 40.0
    else:
        temp_risk = min(100.0, 90.0 + (temp - 95.0) * 1.5)

    # 2. Vibration Risk (0 to 100)
    # Normal: <= 2.2 mm/s -> 0-15%. Warning: 4.5 mm/s -> 50%. Critical: >= 7.0 mm/s -> 100%
    if vib <= 2.2:
        vib_risk = (vib / 2.2) * 15.0
    elif vib <= 4.5:
        vib_risk = 15.0 + ((vib - 2.2) / 2.3) * 35.0
    elif vib <= 7.0:
        vib_risk = 50.0 + ((vib - 4.5) / 2.5) * 40.0
    else:
        vib_risk = min(100.0, 90.0 + (vib - 7.0) * 3.0)

    # 3. Current Risk (0 to 100)
    # Nominal: ~10-12A. Heavy load: 16A -> 50%. Extreme overload: >= 24A -> 100%
    if curr <= 12.0:
        curr_risk = max(0.0, (curr - 8.0) / 4.0 * 15.0)
    elif curr <= 18.0:
        curr_risk = 15.0 + ((curr - 12.0) / 6.0) * 40.0
    elif curr <= 25.0:
        curr_risk = 55.0 + ((curr - 18.0) / 7.0) * 35.0
    else:
        curr_risk = min(100.0, 90.0 + (curr - 25.0) * 2.0)

    # 4. Frequency Risk (0 to 100)
    # Nominal grid: 50.0 Hz. Deviation from 50Hz incurs risk.
    freq_dev = abs(freq - 50.0)
    if freq_dev <= 0.5:
        freq_risk = (freq_dev / 0.5) * 10.0
    elif freq_dev <= 2.0:
        freq_risk = 10.0 + ((freq_dev - 0.5) / 1.5) * 40.0
    else:
        freq_risk = min(100.0, 50.0 + (freq_dev - 2.0) * 20.0)

    # Weighted Sensor Risk (Weights: Temp 25%, Vib 35%, Curr 20%, Freq 20%)
    weighted_risk = (
        (temp_risk * 0.25) +
        (vib_risk * 0.35) +
        (curr_risk * 0.20) +
        (freq_risk * 0.20)
    )

    # Compound penalty if both Temp AND Vibration are elevated (thermo-mechanical stress)
    if temp_risk > 50.0 and vib_risk > 50.0:
        compound_penalty = min(20.0, (temp_risk - 50.0) * 0.15 + (vib_risk - 50.0) * 0.15)
        weighted_risk += compound_penalty

    weighted_risk = min(100.0, max(0.0, weighted_risk))
    health_score = round(max(0.0, min(100.0, 100.0 - weighted_risk)), 1)

    # Determine Machine Status category
    if health_score >= 75.0:
        status = "NORMAL"
    elif health_score >= 50.0:
        status = "WARNING"
    else:
        status = "CRITICAL"

    breakdown = {
        "temperatureRisk": round(temp_risk, 1),
        "vibrationRisk": round(vib_risk, 1),
        "currentRisk": round(curr_risk, 1),
        "frequencyRisk": round(freq_risk, 1),
        "weightedRisk": round(weighted_risk, 1)
    }

    return health_score, status, breakdown
