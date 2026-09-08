import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Pause, Play } from 'lucide-react';

/**
 * SECTION 04 — HOW THE CHIT WORKS (INTERACTIVE JUMPING GOLD COIN TIMELINE)
 * Features:
 * - 3D Clean Embossed Mint Gold Coin (no text/icon) that jumps/hops across steps 01 → 02 → 03 → 04 → 05 → 06
 * - Clean milestone steps without any connecting lines
 * - Smooth parabolic arc jump & landing ripple glow on active milestones
 * - Clickable step nodes (users can click any step to make the coin leap there)
 * - Auto-play step cycling with hover-pause
 * - High-contrast responsive desktop horizontal and mobile layouts
 */

const CHIT_PROCESS_STEPS = [
  {
    step: "01",
    titleEnglish: "Select Your Plan",
    titleTelugu: "మీ చిట్ ప్లాన్ ఎంచుకోండి",
    descEnglish: "Choose a chit scheme with monthly installments and tenure aligned with your financial capacity.",
    badge: "Step 01 • Budget Choice",
  },
  {
    step: "02",
    titleEnglish: "Enrol & Complete KYC",
    titleTelugu: "నమోదు & KYC పూర్తి",
    descEnglish: "Submit basic identity verification documents and receive your official member passbook and group allocation.",
    badge: "Step 02 • Official Allotment",
  },
  {
    step: "03",
    titleEnglish: "Monthly Installment",
    titleTelugu: "నెలవారీ చెల్లింపు & డివిడెండ్",
    descEnglish: "Pay your monthly installment, discounted directly by the dividend earned from the previous month's auction.",
    badge: "Step 03 • Dividend Savings",
  },
  {
    step: "04",
    titleEnglish: "Participate in Auction",
    titleTelugu: "ప్రత్యక్ష లైవ్ వేలం",
    descEnglish: "When you need capital for personal or business needs, participate in the monthly transparent open live auction.",
    badge: "Step 04 • Open Bidding",
  },
  {
    step: "05",
    titleEnglish: "Receive Prize Money",
    titleTelugu: "ప్రైజ్ మనీ తక్షణ చెల్లింపు",
    descEnglish: "Upon completing standard statutory surety documentation, the prized amount is disbursed securely to your bank account.",
    badge: "Step 05 • Bank Credit",
  },
  {
    step: "06",
    titleEnglish: "Complete the Tenure",
    titleTelugu: "చిట్ వ్యవధి పూర్తి",
    descEnglish: "Continue paying your discounted monthly installments until the end of tenure, building complete savings discipline.",
    badge: "Step 06 • Total Maturity",
  },
];

