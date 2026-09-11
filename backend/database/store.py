from datetime import datetime, timedelta
import copy

# Mock seed database with realistic industrial retrofit telemetry
MACHINES_DATA = [
    {
        "id": "MCH-001",
        "name": "Industrial Induction Motor",
        "type": "3-Phase AC Induction Motor (18.5 kW)",
        "location": "Stamping Cell #4",
        "zone": "ZONE A",
        "status": "NORMAL",
        "healthScore": 92.4,
        "failureRisk": 12.0,
        "anomalyScore": 14.5,
        "operatingHours": 4210.5,
        "lastMaintenance": "2026-08-15",
        "latestSensors": {
            "temperature": 68.2,
            "vibration": 2.1,
            "current": 10.4,
            "frequency": 50.0,
            "humidity": 58.0,
            "ammonia": 6.2
        },
        "specs": {
            "ratedPower": "18.5 kW",
            "ratedCurrent": "35 A",
            "maxTemp": "85 °C",
            "maxVibration": "4.5 mm/s"
        }
    },
    {
        "id": "MCH-002",
        "name": "Furnace Exhaust Blower",
        "type": "High-Temp Centrifugal Fan",
        "location": "Smelting Line #2",
        "zone": "ZONE B",
        "status": "WARNING",
        "healthScore": 58.6,
        "failureRisk": 64.0,
        "anomalyScore": 72.0,
        "operatingHours": 7890.2,
        "lastMaintenance": "2026-07-02",
        "latestSensors": {
            "temperature": 86.4,
            "vibration": 5.2,
            "current": 16.8,
            "frequency": 48.9,
            "humidity": 65.0,
            "ammonia": 18.5
        },
        "specs": {
            "ratedPower": "22 kW",
            "ratedCurrent": "42 A",
            "maxTemp": "80 °C",
            "maxVibration": "4.0 mm/s"
        }
    },
    {
        "id": "MCH-003",
        "name": "Primary Screw Compressor",
        "type": "Twin-Screw Air Compressor",
        "location": "Central Utility Bay",
        "zone": "ZONE A",
        "status": "NORMAL",
        "healthScore": 88.5,
        "failureRisk": 18.0,
        "anomalyScore": 21.0,
        "operatingHours": 3140.0,
        "lastMaintenance": "2026-08-20",
        "latestSensors": {
            "temperature": 71.5,
            "vibration": 2.8,
            "current": 13.2,
            "frequency": 50.1,
            "humidity": 55.0,
            "ammonia": 7.1
        },
        "specs": {
            "ratedPower": "30 kW",
            "ratedCurrent": "55 A",
            "maxTemp": "90 °C",
            "maxVibration": "5.0 mm/s"
        }
    },
    {
        "id": "MCH-004",
        "name": "Hydraulic Stamping Press",
        "type": "500-Ton Hydraulic Press",
        "location": "Forming Bay #1",
        "zone": "ZONE C",
        "status": "CRITICAL",
        "healthScore": 36.2,
        "failureRisk": 82.5,
        "anomalyScore": 89.0,
        "operatingHours": 11200.0,
        "lastMaintenance": "2026-05-14",
        "latestSensors": {
            "temperature": 93.8,
            "vibration": 7.4,
            "current": 24.5,
            "frequency": 46.2,
            "humidity": 62.0,
            "ammonia": 12.0
        },
        "specs": {
            "ratedPower": "45 kW",
            "ratedCurrent": "80 A",
            "maxTemp": "80 °C",
            "maxVibration": "4.5 mm/s"
        }
    },
    {
        "id": "MCH-005",
        "name": "CNC Milling Spindle Unit",
        "type": "High-Speed Machining Spindle",
        "location": "Precision Tooling Room",
        "zone": "ZONE D",
        "status": "NORMAL",
        "healthScore": 94.8,
        "failureRisk": 8.5,
        "anomalyScore": 9.0,
        "operatingHours": 1950.0,
        "lastMaintenance": "2026-09-01",
        "latestSensors": {
            "temperature": 54.2,
            "vibration": 1.2,
            "current": 8.6,
            "frequency": 50.0,
            "humidity": 45.0,
            "ammonia": 4.1
        },
        "specs": {
            "ratedPower": "11 kW",
            "ratedCurrent": "22 A",
            "maxTemp": "70 °C",
            "maxVibration": "2.5 mm/s"
        }
    },
    {
        "id": "MCH-006",
        "name": "Acid Bath Exhaust Scrubber",
        "type": "Venturi Wet Scrubber Blower",
        "location": "Chemical Finishing Line",
        "zone": "ZONE B",
        "status": "WARNING",
        "healthScore": 68.4,
        "failureRisk": 52.0,
        "anomalyScore": 61.0,
        "operatingHours": 6420.0,
        "lastMaintenance": "2026-07-25",
        "latestSensors": {
            "temperature": 77.5,
            "vibration": 3.9,
            "current": 14.8,
            "frequency": 49.5,
            "humidity": 82.0,
            "ammonia": 32.4
        },
        "specs": {
            "ratedPower": "15 kW",
            "ratedCurrent": "30 A",
            "maxTemp": "75 °C",
            "maxVibration": "3.5 mm/s"
        }
    }
]

