from pydantic import BaseModel
from typing import List, Optional

class SafetyZoneStatus(BaseModel):
    zoneId: str
    zoneName: str
    machineCount: int
    safetyStatus: str  # SAFE, WARNING, CRITICAL
    gasStatus: str     # SAFE, WARNING, CRITICAL
    machineHealth: float
    ammoniaPpm: float
    ambientTemp: float
    activeAlerts: int

class WorkerSafetyOverview(BaseModel):
    overallSafety: str  # SAFE, WARNING, CRITICAL
    ammoniaRisk: str
    airQuality: str
    thermalRisk: str
    currentAmmoniaPpm: float
    currentAmbientTemp: float
    zones: List[SafetyZoneStatus]
    disclaimer: str
    timestamp: str
