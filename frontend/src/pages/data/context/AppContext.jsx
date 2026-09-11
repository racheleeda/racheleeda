import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_MACHINES, INITIAL_ZONES, INITIAL_ALERTS, INITIAL_MAINTENANCE, ROI_DATA } from '../initialData.js';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedMachineId, setSelectedMachineId] = useState('MCH-002');
  const [currentRole, setCurrentRole] = useState('SUPERVISOR'); // ADMIN, SUPERVISOR, SAFETY_OFFICER
  const [simulationMode, setSimulationMode] = useState(true);
  const [activeScenario, setActiveScenario] = useState('normal');

  const [machines, setMachines] = useState(INITIAL_MACHINES);
  const [zones, setZones] = useState(INITIAL_ZONES);
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [maintenance, setMaintenance] = useState(INITIAL_MAINTENANCE);
  const [toasts, setToasts] = useState([]);
  const [isSimulatingTransition, setIsSimulatingTransition] = useState(false);

  // Active selected machine
  const selectedMachine = machines.find(m => m.id === selectedMachineId) || machines[0];

  // Helper to add toast notifications
  const addToast = (toast) => {
    const id = Date.now() + Math.random();
    const newToast = { id, ...toast };
    setToasts(prev => [newToast, ...prev.slice(0, 4)]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 6000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Dynamic calculation formulas from user specification:
  // Machine Health = 100 - weighted sensor risk (Temp 25%, Vib 35%, Curr 20%, Freq 20%)
  const calculateHealth = (sensors) => {
    const { temperature: temp, vibration: vib, current: curr, frequency: freq } = sensors;

    const tempRisk = temp <= 65 ? (temp / 65) * 15 : (temp <= 80 ? 15 + ((temp - 65) / 15) * 35 : 50 + ((temp - 80) / 15) * 45);
    const vibRisk = vib <= 2.2 ? (vib / 2.2) * 15 : (vib <= 4.5 ? 15 + ((vib - 2.2) / 2.3) * 35 : 50 + ((vib - 4.5) / 2.5) * 45);
    const currRisk = curr <= 12 ? (curr / 12) * 15 : (curr <= 18 ? 15 + ((curr - 12) / 6) * 40 : 55 + ((curr - 18) / 7) * 40);
    const freqDev = Math.abs(freq - 50.0);
    const freqRisk = freqDev <= 0.5 ? (freqDev / 0.5) * 10 : (freqDev <= 2.0 ? 10 + ((freqDev - 0.5) / 1.5) * 40 : 50 + (freqDev - 2.0) * 25);

    let weightedRisk = (tempRisk * 0.25) + (vibRisk * 0.35) + (currRisk * 0.20) + (freqRisk * 0.20);
    if (tempRisk > 50 && vibRisk > 50) {
      weightedRisk += Math.min(20, (tempRisk - 50) * 0.15 + (vibRisk - 50) * 0.15);
    }
    const score = Math.max(0, Math.min(100, Math.round((100 - weightedRisk) * 10) / 10));
    const status = score >= 75 ? 'NORMAL' : (score >= 50 ? 'WARNING' : 'CRITICAL');
    return { score, status, weightedRisk };
  };

  // Overall Industrial Risk
  const calculateIndustrialRisk = () => {
    const worstMachine = machines.reduce((min, m) => m.healthScore < min.healthScore ? m : min, machines[0]);
    const maxAmmonia = Math.max(...machines.map(m => m.sensors.ammonia));
    const maxTemp = Math.max(...machines.map(m => m.sensors.temperature));
    const maxVib = Math.max(...machines.map(m => m.sensors.vibration));

    const machineRisk = Math.round(100 - worstMachine.healthScore);
    const gasRisk = Math.min(100, Math.round(maxAmmonia <= 15 ? (maxAmmonia / 15) * 20 : (maxAmmonia <= 25 ? 20 + ((maxAmmonia - 15) / 10) * 30 : 50 + ((maxAmmonia - 25) / 25) * 45)));
    const tempRisk = Math.min(100, Math.round(maxTemp <= 65 ? (maxTemp / 65) * 25 : 25 + ((maxTemp - 65) / 25) * 55));
    const vibRisk = Math.min(100, Math.round(maxVib <= 2.5 ? (maxVib / 2.5) * 25 : 25 + ((maxVib - 2.5) / 3.5) * 55));

    const overallScore = Math.round((machineRisk * 0.35) + (gasRisk * 0.30) + (tempRisk * 0.15) + (vibRisk * 0.20));
    const level = overallScore >= 70 ? 'HIGH' : (overallScore >= 40 ? 'MEDIUM' : 'LOW');

    return { overallScore, level, machineRisk, gasRisk, tempRisk, vibRisk, worstMachine };
  };

  // Simulation Trigger with realistic 3-step gradual transition (e.g. 72°C -> 85°C -> 94°C)
  const triggerScenario = (scenarioKey) => {
    setActiveScenario(scenarioKey);
    setIsSimulatingTransition(true);

    const targetId = (scenarioKey === 'gas_alert' ? 'MCH-006' : (scenarioKey === 'vibration' ? 'MCH-004' : 'MCH-002'));
    setSelectedMachineId(targetId);

    // Baseline targets for each scenario
    let targetSensors = { temperature: 68.4, vibration: 2.1, current: 10.4, frequency: 50.0, humidity: 58, ammonia: 6.2 };
    let alertData = null;

    if (scenarioKey === 'overheat') {
      targetSensors = { temperature: 94.6, vibration: 3.8, current: 15.4, frequency: 49.2, humidity: 62, ammonia: 8.0 };
      alertData = {
        title: "CRITICAL INDUSTRIAL ALERT",
        severity: "CRITICAL",
        message: "MCH-002 Motor Overheating: Stator reached 94.6°C (Allowed < 80°C).",
        action: "Inspect cooling system and motor condition according to plant procedure."
      };
    } else if (scenarioKey === 'vibration') {
      targetSensors = { temperature: 82.0, vibration: 8.4, current: 16.8, frequency: 47.8, humidity: 56, ammonia: 9.2 };
      alertData = {
        title: "CRITICAL INDUSTRIAL ALERT",
        severity: "CRITICAL",
        message: "MCH-004 Excessive Vibration (8.4 mm/s): ISO 10816 limit breached.",
        action: "Bearing spalling imminent. Initiate safe controlled shutdown."
      };
    } else if (scenarioKey === 'overcurrent') {
      targetSensors = { temperature: 78.5, vibration: 4.1, current: 26.8, frequency: 48.5, humidity: 60, ammonia: 7.5 };
      alertData = {
        title: "WARNING: MOTOR CURRENT SURGE",
        severity: "WARNING",
        message: "MCH-002 Current Spike (26.8 A): Heavy mechanical resistance detected.",
        action: "Verify drivetrain resistance and inverter phase balance."
      };
    } else if (scenarioKey === 'gas_alert') {
      targetSensors = { temperature: 76.0, vibration: 3.2, current: 13.5, frequency: 49.8, humidity: 84, ammonia: 54.8 };
      alertData = {
        title: "ENVIRONMENTAL HAZARD DETECTED",
        severity: "CRITICAL",
        message: "Zone B Ammonia Level at 54.8 ppm exceeds OSHA PEL safety ceiling (25 ppm).",
        action: "Alert supervisor, activate scrubbers, restrict zone access, require PPE."
      };
    } else if (scenarioKey === 'critical_failure') {
      targetSensors = { temperature: 96.2, vibration: 9.2, current: 28.5, frequency: 45.8, humidity: 68, ammonia: 28.0 };
      alertData = {
        title: "EMERGENCY: COMPOUND MACHINE FAILURE",
        severity: "CRITICAL",
        message: "MCH-002 Multi-barrier failure: Temp 96°C, Vibration 9.2 mm/s, Current 28.5A.",
        action: "Execute emergency line stop according to industrial protocol."
      };
    }

    // Step 1: Immediate ramp
    updateMachineSensors(targetId, {
      temperature: Math.round((selectedMachine.sensors.temperature + targetSensors.temperature) / 2),
      vibration: Math.round(((selectedMachine.sensors.vibration + targetSensors.vibration) / 2) * 10) / 10,
      current: Math.round(((selectedMachine.sensors.current + targetSensors.current) / 2) * 10) / 10,
      frequency: targetSensors.frequency,
      humidity: targetSensors.humidity,
      ammonia: targetSensors.ammonia
    });

    // Step 2: Full peak ramp after 800ms
    setTimeout(() => {
      updateMachineSensors(targetId, targetSensors);
      setIsSimulatingTransition(false);

      if (alertData) {
        addToast(alertData);
        // Add to alert log
        const newAlert = {
          id: `ALT-${Date.now().toString().slice(-5)}`,
          machineId: targetId,
          zone: targetId === 'MCH-006' ? 'ZONE B' : (targetId === 'MCH-004' ? 'ZONE C' : 'ZONE B'),
          alertType: alertData.title,
          severity: alertData.severity,
          sensor: scenarioKey === 'gas_alert' ? 'MQ-137 Gas Sensor' : (scenarioKey === 'vibration' ? 'Piezo Accelerometer' : 'Stator RTD'),
          currentValue: `${targetSensors.temperature}°C | ${targetSensors.vibration} mm/s | ${targetSensors.ammonia} ppm`,
          expectedRange: 'Nominal Envelope',
          aiRecommendation: alertData.action,
          status: 'ACTIVE',
          timestamp: 'Just now'
        };
        setAlerts(prev => [newAlert, ...prev]);
        fetch('/api/notifications/dispatch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ alert: newAlert }),
        }).catch(() => undefined);
      }
    }, 800);
  };

  const updateMachineSensors = (machineId, newSensors) => {
    setMachines(prev => prev.map(m => {
      if (m.id !== machineId) return m;
      const { score, status } = calculateHealth(newSensors);
      return {
        ...m,
        sensors: { ...m.sensors, ...newSensors },
        healthScore: score,
        status: status,
        failureRisk: Math.max(5, Math.round(100 - score)),
        anomalyScore: Math.min(100, Math.round((100 - score) * 1.05))
      };
    }));
  };

  const acknowledgeAlert = (alertId) => {
    setAlerts(prev => prev.map(a => a.id === alertId ? { ...a, status: 'ACKNOWLEDGED' } : a));
    addToast({
      title: "Alert Acknowledged",
      severity: "INFO",
      message: `Alert ${alertId} acknowledged by ${currentRole}.`
    });
  };

  const createMaintenanceTask = (alert) => {
    const newTask = {
      id: `MNT-${Math.floor(100 + Math.random() * 900)}`,
      machineId: alert.machineId,
      machineName: machines.find(m => m.id === alert.machineId)?.name || 'Industrial Asset',
      issue: alert.alertType,
      recommendation: alert.aiRecommendation,
      priority: alert.severity === 'CRITICAL' ? 'CRITICAL' : 'HIGH',
      status: 'PENDING',
      scheduledDate: 'Immediate Work Order',
      category: 'AI Recommended'
    };
    setMaintenance(prev => [newTask, ...prev]);
    setActivePage('maintenance');
    addToast({
      title: "Maintenance Task Created",
      severity: "INFO",
      message: `Work Order ${newTask.id} dispatched for ${alert.machineId}.`
    });
  };

  return (
    <AppContext.Provider value={{
      activePage,
      setActivePage,
      selectedMachineId,
      setSelectedMachineId,
      selectedMachine,
      currentRole,
      setCurrentRole,
      simulationMode,
      setSimulationMode,
      activeScenario,
      triggerScenario,
      isSimulatingTransition,
      machines,
      zones,
      alerts,
      maintenance,
      toasts,
      removeToast,
      acknowledgeAlert,
      createMaintenanceTask,
      industrialRisk: calculateIndustrialRisk(),
      roiData: ROI_DATA
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
