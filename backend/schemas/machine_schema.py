from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from enum import Enum

class MachineStatus(str, Enum):
    NORMAL = "NORMAL"
    WARNING = "WARNING"
    CRITICAL = "CRITICAL"

class MachineRiskLevel(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    SEVERE = "SEVERE"

class MachineSensorTelemetry(BaseModel):
    temperature: float
    vibration: float
    current: float
    frequency: float
    humidity: float
    ammonia: float

class MachineResponse(BaseModel):
    id: str
    name: str
    type: str
    location: str
    zone: str
    status: MachineStatus
    healthScore: float
    failureRisk: float
    anomalyScore: float
    operatingHours: float
    lastMaintenance: str
    latestSensors: MachineSensorTelemetry
    imageUrl: Optional[str] = None

class MachineHealthBreakdown(BaseModel):
    temperatureRisk: float
    vibrationRisk: float
    currentRisk: float
    frequencyRisk: float
    weightedScore: float

class MachineHealthResponse(BaseModel):
    machineId: str
    healthScore: float
    status: MachineStatus
    breakdown: MachineHealthBreakdown
    timestamp: str
