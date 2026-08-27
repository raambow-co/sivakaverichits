import React from 'react';
import { CHIT_SCHEMES } from '../../constants/tokens';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 03 — CHIT PLANS (ప్రణాళికలు)
 * 
 * CORE STATEMENT:
 *   "మీకు సరిపోయే చిట్ ఏది?"
 *   Supporting: "మీ అవసరానికి, మీ లక్ష్యానికి అనుగుణంగా సరైన పథకాన్ని ఎంచుకోండి."
 */

export function ChitPlansSection({ onSelectSchemeForInquiry }) {
  const displayPlans = CHIT_SCHEMES.slice(1, 5); // ₹1L, ₹2.5L, ₹5L, ₹10L

  return (
    <section 
      id="schemes"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 select-none"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 30%, rgba(184, 142, 56, 0.08), transparent 70%),
            radial-gradient(circle at 85% 85%, rgba(15, 56, 44, 0.04), transparent 50%)
          `,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 50% 30%, rgba(27, 83, 66, 0.35), transparent 75%),
            radial-gradient(circle at 85% 85%, rgba(184, 142, 56, 0.07), transparent 55%)
          `,
        }}
      />

      {/* Low-Contrast Telugu Watermark ("సమృద్ధి" - Prosperity) */}
      <div className="absolute top-[12%] -right-[5%] pointer-events-none select-none z-[1] opacity-[0.025] dark:opacity-[0.03] font-telugu-display font-black text-[clamp(6rem,16vw,20rem)] leading-none text-gold">
        సమృద్ధి
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-14 sm:mb-20 text-center max-w-2xl mx-auto">
          <h2 className="font-telugu-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
            మీకు సరిపోయే చిట్ ఏది?
          </h2>
          <p className="font-telugu-body text-base sm:text-lg text-charcoal/70 dark:text-ivory/70 leading-relaxed">
            మీ అవసరానికి, మీ లక్ష్యానికి అనుగుణంగా సరైన పథకాన్ని ఎంచుకోండి.
          </p>
        </div>

        {/* Editorial Plan Rows */}
        <div className="space-y-4 sm:space-y-5">
          {displayPlans.map((plan, idx) => (
            <div
              key={plan.id || idx}
              onClick={() => onSelectSchemeForInquiry && onSelectSchemeForInquiry(plan)}
              className="group relative p-6 sm:p-8 lg:p-10 rounded-[2px] border border-gold/30 dark:border-gold/25 bg-white/60 dark:bg-forest-dark/60 hover:bg-white/95 dark:hover:bg-forest-dark/95 backdrop-blur-xs transition-all duration-300 hover:border-gold shadow-xs hover:shadow-heritage-sm cursor-pointer"
            >
              {/* Left Accent Hairline on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* 1. Plan Name & Purpose (4 cols) */}
                <div className="sm:col-span-4 space-y-1">
                  <span className="font-english-display text-xs text-gold font-bold block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-forest dark:text-ivory group-hover:text-gold transition-colors duration-200">
                    {plan.nameTelugu}
                  </h3>
                  <span className="font-telugu-body text-xs text-charcoal/60 dark:text-ivory/60 block">
                    {plan.categoryTelugu}
                  </span>
                </div>

                {/* 2. Dominant ₹ Value (4 cols) */}
                <div className="sm:col-span-4 flex flex-col sm:items-center text-left sm:text-center space-y-0.5">
                  <span className="font-english-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-forest dark:text-ivory tracking-tight leading-none group-hover:scale-[1.02] transition-transform duration-300">
                    {plan.formattedValue}
                  </span>
                  <span className="font-telugu-body text-xs text-charcoal/50 dark:text-ivory/50">
                    చిట్ విలువ
                  </span>
                </div>

                {/* 3. Monthly & Tenure (3 cols) */}
                <div className="sm:col-span-3 flex flex-row sm:flex-col justify-between sm:justify-center gap-4 sm:gap-1 text-xs font-telugu-body border-t sm:border-t-0 border-gray-100 dark:border-forest pt-3 sm:pt-0">
                  <div>
                    <span className="text-charcoal/50 dark:text-ivory/50 block">నెలవారీ చెల్లింపు:</span>
                    <span className="font-bold text-forest dark:text-gold text-sm sm:text-base font-mono">
                      {plan.formattedMonthly.split('/')[0]}
                    </span>
                  </div>
                  <div>
                    <span className="text-charcoal/50 dark:text-ivory/50 block">కాలపరిమితి:</span>
                    <span className="font-semibold text-charcoal/80 dark:text-ivory/80">
                      {plan.tenureMonths} నెలలు
                    </span>
                  </div>
                </div>

                {/* 4. Details Action (1 col) */}
                <div className="sm:col-span-1 flex items-center justify-end">
                  <div className="inline-flex items-center gap-1 font-telugu-body font-bold text-xs sm:text-sm text-forest dark:text-gold group-hover:text-gold-light transition-colors">
                    <span className="hidden lg:inline">వివరాలు</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-gold" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Standardized Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => onSelectSchemeForInquiry && onSelectSchemeForInquiry(CHIT_SCHEMES[0])}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-[2px] font-telugu-body font-bold text-sm sm:text-base shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>అన్ని పథకాలు చూడండి</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>
  );
}
