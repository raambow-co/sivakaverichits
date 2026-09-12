import React from 'react';

/**
 * GoldCoinsOverlay
 * 
 * Prominently Floating & Glowing 3D Mint Gold Coins Environment.
 * - Clean, sleek metallic gold mint finish without text or icons.
 * - Active 26px - 34px vertical floating travel with realistic 3D pitch/roll tilts.
 * - Sits at high z-index (z-20) framing the Hero with radiant golden glow.
 * - 5 coins on Desktop, 2 coins on Mobile.
 * - Pure GPU-accelerated CSS (0% CPU / 0 lag on any phone or PC).
 */

function GoldCoinSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`w-full h-full select-none pointer-events-none ${className}`}
      style={{
        filter: 'drop-shadow(0 10px 20px rgba(184, 142, 56, 0.45)) drop-shadow(0 0 16px rgba(212, 175, 87, 0.35))',
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Outer Rim Metallic Shading */}
        <linearGradient id="coinRimGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BD" />
          <stop offset="25%" stopColor="#E2BB50" />
          <stop offset="55%" stopColor="#A0761C" />
          <stop offset="85%" stopColor="#ECC872" />
          <stop offset="100%" stopColor="#4A340C" />
        </linearGradient>

        {/* Inner Face Radial Gold Glow */}
        <radialGradient id="coinFaceGrad" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FFF8E2" />
          <stop offset="25%" stopColor="#F7D979" />
          <stop offset="60%" stopColor="#CCA230" />
          <stop offset="88%" stopColor="#8C6614" />
          <stop offset="100%" stopColor="#4D3608" />
        </radialGradient>

        {/* Central Emboss Core Gradient */}
        <radialGradient id="coinCenterGrad" cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="80%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </radialGradient>
      </defs>

      {/* 1. Outer Beveled Rim Disc */}
      <circle cx="60" cy="60" r="56" fill="url(#coinRimGrad)" />

      {/* 2. Bevel Inset Edge Groove */}
      <circle cx="60" cy="60" r="50.5" fill="#443008" opacity="0.7" />

      {/* 3. Main Polished Face Disc */}
      <circle cx="60" cy="60" r="48.5" fill="url(#coinFaceGrad)" />

      {/* 4. Concentric Milled Bead Ring */}
      <circle
        cx="60"
        cy="60"
        r="42"
        fill="none"
        stroke="#FFF5CC"
        strokeWidth="1"
        strokeDasharray="2.5 3"
        opacity="0.75"
      />
      <circle
        cx="60"
        cy="60"
        r="39.5"
        fill="none"
        stroke="#6E4D09"
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* 5. Clean Embossed Mint Medallion Center */}
      <circle
        cx="60"
        cy="60"
        r="32"
        fill="url(#coinCenterGrad)"
        stroke="#FFE899"
        strokeWidth="1"
        opacity="0.95"
      />
      <circle
        cx="60"
        cy="60"
        r="22"
        fill="none"
        stroke="#8C6614"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.65"
      />
      <circle cx="60" cy="60" r="8" fill="#FFFBEB" opacity="0.9" />
      <circle cx="60" cy="60" r="5" fill="#D4AF37" />

      {/* 6. Specular Highlight */}
      <path
        d="M 32 26 A 45 45 0 0 1 88 26 A 42 42 0 0 0 32 26 Z"
        fill="#FFFFFF"
        opacity="0.38"
      />
    </svg>
  );
}

export function GoldCoinsOverlay({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-[2] ${className}`}
      aria-hidden="true"
    >
      {/* Coin 1: Top-Left Outer Ambient Margin (Desktop, away from badge & heading) */}
      <div
        className="hidden lg:block absolute left-[1.5%] xl:left-[2.5%] top-[7%] xl:top-[9%] w-10 h-10 xl:w-14 xl:h-14 opacity-75 animate-coin-float-1"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 2: Bottom-Left Outer Margin (Desktop, well below stats row & far from CTA buttons) */}
      <div
        className="hidden lg:block absolute left-[1.5%] xl:left-[2.5%] bottom-[5%] xl:bottom-[7%] w-10 h-10 xl:w-14 xl:h-14 opacity-70 animate-coin-float-2"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 3: Top-Right Outer Margin (Desktop, far above right column image card) */}
      <div
        className="hidden lg:block absolute right-[1.5%] xl:right-[2.5%] top-[6%] xl:top-[8%] w-10 h-10 xl:w-14 xl:h-14 opacity-75 animate-coin-float-3"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 4: Far-Right Outer Boundary (Ultra-wide screens only, completely outside container) */}
      <div
        className="hidden 2xl:block absolute right-[0.8%] top-[50%] -translate-y-1/2 w-8 h-8 opacity-45 animate-coin-float-4"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 5: Bottom-Right Outer Margin (Desktop, far below right column image card) */}
      <div
        className="hidden lg:block absolute right-[1.5%] xl:right-[2.5%] bottom-[5%] xl:bottom-[7%] w-10 h-10 xl:w-13 xl:h-13 opacity-70 animate-coin-float-5"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>
    </div>
  );
}