ZONES_DATA = [
    {
        "zoneId": "ZONE_A",
        "zoneName": "Zone A — Mechanical Stamping & Utilities",
        "machineCount": 12,
        "safetyStatus": "SAFE",
        "gasStatus": "SAFE",
        "machineHealth": 89.2,
        "ammoniaPpm": 6.8,
        "ambientTemp": 29.4,
        "activeAlerts": 1
    },
    {
        "zoneId": "ZONE_B",
        "zoneName": "Zone B — Thermal Smelting & Chemical Finishing",
        "machineCount": 8,
        "safetyStatus": "WARNING",
        "gasStatus": "WARNING",
        "machineHealth": 62.5,
        "ammoniaPpm": 32.4,
        "ambientTemp": 38.2,
        "activeAlerts": 3
    },
    {
        "zoneId": "ZONE_C",
        "zoneName": "Zone C — Heavy Hydraulic Forging Bay",
        "machineCount": 6,
        "safetyStatus": "WARNING",
        "gasStatus": "SAFE",
        "machineHealth": 54.0,
        "ammoniaPpm": 12.0,
        "ambientTemp": 33.1,
        "activeAlerts": 2
    },
    {
        "zoneId": "ZONE_D",
        "zoneName": "Zone D — Precision CNC & Assembly",
        "machineCount": 14,
        "safetyStatus": "SAFE",
        "gasStatus": "SAFE",
        "machineHealth": 94.6,
        "ammoniaPpm": 4.5,
        "ambientTemp": 24.0,
        "activeAlerts": 0
    }
]

ALERTS_DATA = [
    {
        "id": "ALT-2026-091",
        "machineId": "MCH-004",
        "zone": "ZONE C",
        "alertType": "Excessive Structural Vibration & Overheating",
        "severity": "CRITICAL",
        "sensor": "Vibration Velocity & Stator Temp",
        "currentValue": "7.4 mm/s | 93.8°C",
        "expectedRange": "< 4.5 mm/s | < 80.0°C",
        "aiRecommendation": "Immediate safety inspection required: Severe bearing misalignment and thermal expansion detected. Follow plant shutdown procedure.",
        "status": "ACTIVE",
        "timestamp": "2026-09-09T20:15:00Z"
    },
    {
        "id": "ALT-2026-088",
        "machineId": "MCH-002",
        "zone": "ZONE B",
        "alertType": "Motor Overheating Trend",
        "severity": "WARNING",
        "sensor": "Stator Temperature Probe",
        "currentValue": "86.4°C",
        "expectedRange": "50.0 – 80.0°C",
        "aiRecommendation": "Inspect cooling blower shroud and verify lubrication according to standard maintenance schedule.",
        "status": "ACTIVE",
        "timestamp": "2026-09-09T19:42:00Z"
    },
    {
        "id": "ALT-2026-082",
        "machineId": "MCH-006",
        "zone": "ZONE B",
        "alertType": "Elevated Ammonia Vapor Concentration",
        "severity": "WARNING",
        "sensor": "MQ-137 Gas Sensor",
        "currentValue": "32.4 ppm",
        "expectedRange": "< 25.0 ppm (OSHA PEL Threshold)",
        "aiRecommendation": "Ventilation booster required in Zone B. Ensure workers wear appropriate PPE and inspect scrubber inlet ducting.",
        "status": "ACTIVE",
        "timestamp": "2026-09-09T18:30:00Z"
    },
    {
        "id": "ALT-2026-075",
        "machineId": "MCH-001",
        "zone": "ZONE A",
        "alertType": "Transient Current Ripple Detected",
        "severity": "INFO",
        "sensor": "Split-Core Current Sensor",
        "currentValue": "10.4 A (Harmonic Distortion)",
        "expectedRange": "8.0 – 12.0 A",
        "aiRecommendation": "Minor power factor variance detected. Schedule inverter filter check during next planned weekly shutdown.",
        "status": "ACKNOWLEDGED",
        "timestamp": "2026-09-09T16:10:00Z"
    }
]

