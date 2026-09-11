export const INITIAL_MACHINES = [
  {
    id: "MCH-001",
    name: "Industrial Induction Motor",
    type: "3-Phase Squirrel Cage (18.5 kW)",
    location: "Stamping Cell #4",
    zone: "ZONE A",
    status: "NORMAL",
    healthScore: 92.4,
    failureRisk: 12.0,
    anomalyScore: 14.5,
    operatingHours: 4210.5,
    lastMaintenance: "2026-08-15",
    sensors: {
      temperature: 68.2,
      vibration: 2.1,
      current: 10.4,
      frequency: 50.0,
      humidity: 58.0,
      ammonia: 6.2
    },
    specs: {
      ratedPower: "18.5 kW",
      ratedCurrent: "35 A",
      maxTemp: "85 °C",
      maxVibration: "4.5 mm/s",
      retrofitSensors: "PT100 RTD, Piezo Accel, SCT-013 CT, MQ-137"
    }
  },
  {
    id: "MCH-002",
    name: "Furnace Exhaust Blower",
    type: "High-Temp Centrifugal Fan",
    location: "Smelting Line #2",
    zone: "ZONE B",
    status: "WARNING",
    healthScore: 58.6,
    failureRisk: 64.0,
    anomalyScore: 72.0,
    operatingHours: 7890.2,
    lastMaintenance: "2026-07-02",
    sensors: {
      temperature: 86.4,
      vibration: 5.2,
      current: 16.8,
      frequency: 48.9,
      humidity: 65.0,
      ammonia: 18.5
    },
    specs: {
      ratedPower: "22 kW",
      ratedCurrent: "42 A",
      maxTemp: "80 °C",
      maxVibration: "4.0 mm/s",
      retrofitSensors: "K-Type Thermocouple, Dual-Axis Accel, CT Sensor"
    }
  },
  {
    id: "MCH-003",
    name: "Primary Screw Compressor",
    type: "Twin-Screw Air Compressor",
    location: "Central Utility Bay",
    zone: "ZONE A",
    status: "NORMAL",
    healthScore: 88.5,
    failureRisk: 18.0,
    anomalyScore: 21.0,
    operatingHours: 3140.0,
    lastMaintenance: "2026-08-20",
    sensors: {
      temperature: 71.5,
      vibration: 2.8,
      current: 13.2,
      frequency: 50.1,
      humidity: 55.0,
      ammonia: 7.1
    },
    specs: {
      ratedPower: "30 kW",
      ratedCurrent: "55 A",
      maxTemp: "90 °C",
      maxVibration: "5.0 mm/s",
      retrofitSensors: "Piezo Sensor, Hall Effect Speed, Split-Core CT"
    }
  },
  {
    id: "MCH-004",
    name: "Hydraulic Stamping Press",
    type: "500-Ton Hydraulic Forming Press",
    location: "Forming Bay #1",
    zone: "ZONE C",
    status: "CRITICAL",
    healthScore: 36.2,
    failureRisk: 82.5,
    anomalyScore: 89.0,
    operatingHours: 11200.0,
    lastMaintenance: "2026-05-14",
    sensors: {
      temperature: 93.8,
      vibration: 7.4,
      current: 24.5,
      frequency: 46.2,
      humidity: 62.0,
      ammonia: 12.0
    },
    specs: {
      ratedPower: "45 kW",
      ratedCurrent: "80 A",
      maxTemp: "80 °C",
      maxVibration: "4.5 mm/s",
      retrofitSensors: "Multi-point PT100, High-G Accel, Pressure Transducer"
    }
  },
  {
    id: "MCH-005",
    name: "CNC Milling Spindle Unit",
    type: "High-Speed Machining Spindle",
    location: "Precision Tooling Room",
    zone: "ZONE D",
    status: "NORMAL",
    healthScore: 94.8,
    failureRisk: 8.5,
    anomalyScore: 9.0,
    operatingHours: 1950.0,
    lastMaintenance: "2026-09-01",
    sensors: {
      temperature: 54.2,
      vibration: 1.2,
      current: 8.6,
      frequency: 50.0,
      humidity: 45.0,
      ammonia: 4.1
    },
    specs: {
      ratedPower: "11 kW",
      ratedCurrent: "22 A",
      maxTemp: "70 °C",
      maxVibration: "2.5 mm/s",
      retrofitSensors: "Laser Tachometer, Thermal Sensor, Low-Noise Accel"
    }
  },
  {
    id: "MCH-006",
    name: "Acid Bath Exhaust Scrubber",
    type: "Venturi Wet Scrubber Blower",
    location: "Chemical Finishing Line",
    zone: "ZONE B",
    status: "WARNING",
    healthScore: 68.4,
    failureRisk: 52.0,
    anomalyScore: 61.0,
    operatingHours: 6420.0,
    lastMaintenance: "2026-07-25",
    sensors: {
      temperature: 77.5,
      vibration: 3.9,
      current: 14.8,
      frequency: 49.5,
      humidity: 82.0,
      ammonia: 32.4
    },
    specs: {
      ratedPower: "15 kW",
      ratedCurrent: "30 A",
      maxTemp: "75 °C",
      maxVibration: "3.5 mm/s",
      retrofitSensors: "MQ-137 Ammonia Sensor, Corrosive RTD, CT Clamp"
    }
  }
];

