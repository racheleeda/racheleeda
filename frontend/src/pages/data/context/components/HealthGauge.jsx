import React from 'react';

export default function HealthGauge({ score = 87, status = "HEALTHY", title = "MACHINE HEALTH" }) {
  // Clamp score between 0 and 100
  const val = Math.max(0, Math.min(100, score));

  // Determine status description and color
  let statusText = "HEALTHY";
  let strokeColor = "#10b981"; // Emerald
  let glowColor = "rgba(16, 185, 129, 0.4)";

  if (val >= 90) {
    statusText = "EXCELLENT";
    strokeColor = "#10b981";
    glowColor = "rgba(16, 185, 129, 0.5)";
  } else if (val >= 75) {
    statusText = "HEALTHY";
    strokeColor = "#06b6d4";
    glowColor = "rgba(6, 182, 212, 0.5)";
  } else if (val >= 50) {
    statusText = "WARNING";
    strokeColor = "#f59e0b";
    glowColor = "rgba(245, 158, 11, 0.5)";
  } else if (val >= 25) {
    statusText = "CRITICAL";
    strokeColor = "#ef4444";
    glowColor = "rgba(239, 68, 68, 0.6)";
  } else {
    statusText = "SEVERE";
    strokeColor = "#dc2626";
    glowColor = "rgba(220, 38, 38, 0.7)";
  }

  // Radial calculation (220 degree arc)
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * (220 / 360);
  const strokeDashoffset = arcLength - (arcLength * (val / 100));

  return (
    <div className="glass-panel p-5 flex flex-col items-center justify-between text-center relative overflow-hidden">
      <div className="w-full flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
          {title}
        </span>
        <span
          className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
          style={{
            borderColor: strokeColor,
            color: strokeColor,
            backgroundColor: `${strokeColor}15`
          }}
        >
          {statusText}
        </span>
      </div>

      {/* Radial Gauge SVG */}
      <div className="relative flex items-center justify-center my-2">
        <svg className="w-44 h-44 transform -rotate-[200deg]" viewBox="0 0 180 180">
          {/* Background Track */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#1e293b"
            strokeWidth="12"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />
          {/* Animated Value Arc */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="12"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 8px ${glowColor})`,
              transition: 'stroke-dashoffset 0.8s ease-in-out, stroke 0.5s ease'
            }}
          />
        </svg>

        {/* Center Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span className="text-4xl font-black text-white font-mono tracking-tight">
            {val}%
          </span>
          <span className="text-[11px] font-mono font-bold mt-0.5" style={{ color: strokeColor }}>
            {statusText}
          </span>
        </div>
      </div>

      {/* Formula & Status Scale Footer */}
      <div className="w-full pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between">
        <span>ISO-10816 CLASS II</span>
        <span className="text-cyan-400 font-semibold">AI WEIGHTED RISK</span>
      </div>
    </div>
  );
}
