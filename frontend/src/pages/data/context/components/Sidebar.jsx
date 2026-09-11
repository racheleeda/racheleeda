import React from 'react';
import { useApp } from '../AppContext.jsx';

export default function Sidebar() {
  const { activePage, setActivePage, currentRole, alerts } = useApp();
  const activeAlerts = alerts.filter(a => a.status === 'ACTIVE').length;

  const NAV_ITEMS = [
    { id: 'dashboard', label: 'Command Center', icon: '📊' },
    { id: 'machines', label: 'Machine Fleet', icon: '⚙️' },
    { id: 'machine-details', label: 'Machine Details', icon: '🔍' },
    { id: 'monitoring', label: 'Live Telemetry', icon: '📈' },
    { id: 'predictions', label: 'AI Predictions', icon: '🧠' },
    { id: 'safety', label: 'Worker Safety', icon: '🦺', highlight: true },
    { id: 'safety-3d', label: '3D Safety Map', icon: '◇', highlight: true },
    { id: 'alerts', label: 'Alert Center', icon: '🚨', badge: activeAlerts },
    { id: 'maintenance', label: 'Maintenance', icon: '🔧' },
    { id: 'analytics', label: 'Reliability Analytics', icon: '📉' },
    { id: 'business-impact', label: 'Business ROI', icon: '💰' },
    { id: 'settings', label: 'System Settings', icon: '⚙️' }
  ];

  return (
    <aside className="w-64 bg-[#080d1a] border-r border-cyan-500/15 flex flex-col justify-between p-3.5 select-none shrink-0 min-h-screen">
      <div>
        {/* Navigation Section */}
        <div className="text-[10px] font-mono tracking-wider text-cyan-400/70 uppercase px-3 mb-2 font-bold">
          MAIN CONSOLE
        </div>

        <nav className="space-y-1">
          {NAV_ITEMS.map(item => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/80 to-blue-950/50 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
                    {item.badge}
                  </span>
                )}
                {item.highlight && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Role & Edge Gateway Status Footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono text-slate-500 uppercase">ACTIVE SESSION</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
              {currentRole}
            </span>
          </div>
          <div className="text-slate-300 font-semibold text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>ESP32 Gateway Connected</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1 font-mono">
            REST & MQTT Ingestion Ready
          </p>
        </div>
      </div>
    </aside>
  );
}