export const INITIAL_ZONES = [
  {
    id: "ZONE_A",
    name: "Zone A — Mechanical Stamping & Utilities",
    machines: 12,
    safetyStatus: "SAFE",
    gasStatus: "SAFE",
    health: 89,
    ammonia: 6.8,
    temp: 29.4,
    alerts: 1,
    ppe: ["Safety Helmet", "Steel-Toe Boots", "Hearing Protection"]
  },
  {
    id: "ZONE_B",
    name: "Zone B — Thermal Smelting & Chemical Finishing",
    machines: 8,
    safetyStatus: "WARNING",
    gasStatus: "WARNING",
    health: 62,
    ammonia: 32.4,
    temp: 38.2,
    alerts: 3,
    ppe: ["Chemical Respirator (Ammonia Filter)", "Heat-Resistant Visor", "Acid-Proof Gloves"]
  },
  {
    id: "ZONE_C",
    name: "Zone C — Heavy Hydraulic Forging Bay",
    machines: 6,
    safetyStatus: "WARNING",
    gasStatus: "SAFE",
    health: 54,
    ammonia: 12.0,
    temp: 33.1,
    alerts: 2,
    ppe: ["Impact Visor", "High-Decibel Ear Defenders", "Steel Tarsal Guards"]
  },
  {
    id: "ZONE_D",
    name: "Zone D — Precision CNC & Assembly",
    machines: 14,
    safetyStatus: "SAFE",
    gasStatus: "SAFE",
    health: 95,
    ammonia: 4.5,
    temp: 24.0,
    alerts: 0,
    ppe: ["Safety Glasses", "Anti-Static Footwear", "Dust Mask"]
  }
];

