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
      className={`absolute inset-0 pointer-events-none overflow-hidden z-20 ${className}`}
      aria-hidden="true"
    >
      {/* Coin 1: Top-Left (Desktop + Mobile) */}
      <div
        className="absolute left-[4%] sm:left-[7%] top-[16%] sm:top-[18%] w-12 h-12 sm:w-16 sm:h-16 animate-coin-float-1"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 2: Mid-Low Left (Desktop & Tablet only) */}
      <div
        className="hidden sm:block absolute left-[8%] sm:left-[10%] top-[62%] w-14 h-14 sm:w-20 sm:h-20 animate-coin-float-2"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 3: Top-Right (Desktop + Mobile) */}
      <div
        className="absolute right-[4%] sm:right-[7%] top-[15%] sm:top-[17%] w-12 h-12 sm:w-18 sm:h-18 animate-coin-float-3"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 4: Mid-Right (Desktop only) */}
      <div
        className="hidden md:block absolute right-[11%] top-[46%] w-10 h-10 sm:w-13 sm:h-13 opacity-90 animate-coin-float-4"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>

      {/* Coin 5: Bottom-Right (Desktop & Tablet only) */}
      <div
        className="hidden sm:block absolute right-[6%] sm:right-[8%] top-[72%] w-13 h-13 sm:w-16 sm:h-16 animate-coin-float-5"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <GoldCoinSvg />
      </div>
    </div>
  );
}
