import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 05 — TRUST & TRANSPARENCY
 * Official regulatory disclosure and transparent documentation.
 */

const DOCUMENT_ITEMS = [
  "Pre-approved Registered Chit Agreements",
  "Audited Monthly Live Auction Records",
  "Complete Passbook & Dividend Statement Ledgers",
  "Statutory Security Bank Deposit Guarantees",
  "Standardized Surety & Disbursement Norms",
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
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-[#0A241C] text-ivory transition-colors duration-500 border-t border-gold/20"
    >
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

      {/* Subtle Background Watermark */}
      <div className="absolute top-[10%] -left-[2%] pointer-events-none select-none z-[1] opacity-[0.025] font-black text-[clamp(4rem,14vw,16rem)] leading-none text-gold uppercase tracking-tight">
        TRUST
      </div>

      {/* Subtle Top & Bottom Gold Line Tracery */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

      {/* MAIN EDITORIAL GRID */}
      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: STATEMENT & VERIFIED COMPLIANCE LIST */}
        <div
          className={`lg:col-span-6 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-light">
              Governance & Compliance
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ivory leading-[1.2] tracking-tight">
            Trust is not in words…<br />
            <span className="text-gradient-gold">It is proven through transparency.</span>
          </h2>

          {/* Clean English Compliance List */}
          <div className="pt-2 border-t border-gold/20 space-y-3">
            {DOCUMENT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3.5 py-2 border-b border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-2 h-2 rotate-45 border border-gold bg-gold/40 flex-shrink-0 group-hover:bg-gold transition-colors" />

                <span className="text-sm sm:text-base font-semibold text-ivory/95 group-hover:text-gold-light transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Single Understated CTA */}
          <div className="pt-3">
            <button
              onClick={() => {
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-gold-light hover:text-ivory font-semibold text-sm sm:text-base border-b border-gold/40 hover:border-gold pb-1.5 transition-all duration-300 group cursor-pointer"
            >
              <span>Learn More About Regulatory Protections</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: PURE TACTILE PHYSICAL DOCUMENT STACK VISUAL */}
        <div
          id="transparency-stack"
          className="lg:col-span-6 flex justify-center lg:justify-end relative py-6 sm:py-10"
        >
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] min-h-[420px] sm:min-h-[460px] flex items-center justify-center">
            
            {/* SHEET 03: BASE / REAR DOCUMENT */}
            <div
              className={`absolute w-[92%] sm:w-[94%] bg-[#F2EDE0] text-[#1E2623] rounded-2xl p-5 sm:p-6 border border-[#D5C6A9] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.45)] transition-all duration-1000 ease-out select-none ${
                isVisible ? 'opacity-75 translate-y-4 -rotate-3' : 'opacity-0 translate-y-12 -rotate-6'
              }`}
              style={{ top: '8%', left: '0%' }}
            >
              <div className="flex items-center justify-between border-b border-[#D5C6A9] pb-2.5 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C671C]">
                  Monthly Dividend & Passbook Ledger
                </span>
                <span className="w-2 h-2 rotate-45 border border-[#8C671C]/50" />
              </div>
              <div className="space-y-2.5 opacity-40">
                <div className="h-2 bg-[#D5C6A9] rounded w-full" />
                <div className="h-2 bg-[#D5C6A9] rounded w-5/6" />
                <div className="h-2 bg-[#D5C6A9] rounded w-4/6" />
              </div>
            </div>

            {/* SHEET 02: MIDDLE DOCUMENT */}
            <div
              className={`absolute w-[94%] sm:w-[96%] bg-[#FAF6EC] text-[#1E2623] rounded-2xl p-5 sm:p-6 border border-[#DFD3BA] shadow-[0_22px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-150 ease-out select-none ${
                isVisible ? 'opacity-90 -translate-y-2 rotate-2' : 'opacity-0 translate-y-10 rotate-4'
              }`}
              style={{ top: '4%', right: '0%' }}
            >
              <div className="flex items-center justify-between border-b border-[#DFD3BA] pb-2.5 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C671C]">
                  Certified Auction Minutes & Schedule
                </span>
                <span className="w-2 h-2 rotate-45 border border-[#8C671C]/50" />
              </div>
              <div className="space-y-2.5 opacity-50">
                <div className="h-2 bg-[#DFD3BA] rounded w-full" />
                <div className="h-2 bg-[#DFD3BA] rounded w-4/5" />
                <div className="h-2 bg-[#DFD3BA] rounded w-3/5" />
              </div>
            </div>

            {/* SHEET 01: FOREGROUND MASTER DOCUMENT */}
            <div
              className={`relative w-full bg-[#FCFBF8] text-[#1A221E] rounded-2xl p-6 sm:p-8 border border-[#D8C7A3] shadow-[0_28px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-300 ease-out select-none ${
                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-1'
              }`}
            >
              <div className="absolute inset-2 sm:inset-3 border border-gold/30 rounded-xl pointer-events-none" />

              {/* Document Header */}
              <div className="relative pb-4 mb-5 border-b border-[#E5DAC3] flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F382C] tracking-tight">
                    Official Chit Agreement
                  </h3>
                  <p className="text-[0.68rem] text-[#60706A] uppercase tracking-wider font-semibold">
                    Government of Andhra Pradesh Reg.
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-gold/60 bg-white p-0.5 flex items-center justify-center shadow-xs overflow-hidden flex-shrink-0">
                  <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Document Clean Tactile Placeholder Ledger Rules */}
              <div className="space-y-3.5">
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
              <div className="mt-6 pt-4 border-t border-[#E5DAC3] flex items-center justify-between text-[0.68rem] text-[#8C671C] font-semibold">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rotate-45 border border-gold/60 bg-gold/20" />
                  <span>Authorized Foreman Seal</span>
                </div>
                <div className="w-20 h-[1px] bg-gold/40" />
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
