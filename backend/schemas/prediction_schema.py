from pydantic import BaseModel
from typing import List, Optional

class ExplainableFactor(BaseModel):
    feature: str
    impact: str
    changePercent: float
    description: str

class PredictionResponse(BaseModel):
    machineId: str
    potentialIssue: str
    failureRisk: float
    confidence: float
    recommendedAction: str
    priority: str
    estimatedMaintenanceWindow: str
    anomalyScore: float
    isAnomaly: bool
    explainableFactors: List[ExplainableFactor]
    rootCauseSummary: str
    disclaimer: str
