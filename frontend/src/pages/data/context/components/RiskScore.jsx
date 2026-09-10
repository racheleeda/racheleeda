import React from 'react';
import { useApp } from '../AppContext.jsx';

export default function RiskScore({ customRisk }) {
  const { industrialRisk } = useApp();
  const risk = customRisk || industrialRisk;

  const score = risk.overallScore;
  const level = risk.level;

  let badgeColor = "text-emerald-400 border-emerald-500/40 bg-emerald-950/40";
  let barColor = "bg-emerald-500";
  if (score >= 70) {
    badgeColor = "text-rose-400 border-rose-500/50 bg-rose-950/60 animate-pulse";
    barColor = "bg-rose-500";
  } else if (score >= 40) {
    badgeColor = "text-amber-400 border-amber-500/50 bg-amber-950/40";
    barColor = "bg-amber-500";
  }

  const contributors = [
    { label: "Machine Risk", value: risk.machineRisk, color: "bg-blue-500" },
    { label: "Gas Risk (Ammonia)", value: risk.gasRisk, color: "bg-purple-500" },
    { label: "Temperature Risk", value: risk.tempRisk, color: "bg-amber-500" },
    { label: "Vibration Risk", value: risk.vibRisk, color: "bg-cyan-500" }
  ];

  return (
    <div className="glass-panel p-5 flex flex-col justify-between">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
            OVERALL INDUSTRIAL RISK
          </span>
          <p className="text-[10px] text-slate-500">Integrated site safety index</p>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
          {level}
        </span>
      </div>

      {/* Main Score readout */}
      <div className="flex items-baseline gap-2 my-2">
        <span className="text-4xl font-black text-white font-mono">{score}</span>
        <span className="text-sm font-mono text-slate-400 font-bold">/ 100</span>
      </div>

      {/* Primary progress bar */}
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-4">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>

      {/* Sub-contributors breakdown */}
      <div className="space-y-2 pt-2 border-t border-slate-800/80">
        {contributors.map(c => (
          <div key={c.label} className="text-xs">
            <div className="flex items-center justify-between mb-1 text-[11px]">
              <span className="text-slate-400">{c.label}</span>
              <span className="font-mono font-bold text-slate-200">{c.value}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
              <div
                className={`h-full rounded-full ${c.color} transition-all duration-500`}
                style={{ width: `${c.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