// Clean, Sleek 3D Embossed Mint Gold Coin Component (Without Sri icon / text)
function JumpingGoldCoin({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Coin Radial Golden Halo */}
      <div className="absolute inset-0 bg-gold/40 rounded-full filter blur-md animate-pulse" />
      
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full select-none pointer-events-none drop-shadow-[0_8px_16px_rgba(184,142,56,0.6)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="jumpingCoinRim" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFF9D2" />
            <stop offset="30%" stopColor="#E5BE53" />
            <stop offset="65%" stopColor="#9C731A" />
            <stop offset="90%" stopColor="#F5D57B" />
            <stop offset="100%" stopColor="#4A340C" />
          </linearGradient>

          <radialGradient id="jumpingCoinFace" cx="36%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFCEB" />
            <stop offset="25%" stopColor="#F8DD81" />
            <stop offset="60%" stopColor="#CDA533" />
            <stop offset="90%" stopColor="#8C6512" />
            <stop offset="100%" stopColor="#4D3608" />
          </radialGradient>

          <radialGradient id="jumpingCoinInnerCore" cx="42%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FDE68A" />
            <stop offset="80%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </radialGradient>
        </defs>

        {/* 1. Outer Beveled Rim */}
        <circle cx="60" cy="60" r="56" fill="url(#jumpingCoinRim)" />
        <circle cx="60" cy="60" r="50.5" fill="#3E2A06" opacity="0.65" />
        
        {/* 2. Main Polished Disc */}
        <circle cx="60" cy="60" r="48.5" fill="url(#jumpingCoinFace)" />

        {/* 3. Concentric Milled Beads */}
        <circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="#FFF7D6"
          strokeWidth="1.2"
          strokeDasharray="2.5 3"
          opacity="0.85"
        />

        {/* 4. Sleek Embossed Inner Mint Medallion Ring */}
        <circle
          cx="60"
          cy="60"
          r="34"
          fill="url(#jumpingCoinInnerCore)"
          stroke="#FFE899"
          strokeWidth="1"
          opacity="0.95"
        />
        <circle
          cx="60"
          cy="60"
          r="24"
          fill="none"
          stroke="#996515"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.6"
        />

        {/* 5. Center Polished Star/Diamond Mint Pip */}
        <circle cx="60" cy="60" r="10" fill="#FFFBEB" opacity="0.9" />
        <circle cx="60" cy="60" r="6" fill="#D4AF37" />

        {/* 6. Specular Highlight Arc */}
        <path
          d="M 32 26 A 45 45 0 0 1 88 26 A 42 42 0 0 0 32 26 Z"
          fill="#FFFFFF"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

export function HowChitsWorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const totalSteps = CHIT_PROCESS_STEPS.length;
  const timerRef = useRef(null);

  // Auto-jump cycle every 2.8s
  useEffect(() => {
    if (!isAutoPlay || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleStepJump((activeStep + 1) % totalSteps);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay, isHovered, activeStep, totalSteps]);

  const handleStepJump = (targetIndex) => {
    if (targetIndex === activeStep) return;
    setIsJumping(true);
    setActiveStep(targetIndex);
    setTimeout(() => {
      setIsJumping(false);
    }, 600);
  };

  const scrollToSchemes = () => {
    const schemesElem = document.getElementById('schemes');
    if (schemesElem) {
      schemesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="how-it-works"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 65% 45% at 50% 35%, rgba(184, 142, 56, 0.08), transparent 70%),
            radial-gradient(circle at 15% 75%, rgba(15, 56, 44, 0.05), transparent 50%)
          `,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 35%, rgba(27, 83, 66, 0.35), transparent 75%),
            radial-gradient(circle at 15% 75%, rgba(184, 142, 56, 0.08), transparent 55%)
          `,
        }}
      />

      {/* Faint Background Watermark */}
      <div className="absolute top-[8%] -left-[3%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.025] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-forest dark:text-gold uppercase tracking-tight">
        PROCESS
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Heading with Glowing Badge & Controls */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-white/80 dark:bg-forest-dark/90 backdrop-blur-md shadow-xs animate-float-gentle">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-terracotta dark:text-gold-light font-telugu-body">
              చిట్ ప్రయాణం • STEP-BY-STEP CHIT CYCLE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
            How Chit Funds Work
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-charcoal/75 dark:text-ivory/75 leading-relaxed max-w-2xl mx-auto">
            A transparent, 6-step financial journey turning monthly savings into big milestones. Watch the gold coin leap across each stage!
          </p>

          {/* Quick Interactive Controls Strip */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 dark:bg-gold/10 border border-gold/30 text-xs font-semibold text-forest dark:text-gold-light">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ప్రస్తుత దశ (Active Step): <strong>0{activeStep + 1} / 06</strong></span>
            </div>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="px-3 py-1 rounded-full border border-gold/40 bg-white/80 dark:bg-forest-dark/80 hover:border-gold text-xs font-semibold flex items-center gap-1.5 text-forest dark:text-gold cursor-pointer transition-all hover:scale-105"
              title={isAutoPlay ? "ఆటో ప్లే ఆపండి (Pause)" : "ఆటో ప్లే ప్రారంభించండి (Resume)"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3 h-3 text-gold" />
                  <span className="hidden sm:inline">Pause Hop</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-gold" />
                  <span className="hidden sm:inline">Play Hop</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* =======================================================================
            DESKTOP: 6 STEPS GRID WITH JUMPING GOLD COIN (NO CONNECTING LINE)
            ======================================================================= */}
        <div className="hidden lg:block relative py-12 px-2">
          
          {/* 6 Step Interactive Nodes Grid */}
          <div className="grid grid-cols-6 gap-4 xl:gap-5 relative z-10">
            {CHIT_PROCESS_STEPS.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <div 
                  key={idx} 
                  onClick={() => handleStepJump(idx)}
                  className={`group relative flex flex-col items-center text-center p-4 xl:p-5 rounded-2xl transition-all duration-500 cursor-pointer border select-none ${
                    isActive 
                      ? 'bg-white dark:bg-[#071D16] border-2 border-gold shadow-heritage-lg dark:shadow-gold-soft -translate-y-3 scale-[1.04]' 
                      : 'bg-white/70 dark:bg-forest-dark/60 border-gold/25 hover:border-gold/60 hover:bg-white dark:hover:bg-forest-dark hover:-translate-y-1'
                  }`}
                >
                  
                  {/* DYNAMIC JUMPING 3D GOLD COIN (Appears and Bounces Atop Active Node) */}
                  {isActive && (
                    <div className="absolute -top-12 sm:-top-14 z-30 flex flex-col items-center pointer-events-none">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 transition-all duration-500 ${
                        isJumping 
                          ? 'animate-bounce scale-125 -translate-y-3' 
                          : 'animate-float-gentle scale-110'
                      }`}>
                        <JumpingGoldCoin />
                      </div>
                      <div className="w-4 h-1 bg-gold/40 rounded-full filter blur-[1px] mt-0.5" />
                    </div>
                  )}

                  {/* Node Milestone Circle Indicator */}
                  <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-xs font-black shadow-md transition-all duration-500 z-10 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] text-[#08221A] border-2 border-white scale-120 shadow-lg shadow-gold/40'
                      : 'border-2 border-gold/60 bg-ivory dark:bg-[#071D16] text-gold group-hover:bg-gold/15 group-hover:scale-110'
                  }`}>
                    {/* Pulsating Ping Wave on Active Node */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-60 pointer-events-none" />
                    )}
                    <span>{item.step}</span>
                  </div>

                  {/* Active Step Indicator Pill */}
                  {isActive && (
                    <div className="mt-2.5 px-2 py-0.5 rounded-full bg-gold/20 border border-gold/40 text-[0.62rem] font-bold text-forest dark:text-gold-light uppercase tracking-wider animate-fade-up-1">
                      ACTIVE STEP
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="space-y-1.5 px-1 mt-2.5">
                    <h3 className={`text-sm font-bold leading-snug transition-colors duration-300 ${
                      isActive ? 'text-forest dark:text-gold text-base' : 'text-forest dark:text-ivory group-hover:text-gold'
                    }`}>
                      {item.titleEnglish}
                    </h3>

                    <div className="text-[0.68rem] font-bold text-terracotta dark:text-gold-light/90 font-telugu-body">
                      {item.titleTelugu}
                    </div>

                    <p className="text-[0.72rem] text-charcoal/70 dark:text-ivory/70 leading-relaxed font-normal pt-1">
                      {item.descEnglish}
                    </p>
                  </div>

                  {/* Subtle Bottom Gold Corner Accents on Active Step */}
                  {isActive && (
                    <>
                      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-gold rounded-bl-sm" />
                      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-gold rounded-br-sm" />
                    </>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* =======================================================================
            MOBILE & TABLET: CLEAN VERTICAL STEP CARDS (NO CONNECTING LINE)
            ======================================================================= */}
        <div className="lg:hidden relative space-y-4 my-6">
          {CHIT_PROCESS_STEPS.map((item, idx) => {
            const isActive = idx === activeStep;
            return (
              <div 
                key={idx} 
                onClick={() => handleStepJump(idx)}
                className={`relative group space-y-1.5 p-4 rounded-xl transition-all duration-400 cursor-pointer border ${
                  isActive
                    ? 'bg-white dark:bg-[#071D16] border-2 border-gold shadow-lg'
                    : 'bg-white/60 dark:bg-forest-dark/50 border-gold/20 hover:border-gold/40'
                }`}
              >
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-gold text-[#08221A] border-2 border-white scale-110 shadow-md shadow-gold/50'
                        : 'border-2 border-gold/80 bg-ivory dark:bg-[#071D16] text-gold'
                    }`}>
                      {isActive ? (
                        <div className="w-5 h-5 animate-bounce">
                          <JumpingGoldCoin />
                        </div>
                      ) : (
                        <span>{item.step}</span>
                      )}
                    </div>

                    <h3 className={`text-base font-bold transition-colors ${
                      isActive ? 'text-forest dark:text-gold' : 'text-forest dark:text-ivory'
                    }`}>
                      {item.titleEnglish}
                    </h3>
                  </div>

                  <span className="text-[0.65rem] px-2.5 py-0.5 rounded-full bg-gold/15 text-forest dark:text-gold-light border border-gold/30 font-bold uppercase">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-terracotta dark:text-gold-light font-telugu-body pl-10">
                  {item.titleTelugu}
                </div>

                <p className="text-xs sm:text-sm text-charcoal/75 dark:text-ivory/75 leading-relaxed pl-10">
                  {item.descEnglish}
                </p>

              </div>
            );
          })}
        </div>

        {/* Standardized Bottom CTA */}
        <div className="text-center mt-10 sm:mt-16 space-y-3">
          <button
            onClick={scrollToSchemes}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-gold/25 hover:shadow-gold/45 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Explore All Chit Schemes</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <div className="text-xs text-charcoal/60 dark:text-ivory/60">
            Click on any milestone (01 - 06) above to see how the savings and live auction cycle flows.
          </div>
        </div>

      </div>

    </section>
  );
}
