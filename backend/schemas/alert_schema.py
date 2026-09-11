from pydantic import BaseModel
from typing import Optional
from enum import Enum

class AlertSeverity(str, Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    CRITICAL = "CRITICAL"

class AlertStatus(str, Enum):
    ACTIVE = "ACTIVE"
    ACKNOWLEDGED = "ACKNOWLEDGED"
    RESOLVED = "RESOLVED"

class AlertCreate(BaseModel):
    machineId: str
    zone: str
    alertType: str
    severity: AlertSeverity
    sensor: str
    currentValue: str
    expectedRange: str
    aiRecommendation: str

class AlertResponse(BaseModel):
    id: str
    machineId: str
    zone: str
    alertType: str
    severity: AlertSeverity
    sensor: str
    currentValue: str
    expectedRange: str
    aiRecommendation: str
    status: AlertStatus
    timestamp: str
