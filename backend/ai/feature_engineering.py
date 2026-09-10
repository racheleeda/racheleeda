from typing import List, Dict, Any
import numpy as np

def calculate_derived_features(current_reading: Dict[str, float], history: List[Dict[str, Any]]) -> Dict[str, float]:
    """
    Calculate derived features such as rates of change, rolling averages,
    and standard deviations for sensor telemetry.
    """
    features = {
        "temperature": current_reading.get("temperature", 65.0),
        "vibration": current_reading.get("vibration", 2.0),
        "current": current_reading.get("current", 10.0),
        "frequency": current_reading.get("frequency", 50.0),
        "humidity": current_reading.get("humidity", 55.0),
        "ammonia": current_reading.get("ammonia", 5.0),
        "temperature_change_rate": 0.0,
        "vibration_change_rate": 0.0,
        "current_change_rate": 0.0,
        "temp_rolling_avg": current_reading.get("temperature", 65.0),
        "vib_rolling_avg": current_reading.get("vibration", 2.0),
        "vib_rolling_std": 0.1
    }

    if not history or len(history) < 2:
        return features

    # Extract last few readings
    recent = history[-6:]
    temps = [p.get("temperature", 65.0) for p in recent]
    vibs = [p.get("vibration", 2.0) for p in recent]
    currs = [p.get("current", 10.0) for p in recent]

    prev_reading = history[-1]
    prev_temp = prev_reading.get("temperature", current_reading["temperature"])
    prev_vib = prev_reading.get("vibration", current_reading["vibration"])
    prev_curr = prev_reading.get("current", current_reading["current"])

    # Rates of change (percentage change relative to baseline)
    features["temperature_change_rate"] = round(((current_reading["temperature"] - prev_temp) / max(prev_temp, 1.0)) * 100.0, 2)
    features["vibration_change_rate"] = round(((current_reading["vibration"] - prev_vib) / max(prev_vib, 0.5)) * 100.0, 2)
    features["current_change_rate"] = round(((current_reading["current"] - prev_curr) / max(prev_curr, 1.0)) * 100.0, 2)

    features["temp_rolling_avg"] = round(float(np.mean(temps)), 2)
    features["vib_rolling_avg"] = round(float(np.mean(vibs)), 2)
    features["vib_rolling_std"] = round(float(np.std(vibs)), 3)

    return features
