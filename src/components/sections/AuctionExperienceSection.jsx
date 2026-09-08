import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Gavel, Calendar, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 08 — AUCTION EXPERIENCE
 * Clear, transparent explanation of monthly live open auctions.
 */

const AUCTION_TIMELINE = [
  '1. Group Allocation',
  '2. Monthly Installment',
  '3. Open Live Bid',
  '4. Prize Disbursement',
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
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184, 142, 56, 0.14), transparent 65%),
            radial-gradient(circle at 10% 20%, rgba(27, 83, 66, 0.4), transparent 55%),
            radial-gradient(circle at 90% 80%, rgba(27, 83, 66, 0.35), transparent 50%)
          `,
        }}
      />

      {/* Faint Background Watermark */}
      <div className="absolute top-[8%] -right-[2%] pointer-events-none select-none z-[1] opacity-[0.025] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-gold uppercase tracking-tight">
        AUCTION
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto space-y-10 sm:space-y-14">
        
        {/* Section Heading */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-5 h-[1.5px] bg-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-light">
              Open & Fair Bidding
            </span>
            <span className="w-5 h-[1.5px] bg-gold" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ivory leading-[1.2] tracking-tight">
            The Live Auction Experience… <br />
            <span className="text-gradient-gold">A key milestone in your savings cycle.</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-ivory/80 leading-relaxed max-w-xl mx-auto px-2">
            Understand the fair, open, and legally compliant monthly auction process conducted under full member oversight.
          </p>
        </div>

        {/* Main Editorial Auction Panel */}
        <div
          className={`relative max-w-[960px] mx-auto bg-[#071D16] border border-gold/35 rounded-3xl p-5 sm:p-10 lg:p-12 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-200 ease-out hover:border-gold/50 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Inner Border */}
          <div className="absolute inset-2 sm:inset-3 border border-gold/20 rounded-2xl pointer-events-none" />

          {/* Top Row: Series & Live Status */}
          <div className="relative flex items-center justify-between gap-2 pb-4 sm:pb-6 border-b border-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/60 bg-white p-0.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-[0.68rem] sm:text-xs text-ivory/60 uppercase tracking-wider font-semibold">
                  Chit Group Reference
                </div>
                <div className="text-sm sm:text-lg font-bold text-gold tracking-wider mt-0.5 flex items-center gap-2">
                  <span>SKC — SERIES 2026</span>
                  <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-gold/20 text-gold-light font-english-display border border-gold/30">
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-right">
              {/* Radar Wave Live Indicator */}
              <div className="relative flex h-3 w-3">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm" />
              </div>

              <div>
                <span className="text-[0.68rem] text-ivory/60 block uppercase tracking-wider">
                  Auction Status
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400">
                  Open & Verified
                </span>
              </div>
            </div>
          </div>

          {/* Center Block: Dominant ₹ Value with Shimmer & Floating Accents */}
          <div className="relative py-6 sm:py-10 text-center space-y-1 sm:space-y-2">
            <div className="text-xs sm:text-sm text-ivory/60 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              <span className="w-4 h-[1px] bg-gold/40" />
              <span>Example Scheme Value</span>
              <span className="w-4 h-[1px] bg-gold/40" />
            </div>
            
            <div className="text-3xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-gradient-gold py-1">
              ₹10,00,000
            </div>

            <div className="text-xs sm:text-sm text-ivory/80 pt-0.5 flex items-center justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-light font-medium text-xs">
                Monthly Auction Date: <strong className="text-white ml-1">28th of Every Month</strong>
              </span>
            </div>
          </div>

          {/* Bottom Timeline Progression with Glowing Nodes */}
          <div className="relative pt-5 sm:pt-8 border-t border-gold/20">
            
            {/* Desktop Timeline */}
            <div className="hidden sm:grid grid-cols-4 gap-4 relative">
              <div className="absolute top-2 left-6 right-6 h-[1.5px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 shadow-[0_0_8px_rgba(212,175,87,0.5)]" />

              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative text-center space-y-2 group/step cursor-default">
                  <div className="w-3 h-3 rotate-45 border-2 border-gold bg-[#071D16] mx-auto shadow-md transition-transform duration-300 group-hover/step:scale-125 group-hover/step:bg-gold" />
                  <div className="text-xs sm:text-sm font-bold text-ivory/90 transition-colors duration-200 group-hover/step:text-gold">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Sequence */}
            <div className="sm:hidden relative pl-5 space-y-3">
              <div className="absolute top-1.5 bottom-1.5 left-1.5 w-[1.5px] bg-gradient-to-b from-gold via-gold-light to-gold" />
              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-2.5">
                  <div className="absolute -left-[17px] w-2 h-2 rotate-45 border border-gold bg-gold shadow-sm" />
                  <div className="text-xs font-semibold text-ivory/90">
                    {step}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Understated CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              const el = document.getElementById('faq');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-gold-light hover:text-ivory font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1 transition-all duration-300 group cursor-pointer"
          >
            <span>Learn More About Auction Rules & Surety</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>
  );
}
