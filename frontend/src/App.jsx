import React from 'react';
import { AppProvider, useApp } from './pages/data/context/AppContext.jsx';
import Header from './pages/data/context/components/Header.jsx';
import Sidebar from './pages/data/context/components/Sidebar.jsx';
import SimulationBar from './pages/data/context/components/SimulationBar.jsx';
import SensorCard from './pages/data/context/components/SensorCard.jsx';
import HealthGauge from './pages/data/context/components/HealthGauge.jsx';
import RiskScore from './pages/data/context/components/RiskScore.jsx';
import Chatbot from './pages/data/context/components/Chatbot.jsx';
import AlertNotificationCenter from './pages/data/context/components/AlertNotificationCenter.jsx';
import Safety3DPage from './pages/Safety3DPage.jsx';

/* ─── DASHBOARD PAGE ─── */
function DashboardPage() {
  const { machines, alerts, maintenance, industrialRisk, setActivePage, setSelectedMachineId } = useApp();
  const activeAlerts = alerts.filter(a => a.status === 'ACTIVE');
  const criticalMachines = machines.filter(m => m.status === 'CRITICAL');
  const worstMachine = machines.reduce((min, m) => m.healthScore < min.healthScore ? m : min, machines[0]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-wide">INDUSTRIAL COMMAND CENTER</h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">AI-Powered Predictive Maintenance & Worker Safety Platform</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
          LIVE TELEMETRY ACTIVE
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Machines Monitored', value: machines.length, unit: 'assets', icon: '⚙️', color: 'text-cyan-400' },
          { label: 'Active Alerts', value: activeAlerts.length, unit: 'alerts', icon: '🚨', color: activeAlerts.length > 0 ? 'text-rose-400' : 'text-emerald-400' },
          { label: 'Critical Machines', value: criticalMachines.length, unit: 'critical', icon: '⚠️', color: criticalMachines.length > 0 ? 'text-rose-400' : 'text-emerald-400' },
          { label: 'Avg Fleet Health', value: `${Math.round(machines.reduce((s, m) => s + m.healthScore, 0) / machines.length)}%`, unit: '', icon: '💚', color: 'text-emerald-400' },
        ].map(kpi => (
          <div key={kpi.label} className="glass-panel p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-lg">{kpi.icon}</span>
              <span className={`text-2xl font-black font-mono ${kpi.color}`}>{kpi.value}</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <HealthGauge score={worstMachine.healthScore} title="WORST MACHINE HEALTH" />
        <RiskScore />
        {/* Active Alerts Summary */}
        <div className="glass-panel p-5">
          <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold mb-3">RECENT ALERTS</div>
          <div className="space-y-2 overflow-y-auto max-h-52">
            {activeAlerts.slice(0, 4).map(a => (
              <div key={a.id} className={`p-2.5 rounded-lg border text-xs ${a.severity === 'CRITICAL' ? 'border-rose-500/50 bg-rose-950/30' : 'border-amber-500/40 bg-amber-950/20'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold font-mono text-[10px] ${a.severity === 'CRITICAL' ? 'text-rose-400' : 'text-amber-400'}`}>{a.severity}</span>
                  <span className="text-slate-500 font-mono text-[10px]">{a.machineId}</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-tight">{a.alertType}</p>
              </div>
            ))}
            {activeAlerts.length === 0 && <p className="text-slate-500 text-xs text-center py-4">No active alerts 🟢</p>}
          </div>
        </div>
      </div>

      {/* Machine Fleet Quick View */}
      <div>
        <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold mb-3">MACHINE FLEET STATUS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {machines.map(m => (
            <button
              key={m.id}
              onClick={() => { setSelectedMachineId(m.id); setActivePage('machine-details'); }}
              className={`glass-panel p-4 text-left transition-all hover:scale-[1.01] w-full ${m.status === 'CRITICAL' ? 'glass-panel-glow-red' : m.status === 'WARNING' ? 'glass-panel-glow-amber' : ''}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-sm text-white">{m.name}</p>
                  <p className="text-[11px] text-slate-400 font-mono">{m.id} · {m.zone}</p>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${m.status === 'CRITICAL' ? 'badge-critical animate-pulse' : m.status === 'WARNING' ? 'badge-warning' : 'badge-normal'}`}>{m.status}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>Health</span><span>{m.healthScore}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${m.healthScore >= 75 ? 'bg-emerald-500' : m.healthScore >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${m.healthScore}%` }}></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-400">RISK</p>
                  <p className={`text-sm font-black font-mono ${m.failureRisk > 60 ? 'text-rose-400' : m.failureRisk > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>{m.failureRisk}%</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── MACHINES LIST PAGE ─── */
function MachinesPage() {
  const { machines, setSelectedMachineId, setActivePage } = useApp();
  return (
    <div className="p-6">
      <h2 className="text-xl font-black text-white mb-1">MACHINE FLEET REGISTRY</h2>
      <p className="text-xs text-slate-400 mb-6">All monitored industrial assets across the facility</p>
      <div className="space-y-3">
        {machines.map(m => (
          <div key={m.id} className={`glass-panel p-5 ${m.status === 'CRITICAL' ? 'glass-panel-glow-red' : ''}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${m.status === 'CRITICAL' ? 'bg-rose-500 animate-pulse' : m.status === 'WARNING' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                <div>
                  <p className="font-bold text-white">{m.name}</p>
                  <p className="text-xs font-mono text-slate-400">{m.id} · {m.type} · {m.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs font-mono">
                <div><p className="text-slate-500">HEALTH</p><p className="font-black text-white text-base">{m.healthScore}%</p></div>
                <div><p className="text-slate-500">RISK</p><p className={`font-black text-base ${m.failureRisk > 60 ? 'text-rose-400' : m.failureRisk > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>{m.failureRisk}%</p></div>
                <div><p className="text-slate-500">ANOMALY</p><p className="font-black text-cyan-400 text-base">{m.anomalyScore}%</p></div>
                <div><p className="text-slate-500">OP HRS</p><p className="font-black text-white text-base">{m.operatingHours.toLocaleString()}</p></div>
                <button
                  onClick={() => { setSelectedMachineId(m.id); setActivePage('machine-details'); }}
                  className="btn-cyber px-3 py-1.5 rounded-lg text-xs font-bold"
                >VIEW →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MACHINE DETAIL PAGE ─── */
function MachineDetailsPage() {
  const { selectedMachine } = useApp();
  if (!selectedMachine) return <div className="p-6 text-slate-400">No machine selected.</div>;
  const s = selectedMachine.sensors;

  const sensorConfigs = [
    { title: 'TEMPERATURE', value: s.temperature, unit: '°C', icon: '🌡️', expectedRange: '40 – 80°C', status: s.temperature > 90 ? 'CRITICAL' : s.temperature > 80 ? 'WARNING' : 'NORMAL' },
    { title: 'VIBRATION', value: s.vibration, unit: 'mm/s', icon: '📳', expectedRange: '0 – 4.5 mm/s', status: s.vibration > 7 ? 'CRITICAL' : s.vibration > 4.5 ? 'WARNING' : 'NORMAL' },
    { title: 'CURRENT DRAW', value: s.current, unit: 'A', icon: '⚡', expectedRange: '8 – 16 A', status: s.current > 24 ? 'CRITICAL' : s.current > 18 ? 'WARNING' : 'NORMAL' },
    { title: 'FREQUENCY', value: s.frequency, unit: 'Hz', icon: '〰️', expectedRange: '49.5 – 50.5 Hz', status: Math.abs(s.frequency - 50) > 3 ? 'CRITICAL' : Math.abs(s.frequency - 50) > 1 ? 'WARNING' : 'NORMAL' },
    { title: 'HUMIDITY', value: s.humidity, unit: '%RH', icon: '💧', expectedRange: '30 – 75 %RH', status: s.humidity > 85 ? 'WARNING' : 'NORMAL' },
    { title: 'AMMONIA (NH₃)', value: s.ammonia, unit: 'ppm', icon: '☁️', expectedRange: '< 25 ppm', status: s.ammonia > 50 ? 'CRITICAL' : s.ammonia > 25 ? 'WARNING' : 'NORMAL' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white">{selectedMachine.name}</h2>
          <p className="text-xs font-mono text-slate-400">{selectedMachine.id} · {selectedMachine.type} · {selectedMachine.location}</p>
        </div>
        <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${selectedMachine.status === 'CRITICAL' ? 'badge-critical animate-pulse' : selectedMachine.status === 'WARNING' ? 'badge-warning' : 'badge-normal'}`}>
          {selectedMachine.status}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {sensorConfigs.map(sc => (
          <SensorCard key={sc.title} {...sc} trend={sc.status === 'NORMAL' ? '✓ OK' : '⚠ Alert'} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HealthGauge score={selectedMachine.healthScore} title={`${selectedMachine.id} HEALTH SCORE`} />
        <div className="glass-panel p-5 space-y-3">
          <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">MACHINE SPECS</div>
          {Object.entries(selectedMachine.specs).map(([k, v]) => (
            <div key={k} className="flex justify-between text-xs border-b border-slate-800/60 pb-1">
              <span className="text-slate-400 font-mono uppercase text-[11px]">{k.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-white font-semibold font-mono">{v}</span>
            </div>
          ))}
          <div className="flex justify-between text-xs pt-1">
            <span className="text-slate-400 font-mono uppercase text-[11px]">Last Maintenance</span>
            <span className="text-white font-semibold font-mono">{selectedMachine.lastMaintenance}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-400 font-mono uppercase text-[11px]">Operating Hours</span>
            <span className="text-cyan-400 font-black font-mono">{selectedMachine.operatingHours.toLocaleString()} hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── LIVE TELEMETRY PAGE ─── */
function MonitoringPage() {
  const { machines } = useApp();
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-black text-white mb-1">LIVE SENSOR TELEMETRY</h2>
      <p className="text-xs text-slate-400 mb-4">Real-time multi-sensor readings across all monitored machines</p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400 uppercase text-[10px] tracking-wider">
              <th className="text-left pb-3 pr-4">Machine</th>
              <th className="pb-3 px-2">Status</th>
              <th className="pb-3 px-2">Health</th>
              <th className="pb-3 px-2">Temp °C</th>
              <th className="pb-3 px-2">Vib mm/s</th>
              <th className="pb-3 px-2">Current A</th>
              <th className="pb-3 px-2">Freq Hz</th>
              <th className="pb-3 px-2">NH₃ ppm</th>
              <th className="pb-3 px-2">Anomaly</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {machines.map(m => {
              const s = m.sensors;
              return (
                <tr key={m.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 pr-4">
                    <p className="font-bold text-white text-xs">{m.name}</p>
                    <p className="text-slate-500 text-[10px]">{m.id}</p>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${m.status === 'CRITICAL' ? 'badge-critical' : m.status === 'WARNING' ? 'badge-warning' : 'badge-normal'}`}>{m.status}</span>
                  </td>
                  <td className="py-3 px-2 text-center font-black text-white">{m.healthScore}%</td>
                  <td className={`py-3 px-2 text-center font-bold ${s.temperature > 90 ? 'text-rose-400' : s.temperature > 80 ? 'text-amber-400' : 'text-emerald-400'}`}>{s.temperature}</td>
                  <td className={`py-3 px-2 text-center font-bold ${s.vibration > 7 ? 'text-rose-400' : s.vibration > 4.5 ? 'text-amber-400' : 'text-emerald-400'}`}>{s.vibration}</td>
                  <td className={`py-3 px-2 text-center font-bold ${s.current > 24 ? 'text-rose-400' : s.current > 18 ? 'text-amber-400' : 'text-emerald-400'}`}>{s.current}</td>
                  <td className={`py-3 px-2 text-center font-bold ${Math.abs(s.frequency - 50) > 2 ? 'text-amber-400' : 'text-emerald-400'}`}>{s.frequency}</td>
                  <td className={`py-3 px-2 text-center font-bold ${s.ammonia > 50 ? 'text-rose-400' : s.ammonia > 25 ? 'text-amber-400' : 'text-emerald-400'}`}>{s.ammonia}</td>
                  <td className={`py-3 px-2 text-center font-black ${m.anomalyScore > 65 ? 'text-rose-400' : m.anomalyScore > 40 ? 'text-amber-400' : 'text-cyan-400'}`}>{m.anomalyScore}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── AI PREDICTIONS PAGE ─── */
function PredictionsPage() {
  const { machines } = useApp();
  const priorityOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

  const predictions = machines.map(m => {
    const s = m.sensors;
    let priority = 'LOW', issue = 'Normal operation', action = 'Continue scheduled monitoring.';
    if (s.vibration > 6 && s.temperature > 85) { priority = 'CRITICAL'; issue = 'Critical Bearing Cage Failure & Thermal Expansion'; action = 'Initiate safe shutdown. Inspect bearing housing.'; }
    else if (s.vibration > 4.5) { priority = 'HIGH'; issue = 'Motor Bearing Degradation & Misalignment'; action = 'Inspect drive-end bearing within 6 hours.'; }
    else if (s.temperature > 82) { priority = 'HIGH'; issue = 'Thermal Dissipation Loss / Overheating'; action = 'Inspect cooling blower and ventilation fins.'; }
    else if (s.current > 18) { priority = 'MEDIUM'; issue = 'Excessive Current / Mechanical Overload'; action = 'Verify downstream mechanical load.'; }
    else if (s.ammonia > 25) { priority = 'HIGH'; issue = 'Hazardous Ammonia Exposure'; action = 'Activate ventilation scrubbers immediately.'; }
    return { ...m, priority, issue, action, failureRisk: m.failureRisk };
  }).sort((a, b) => (priorityOrder[a.priority] ?? 4) - (priorityOrder[b.priority] ?? 4));

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-black text-white mb-1">AI PREDICTIVE MAINTENANCE INSIGHTS</h2>
      <p className="text-xs text-slate-400 mb-4">Explainable AI analysis of sensor patterns and failure risk</p>
      {predictions.map(m => (
        <div key={m.id} className={`glass-panel p-5 ${m.priority === 'CRITICAL' ? 'glass-panel-glow-red' : m.priority === 'HIGH' ? 'glass-panel-glow-amber' : ''}`}>
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <p className="font-black text-white">{m.name}</p>
              <p className="text-xs font-mono text-slate-400">{m.id} · {m.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${m.priority === 'CRITICAL' ? 'badge-critical animate-pulse' : m.priority === 'HIGH' ? 'badge-warning' : m.priority === 'MEDIUM' ? 'text-blue-400 border-blue-500/40 bg-blue-950/30' : 'badge-normal'}`}>{m.priority}</span>
              <span className="text-xs font-mono text-slate-400">Failure Risk: <span className={`font-black ${m.failureRisk > 60 ? 'text-rose-400' : m.failureRisk > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>{m.failureRisk}%</span></span>
            </div>
          </div>
          <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800 mb-3">
            <p className="text-[11px] font-mono font-bold text-cyan-400 uppercase mb-1">🧠 Detected Pattern</p>
            <p className="text-sm text-slate-200 font-medium">{m.issue}</p>
          </div>
          <div className="bg-blue-950/30 rounded-lg p-3 border border-blue-900/50">
            <p className="text-[11px] font-mono font-bold text-blue-400 uppercase mb-1">✅ Recommended Action</p>
            <p className="text-xs text-slate-300">{m.action}</p>
          </div>
          <div className="flex gap-4 mt-3 text-[11px] font-mono text-slate-400">
            <span>Temp: <span className="text-white font-bold">{m.sensors.temperature}°C</span></span>
            <span>Vib: <span className="text-white font-bold">{m.sensors.vibration} mm/s</span></span>
            <span>Current: <span className="text-white font-bold">{m.sensors.current} A</span></span>
            <span>NH₃: <span className="text-white font-bold">{m.sensors.ammonia} ppm</span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── WORKER SAFETY PAGE ─── */
function SafetyPage() {
  const { zones, machines } = useApp();
  const maxAmmonia = Math.max(...machines.map(m => m.sensors.ammonia));
  const maxTemp = Math.max(...machines.map(m => m.sensors.temperature));
  const overallSafety = maxAmmonia > 50 ? 'CRITICAL' : maxAmmonia > 25 ? 'WARNING' : 'SAFE';

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-black text-white mb-1">WORKER SAFETY MONITOR</h2>
      <p className="text-xs text-slate-400 mb-4">Real-time environmental and safety hazard assessment</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Overall Safety', value: overallSafety, icon: '🦺', color: overallSafety === 'CRITICAL' ? 'text-rose-400' : overallSafety === 'WARNING' ? 'text-amber-400' : 'text-emerald-400' },
          { label: 'Max Ammonia', value: `${maxAmmonia.toFixed(1)} ppm`, icon: '☁️', color: maxAmmonia > 50 ? 'text-rose-400' : maxAmmonia > 25 ? 'text-amber-400' : 'text-emerald-400' },
          { label: 'Max Temperature', value: `${maxTemp.toFixed(1)}°C`, icon: '🌡️', color: maxTemp > 90 ? 'text-rose-400' : maxTemp > 80 ? 'text-amber-400' : 'text-emerald-400' },
          { label: 'OSHA PEL Status', value: maxAmmonia < 25 ? 'COMPLIANT' : 'EXCEEDED', icon: '📋', color: maxAmmonia < 25 ? 'text-emerald-400' : 'text-rose-400' },
        ].map(item => (
          <div key={item.label} className="glass-panel p-4">
            <span className="text-2xl">{item.icon}</span>
            <p className={`text-xl font-black font-mono mt-1 ${item.color}`}>{item.value}</p>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {zones.map(zone => (
          <div key={zone.id} className={`glass-panel p-5 ${zone.safetyStatus === 'WARNING' ? 'glass-panel-glow-amber' : ''}`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-bold text-white text-sm">{zone.name}</p>
                <p className="text-[11px] font-mono text-slate-400">{zone.machines} machines · {zone.alerts} active alerts</p>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${zone.safetyStatus === 'WARNING' ? 'badge-warning' : 'badge-normal'}`}>{zone.safetyStatus}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-3">
              <div className="bg-slate-900/60 rounded p-2 text-center">
                <p className="text-slate-500 text-[10px]">AMMONIA</p>
                <p className={`font-black ${zone.ammonia > 25 ? 'text-rose-400' : zone.ammonia > 15 ? 'text-amber-400' : 'text-emerald-400'}`}>{zone.ammonia} ppm</p>
              </div>
              <div className="bg-slate-900/60 rounded p-2 text-center">
                <p className="text-slate-500 text-[10px]">TEMP</p>
                <p className="font-black text-cyan-400">{zone.temp}°C</p>
              </div>
              <div className="bg-slate-900/60 rounded p-2 text-center">
                <p className="text-slate-500 text-[10px]">HEALTH</p>
                <p className={`font-black ${zone.health > 75 ? 'text-emerald-400' : zone.health > 50 ? 'text-amber-400' : 'text-rose-400'}`}>{zone.health}%</p>
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800">
              <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase mb-1.5">Required PPE</p>
              <div className="flex flex-wrap gap-1">
                {zone.ppe.map(p => (
                  <span key={p} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">{p}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ALERTS PAGE ─── */
function AlertsPage() {
  const { alerts, acknowledgeAlert, createMaintenanceTask } = useApp();
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-black text-white mb-1">ALERT CENTER</h2>
      <div className="space-y-3">
        {alerts.map(alert => (
          <div key={alert.id} className={`glass-panel p-5 ${alert.severity === 'CRITICAL' && alert.status === 'ACTIVE' ? 'glass-panel-glow-red' : ''}`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${alert.severity === 'CRITICAL' ? 'bg-rose-500 animate-ping' : alert.severity === 'WARNING' ? 'bg-amber-500' : 'bg-blue-400'}`}></div>
                <div>
                  <p className="font-bold text-white text-sm">{alert.alertType}</p>
                  <p className="text-[11px] font-mono text-slate-400">{alert.id} · {alert.machineId} · {alert.zone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${alert.severity === 'CRITICAL' ? 'badge-critical' : alert.severity === 'WARNING' ? 'badge-warning' : 'text-blue-400 border-blue-500/40 bg-blue-950/30'}`}>{alert.severity}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${alert.status === 'ACTIVE' ? 'text-rose-400 border-rose-500/40 bg-rose-950/30' : 'text-slate-400 border-slate-700'}`}>{alert.status}</span>
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800 mb-3 text-xs">
              <p className="text-slate-400"><span className="font-bold text-cyan-400">Sensor:</span> {alert.sensor}</p>
              <p className="text-slate-400 mt-1"><span className="font-bold text-amber-400">Value:</span> {alert.currentValue} <span className="text-slate-500">(Expected: {alert.expectedRange})</span></p>
            </div>
            <div className="bg-blue-950/30 rounded-lg p-3 border border-blue-900/50 text-xs text-slate-300 mb-3">
              🤖 <span className="font-bold text-blue-400">AI Recommendation:</span> {alert.aiRecommendation}
            </div>
            {alert.status === 'ACTIVE' && (
              <div className="flex gap-2">
                <button onClick={() => acknowledgeAlert(alert.id)} className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-all">✓ Acknowledge</button>
                <button onClick={() => createMaintenanceTask(alert)} className="btn-cyber text-xs px-3 py-1.5 rounded-lg">+ Create Work Order</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MAINTENANCE PAGE ─── */
function MaintenancePage() {
  const { maintenance } = useApp();
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-black text-white mb-1">MAINTENANCE SCHEDULE</h2>
      <div className="space-y-3">
        {maintenance.map(task => (
          <div key={task.id} className="glass-panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <p className="font-bold text-white">{task.machineName}</p>
                <p className="text-xs font-mono text-slate-400">{task.id} · {task.machineId}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${task.priority === 'CRITICAL' ? 'badge-critical' : task.priority === 'HIGH' ? 'badge-warning' : task.priority === 'LOW' ? 'badge-normal' : 'text-blue-400 border-blue-500/40 bg-blue-950/30'}`}>{task.priority}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${task.status === 'COMPLETED' ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30' : task.status === 'PENDING' ? 'text-rose-400 border-rose-500/40 bg-rose-950/30' : 'text-amber-400 border-amber-500/40 bg-amber-950/30'}`}>{task.status}</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-1">{task.issue}</p>
            <p className="text-xs text-slate-400"><span className="text-cyan-400 font-bold">Action:</span> {task.recommendation}</p>
            <p className="text-[11px] font-mono text-slate-500 mt-2">📅 {task.scheduledDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ANALYTICS PAGE ─── */
function AnalyticsPage() {
  const { machines } = useApp();
  const avg = arr => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-black text-white mb-1">RELIABILITY ANALYTICS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-5">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-4">FLEET HEALTH DISTRIBUTION</div>
          {machines.map(m => (
            <div key={m.id} className="mb-3">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-300">{m.name.substring(0, 22)}</span>
                <span className={`font-bold ${m.healthScore >= 75 ? 'text-emerald-400' : m.healthScore >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>{m.healthScore}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${m.healthScore >= 75 ? 'bg-emerald-500' : m.healthScore >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${m.healthScore}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-panel p-5">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-4">SENSOR AVERAGES ACROSS FLEET</div>
          {[
            { label: 'Avg Temperature', value: `${avg(machines.map(m => m.sensors.temperature))} °C`, color: 'text-amber-400' },
            { label: 'Avg Vibration', value: `${avg(machines.map(m => m.sensors.vibration))} mm/s`, color: 'text-cyan-400' },
            { label: 'Avg Current', value: `${avg(machines.map(m => m.sensors.current))} A`, color: 'text-blue-400' },
            { label: 'Avg Ammonia', value: `${avg(machines.map(m => m.sensors.ammonia))} ppm`, color: 'text-purple-400' },
            { label: 'Avg Health Score', value: `${avg(machines.map(m => m.healthScore))}%`, color: 'text-emerald-400' },
            { label: 'Avg Failure Risk', value: `${avg(machines.map(m => m.failureRisk))}%`, color: 'text-rose-400' },
          ].map(s => (
            <div key={s.label} className="flex justify-between py-2 border-b border-slate-800/60 text-xs font-mono">
              <span className="text-slate-400">{s.label}</span>
              <span className={`font-black ${s.color}`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── BUSINESS ROI PAGE ─── */
function BusinessROIPage() {
  const { roiData } = useApp();
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-black text-white mb-1">BUSINESS IMPACT & ROI</h2>
      <p className="text-xs text-slate-400">Illustrative financial analysis of AI Smart Retrofit vs full equipment replacement</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Traditional Replacement', value: `₹${(roiData.traditionalReplacement / 1000).toFixed(0)}K`, color: 'text-rose-400' },
          { label: 'Retrofit Cost', value: `₹${(roiData.retrofitCost / 1000).toFixed(0)}K`, color: 'text-cyan-400' },
          { label: 'Capital Avoided', value: `₹${(roiData.capitalAvoidance / 1000).toFixed(0)}K`, color: 'text-emerald-400' },
          { label: 'Savings', value: `${roiData.savingsPercentage}%`, color: 'text-amber-400' },
        ].map(kpi => (
          <div key={kpi.label} className="glass-panel p-4 text-center">
            <p className={`text-2xl font-black font-mono ${kpi.color}`}>{kpi.value}</p>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mt-1">{kpi.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roiData.metrics.map(m => (
          <div key={m.label} className="glass-panel p-5">
            <p className="font-black text-white text-lg font-mono">{m.value}</p>
            <p className="font-bold text-cyan-400 text-sm mt-0.5">{m.label}</p>
            <p className="text-xs text-slate-400 mt-1">{m.benchmark}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500 italic">{roiData.disclaimer}</p>
    </div>
  );
}

/* ─── SETTINGS PAGE ─── */
function SettingsPage() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-black text-white mb-1">SYSTEM SETTINGS</h2>
      <div className="glass-panel p-5 space-y-3 max-w-lg">
        <p className="text-xs font-mono text-slate-400 uppercase font-bold">API Configuration</p>
        {[
          { label: 'Backend API', value: 'http://localhost:8000', status: 'Connected' },
          { label: 'Platform Version', value: 'v1.0.0-industrial', status: 'Stable' },
          { label: 'Data Mode', value: 'In-Memory Simulation Store', status: 'Active' },
        ].map(item => (
          <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-800/60 text-xs">
            <span className="font-mono text-slate-400">{item.label}</span>
            <div className="text-right">
              <p className="font-bold text-white font-mono">{item.value}</p>
              <p className="text-emerald-400 font-mono text-[10px]">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TOAST SYSTEM ─── */
function ToastSystem() {
  const { toasts, removeToast } = useApp();
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 w-80">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`glass-panel p-4 shadow-lg border-l-4 ${toast.severity === 'CRITICAL' ? 'border-rose-500 bg-rose-950/60' : toast.severity === 'WARNING' ? 'border-amber-500 bg-amber-950/40' : 'border-cyan-500 bg-cyan-950/30'}`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className={`text-xs font-bold ${toast.severity === 'CRITICAL' ? 'text-rose-300' : toast.severity === 'WARNING' ? 'text-amber-300' : 'text-cyan-300'}`}>{toast.title}</p>
              <p className="text-[11px] text-slate-300 mt-1 leading-tight">{toast.message}</p>
              {toast.action && <p className="text-[10px] text-slate-400 mt-1">{toast.action}</p>}
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-slate-500 hover:text-white text-lg leading-none shrink-0">×</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN APP LAYOUT ─── */
function AppLayout() {
  const { activePage } = useApp();

  const PAGE_MAP = {
    dashboard: <DashboardPage />,
    machines: <MachinesPage />,
    'machine-details': <MachineDetailsPage />,
    monitoring: <MonitoringPage />,
    predictions: <PredictionsPage />,
    safety: <SafetyPage />,
    'safety-3d': <Safety3DPage />,
    alerts: <AlertsPage />,
    maintenance: <MaintenancePage />,
    analytics: <AnalyticsPage />,
    'business-impact': <BusinessROIPage />,
    settings: <SettingsPage />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SimulationBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {PAGE_MAP[activePage] || <DashboardPage />}
        </main>
      </div>
      <ToastSystem />
      <AlertNotificationCenter />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
