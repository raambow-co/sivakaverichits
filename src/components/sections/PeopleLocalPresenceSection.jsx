import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 07 — OUR PEOPLE & REGIONAL PRESENCE
 * Rich Green Background Theme
 * Direct branch accessibility and local accountability in Eluru.
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
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#07241B] text-ivory transition-colors duration-500 border-t border-gold/25"
    >
      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.04] z-[1] mix-blend-screen" />

      {/* Rich Green Ambient Glows */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 75% 50%, rgba(27, 83, 66, 0.45), transparent 70%),
            radial-gradient(circle 500px at 15% 30%, rgba(184, 142, 56, 0.12), transparent 60%),
            radial-gradient(circle 400px at 50% 90%, rgba(10, 46, 35, 0.8), transparent 70%)
          `,
        }}
      />

      {/* Subtle Background Watermark */}
      <div className="absolute top-[12%] right-[2%] pointer-events-none select-none z-[1] opacity-[0.03] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-gold uppercase tracking-tight font-english-display">
        PRESENCE
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* MAIN ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: EDITORIAL STATEMENT & LOCAL IDENTITY */}
          <div
            className={`order-2 lg:order-1 lg:col-span-5 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gold-light font-english-display">
                Local Presence & Accountability
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ivory leading-[1.2] tracking-tight">
              Always close to you…<br />
              <span className="text-gradient-gold">Standing by your side.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-ivory/85 leading-relaxed font-normal">
              Rooted in Eluru, we build enduring relationships with our members, providing direct face-to-face guidance and complete peace of mind at every step.
            </p>

            {/* Local Identity Marker Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/20 border border-gold/30 backdrop-blur-xs space-y-3.5 text-xs sm:text-sm shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center text-gold-light flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-gold-light block text-sm sm:text-base">
                    {BRAND.regionEnglish}
                  </span>
                  <span className="text-ivory/80 block mt-0.5 text-xs sm:text-sm leading-relaxed">
                    {BRAND.addressEnglish}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2.5 border-t border-gold/20">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center text-gold-light flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-ivory block">
                    Working Hours:
                  </span>
                  <span className="text-ivory/80 block mt-0.5 text-xs sm:text-sm">
                    {BRAND.workingHoursEnglish}
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Paragraph on Local Grounding */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed border-l-2 border-gold/50 pl-4 py-1">
                With a dedicated management team and prompt customer support, we ensure your financial journey is handled with absolute responsibility.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE PHOTOGRAPHY AREA */}
          <div
            className={`order-1 lg:order-2 lg:col-span-7 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}
          >
            <div className="relative group">
              
              <div className="absolute -inset-2.5 sm:-inset-3.5 border border-gold/35 rounded-2xl pointer-events-none" />

              {/* Main Photograph Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-[#041B14] border-2 border-gold/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                
                <img
                  src="/assets/images/siva_kaveri_office.png"
                  alt="శివ కావేరి చిట్స్ ప్రైవేట్ లిమిటెడ్ — Registered Head Office Building in Eluru"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover object-center filter saturate-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02100B]/95 via-[#02100B]/25 to-transparent pointer-events-none" />

                {/* Live Real Office Tag */}
                <div className="absolute top-4 left-4 bg-[#041B14]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/50 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-gold-light font-english-display">
                    Registered Head Office Building • Eluru
                  </span>
                </div>

                {/* Human Details Plaque */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-ivory flex items-center justify-between bg-gradient-to-t from-[#02100B]/95 via-[#02100B]/80 to-transparent">
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-ivory font-telugu-display">
                      శివ కావేరి చిట్స్ ప్రైవేట్ లిమిటెడ్
                    </div>
                    <div className="text-[0.72rem] sm:text-xs text-gold-light uppercase tracking-wider font-semibold font-english-display mt-0.5">
                      Main Registered Office • Opp. SR Studio, Narasimharao Pet, Eluru - 534006
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-ivory/80 font-english-display">Ph: 08812-222229</div>
                    <div className="text-xs text-gold-light font-bold font-english-display">Mo: +91 99299 22469</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