MAINTENANCE_DATA = [
    {
        "id": "MNT-041",
        "machineId": "MCH-004",
        "machineName": "Hydraulic Stamping Press",
        "issue": "High vibration (7.4 mm/s) & main ram seal thermal degradation",
        "recommendation": "Emergency bearing alignment and hydraulic fluid flush.",
        "priority": "CRITICAL",
        "status": "PENDING",
        "scheduledDate": "2026-09-10T08:00:00Z",
        "createdDate": "2026-09-09T20:20:00Z"
    },
    {
        "id": "MNT-038",
        "machineId": "MCH-002",
        "machineName": "Furnace Exhaust Blower",
        "issue": "Thermal buildup in drive-end bearing (86.4°C)",
        "recommendation": "Re-grease bearing housing with high-temp polyurea synthetic grease.",
        "priority": "HIGH",
        "status": "SCHEDULED",
        "scheduledDate": "2026-09-11T14:00:00Z",
        "createdDate": "2026-09-09T19:45:00Z"
    },
    {
        "id": "MNT-035",
        "machineId": "MCH-006",
        "machineName": "Acid Bath Exhaust Scrubber",
        "issue": "Scrubber filter packing differential pressure high",
        "recommendation": "Clean mist eliminator pads and inspect neutralizer dosing pump.",
        "priority": "MEDIUM",
        "status": "SCHEDULED",
        "scheduledDate": "2026-09-12T10:00:00Z",
        "createdDate": "2026-09-09T18:40:00Z"
    },
    {
        "id": "MNT-030",
        "machineId": "MCH-003",
        "machineName": "Primary Screw Compressor",
        "issue": "Oil separator 3000-hour service interval reached",
        "recommendation": "Standard air/oil separator filter replacement.",
        "priority": "LOW",
        "status": "COMPLETED",
        "scheduledDate": "2026-09-05T09:00:00Z",
        "createdDate": "2026-08-28T11:00:00Z"
    }
]

# In-memory store class providing query and mutation operations
class DataStore:
    def __init__(self):
        self.machines = copy.deepcopy(MACHINES_DATA)
        self.zones = copy.deepcopy(ZONES_DATA)
        self.alerts = copy.deepcopy(ALERTS_DATA)
        self.maintenance = copy.deepcopy(MAINTENANCE_DATA)
        self.notifications = []
        self.sensor_history = {}
        self._init_sensor_history()

    def _init_sensor_history(self):
        now = datetime.utcnow()
        for m in self.machines:
            mid = m["id"]
            self.sensor_history[mid] = []
            base_temp = m["latestSensors"]["temperature"]
            base_vib = m["latestSensors"]["vibration"]
            base_curr = m["latestSensors"]["current"]
            base_freq = m["latestSensors"]["frequency"]
            base_hum = m["latestSensors"]["humidity"]
            base_amm = m["latestSensors"]["ammonia"]

            # Generate realistic 24 hours of 1-hour interval points
            for i in range(24, 0, -1):
                pt_time = now - timedelta(hours=i)
                # gentle variance
                offset = (i % 5 - 2) * 0.4
                self.sensor_history[mid].append({
                    "timestamp": pt_time.strftime("%H:%M"),
                    "fullTimestamp": pt_time.isoformat() + "Z",
                    "temperature": round(max(20.0, base_temp - (i * 0.3) + offset), 1),
                    "vibration": round(max(0.5, base_vib - (i * 0.05) + (offset * 0.1)), 2),
                    "current": round(max(2.0, base_curr - (i * 0.1) + (offset * 0.2)), 1),
                    "frequency": round(base_freq + (offset * 0.05), 1),
                    "humidity": round(base_hum + offset, 1),
                    "ammonia": round(max(2.0, base_amm - (i * 0.2) + (offset * 0.3)), 1)
                })

    def get_all_machines(self):
        return self.machines

    def get_machine(self, machine_id: str):
        for m in self.machines:
            if m["id"] == machine_id:
                return m
        return None

    def update_machine_sensors(self, machine_id: str, reading: dict):
        machine = self.get_machine(machine_id)
        if machine:
            machine["latestSensors"] = {
                "temperature": reading.get("temperature", machine["latestSensors"]["temperature"]),
                "vibration": reading.get("vibration", machine["latestSensors"]["vibration"]),
                "current": reading.get("current", machine["latestSensors"]["current"]),
                "frequency": reading.get("frequency", machine["latestSensors"]["frequency"]),
                "humidity": reading.get("humidity", machine["latestSensors"]["humidity"]),
                "ammonia": reading.get("ammonia", machine["latestSensors"]["ammonia"]),
            }
            # Append to history
            pt_time = datetime.utcnow().strftime("%H:%M")
            self.sensor_history.setdefault(machine_id, []).append({
                "timestamp": pt_time,
                "fullTimestamp": datetime.utcnow().isoformat() + "Z",
                **machine["latestSensors"]
            })
            if len(self.sensor_history[machine_id]) > 100:
                self.sensor_history[machine_id].pop(0)

    def get_machine_history(self, machine_id: str):
        return self.sensor_history.get(machine_id, [])

    def get_alerts(self):
        return self.alerts

    def add_alert(self, alert_dict: dict):
        self.alerts.insert(0, alert_dict)
        return alert_dict

    def acknowledge_alert(self, alert_id: str):
        for a in self.alerts:
            if a["id"] == alert_id:
                a["status"] = "ACKNOWLEDGED"
                return a
        return None

    def get_maintenance(self):
        return self.maintenance

    def add_maintenance(self, mnt_dict: dict):
        self.maintenance.insert(0, mnt_dict)
        return mnt_dict

    def get_zones(self):
        return self.zones

    def get_notifications(self):
        return self.notifications

    def add_notification(self, notification):
        self.notifications.insert(0, notification)
        return notification

# Global singleton
db_store = DataStore()
