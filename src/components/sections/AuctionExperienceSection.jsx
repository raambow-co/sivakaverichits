import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 08 — AUCTION EXPERIENCE (100% MOBILE RESPONSIVE & POLISHED)
 * 
 * CORE IDEA:
 *   "వేలం… చిట్ ప్రయాణంలో ఒక ముఖ్యమైన అడుగు."
 *   Supporting: "వేలం ప్రక్రియకు సంబంధించిన వివరాలను స్పష్టంగా తెలుసుకోండి."
 */

const AUCTION_TIMELINE = [
  'సభ్యత్వం',
  'నెలవారీ చెల్లింపు',
  'వేలం',
  'ప్రైజ్ మొత్తం',
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
      className="relative w-full py-16 sm:py-28 lg:py-40 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20 select-none"
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

      {/* Faint Background Watermark ("వేలం" - Auction) */}
      <div className="absolute top-[8%] -right-[3%] pointer-events-none select-none z-[1] opacity-[0.025] font-telugu-display font-black text-[clamp(6rem,18vw,22rem)] leading-none text-gold">
        వేలం
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto space-y-10 sm:space-y-16">
        
        {/* Section Heading */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-telugu-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.25] tracking-tight">
            వేలం… <br />
            <span className="text-gradient-gold">చిట్ ప్రయాణంలో ఒక ముఖ్యమైన అడుగు.</span>
          </h2>

          <p className="font-telugu-body text-sm sm:text-base lg:text-lg text-ivory/80 leading-relaxed max-w-xl mx-auto px-2">
            వేలం ప్రక్రియకు సంబంధించిన వివరాలను స్పష్టంగా తెలుసుకోండి.
          </p>
        </div>

        {/* Main Editorial Auction Panel */}
        <div
          className={`relative max-w-[960px] mx-auto bg-[#071D16] border border-gold/35 rounded-[2px] p-5 sm:p-12 lg:p-14 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-200 ease-out hover:border-gold/50 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Inner Border */}
          <div className="absolute inset-2 sm:inset-4 border border-gold/20 rounded-[1px] pointer-events-none" />

          {/* Top Row: Series & Status */}
          <div className="relative flex items-center justify-between gap-2 pb-5 sm:pb-8 border-b border-gold/20">
            <div>
              <div className="text-[0.7rem] sm:text-[0.75rem] font-telugu-body text-ivory/60">
                చిట్ సిరీస్
              </div>
              <div className="font-english-display text-sm sm:text-lg font-bold text-gold tracking-wider mt-0.5">
                ABC — 2026
              </div>
            </div>

            <div className="flex items-center gap-2 text-right">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold bg-gold/50" />
              <div>
                <span className="text-[0.68rem] sm:text-[0.72rem] font-telugu-body text-ivory/60 block">
                  స్థితి
                </span>
                <span className="font-telugu-body text-xs sm:text-sm font-semibold text-ivory">
                  వేలం పూర్తయింది
                </span>
              </div>
            </div>
          </div>

          {/* Center Block: Dominant ₹ Value (Responsive Scaling) */}
          <div className="relative py-6 sm:py-14 text-center space-y-1 sm:space-y-2">
            <div className="text-[0.7rem] sm:text-sm font-telugu-body text-ivory/60 uppercase tracking-widest">
              చిట్ విలువ
            </div>
            
            <div className="font-english-display text-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-gradient-gold py-1 transition-transform duration-300 group-hover:scale-[1.01]">
              ₹10,00,000
            </div>

            <div className="text-[0.72rem] sm:text-sm font-telugu-body text-ivory/70 pt-0.5 sm:pt-1">
              వేలం తేదీ: <span className="font-english-display font-medium text-gold-light ml-1">28 AUG 2026</span>
            </div>
          </div>

          {/* Bottom Timeline Progression */}
          <div className="relative pt-5 sm:pt-10 border-t border-gold/20">
            
            {/* Desktop Timeline */}
            <div className="hidden sm:grid grid-cols-4 gap-4 relative">
              <div className="absolute top-2 left-6 right-6 h-[1px] bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative text-center space-y-2.5">
                  <div className="w-2 h-2 rotate-45 border border-gold bg-[#071D16] mx-auto shadow-xs" />
                  <div className="font-telugu-display text-sm font-semibold text-ivory/90">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Sequence */}
            <div className="sm:hidden relative pl-5 space-y-3.5">
              <div className="absolute top-1.5 bottom-1.5 left-1.5 w-[1px] bg-gold/40" />
              {AUCTION_TIMELINE.map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-2.5">
                  <div className="absolute -left-[16px] w-1.5 h-1.5 rotate-45 border border-gold bg-[#071D16]" />
                  <div className="font-telugu-display text-xs font-semibold text-ivory/90">
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
            className="inline-flex items-center gap-2 text-gold-light hover:text-ivory font-telugu-body font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1 transition-all duration-300 group cursor-pointer"
          >
            <span>వేలం వివరాలు చూడండి</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>
  );
}
