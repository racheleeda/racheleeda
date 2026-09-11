import React from 'react';
import { useApp } from '../AppContext.jsx';

export default function Header() {
  const { currentRole, setCurrentRole, activePage, setActivePage, alerts, simulationMode, setSimulationMode } = useApp();
  const activeAlertCount = alerts.filter(a => a.status === 'ACTIVE').length;
  const criticalCount = alerts.filter(a => a.status === 'ACTIVE' && a.severity === 'CRITICAL').length;

  return (
    <header className="w-full bg-[#0a0f1d] border-b border-cyan-500/20 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-md">
      {/* Brand Title and Tagline */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-lg font-black tracking-wider text-white">AI SMART RETROFIT</h1>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              v1.0-PROTOTYPE
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            "Transforming Legacy Machines into Intelligent, Safe & Predictive Assets."
          </p>
        </div>
      </div>

      {/* Right controls: Telemetry Status, Role Switcher, Alert Badge, Simulation Switch */}
      <div className="flex items-center gap-3.5">
        {/* Live System Beacon */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-slate-300 font-mono text-[11px]">EDGE IOT ONLINE</span>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-slate-700">
          <span className="text-[11px] font-mono text-slate-400 pl-2 pr-1">ROLE:</span>
          {['ADMIN', 'SUPERVISOR', 'SAFETY_OFFICER'].map(role => (
            <button
              key={role}
              onClick={() => setCurrentRole(role)}
              className={`px-2.5 py-1 rounded text-xs font-semibold tracking-wide transition-all ${
                currentRole === role
                  ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {role === 'SAFETY_OFFICER' ? 'SAFETY' : role}
            </button>
          ))}
        </div>

        {/* Active Alert Center Quick Trigger */}
        <button
          onClick={() => setActivePage('alerts')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
            criticalCount > 0
              ? 'bg-rose-950/80 border-rose-500/60 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.3)] animate-pulse'
              : (activeAlertCount > 0 ? 'bg-amber-950/80 border-amber-500/50 text-amber-300' : 'bg-slate-900 border-slate-700 text-slate-400')
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span>ALERTS: {activeAlertCount}</span>
        </button>

        {/* Simulation Toggle */}
        <button
          onClick={() => setSimulationMode(!simulationMode)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
            simulationMode
              ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          SIM MODE: {simulationMode ? 'ON' : 'OFF'}
        </button>
      </div>
    </header>
  );
}
