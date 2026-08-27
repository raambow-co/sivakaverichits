import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 05 — TRUST & TRANSPARENCY (నమ్మకం & పారదర్శకత)
 * 
 * CORE IDEA:
 *   "నమ్మకం మాటల్లో కాదు… పారదర్శకతలో కనిపిస్తుంది."
 *   (Trust is not in words… it is seen in transparency.)
 * 
 * Supporting Statement:
 *   "మీ చిట్ ప్రయాణానికి సంబంధించిన ముఖ్యమైన వివరాలు మీకు స్పష్టంగా అందుబాటులో ఉండాలి."
 * 
 * Clean Minimalist Editorial Direction:
 * - NO English subtitles or artificial placeholder text.
 * - Pure Telugu typography: "చిట్ వివరాలు", "వేలం సమాచారం", "చెల్లింపు వివరాలు", "నిబంధనలు & షరతులు".
 * - Physical tactile document folio with abstract paper depth, clean ledger lines, and zero fabricated codes.
 */

const DOCUMENT_ITEMS = [
  "చిట్ వివరాలు",
  "వేలం సమాచారం",
  "చెల్లింపు వివరాలు",
  "నిబంధనలు & షరతులు",
];

export function TrustTransparencySection() {
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
      id="transparency"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20 select-none"
    >
      {/* =========================================================================
          BACKGROUND ARCHITECTURE: DEEP FOREST FOLIO & TACTILE PAPER GRAIN
          ========================================================================= */}

      {/* Handcrafted Paper Grain Overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045] z-[1] mix-blend-screen" />

      {/* Soft Ambient Gold & Emerald Radial Halos */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 75% 45%, rgba(184, 142, 56, 0.12), transparent 55%),
            radial-gradient(circle at 20% 80%, rgba(27, 83, 66, 0.4), transparent 60%),
            radial-gradient(ellipse at 50% 0%, rgba(184, 142, 56, 0.08), transparent 50%)
          `,
        }}
      />

      {/* Very Faint Telugu Regional Watermark ("పారదర్శకత" - Transparency) */}
      <div className="absolute top-[10%] -left-[3%] pointer-events-none select-none z-[1] opacity-[0.025] font-telugu-display font-black text-[clamp(6rem,15vw,19rem)] leading-none text-gold">
        పారదర్శకత
      </div>

      {/* Subtle Top & Bottom Gold Line Tracery */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

      {/* =========================================================================
          MAIN EDITORIAL GRID
          ========================================================================= */}
      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* =======================================================================
            LEFT COLUMN: STATEMENT, SUPPORTING TEXT & CLEAN MINIMAL LIST
            ======================================================================= */}
        <div
          className={`lg:col-span-6 space-y-8 sm:space-y-10 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Core Statement Heading (Telugu Display) */}
          <h2 className="font-telugu-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-ivory leading-[1.25] tracking-tight">
            నమ్మకం మాటల్లో కాదు…<br />
            <span className="text-gradient-gold">పారదర్శకతలో కనిపిస్తుంది.</span>
          </h2>

          {/* Concise Supporting Text */}
          <p className="font-telugu-body text-base sm:text-lg text-ivory/80 leading-relaxed max-w-xl font-normal">
            మీ చిట్ ప్రయాణానికి సంబంధించిన ముఖ్యమైన వివరాలు మీకు స్పష్టంగా అందుబాటులో ఉండాలి.
          </p>

          {/* Minimal Clean Text List (NO ICONS, NO ENGLISH SUBTITLES — Pure Clean Telugu) */}
          <div className="pt-2 sm:pt-4 border-t border-gold/15 space-y-4">
            {DOCUMENT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 py-2 border-b border-gold/10 hover:border-gold/30 transition-colors"
              >
                {/* Tiny refined gold geometric dot */}
                <div className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/40 flex-shrink-0 group-hover:bg-gold transition-colors" />

                <span className="font-telugu-display text-lg sm:text-xl font-semibold text-ivory/95 group-hover:text-gold-light transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Single Understated CTA */}
          <div className="pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('transparency-stack');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-gold-light hover:text-ivory font-telugu-body font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1.5 transition-all duration-300 group cursor-pointer"
            >
              <span>వివరాలు & పత్రాలు చూడండి</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* =======================================================================
            RIGHT COLUMN: PURE TACTILE PHYSICAL DOCUMENT STACK VISUAL
            ======================================================================= */}
        <div
          id="transparency-stack"
          className="lg:col-span-6 flex justify-center lg:justify-end relative py-8 sm:py-12"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] min-h-[460px] sm:min-h-[500px] flex items-center justify-center">
            
            {/* -------------------------------------------------------------------
                SHEET 03: BASE / REAR DOCUMENT (Clean Abstract Paper)
               ------------------------------------------------------------------- */}
            <div
              className={`absolute w-[92%] sm:w-[94%] bg-[#F2EDE0] text-[#1E2623] rounded-[2px] p-6 sm:p-7 border border-[#D5C6A9] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.45)] transition-all duration-1000 ease-out select-none ${
                isVisible ? 'opacity-75 translate-y-4 -rotate-3' : 'opacity-0 translate-y-12 -rotate-6'
              }`}
              style={{ top: '8%', left: '0%' }}
            >
              <div className="flex items-center justify-between border-b border-[#D5C6A9] pb-3 mb-5">
                <span className="font-telugu-display text-sm font-semibold text-[#8C671C]">
                  చెల్లింపు వివరాలు
                </span>
                <span className="w-2 h-2 rotate-45 border border-[#8C671C]/50" />
              </div>
              <div className="space-y-3 opacity-40">
                <div className="h-2 bg-[#D5C6A9] rounded w-full" />
                <div className="h-2 bg-[#D5C6A9] rounded w-5/6" />
                <div className="h-2 bg-[#D5C6A9] rounded w-4/6" />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                SHEET 02: MIDDLE DOCUMENT (Clean Abstract Paper)
               ------------------------------------------------------------------- */}
            <div
              className={`absolute w-[94%] sm:w-[96%] bg-[#FAF6EC] text-[#1E2623] rounded-[2px] p-6 sm:p-7 border border-[#DFD3BA] shadow-[0_22px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-150 ease-out select-none ${
                isVisible ? 'opacity-90 -translate-y-2 rotate-2' : 'opacity-0 translate-y-10 rotate-4'
              }`}
              style={{ top: '4%', right: '0%' }}
            >
              <div className="flex items-center justify-between border-b border-[#DFD3BA] pb-3 mb-5">
                <span className="font-telugu-display text-sm font-semibold text-[#8C671C]">
                  వేలం సమాచారం
                </span>
                <span className="w-2 h-2 rotate-45 border border-[#8C671C]/50" />
              </div>
              <div className="space-y-3 opacity-50">
                <div className="h-2 bg-[#DFD3BA] rounded w-full" />
                <div className="h-2 bg-[#DFD3BA] rounded w-4/5" />
                <div className="h-2 bg-[#DFD3BA] rounded w-3/5" />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                SHEET 01: FOREGROUND MASTER DOCUMENT (Clean Archival Paper)
               ------------------------------------------------------------------- */}
            <div
              className={`relative w-full bg-[#FCFBF8] text-[#1A221E] rounded-[2px] p-8 sm:p-10 border border-[#D8C7A3] shadow-[0_28px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-300 ease-out select-none ${
                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-1'
              }`}
            >
              {/* Fine Double Gold Hairline Border Frame */}
              <div className="absolute inset-2.5 sm:inset-3 border border-gold/30 rounded-[1px] pointer-events-none" />

              {/* Document Header */}
              <div className="relative pb-5 mb-6 border-b border-[#E5DAC3] flex items-center justify-between">
                <div>
                  <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-[#0F382C]">
                    చిట్ ఒప్పందం
                  </h3>
                </div>

                {/* Delicate Monogram Stamp Watermark */}
                <div className="w-10 h-10 rounded-[1px] border border-gold/50 bg-[#F4EEDF] flex items-center justify-center text-gold-dark font-telugu-display text-sm font-bold shadow-xs">
                  శ్రీ
                </div>
              </div>

              {/* Document Clean Tactile Placeholder Ledger Rules (Zero Fake Text) */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-2.5 bg-[#E8DEC8]/80 rounded-sm w-full" />
                  <div className="h-2.5 bg-[#E8DEC8]/60 rounded-sm w-5/6" />
                </div>

                <div className="pt-2 border-t border-[#EFE8D6] space-y-2">
                  <div className="h-2 bg-[#E8DEC8]/70 rounded-sm w-full" />
                  <div className="h-2 bg-[#E8DEC8]/50 rounded-sm w-4/5" />
                  <div className="h-2 bg-[#E8DEC8]/40 rounded-sm w-3/5" />
                </div>

                <div className="pt-2 border-t border-[#EFE8D6] space-y-2">
                  <div className="h-2 bg-[#E8DEC8]/60 rounded-sm w-11/12" />
                  <div className="h-2 bg-[#E8DEC8]/40 rounded-sm w-2/3" />
                </div>
              </div>

              {/* Minimal Seal & Signature Line */}
              <div className="mt-8 pt-6 border-t border-[#E5DAC3] flex items-center justify-between">
                <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 bg-gold/20" />
                <div className="w-24 h-[1px] bg-gold/40" />
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
