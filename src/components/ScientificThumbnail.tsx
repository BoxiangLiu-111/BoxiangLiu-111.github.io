import React from 'react';

interface ThumbnailProps {
  type: 'pam' | 'drivetrain' | 'throughwater' | 'endoscopy';
  title: string;
}

export const ScientificThumbnail: React.FC<ThumbnailProps> = ({ type, title }) => {
  if (type === 'pam') {
    // VascHAT: Photoacoustic Microscopy vascular reconstruction
    return (
      <div className="relative w-full h-full min-h-[140px] bg-slate-950 rounded-lg overflow-hidden border border-slate-700/60 flex flex-col items-center justify-center p-3 select-none group">
        <svg viewBox="0 0 240 140" className="w-full h-full max-h-36 drop-shadow-md" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1e293b" strokeWidth="0.8" />
          </pattern>
          <rect width="240" height="140" fill="url(#grid)" />

          {/* Sparse dots comparison banner */}
          <rect x="8" y="8" width="68" height="20" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <text x="14" y="21" fill="#94a3b8" fontSize="8" fontFamily="monospace">2×/4× Sparse</text>

          <rect x="164" y="8" width="68" height="20" rx="3" fill="#1e1b4b" stroke="#6366f1" strokeWidth="0.8" />
          <text x="170" y="21" fill="#a5b4fc" fontSize="8" fontFamily="monospace">VascHAT Recom</text>

          {/* Left: Broken sparse vascular nodes */}
          <g opacity="0.75">
            <circle cx="20" cy="50" r="2.5" fill="#f43f5e" />
            <circle cx="34" cy="62" r="2.5" fill="#f43f5e" />
            <circle cx="48" cy="80" r="2" fill="#f43f5e" />
            <circle cx="38" cy="98" r="2" fill="#f43f5e" />
            <circle cx="60" cy="115" r="2.5" fill="#f43f5e" />
            <path d="M 20 50 Q 30 58 34 62" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <path d="M 34 62 Q 42 72 48 80" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <path d="M 48 80 Q 42 90 38 98" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
          </g>

          {/* Arrow / Transformer middle badge */}
          <g transform="translate(90, 48)">
            <rect x="0" y="0" width="58" height="42" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="7" y="16" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Hybrid Attn</text>
            <text x="12" y="27" fill="#67e8f9" fontSize="6.5" fontFamily="monospace">+ Hessian</text>
            <text x="11" y="36" fill="#f472b6" fontSize="6.5" fontFamily="monospace">+ Soft Box</text>
          </g>
          <path d="M 76 70 L 88 70" stroke="#0ea5e9" strokeWidth="1.5" />
          <path d="M 150 70 L 162 70" stroke="#10b981" strokeWidth="1.5" />

          {/* Right: Continuous reconstructed vessel network */}
          <path d="M 172 45 Q 186 60 196 66 T 226 78" stroke="url(#vesselGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 196 66 Q 205 92 216 112" stroke="url(#vesselGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 186 60 Q 176 85 180 108" stroke="url(#vesselGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 205 92 Q 224 95 232 90" stroke="url(#vesselGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Metric badge bottom */}
          <rect x="12" y="118" width="216" height="16" rx="2" fill="#020617" opacity="0.9" />
          <text x="24" y="129" fill="#10b981" fontSize="7.5" fontWeight="600" fontFamily="monospace">clDice: 0.832 | RSE: 7.82% (2×)</text>
          <text x="168" y="129" fill="#38bdf8" fontSize="7.5" fontWeight="600" fontFamily="monospace">PAM 4μm</text>
        </svg>
        <span className="sr-only">{title}</span>
      </div>
    );
  }

  if (type === 'drivetrain') {
    // CG-COTR: Wind turbine multisensor transfer residuals
    return (
      <div className="relative w-full h-full min-h-[140px] bg-slate-950 rounded-lg overflow-hidden border border-slate-700/60 flex flex-col items-center justify-center p-3 select-none group">
        <svg viewBox="0 0 240 140" className="w-full h-full max-h-36 drop-shadow-md" aria-hidden="true" focusable="false">
          {/* Background grid */}
          <pattern id="grid2" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1e293b" strokeWidth="0.8" />
          </pattern>
          <rect width="240" height="140" fill="url(#grid2)" />

          {/* Title tag */}
          <rect x="8" y="8" width="94" height="18" rx="3" fill="#0f172a" stroke="#0ea5e9" strokeWidth="0.8" />
          <text x="14" y="20" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">CG-COTR Sensor Rel</text>

          {/* Sensor Nodes on Gearbox Drivetrain */}
          <g transform="translate(15, 38)">
            {/* Gearbox body outline */}
            <rect x="0" y="8" width="85" height="58" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <circle cx="25" cy="37" r="16" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="60" cy="37" r="10" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="25" y1="37" x2="60" y2="37" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Sensor 1 (Source) */}
            <circle cx="25" cy="18" r="5" fill="#3b82f6" />
            <text x="22" y="14" fill="#93c5fd" fontSize="6.5" fontWeight="bold">S_s</text>

            {/* Transfer arrow */}
            <path d="M 32 18 Q 45 10 55 24" stroke="#ec4899" strokeWidth="1.8" fill="none" strokeDasharray="2 1" />
            <text x="36" y="9" fill="#f472b6" fontSize="6.5" fontFamily="monospace">H(e,q)</text>

            {/* Sensor 2 (Target) */}
            <circle cx="60" cy="27" r="5" fill="#10b981" />
            <text x="64" y="24" fill="#a7f3d0" fontSize="6.5" fontWeight="bold">S_t</text>
          </g>

          {/* Order domain residuals graph */}
          <g transform="translate(120, 28)">
            <rect x="0" y="0" width="110" height="78" rx="4" fill="#090d16" stroke="#334155" strokeWidth="0.8" />
            <text x="8" y="14" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Order Spectrum | Residual</text>

            {/* Axes */}
            <line x1="12" y1="65" x2="102" y2="65" stroke="#475569" strokeWidth="0.8" />
            <line x1="12" y1="18" x2="12" y2="65" stroke="#475569" strokeWidth="0.8" />

            {/* Order peaks */}
            <line x1="26" y1="65" x2="26" y2="40" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
            <line x1="42" y1="65" x2="42" y2="28" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="65" x2="58" y2="48" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
            <line x1="74" y1="65" x2="74" y2="34" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
            <line x1="90" y1="65" x2="90" y2="52" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />

            {/* Coherence Gate curve */}
            <path d="M 12 36 Q 42 22 74 30 T 102 38" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            <text x="56" y="22" fill="#fde047" fontSize="5.5" fontFamily="monospace">γ² ≥ 0.50</text>
          </g>

          {/* Bottom benchmark score */}
          <rect x="8" y="116" width="224" height="18" rx="3" fill="#020617" />
          <text x="14" y="128" fill="#10b981" fontSize="7.5" fontWeight="bold" fontFamily="monospace">NREL GRC AUROC: 0.925 (Latency: 11.8ms)</text>
        </svg>
        <span className="sr-only">{title}</span>
      </div>
    );
  }

  if (type === 'throughwater') {
    // CFRR: Through-water image restoration with privileged depth distillation
    return (
      <div className="relative w-full h-full min-h-[140px] bg-slate-950 rounded-lg overflow-hidden border border-slate-700/60 flex flex-col items-center justify-center p-3 select-none group">
        <svg viewBox="0 0 240 140" className="w-full h-full max-h-36 drop-shadow-md" aria-hidden="true" focusable="false">
          {/* Background grid */}
          <pattern id="grid3" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1e293b" strokeWidth="0.8" />
          </pattern>
          <rect width="240" height="140" fill="url(#grid3)" />

          {/* Wave distortion model vs Counterfactual restoration */}
          <g transform="translate(15, 20)">
            <rect x="0" y="0" width="95" height="85" rx="3" fill="#0a192f" stroke="#38bdf8" strokeWidth="1" />
            <text x="6" y="14" fill="#38bdf8" fontSize="7" fontWeight="bold">Input: Wavy Aerial</text>
            <path d="M 5 35 Q 25 25 50 38 T 90 30" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M 5 55 Q 35 45 65 60 T 90 50" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.7" />
            <rect x="25" y="42" width="45" height="30" fill="#0284c7" opacity="0.4" rx="2" />
            <text x="32" y="60" fill="#bae6fd" fontSize="7" fontFamily="monospace">Target</text>
          </g>

          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="95" height="85" rx="3" fill="#022c22" stroke="#10b981" strokeWidth="1" />
            <text x="6" y="14" fill="#34d399" fontSize="7" fontWeight="bold">CFRR Restored</text>
            <rect x="25" y="32" width="45" height="40" fill="#059669" opacity="0.5" rx="2" stroke="#10b981" strokeWidth="1" />
            <text x="30" y="55" fill="#ecfdf5" fontSize="7" fontFamily="monospace">Crisp Object</text>
            <text x="34" y="65" fill="#a7f3d0" fontSize="6" fontFamily="monospace">De-rippled</text>
          </g>

          {/* Bottom tag */}
          <rect x="10" y="115" width="220" height="18" rx="3" fill="#020617" />
          <text x="18" y="127" fill="#38bdf8" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Sea-Undistort: 35.73 dB | 2.12M Params</text>
        </svg>
        <span className="sr-only">{title}</span>
      </div>
    );
  }

  // PAE Endoscopy: Out-of-focus restoration
  return (
    <div className="relative w-full h-full min-h-[140px] bg-slate-950 rounded-lg overflow-hidden border border-slate-700/60 flex flex-col items-center justify-center p-3 select-none group">
      <svg viewBox="0 0 240 140" className="w-full h-full max-h-36 drop-shadow-md" aria-hidden="true" focusable="false">
        {/* Background grid */}
        <pattern id="grid4" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1e293b" strokeWidth="0.8" />
        </pattern>
        <rect width="240" height="140" fill="url(#grid4)" />

        {/* Endoscope Tube Schematic */}
        <g transform="translate(15, 20)">
          <rect x="0" y="18" width="55" height="34" rx="2" fill="#334155" stroke="#64748b" strokeWidth="1" />
          <line x1="0" y1="35" x2="55" y2="35" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 2" />
          <circle cx="50" cy="35" r="7" fill="#0284c7" />
          <text x="4" y="12" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif">Rotary Probe</text>

          {/* Acoustic & optical beam diverging */}
          <polygon points="57,35 95,12 95,58" fill="#38bdf8" opacity="0.25" />
          <line x1="57" y1="35" x2="95" y2="12" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="57" y1="35" x2="95" y2="58" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 1" />
        </g>

        {/* Center: Blurred vs Restored comparison circles */}
        <g transform="translate(115, 20)">
          <circle cx="28" cy="35" r="18" fill="#1e293b" stroke="#dc2626" strokeWidth="1.2" />
          <circle cx="28" cy="35" r="10" fill="#ef4444" opacity="0.4" filter="blur(3px)" />
          <text x="10" y="62" fill="#f87171" fontSize="6.5" fontFamily="monospace">Out-of-Focus</text>

          <path d="M 52 35 L 68 35" stroke="#94a3b8" strokeWidth="1.5" />

          <circle cx="92" cy="35" r="18" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="92" cy="35" r="4" fill="#34d399" />
          <text x="75" y="62" fill="#34d399" fontSize="6.5" fontFamily="monospace">RRDB Restored</text>
        </g>

        {/* Quantitative Result Box */}
        <rect x="15" y="85" width="210" height="42" rx="4" fill="#090d16" stroke="#1e293b" strokeWidth="1" />
        <text x="24" y="100" fill="#e2e8f0" fontSize="7.5" fontWeight="bold">Physica Scripta (2026) | DOI: 10.1088/1402-4896/ae6ad2</text>
        <text x="24" y="112" fill="#94a3b8" fontSize="7">Relative Size Error (RSE): 21.75% → 3.86%</text>
        <text x="24" y="122" fill="#10b981" fontSize="7" fontWeight="600">Wire & Leaf Phantoms | 532 nm Pulsed OR-PAE</text>
      </svg>
      <span className="sr-only">{title}</span>
    </div>
  );
};
