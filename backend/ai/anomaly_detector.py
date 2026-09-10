from typing import Dict, Any, Tuple
import math

class IndustrialAnomalyDetector:
    """
    Anomaly detection engine for industrial retrofit telemetry.
    Detects unusual combinations or sudden shifts in sensor operating regimes.
    """
    def __init__(self):
        self.baseline_means = {
            "temperature": 65.0,
            "vibration": 2.0,
            "current": 10.5,
            "frequency": 50.0,
            "humidity": 55.0,
            "ammonia": 5.5
        }
        self.baseline_stds = {
            "temperature": 6.5,
            "vibration": 0.8,
            "current": 2.0,
            "frequency": 0.4,
            "humidity": 10.0,
            "ammonia": 3.0
        }

    def predict_anomaly(self, sensors: Dict[str, float], derived_features: Dict[str, float]) -> Tuple[float, bool]:
        """
        Calculates Anomaly Score (0–100%) and whether operating pattern is abnormal.
        """
        temp = sensors.get("temperature", 65.0)
        vib = sensors.get("vibration", 2.0)
        curr = sensors.get("current", 10.0)
        freq = sensors.get("frequency", 50.0)
        amm = sensors.get("ammonia", 5.0)

        # Standardized Z-scores
        z_temp = max(0.0, (temp - self.baseline_means["temperature"]) / self.baseline_stds["temperature"])
        z_vib = max(0.0, (vib - self.baseline_means["vibration"]) / self.baseline_stds["vibration"])
        z_curr = max(0.0, (curr - self.baseline_means["current"]) / self.baseline_stds["current"])
        z_freq = abs(freq - self.baseline_means["frequency"]) / self.baseline_stds["frequency"]
        z_amm = max(0.0, (amm - self.baseline_means["ammonia"]) / self.baseline_stds["ammonia"])

        # Rate of change factors
        vib_rate = abs(derived_features.get("vibration_change_rate", 0.0)) / 15.0
        temp_rate = abs(derived_features.get("temperature_change_rate", 0.0)) / 10.0

        # Multi-variate composite anomaly metric
        composite_z = math.sqrt(
            (z_temp ** 2 * 1.2) +
            (z_vib ** 2 * 1.8) +
            (z_curr ** 2 * 1.0) +
            (z_freq ** 2 * 0.8) +
            (z_amm ** 2 * 1.0) +
            (vib_rate ** 2 * 0.7) +
            (temp_rate ** 2 * 0.5)
        )

        # Convert composite z-score to 0-100 anomaly percentage
        # Normal operations yield composite_z < 1.5 -> Score < 30%
        # Abnormal patterns yield composite_z > 3.0 -> Score > 75%
        anomaly_score = round(min(100.0, (composite_z / 4.5) * 100.0), 1)
        is_anomaly = anomaly_score >= 65.0

        return anomaly_score, is_anomaly

# Global singleton detector
anomaly_detector = IndustrialAnomalyDetector()
