import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Building2 } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 07 — OUR PEOPLE & REGIONAL PRESENCE
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
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15"
    >
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

      {/* Subtle Background Watermark */}
      <div className="absolute top-[12%] right-[2%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.03] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-forest dark:text-gold uppercase tracking-tight">
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
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-gold" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-terracotta dark:text-gold-light">
                Local Presence & Accountability
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
              Always close to you…<br />
              <span className="text-gradient-gold">Standing by your side.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-charcoal/85 dark:text-ivory/85 leading-relaxed font-normal">
              Rooted in Eluru, we build enduring relationships with our members, providing direct face-to-face guidance and complete peace of mind at every step.
            </p>

            {/* Local Identity Marker Box */}
            <div className="pt-4 border-t border-gold/20 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rotate-45 border border-gold bg-gold/30 flex-shrink-0 mt-1.5" />
                <div>
                  <span className="font-bold text-forest dark:text-gold-light block text-sm sm:text-base">
                    {BRAND.regionEnglish}
                  </span>
                  <span className="text-charcoal/70 dark:text-ivory/70 block mt-0.5">
                    {BRAND.addressEnglish}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rotate-45 border border-gold bg-gold/30 flex-shrink-0 mt-1.5" />
                <div>
                  <span className="font-semibold text-forest dark:text-ivory block">
                    Working Hours:
                  </span>
                  <span className="text-charcoal/70 dark:text-ivory/70 block mt-0.5">
                    {BRAND.workingHoursEnglish}
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Paragraph on Local Grounding */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm text-charcoal/75 dark:text-ivory/75 leading-relaxed border-l-2 border-gold/40 pl-4 py-1">
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
              
              <div className="absolute -inset-2.5 sm:-inset-3.5 border border-gold/30 dark:border-gold/25 rounded-2xl pointer-events-none" />

              {/* Main Photograph Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-forest/5 dark:bg-forest-dark border border-gold/40 shadow-lg">
                
                <img
                  src="/assets/images/eluru_office_team.jpg"
                  alt="Siva Kaveri Chits — Local Office & Management Team in Eluru"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04130E]/80 via-transparent to-transparent pointer-events-none" />

                {/* Human Details Plaque */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-ivory flex items-center justify-between bg-gradient-to-t from-[#04130E]/95 to-transparent">
                  <div>
                    <div className="text-sm sm:text-base font-bold text-ivory">
                      Management Team & Registered Office
                    </div>
                    <div className="text-[0.68rem] text-gold-light uppercase tracking-wider font-semibold">
                      Eluru, West Godavari District, Andhra Pradesh
                    </div>
                  </div>

                  <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 bg-gold/20" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
