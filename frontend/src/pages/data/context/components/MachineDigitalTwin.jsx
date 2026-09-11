import React, { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';

export default function MachineDigitalTwin({ machine, isCompact = false }) {
  const { selectedMachine } = useApp();
  const activeMachine = machine || selectedMachine;
  const [inspectedComponent, setInspectedComponent] = useState('stator'); // 'stator', 'bearing', 'terminal', 'shaft', 'fan', 'gas'

  const sensors = activeMachine.sensors;
  const status = activeMachine.status;

  // Status-dependent colors
  const statusColor = status === 'CRITICAL' ? '#ef4444' : (status === 'WARNING' ? '#f59e0b' : '#10b981');
  const glowFilter = status === 'CRITICAL' ? 'drop-shadow(0 0 10px rgba(239,68,68,0.7))' : (status === 'WARNING' ? 'drop-shadow(0 0 8px rgba(245,158,11,0.6))' : 'drop-shadow(0 0 6px rgba(16,185,129,0.5))');

  const componentsData = {
    stator: {
      name: "Stator Core & Copper Windings",
      sensor: "Stator PT100 RTD Probe",
      value: `${sensors.temperature} °C`,
      limit: "< 80.0 °C (Class F Insulation Limit: 155°C)",
      status: sensors.temperature > 85 ? "CRITICAL" : (sensors.temperature > 75 ? "WARNING" : "NORMAL"),
      desc: "Monitors internal thermal rise, copper loss, and heat accumulation caused by continuous mechanical loading or cooling blockage."
    },
    bearing: {
      name: "Drive-End Bearing Housing",
      sensor: "Piezoelectric Accelerometer",
      value: `${sensors.vibration} mm/s RMS`,
      limit: "< 4.5 mm/s (ISO 10816 Class II Limit)",
      status: sensors.vibration > 6.0 ? "CRITICAL" : (sensors.vibration > 4.0 ? "WARNING" : "NORMAL"),
      desc: "Measures high-frequency dynamic acceleration and velocity. Detects inner/outer race flaking, lack of lubrication, and shaft misalignment."
    },
    terminal: {
      name: "Power Terminal Junction Box",
      sensor: "Split-Core Current Transformer (CT)",
      value: `${sensors.current} A`,
      limit: "Rated Nominal: 12.0 – 16.0 A",
      status: sensors.current > 20.0 ? "CRITICAL" : (sensors.current > 15.0 ? "WARNING" : "NORMAL"),
      desc: "Non-invasive retrofitted CT clamp monitoring current draw and electrical phase balance. Detects mechanical binding resistance."
    },
    shaft: {
      name: "Rotor Shaft & Drive Coupling",
      sensor: "Hall Effect Magnetic Pulse Sensor",
      value: `${sensors.frequency} Hz`,
      limit: "Grid Sync: 50.0 ± 0.5 Hz",
      status: Math.abs(sensors.frequency - 50.0) > 2.0 ? "CRITICAL" : (Math.abs(sensors.frequency - 50.0) > 0.8 ? "WARNING" : "NORMAL"),
      desc: "Captures shaft rotational angular velocity and electrical frequency deviations. Detects load slippage and inverter hunting."
    },
    fan: {
      name: "Cooling Fan & Air Intake Shroud",
      sensor: "Differential Thermal Gradient",
      value: "Normal Airflow (185 CFM)",
      limit: "Fins Clean / Free Flow",
      status: sensors.temperature > 85 ? "WARNING" : "NORMAL",
      desc: "External cooling shroud ensuring heat removal across cast-iron stator cooling fins."
    },
    gas: {
      name: "Retrofit Gas & Environmental Node",
      sensor: "MQ-137 Hazardous Ammonia Transducer",
      value: `${sensors.ammonia} ppm`,
      limit: "< 25.0 ppm (OSHA Permissible Ceiling)",
      status: sensors.ammonia > 50.0 ? "CRITICAL" : (sensors.ammonia > 25.0 ? "WARNING" : "NORMAL"),
      desc: "Ambient environmental sensor protecting workers in hazardous chemical and metal-finishing manufacturing zones."
    }
  };

  const selectedData = componentsData[inspectedComponent];

  return (
    <div className={`glass-panel p-5 ${status === 'CRITICAL' ? 'glass-panel-glow-red' : (status === 'WARNING' ? 'glass-panel-glow-amber' : '')}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              DIGITAL TWIN: {activeMachine.name}
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                status === 'CRITICAL' ? 'badge-critical animate-pulse' : (status === 'WARNING' ? 'badge-warning' : 'badge-normal')
              }`}>
                {status}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 font-mono">
              Asset ID: {activeMachine.id} | Location: {activeMachine.location}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">
            CLICK COMPONENT TO INSPECT
          </span>
        </div>
      </div>

      {/* SVG Digital Twin Diagram */}
      <div className="relative w-full bg-[#080d19]/90 rounded-xl border border-slate-800/80 p-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle HUD scanline grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <svg
          viewBox="0 0 600 320"
          className="w-full max-w-2xl h-auto select-none"
          style={{ filter: glowFilter }}
        >
          <defs>
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="statorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* Base mounting frame */}
          <rect x="120" y="240" width="360" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" opacity="0.8" />
          <rect x="160" y="270" width="60" height="15" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <rect x="380" y="270" width="60" height="15" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />

          {/* Rotor Shaft through machine */}
          <rect x="60" y="150" width="480" height="24" rx="3" fill="url(#shaftGradient)" />
          {/* Drive shaft keyway / coupling */}
          <rect x="500" y="145" width="40" height="34" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1" />

          {/* Machine Stator Main Body with cooling ribs */}
          <g onClick={() => setInspectedComponent('stator')} className="cursor-pointer group">
            <rect x="180" y="90" width="240" height="144" rx="10" fill="url(#metalGradient)" stroke="#06b6d4" strokeWidth={inspectedComponent === 'stator' ? "2.5" : "1.2"} />
            {/* Cooling ribs */}
            {[200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400].map(x => (
              <line key={x} x1={x} y1="90" x2={x} y2="234" stroke="#475569" strokeWidth="2.5" strokeOpacity="0.6" />
            ))}
            {/* Stator core window */}
            <rect x="230" y="125" width="140" height="74" rx="6" fill="url(#statorGradient)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="300" y="166" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontWeight="bold" fontFamily="monospace">
              STATOR CORE
            </text>
          </g>

          {/* Drive-End Bearing Housing */}
          <g onClick={() => setInspectedComponent('bearing')} className="cursor-pointer group">
            <rect x="420" y="110" width="60" height="104" rx="6" fill="#1e293b" stroke={statusColor} strokeWidth={inspectedComponent === 'bearing' ? "2.5" : "1.5"} />
            <circle cx="450" cy="162" r="28" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <circle cx="450" cy="162" r="14" fill="#334155" />
            {/* Bearing balls */}
            {[0, 60, 120, 180, 240, 300].map(deg => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={450 + 21 * Math.cos(rad)}
                  cy={162 + 21 * Math.sin(rad)}
                  r="4.5"
                  fill="#94a3b8"
                />
              );
            })}
          </g>

          {/* Non-Drive End Bearing Housing */}
          <rect x="120" y="110" width="60" height="104" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />

          {/* Cooling Fan Shroud */}
          <g onClick={() => setInspectedComponent('fan')} className="cursor-pointer group">
            <path d="M120 100 L75 120 L75 204 L120 224 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="85" y1="130" x2="110" y2="194" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="100" y1="125" x2="95" y2="199" stroke="#0ea5e9" strokeWidth="2" />
          </g>

          {/* Terminal Box on top */}
          <g onClick={() => setInspectedComponent('terminal')} className="cursor-pointer group">
            <rect x="260" y="45" width="80" height="45" rx="4" fill="#1e293b" stroke={inspectedComponent === 'terminal' ? '#38bdf8' : '#64748b'} strokeWidth="1.5" />
            <line x1="280" y1="45" x2="280" y2="30" stroke="#f59e0b" strokeWidth="3" />
            <line x1="300" y1="45" x2="300" y2="30" stroke="#3b82f6" strokeWidth="3" />
            <line x1="320" y1="45" x2="320" y2="30" stroke="#ef4444" strokeWidth="3" />
            <text x="300" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold" fontFamily="monospace">
              TERMINAL
            </text>
          </g>

          {/* ================= SENSOR HOTSPOTS (GLOWING PROBES) ================= */}

          {/* 1. Temperature Sensor Probe on Stator */}
          <g onClick={() => setInspectedComponent('stator')} className="cursor-pointer">
            <circle cx="300" y="105" r="9" fill={sensors.temperature > 85 ? '#ef4444' : (sensors.temperature > 75 ? '#f59e0b' : '#10b981')} />
            <circle cx="300" y="105" r="16" fill="none" stroke={sensors.temperature > 85 ? '#ef4444' : '#10b981'} strokeWidth="1.5" opacity="0.6" className="animate-ping" />
            <text x="300" y="108" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">T</text>
          </g>

          {/* 2. Vibration Sensor on Drive Bearing */}
          <g onClick={() => setInspectedComponent('bearing')} className="cursor-pointer">
            <circle cx="450" cy="115" r="9" fill={sensors.vibration > 6.0 ? '#ef4444' : (sensors.vibration > 4.0 ? '#f59e0b' : '#10b981')} />
            <circle cx="450" cy="115" r="16" fill="none" stroke={sensors.vibration > 6.0 ? '#ef4444' : '#10b981'} strokeWidth="1.5" opacity="0.6" className="animate-ping" />
            <text x="450" y="118" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">V</text>
          </g>

          {/* 3. Current Sensor on Terminal Line */}
          <g onClick={() => setInspectedComponent('terminal')} className="cursor-pointer">
            <circle cx="300" cy="25" r="9" fill={sensors.current > 20 ? '#ef4444' : (sensors.current > 15 ? '#f59e0b' : '#10b981')} />
            <circle cx="300" cy="25" r="16" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
            <text x="300" y="28" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">I</text>
          </g>

          {/* 4. Frequency Sensor on Shaft */}
          <g onClick={() => setInspectedComponent('shaft')} className="cursor-pointer">
            <circle cx="520" cy="162" r="9" fill="#06b6d4" />
            <text x="520" y="165" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Hz</text>
          </g>

          {/* 5. Ambient Gas Sensor Probe */}
          <g onClick={() => setInspectedComponent('gas')} className="cursor-pointer">
            <circle cx="520" cy="70" r="11" fill={sensors.ammonia > 50 ? '#ef4444' : (sensors.ammonia > 25 ? '#f59e0b' : '#10b981')} />
            <circle cx="520" cy="70" r="18" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
            <text x="520" y="74" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">GAS</text>
          </g>

          {/* Connector wire lines to labels */}
          <polyline points="300,105 300,95 240,95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          <polyline points="450,115 450,85 490,85" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        </svg>

        {/* Sensor labels bar below machine */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 pt-3 border-t border-slate-800">
          <button
            onClick={() => setInspectedComponent('stator')}
            className={`p-2 rounded-lg text-left transition-all border ${
              inspectedComponent === 'stator'
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400">STATOR TEMP</div>
            <div className="text-xs font-bold text-white">{sensors.temperature} °C</div>
          </button>

          <button
            onClick={() => setInspectedComponent('bearing')}
            className={`p-2 rounded-lg text-left transition-all border ${
              inspectedComponent === 'bearing'
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400">VIBRATION</div>
            <div className="text-xs font-bold text-white">{sensors.vibration} mm/s</div>
          </button>

          <button
            onClick={() => setInspectedComponent('terminal')}
            className={`p-2 rounded-lg text-left transition-all border ${
              inspectedComponent === 'terminal'
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400">CURRENT</div>
            <div className="text-xs font-bold text-white">{sensors.current} A</div>
          </button>

          <button
            onClick={() => setInspectedComponent('shaft')}
            className={`p-2 rounded-lg text-left transition-all border ${
              inspectedComponent === 'shaft'
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400">FREQUENCY</div>
            <div className="text-xs font-bold text-white">{sensors.frequency} Hz</div>
          </button>

          <button
            onClick={() => setInspectedComponent('gas')}
            className={`p-2 rounded-lg text-left transition-all border ${
              inspectedComponent === 'gas'
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-mono text-slate-400">AMMONIA GAS</div>
            <div className="text-xs font-bold text-white">{sensors.ammonia} ppm</div>
          </button>
        </div>
      </div>

      {/* Component Telemetry Detail Drawer */}
      <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              {selectedData.sensor}
            </span>
            <h4 className="text-sm font-bold text-white">{selectedData.name}</h4>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">{selectedData.desc}</p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950/90 px-4 py-2.5 rounded-lg border border-slate-800 shrink-0">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">TELEMETRY</div>
            <div className="text-base font-extrabold text-white font-mono">{selectedData.value}</div>
          </div>
          <div className="h-8 w-px bg-slate-800"></div>
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">SAFE BOUND</div>
            <div className="text-xs font-medium text-slate-300">{selectedData.limit}</div>
          </div>
          <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded border ${
            selectedData.status === 'CRITICAL' ? 'badge-critical animate-pulse' : (selectedData.status === 'WARNING' ? 'badge-warning' : 'badge-normal')
          }`}>
            {selectedData.status}
          </span>
        </div>
      </div>
    </div>
  );
}
