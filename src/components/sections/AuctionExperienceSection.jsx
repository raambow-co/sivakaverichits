import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 08 — AUCTION EXPERIENCE (వేలం అనుభవం & పారదర్శకత)
 * 
 * CORE IDEA:
 *   "వేలం… చిట్ ప్రయాణంలో ఒక ముఖ్యమైన అడుగు."
 *   Supporting: "వేలం ప్రక్రియకు సంబంధించిన వివరాలను స్పష్టంగా తెలుసుకోండి."
 * 
 * VISUAL CONCEPT:
 * - A single premium editorial auction information panel (NOT a dashboard or trading grid).
 * - Dominant central ₹10,00,000 value with quiet, refined supporting parameters.
 * - Thin horizontal progression timeline:
 *   సభ్యత్వం → నెలవారీ చెల్లింపు → వేలం → ప్రైజ్ మొత్తం
 * - Deep forest green folio background with subtle paper grain and a faint cyclical geometry.
 * - Single understated CTA: "వేలం వివరాలు చూడండి →".
 */

const AUCTION_TIMELINE = [
  "సభ్యత్వం",
  "నెలవారీ చెల్లింపు",
  "వేలం",
  "ప్రైజ్ మొత్తం",
];

export function AuctionExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="auctions"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20 select-none"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: DEEP CANVAS, GRAIN & RECURRING CHIT CYCLE
          ========================================================================= */}

      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      {/* Ambient Gold & Forest Radial Halos */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 70% 50%, rgba(184, 142, 56, 0.1), transparent 60%),
            radial-gradient(circle at 20% 40%, rgba(27, 83, 66, 0.4), transparent 55%),
            radial-gradient(ellipse at 50% 100%, rgba(184, 142, 56, 0.06), transparent 50%)
          `,
        }}
      />

      {/* Oversized Subtle Circular Geometry (Representing the recurring monthly chit cycle) */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-gold/10 pointer-events-none select-none z-[1]" />
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-gold/10 pointer-events-none select-none z-[1]" />

      {/* Very Faint Telugu Regional Watermark ("వేలం" - Auction) */}
      <div className="absolute top-[10%] -left-[2%] pointer-events-none select-none z-[1] opacity-[0.025] font-telugu-display font-black text-[clamp(7rem,16vw,20rem)] leading-none text-gold">
        వేలం
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto space-y-16 lg:space-y-20">
        
        {/* =======================================================================
            SECTION HEADER: EDITORIAL & CONTROLLED
            ======================================================================= */}
        <div
          className={`max-w-2xl space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-telugu-display text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight leading-[1.25]">
            వేలం… చిట్ ప్రయాణంలో<br />
            <span className="text-gradient-gold">ఒక ముఖ్యమైన అడుగు.</span>
          </h2>

          <p className="font-telugu-body text-base sm:text-lg text-ivory/80 leading-relaxed font-normal">
            వేలం ప్రక్రియకు సంబంధించిన వివరాలను స్పష్టంగా తెలుసుకోండి.
          </p>
        </div>

        {/* =======================================================================
            MAIN EDITORIAL AUCTION PANEL (Single Unified Composition)
            ======================================================================= */}
        <div
          className={`relative max-w-[960px] mx-auto bg-[#071D16] border border-gold/35 rounded-[2px] p-8 sm:p-12 lg:p-14 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-200 ease-out hover:border-gold/50 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Fine Double Hairline Gold Inner Border */}
          <div className="absolute inset-3 sm:inset-4 border border-gold/20 rounded-[1px] pointer-events-none" />

          {/* Top Row: Series & Status */}
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gold/20">
            <div>
              <div className="text-[0.75rem] font-telugu-body text-ivory/60">
                చిట్ సిరీస్
              </div>
              <div className="font-english-display text-base sm:text-lg font-bold text-gold tracking-wider mt-0.5">
                ABC — 2026
              </div>
            </div>

            <div className="flex items-center gap-2 sm:text-right">
              <span className="w-2 h-2 rotate-45 border border-gold bg-gold/50" />
              <div>
                <span className="text-[0.72rem] font-telugu-body text-ivory/60 block">
                  స్థితి
                </span>
                <span className="font-telugu-body text-sm font-semibold text-ivory">
                  వేలం పూర్తయింది
                </span>
              </div>
            </div>
          </div>

          {/* Center Dominant Block: Large ₹ Value */}
          <div className="relative py-10 sm:py-14 text-center space-y-2">
            <div className="text-xs sm:text-sm font-telugu-body text-ivory/60 uppercase tracking-widest">
              చిట్ విలువ
            </div>
            
            {/* The Largest Visual Centerpiece */}
            <div className="font-english-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-gradient-gold py-1 transition-transform duration-300 group-hover:scale-[1.01]">
              ₹10,00,000
            </div>

            <div className="text-xs sm:text-sm font-telugu-body text-ivory/70 pt-1">
              వేలం తేదీ: <span className="font-english-display font-medium text-gold-light ml-1">28 AUG 2026</span>
            </div>
          </div>

          {/* =====================================================================
              BOTTOM AUCTION TIMELINE PROGRESSION
              (సభ్యత్వం → నెలవారీ చెల్లింపు → వేలం → ప్రైజ్ మొత్తం)
             ===================================================================== */}
          <div className="relative pt-8 sm:pt-10 border-t border-gold/20">
            
            {/* Desktop Horizontal Timeline */}
            <div className="hidden sm:grid grid-cols-4 gap-4 relative">
              {/* Continuous Gold Connecting Line */}
              <div className="absolute top-2 left-6 right-6 h-[1px] bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative text-center space-y-2.5">
                  {/* Subtle Diamond Node */}
                  <div className="w-2 h-2 rotate-45 border border-gold bg-[#071D16] mx-auto shadow-xs" />
                  
                  {/* Step Title */}
                  <div className="font-telugu-display text-sm font-semibold text-ivory/90">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Sequence */}
            <div className="sm:hidden relative pl-6 space-y-5">
              <div className="absolute top-2 bottom-2 left-2 w-[1px] bg-gold/40" />
              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-3">
                  <div className="absolute -left-[20px] w-2 h-2 rotate-45 border border-gold bg-[#071D16]" />
                  <div className="font-telugu-display text-sm font-semibold text-ivory/90">
                    {step}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* =======================================================================
            SINGLE UNDERSTATED CTA
            ======================================================================= */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('schemes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 text-gold-light hover:text-ivory font-telugu-body font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1.5 transition-all duration-300 group cursor-pointer"
          >
            <span>వేలం వివరాలు చూడండి</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
