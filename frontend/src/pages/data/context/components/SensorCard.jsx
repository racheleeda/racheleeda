import React from 'react';

export default function SensorCard({
  title,
  value,
  unit,
  status = "NORMAL",
  expectedRange,
  icon,
  trend = "+1.2%",
  subtext
}) {
  let statusBadge = "badge-normal";
  let glowBorder = "";

  if (status === "CRITICAL") {
    statusBadge = "badge-critical animate-pulse";
    glowBorder = "border-rose-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]";
  } else if (status === "WARNING") {
    statusBadge = "badge-warning";
    glowBorder = "border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.15)]";
  }

  return (
    <div className={`glass-panel p-4 flex flex-col justify-between transition-all ${glowBorder}`}>
      {/* Top row: Title and status */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
            {title}
          </span>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${statusBadge}`}>
          {status}
        </span>
      </div>

      {/* Main value display */}
      <div className="my-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
            {value}
          </span>
          <span className="text-xs font-mono font-bold text-cyan-400">
            {unit}
          </span>
        </div>
        {subtext && (
          <p className="text-[11px] text-slate-400 mt-0.5">{subtext}</p>
        )}
      </div>

      {/* Threshold & Expected Range */}
      <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>BOUND: {expectedRange}</span>
        <span className="text-slate-300 font-semibold">{trend}</span>
      </div>
    </div>
  );
}