export const INITIAL_ALERTS = [
  {
    id: "ALT-2026-091",
    machineId: "MCH-004",
    zone: "ZONE C",
    alertType: "Excessive Vibration & Stator Overheating",
    severity: "CRITICAL",
    sensor: "Piezo Accelerometer & RTD Probe",
    currentValue: "7.4 mm/s | 93.8°C",
    expectedRange: "< 4.5 mm/s | < 80.0°C",
    aiRecommendation: "Immediate safety inspection required: Severe bearing misalignment and thermal expansion detected. Follow plant shutdown procedure.",
    status: "ACTIVE",
    timestamp: "10 mins ago"
  },
  {
    id: "ALT-2026-088",
    machineId: "MCH-002",
    zone: "ZONE B",
    alertType: "Motor Overheating Trend",
    severity: "WARNING",
    sensor: "Stator Temperature Probe",
    currentValue: "86.4°C",
    expectedRange: "50.0 – 80.0°C",
    aiRecommendation: "Inspect cooling blower shroud and verify lubrication according to standard maintenance schedule.",
    status: "ACTIVE",
    timestamp: "45 mins ago"
  },
  {
    id: "ALT-2026-082",
    machineId: "MCH-006",
    zone: "ZONE B",
    alertType: "Elevated Ammonia Vapor Concentration",
    severity: "WARNING",
    sensor: "MQ-137 Gas Sensor",
    currentValue: "32.4 ppm",
    expectedRange: "< 25.0 ppm (OSHA PEL)",
    aiRecommendation: "Ventilation booster required in Zone B. Ensure workers wear appropriate PPE and inspect scrubber inlet ducting.",
    status: "ACTIVE",
    timestamp: "1.5 hours ago"
  },
  {
    id: "ALT-2026-075",
    machineId: "MCH-001",
    zone: "ZONE A",
    alertType: "Harmonic Current Ripple",
    severity: "INFO",
    sensor: "Split-Core Current Sensor",
    currentValue: "10.4 A (Phase Delta 1.2A)",
    expectedRange: "8.0 – 12.0 A",
    aiRecommendation: "Minor power factor variance detected. Schedule inverter filter check during next planned weekly shutdown.",
    status: "ACKNOWLEDGED",
    timestamp: "3 hours ago"
  }
];

export const INITIAL_MAINTENANCE = [
  {
    id: "MNT-041",
    machineId: "MCH-004",
    machineName: "Hydraulic Stamping Press",
    issue: "High vibration (7.4 mm/s) & main ram seal thermal degradation",
    recommendation: "Emergency bearing alignment and hydraulic fluid flush.",
    priority: "CRITICAL",
    status: "PENDING",
    scheduledDate: "Tomorrow at 08:00 AM",
    category: "AI Recommended"
  },
  {
    id: "MNT-038",
    machineId: "MCH-002",
    machineName: "Furnace Exhaust Blower",
    issue: "Thermal buildup in drive-end bearing (86.4°C)",
    recommendation: "Re-grease bearing housing with high-temp polyurea synthetic grease.",
    priority: "HIGH",
    status: "SCHEDULED",
    scheduledDate: "Sep 11, 2026 at 02:00 PM",
    category: "Upcoming"
  },
  {
    id: "MNT-035",
    machineId: "MCH-006",
    machineName: "Acid Bath Exhaust Scrubber",
    issue: "Scrubber filter packing differential pressure high",
    recommendation: "Clean mist eliminator pads and inspect neutralizer dosing pump.",
    priority: "MEDIUM",
    status: "SCHEDULED",
    scheduledDate: "Sep 12, 2026 at 10:00 AM",
    category: "Upcoming"
  },
  {
    id: "MNT-030",
    machineId: "MCH-003",
    machineName: "Primary Screw Compressor",
    issue: "Oil separator 3000-hour service interval reached",
    recommendation: "Standard air/oil separator filter replacement.",
    priority: "LOW",
    status: "COMPLETED",
    scheduledDate: "Completed Sep 05, 2026",
    category: "History"
  }
];

export const ROI_DATA = {
  traditionalReplacement: 800000,
  retrofitCost: 35000,
  capitalAvoidance: 765000,
  savingsPercentage: 95.6,
  metrics: [
    {
      label: "Unplanned Downtime Reduction",
      value: "68%",
      benchmark: "From 42 hrs/mo to 13.4 hrs/mo"
    },
    {
      label: "Emergency Repair Cost Savings",
      value: "₹4,20,000 / yr",
      benchmark: "Replaced rush spares & breakdown overtime"
    },
    {
      label: "Extended Equipment Life",
      value: "+4.5 Years",
      benchmark: "Deferral of heavy capital replacement"
    },
    {
      label: "Energy Efficiency Optimization",
      value: "11.2% Reduction",
      benchmark: "Eliminated motor overload and shaft friction"
    }
  ],
  disclaimer: "Illustrative prototype estimates based on industrial metal fabrication plant benchmarks. Not verified corporate financial reporting."
};
