from pydantic import BaseModel
from typing import Optional
from enum import Enum

class MaintenancePriority(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

class MaintenanceStatus(str, Enum):
    PENDING = "PENDING"
    SCHEDULED = "SCHEDULED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"

class MaintenanceCreate(BaseModel):
    machineId: str
    issue: str
    recommendation: str
    priority: MaintenancePriority
    scheduledDate: str

class MaintenanceResponse(BaseModel):
    id: str
    machineId: str
    machineName: str
    issue: str
    recommendation: str
    priority: MaintenancePriority
    status: MaintenanceStatus
    scheduledDate: str
    createdDate: str
