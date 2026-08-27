import React, { useState, useEffect, useRef } from 'react';

/**
 * SECTION 07 — OUR PEOPLE & LOCAL PRESENCE (మా ప్రజలు & స్థానిక సాన్నిహిత్యం)
 * 
 * CORE IDEA:
 *   "మీకు చేరువగా… మీతో పాటు."
 *   Supporting: "ఎలూరు నుంచి మా సభ్యులతో నమ్మకమైన సంబంధాన్ని నిర్మిస్తూ, ప్రతి అడుగులో మీకు తోడుగా ఉండటమే మా లక్ష్యం."
 * 
 * Clean Minimalist Editorial Direction:
 * - NO English labels or micro-section tags.
 * - Pure Telugu typography and authentic regional office photography.
 * - Text-only location marker: "ఎలూరు, ఆంధ్రప్రదేశ్" (NO map pin icons).
 * - Human details plaque: "నిర్వాహక బృందం & కార్యాలయం".
 */

export function PeopleLocalPresenceSection() {
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
      id="our-people"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 dark:border-gold/15 select-none"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: TACTILE GRAIN & LOW-CONTRAST WATERMARK
          ========================================================================= */}

      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      {/* Soft Ambient Warm Light */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 75% 50%, rgba(184, 142, 56, 0.08), transparent 60%),
            radial-gradient(circle at 15% 30%, rgba(15, 56, 44, 0.05), transparent 50%)
          `,
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 75% 50%, rgba(27, 83, 66, 0.35), transparent 65%),
            radial-gradient(circle at 15% 30%, rgba(184, 142, 56, 0.07), transparent 55%)
          `,
        }}
      />

      {/* Very Faint Oversized Telugu Background Watermark ("సాన్నిహిత్యం" - Closeness / Presence) */}
      <div className="absolute top-[12%] right-[2%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.03] font-telugu-display font-black text-[clamp(7rem,18vw,22rem)] leading-none text-forest dark:text-gold">
        సాన్నిహిత్యం
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* =======================================================================
            MAIN ASYMMETRIC GRID: PHOTOGRAPHY (60-70%) × EDITORIAL TEXT (30-40%)
            ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ---------------------------------------------------------------------
              LEFT COLUMN: EDITORIAL STATEMENT & LOCAL IDENTITY (lg:col-span-5)
              (Mobile Order: Appears after Image via flex order)
             --------------------------------------------------------------------- */}
          <div
            className={`order-2 lg:order-1 lg:col-span-5 space-y-8 sm:space-y-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Telugu Display Statement */}
            <h2 className="font-telugu-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest dark:text-ivory leading-[1.25] tracking-tight">
              మీకు చేరువగా…<br />
              <span className="text-gradient-gold">మీతో పాటు.</span>
            </h2>

            {/* Concise Supporting Text */}
            <p className="font-telugu-body text-base sm:text-lg text-charcoal/85 dark:text-ivory/85 leading-relaxed font-normal">
              ఎలూరు నుంచి మా సభ్యులతో నమ్మకమైన సంబంధాన్ని నిర్మిస్తూ, ప్రతి అడుగులో మీకు తోడుగా ఉండటమే మా లక్ష్యం.
            </p>

            {/* Local Identity Marker (TEXT ONLY — NO MAP PIN ICONS) */}
            <div className="pt-6 border-t border-gold/20 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="w-2 h-2 rotate-45 border border-gold bg-gold/30 flex-shrink-0" />
                <div className="font-telugu-display text-lg sm:text-xl font-bold text-forest dark:text-gold-light">
                  ఎలూరు, ఆంధ్రప్రదేశ్
                </div>
              </div>
              <p className="pl-5 font-telugu-body text-sm text-charcoal/70 dark:text-ivory/70">
                మీకు చేరువగా ఉండే మా సేవ.
              </p>
            </div>

            {/* Secondary Editorial Paragraph on Local Grounding */}
            <div className="pt-2">
              <p className="font-telugu-body text-xs sm:text-sm text-charcoal/75 dark:text-ivory/75 leading-relaxed border-l-2 border-gold/40 pl-4 py-1">
                స్థానిక సమాజంతో మమేకమై, ప్రత్యక్ష సంభాషణ మరియు వ్యక్తిగత జవాబుదారీతనంతో ప్రతి సభ్యుని ఆర్థిక ప్రయాణాన్ని ముందుకు నడిపిస్తున్నాము.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN: LARGE EDITORIAL PHOTOGRAPHY AREA (lg:col-span-7)
              (Mobile Order: Appears first via order-1)
             --------------------------------------------------------------------- */}
          <div
            className={`order-1 lg:order-2 lg:col-span-7 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}
          >
            <div className="relative group">
              
              {/* Outer Subtle Gold Framing Edge */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 border border-gold/30 dark:border-gold/25 rounded-[2px] pointer-events-none" />

              {/* Main Photograph Frame */}
              <div className="relative overflow-hidden rounded-[2px] bg-forest/5 dark:bg-forest-dark border border-gold/40 shadow-heritage-lg">
                
                {/* Genuine Editorial Photography Asset */}
                <img
                  src="/assets/images/eluru_office_team.jpg"
                  alt="Siva Kaveri Chits — Local Office & Management Presence in Eluru"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />

                {/* Subtle Cinematic Warm Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04130E]/80 via-transparent to-transparent pointer-events-none" />

                {/* Human Details Plaque (Clean Telugu Identification) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-ivory flex items-center justify-between bg-gradient-to-t from-[#04130E]/90 to-transparent">
                  <div>
                    <div className="font-telugu-display text-base sm:text-lg font-bold text-ivory">
                      నిర్వాహక బృందం & కార్యాలయం
                    </div>
                  </div>

                  <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 bg-gold/20" />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Minimal Bottom Subtle Connector Rule */}
        <div className="flex items-center justify-center gap-4 opacity-40 pt-16 sm:pt-20">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <span className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

      </div>

    </section>
  );
}
