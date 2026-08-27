import React, { useState, useEffect, useRef } from 'react';

/**
 * SECTION 06 — WHY CHOOSE US (ఎందుకు మమ్మల్ని ఎంచుకోవాలి?)
 * 
 * CORE IDEA:
 *   "ఎందుకు మమ్మల్ని ఎంచుకోవాలి?"
 *   Supporting: "మీ చిట్ ప్రయాణంలో నమ్మకం, స్పష్టత, వ్యక్తిగత శ్రద్ధ."
 * 
 * Clean Minimalist Editorial Direction:
 * - NO English subtitles, numbers, or section labels.
 * - Pure Telugu typography:
 *   1. నమ్మకం (Trust)
 *   2. పారదర్శకత (Transparency)
 *   3. వ్యక్తిగత శ్రద్ధ (Personal Attention)
 *   4. స్థానిక అనుభవం (Local Experience)
 * - Single-pass SVG circular journey line with calm interaction.
 */

const PILLARS = [
  {
    id: 'trust',
    titleTelugu: 'నమ్మకం',
    descTelugu: 'నమ్మకమైన సంబంధాలకు ప్రాధాన్యత.',
    position: 'top',
    isPrimary: true,
  },
  {
    id: 'transparency',
    titleTelugu: 'పారదర్శకత',
    descTelugu: 'ముఖ్యమైన వివరాలను స్పష్టంగా అందించడం.',
    position: 'left',
    isPrimary: false,
  },
  {
    id: 'care',
    titleTelugu: 'వ్యక్తిగత శ్రద్ధ',
    descTelugu: 'సభ్యుల అవసరాలను అర్థం చేసుకుని సహాయం.',
    position: 'right',
    isPrimary: false,
  },
  {
    id: 'local',
    titleTelugu: 'స్థానిక అనుభవం',
    descTelugu: 'మీకు చేరువగా ఉండే సేవ.',
    position: 'bottom',
    isPrimary: false,
  },
];

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
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

  const trustPillar = PILLARS.find((p) => p.id === 'trust');
  const transparencyPillar = PILLARS.find((p) => p.id === 'transparency');
  const carePillar = PILLARS.find((p) => p.id === 'care');
  const localPillar = PILLARS.find((p) => p.id === 'local');

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 dark:border-gold/15 select-none"
    >
      {/* =========================================================================
          MAXIMUM-BACKGROUND: TACTILE TEXTURE & QUIET FAINT REGIONAL WATERMARK
          ========================================================================= */}

      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      {/* Ambient Soft Gold/Emerald Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(184, 142, 56, 0.07), transparent 60%),
            radial-gradient(circle at 10% 20%, rgba(15, 56, 44, 0.04), transparent 50%)
          `,
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(27, 83, 66, 0.3), transparent 65%),
            radial-gradient(circle at 85% 80%, rgba(184, 142, 56, 0.08), transparent 55%)
          `,
        }}
      />

      {/* Very Faint Oversized Telugu Background Watermark ("విశ్వాసం" - Deep Trust) */}
      <div className="absolute top-[18%] left-[50%] -translate-x-1/2 pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.028] font-telugu-display font-black text-[clamp(8rem,20vw,24rem)] leading-none text-forest dark:text-gold text-center whitespace-nowrap">
        విశ్వాసం
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto space-y-16 lg:space-y-24">
        
        {/* =======================================================================
            SECTION HEADER: EDITORIAL & RESTRAINED
            ======================================================================= */}
        <div
          className={`max-w-2xl space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-telugu-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest dark:text-ivory tracking-tight leading-tight">
            ఎందుకు మమ్మల్ని ఎంచుకోవాలి?
          </h2>

          <p className="font-telugu-body text-base sm:text-lg text-charcoal/80 dark:text-ivory/80 leading-relaxed font-normal">
            మీ చిట్ ప్రయాణంలో నమ్మకం, స్పష్టత, వ్యక్తిగత శ్రద్ధ.
          </p>
        </div>

        {/* =======================================================================
            DESKTOP ORBITAL COMPOSITION (lg and above)
            ======================================================================= */}
        <div
          className={`hidden lg:block relative w-full max-w-[1100px] mx-auto h-[560px] transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Central Circular Geometric SVG Line Work */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-[480px] h-[480px]"
              viewBox="0 0 480 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Faint Guide Ring */}
              <circle
                cx="240"
                cy="240"
                r="200"
                stroke="currentColor"
                className="text-gold/20 dark:text-gold/20"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Main Animated Continuous Line */}
              <circle
                cx="240"
                cy="240"
                r="160"
                stroke="currentColor"
                className="text-gold/40 dark:text-gold/50"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: '1006',
                  strokeDashoffset: isVisible ? '0' : '1006',
                  transition: 'stroke-dashoffset 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Inner Decorative Fine Ring */}
              <circle
                cx="240"
                cy="240"
                r="100"
                stroke="currentColor"
                className="text-forest/10 dark:text-gold/15"
                strokeWidth="1"
              />

              {/* Central Core Monogram Halo */}
              <circle
                cx="240"
                cy="240"
                r="44"
                className="fill-white dark:fill-forest-dark stroke-gold/40"
                strokeWidth="1"
              />

              {/* 4 Directional Node Markers on Ring */}
              {/* Node 1: Top (Trust) */}
              <g className={`transition-all duration-300 ${hoveredId === 'trust' ? 'scale-125' : ''}`} style={{ transformOrigin: '240px 80px' }}>
                <circle cx="240" cy="80" r="5" className={hoveredId === 'trust' ? 'fill-gold stroke-white' : 'fill-white dark:fill-forest stroke-gold'} strokeWidth="1.5" />
                <circle cx="240" cy="80" r="10" className="stroke-gold/30" strokeWidth="0.75" />
              </g>

              {/* Node 2: Right (Care) */}
              <g className={`transition-all duration-300 ${hoveredId === 'care' ? 'scale-125' : ''}`} style={{ transformOrigin: '400px 240px' }}>
                <circle cx="400" cy="240" r="5" className={hoveredId === 'care' ? 'fill-gold stroke-white' : 'fill-white dark:fill-forest stroke-gold'} strokeWidth="1.5" />
                <circle cx="400" cy="240" r="10" className="stroke-gold/30" strokeWidth="0.75" />
              </g>

              {/* Node 3: Bottom (Local) */}
              <g className={`transition-all duration-300 ${hoveredId === 'local' ? 'scale-125' : ''}`} style={{ transformOrigin: '240px 400px' }}>
                <circle cx="240" cy="400" r="5" className={hoveredId === 'local' ? 'fill-gold stroke-white' : 'fill-white dark:fill-forest stroke-gold'} strokeWidth="1.5" />
                <circle cx="240" cy="400" r="10" className="stroke-gold/30" strokeWidth="0.75" />
              </g>

              {/* Node 4: Left (Transparency) */}
              <g className={`transition-all duration-300 ${hoveredId === 'transparency' ? 'scale-125' : ''}`} style={{ transformOrigin: '80px 240px' }}>
                <circle cx="80" cy="240" r="5" className={hoveredId === 'transparency' ? 'fill-gold stroke-white' : 'fill-white dark:fill-forest stroke-gold'} strokeWidth="1.5" />
                <circle cx="80" cy="240" r="10" className="stroke-gold/30" strokeWidth="0.75" />
              </g>
            </svg>

            {/* Central Quiet Telugu Emblem ("శ్రీ") */}
            <div className="absolute font-telugu-display text-2xl font-bold text-forest dark:text-gold-light select-none">
              శ్రీ
            </div>
          </div>

          {/* -------------------------------------------------------------------
              TOP PILLAR: నమ్మకం (The Strongest Primary Pillar)
             ------------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setHoveredId('trust')}
            onMouseLeave={() => setHoveredId(null)}
            className={`absolute top-0 left-1/2 -translate-x-1/2 text-center max-w-[340px] cursor-pointer transition-all duration-300 ${
              hoveredId === 'trust' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <h3 className="font-telugu-display text-2xl sm:text-3xl font-extrabold text-forest dark:text-ivory leading-tight mb-1.5 transition-colors">
              {trustPillar.titleTelugu}
            </h3>
            <p className="font-telugu-body text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed font-medium">
              {trustPillar.descTelugu}
            </p>
          </div>

          {/* -------------------------------------------------------------------
              LEFT PILLAR: పారదర్శకత
             ------------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setHoveredId('transparency')}
            onMouseLeave={() => setHoveredId(null)}
            className={`absolute top-1/2 left-0 -translate-y-1/2 text-right max-w-[280px] cursor-pointer transition-all duration-300 ${
              hoveredId === 'transparency' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-forest dark:text-ivory leading-tight mb-1.5">
              {transparencyPillar.titleTelugu}
            </h3>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
              {transparencyPillar.descTelugu}
            </p>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT PILLAR: వ్యక్తిగత శ్రద్ధ
             ------------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setHoveredId('care')}
            onMouseLeave={() => setHoveredId(null)}
            className={`absolute top-1/2 right-0 -translate-y-1/2 text-left max-w-[280px] cursor-pointer transition-all duration-300 ${
              hoveredId === 'care' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-forest dark:text-ivory leading-tight mb-1.5">
              {carePillar.titleTelugu}
            </h3>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
              {carePillar.descTelugu}
            </p>
          </div>

          {/* -------------------------------------------------------------------
              BOTTOM PILLAR: స్థానిక అనుభవం
             ------------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setHoveredId('local')}
            onMouseLeave={() => setHoveredId(null)}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center max-w-[320px] cursor-pointer transition-all duration-300 ${
              hoveredId === 'local' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-forest dark:text-ivory leading-tight mb-1.5">
              {localPillar.titleTelugu}
            </h3>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
              {localPillar.descTelugu}
            </p>
          </div>

        </div>

        {/* =======================================================================
            MOBILE & TABLET VERTICAL STACK (below lg)
            ======================================================================= */}
        <div className="lg:hidden space-y-8">
          
          {/* Subtle Central Emblem & Circular Visual for Mobile */}
          <div className="flex items-center justify-center py-2">
            <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-gold/40 bg-white/50 dark:bg-forest-dark/50 shadow-sm">
              <div className="w-20 h-20 rounded-full border border-dashed border-gold/30 flex items-center justify-center">
                <span className="font-telugu-display text-2xl font-bold text-forest dark:text-gold">
                  శ్రీ
                </span>
              </div>
            </div>
          </div>

          {/* Qualities Vertical Sequence */}
          <div className="space-y-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-5 sm:p-6 rounded-[2px] border transition-all duration-300 ${
                  pillar.isPrimary
                    ? 'bg-forest/5 dark:bg-forest-dark border-gold/40 shadow-xs'
                    : 'bg-white/40 dark:bg-forest/30 border-gold/20'
                }`}
              >
                <h3
                  className={`font-telugu-display font-bold text-forest dark:text-ivory mb-1 ${
                    pillar.isPrimary ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {pillar.titleTelugu}
                </h3>
                <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
                  {pillar.descTelugu}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Minimal Bottom Subtle Connector Rule */}
        <div className="flex items-center justify-center gap-4 opacity-40 pt-4">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <span className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

      </div>

    </section>
  );
}
