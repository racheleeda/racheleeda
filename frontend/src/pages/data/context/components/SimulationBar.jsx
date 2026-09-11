import React from 'react';
import { useApp } from '../AppContext.jsx';

export default function SimulationBar() {
  const { simulationMode, activeScenario, triggerScenario, isSimulatingTransition } = useApp();

  if (!simulationMode) return null;

  const SCENARIOS = [
    { key: 'normal', label: 'Normal Operation', icon: '🟢', color: 'hover:border-emerald-500' },
    { key: 'overheat', label: 'Simulate Overheating', icon: '🔥', color: 'hover:border-rose-500' },
    { key: 'vibration', label: 'Simulate High Vibration', icon: '⚡', color: 'hover:border-amber-500' },
    { key: 'overcurrent', label: 'Simulate High Current', icon: '⚡', color: 'hover:border-amber-500' },
    { key: 'gas_alert', label: 'Simulate Gas Alert', icon: '☣️', color: 'hover:border-purple-500' },
    { key: 'critical_failure', label: 'Simulate Critical Breakdown', icon: '🚨', color: 'hover:border-rose-600' },
  ];

  return (
    <div className="w-full bg-[#0c1322] border-b border-cyan-500/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wide">
          HACKATHON LIVE SIMULATOR:
        </span>
        <span className="text-[11px] text-slate-400 hidden md:inline">
          Trigger real-time anomaly propagation across multi-sensor streams
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {SCENARIOS.map(sc => {
          const isActive = activeScenario === sc.key;
          return (
            <button
              key={sc.key}
              disabled={isSimulatingTransition}
              onClick={() => triggerScenario(sc.key)}
              className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                isActive
                  ? 'bg-cyan-900/70 border-cyan-400 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                  : `bg-slate-900/80 border-slate-700/80 text-slate-300 ${sc.color} hover:bg-slate-800`
              } ${isSimulatingTransition ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              <span>{sc.icon}</span>
              <span>{sc.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
