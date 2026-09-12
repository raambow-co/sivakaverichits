import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 02 — BRAND STORY & INSTITUTIONAL FOUNDATION
 * Clean, standard English typography and high-trust financial presentation.
 */

export function BrandStory({ onOpenInquiry }) {
  return (
    <section 
      id="brand-story"
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(184, 142, 56, 0.07), transparent 45%),
            radial-gradient(circle at 90% 70%, rgba(15, 56, 44, 0.05), transparent 50%)
          `,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(27, 83, 66, 0.35), transparent 50%),
            radial-gradient(circle at 90% 70%, rgba(184, 142, 56, 0.08), transparent 55%)
          `,
        }}
      />

      {/* Subtle Background Typography Watermark */}
      <div className="absolute top-[8%] -left-[2%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.03] font-black text-[clamp(4rem,12vw,14rem)] leading-none text-forest dark:text-gold uppercase tracking-tight">
        HERITAGE
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Editorial Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Story Prose & English Milestones */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Section Heading */}
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2.5 sm:gap-3">
                <span className="w-5 sm:w-6 h-[1.5px] bg-gold" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-terracotta dark:text-gold-light">
                  Our Foundation & Heritage
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
                A small disciplined step… <br />
                <span className="text-gradient-gold">A major financial milestone.</span>
              </h2>
            </div>
            
            <div className="text-sm sm:text-base lg:text-lg text-charcoal/85 dark:text-ivory/85 leading-relaxed font-normal">
              <p>
                Savings is not merely setting aside leftover income. It is a structured commitment towards the long-term prosperity and security of your family — funding higher education, constructing a dream home, or fueling commercial business expansion.
              </p>
            </div>

            {/* Clean English Milestones (Disciplined Savings → Financial Growth → Total Trust) */}
            <div className="pt-4 border-t border-gold/30">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                
                <div className="space-y-1">
                  <span className="text-[0.65rem] sm:text-xs font-bold tracking-widest text-gold uppercase block">
                    01
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-forest dark:text-ivory block">
                    Disciplined Savings
                  </span>
                  <span className="text-[0.7rem] sm:text-xs text-charcoal/60 dark:text-ivory/60 block">
                    Monthly Habit & Growth
                  </span>
                </div>

                <div className="space-y-1 border-l border-gold/25 pl-3 sm:pl-6">
                  <span className="text-[0.65rem] sm:text-xs font-bold tracking-widest text-gold uppercase block">
                    02
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-forest dark:text-ivory block">
                    Structured Journey
                  </span>
                  <span className="text-[0.7rem] sm:text-xs text-charcoal/60 dark:text-ivory/60 block">
                    Flexible Borrowing
                  </span>
                </div>

                <div className="space-y-1 border-l border-gold/25 pl-3 sm:pl-6">
                  <span className="text-[0.65rem] sm:text-xs font-bold tracking-widest text-gold uppercase block">
                    03
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-forest dark:text-ivory block">
                    Unwavering Trust
                  </span>
                  <span className="text-[0.7rem] sm:text-xs text-charcoal/60 dark:text-ivory/60 block">
                    100% Regulated & Safe
                  </span>
                </div>

              </div>
            </div>

            {/* Standardized Primary Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-bold text-sm shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Get in Touch with Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-charcoal/60 dark:text-ivory/60 text-center sm:text-left">
                Direct in-person consultation at our Eluru office
              </span>
            </div>

          </div>

          {/* Right Column: Clean Editorial Plaque (Aligned Centrally to the Right) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 sm:p-7 rounded-2xl border-2 border-gold/40 bg-white/90 dark:bg-forest-dark/90 backdrop-blur-md shadow-xl space-y-4 relative overflow-hidden">
              
              {/* Subtle gold top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

              <div className="flex items-center gap-3.5 border-b border-gold/20 pb-4 pt-1">
                <div className="w-14 h-14 rounded-full border-2 border-gold bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
                  <img src={BRAND.logo} alt="Siva Kaveri Chits Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-forest dark:text-ivory tracking-tight">
                    {BRAND.nameEnglish}
                  </div>
                  <div className="text-[0.68rem] sm:text-[0.72rem] tracking-wider text-gold-dark dark:text-gold uppercase font-semibold">
                    ESTABLISHED {BRAND.establishedYear} • ELURU, AP
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-gold/15 pb-2.5">
                  <span className="text-charcoal/60 dark:text-ivory/60 font-medium">Head Office:</span>
                  <span className="font-semibold text-forest dark:text-ivory">Eluru, Andhra Pradesh</span>
                </div>

                <div className="flex items-center justify-between border-b border-gold/15 pb-2.5">
                  <span className="text-charcoal/60 dark:text-ivory/60 font-medium">Regulatory Status:</span>
                  <span className="text-gold-dark dark:text-gold-light font-bold">Chit Funds Act, 1982 Registered</span>
                </div>

                <div className="flex items-center justify-between border-b border-gold/15 pb-2.5">
                  <span className="text-charcoal/60 dark:text-ivory/60 font-medium">Service Standards:</span>
                  <span className="font-semibold text-forest dark:text-ivory">100% Transparent Live Auctions</span>
                </div>

                <div className="flex items-center justify-between border-b border-gold/15 pb-2.5">
                  <span className="text-charcoal/60 dark:text-ivory/60 font-medium">Security Guarantee:</span>
                  <span className="font-semibold text-forest dark:text-ivory">Bank-backed Statutory Deposits</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-charcoal/80 dark:text-ivory/80 italic font-medium leading-relaxed text-center">
                  "{BRAND.mottoEnglish}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
