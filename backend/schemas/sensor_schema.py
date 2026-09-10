from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class SensorReadingCreate(BaseModel):
    machineId: str = Field(..., description="ID of the retrofitted machine, e.g. MCH-001")
    timestamp: Optional[datetime] = Field(default_factory=datetime.utcnow)
    temperature: float = Field(..., ge=-20.0, le=200.0, description="Temperature in Celsius")
    vibration: float = Field(..., ge=0.0, le=50.0, description="Vibration velocity in mm/s RMS")
    current: float = Field(..., ge=0.0, le=100.0, description="Current draw in Amperes")
    frequency: float = Field(..., ge=0.0, le=120.0, description="Operating frequency in Hz")
    humidity: float = Field(..., ge=0.0, le=100.0, description="Relative humidity percentage")
    ammonia: float = Field(..., ge=0.0, le=500.0, description="Ammonia gas concentration in ppm")
    operatingHours: Optional[float] = Field(default=0.0, ge=0.0)

class SensorReadingResponse(SensorReadingCreate):
    id: Optional[str] = None

class SensorTimeSeriesPoint(BaseModel):
    timestamp: str
    temperature: float
    vibration: float
    current: float
    frequency: float
    humidity: float
    ammonia: float
