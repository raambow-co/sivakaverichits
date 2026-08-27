import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../../constants/tokens';

/**
 * SECTION 02 — BRAND STORY (సంస్థ పరిచయం & విశ్వసనీయత)
 * 
 * CORE STATEMENT:
 *   "ఒక చిన్న అడుగు… ఒక పెద్ద ప్రయాణం."
 */

export function BrandStory({ onOpenInquiry }) {
  return (
    <section 
      id="brand-story"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 select-none"
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

      {/* Faint Telugu Background Watermark ("వారసత్వం" - Heritage) */}
      <div className="absolute top-[8%] -left-[4%] pointer-events-none select-none z-[1] opacity-[0.025] dark:opacity-[0.03] font-telugu-display font-black text-[clamp(6rem,14vw,18rem)] leading-none text-forest dark:text-gold">
        వారసత్వం
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3">
            <span className="w-5 h-[1px] bg-gold" />
            <span className="font-telugu-display text-sm font-bold text-terracotta dark:text-gold-light">
              ఆ పునాదిని ఎవరు నిర్మిస్తున్నారు?
            </span>
          </div>

          <h2 className="font-telugu-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
            ఒక చిన్న అడుగు… <br />
            <span className="text-gradient-gold">ఒక పెద్ద ప్రయాణం.</span>
          </h2>
        </div>

        {/* Editorial Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story Prose & Telugu Milestones */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            
            <div className="space-y-6 text-base sm:text-lg font-telugu-body text-charcoal/85 dark:text-ivory/85 leading-relaxed font-normal">
              <p>
                పొదుపు అంటే కేవలం మిగిలిన డబ్బును దాచుకోవడం కాదు. అది మన కుటుంబ భవిష్యత్తు కోసం తీసుకునే క్రమశిక్షణతో కూడిన ఒక సంకల్పం; పిల్లల ఉన్నత విద్య, సొంతింటి కల లేదా వ్యాపార విస్తరణకు దారితీసే ధైర్యం.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 dark:text-ivory/70 leading-relaxed">
                ఏలూరు మరియు పశ్చిమ గోదావరి ప్రజల ప్రతి చిన్న పొదుపు అడుగుకూ నమ్మకమైన తోడుగా నిలుస్తూ, వేలాది కుటుంబాల పెద్ద కలల ప్రయాణానికి చట్టబద్ధమైన ఆర్థిక పునాదిని నిర్మిస్తున్నాము.
              </p>
            </div>

            {/* Clean Telugu Milestones (పొదుపు → ప్రయాణం → విశ్వాసం) */}
            <div className="pt-4 border-t border-gold/30">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                
                <div className="space-y-1">
                  <span className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold font-bold block">
                    01
                  </span>
                  <span className="font-telugu-display text-base sm:text-lg font-bold text-forest dark:text-ivory block">
                    పొదుపు
                  </span>
                  <span className="font-telugu-body text-xs text-charcoal/60 dark:text-ivory/60 block">
                    చిన్న క్రమశిక్షణ
                  </span>
                </div>

                <div className="space-y-1 border-l border-gold/25 pl-4 sm:pl-6">
                  <span className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold font-bold block">
                    02
                  </span>
                  <span className="font-telugu-display text-base sm:text-lg font-bold text-forest dark:text-ivory block">
                    ప్రయాణం
                  </span>
                  <span className="font-telugu-body text-xs text-charcoal/60 dark:text-ivory/60 block">
                    నిరంతర వృద్ధి
                  </span>
                </div>

                <div className="space-y-1 border-l border-gold/25 pl-4 sm:pl-6">
                  <span className="font-english-display text-[0.68rem] tracking-[0.2em] text-gold font-bold block">
                    03
                  </span>
                  <span className="font-telugu-display text-base sm:text-lg font-bold text-forest dark:text-ivory block">
                    విశ్వాసం
                  </span>
                  <span className="font-telugu-body text-xs text-charcoal/60 dark:text-ivory/60 block">
                    సురక్షిత భవిష్యత్తు
                  </span>
                </div>

              </div>
            </div>

            {/* Standardized Primary Action */}
            <div className="pt-2 flex items-center gap-6 flex-wrap">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-[2px] font-telugu-body font-bold text-sm shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>మమ్మల్ని సంప్రదించండి</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="font-telugu-body text-xs text-charcoal/60 dark:text-ivory/60">
                ఏలూరు కార్యాలయంలో ప్రత్యక్ష సమాచారం లభించును
              </span>
            </div>

          </div>

          {/* Right Column: Clean Editorial Plaque */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-[2px] border border-gold/40 bg-white/70 dark:bg-forest-dark/70 backdrop-blur-sm shadow-xs space-y-4 select-text">
              
              <div className="flex items-center gap-3.5 border-b border-gold/20 pb-4">
                <div className="w-10 h-10 rounded-[2px] border border-gold bg-[#08221A] flex items-center justify-center text-gold font-telugu-display text-xl font-bold">
                  శ్రీ
                </div>
                <div>
                  <div className="font-telugu-display text-base font-bold text-forest dark:text-ivory">
                    {BRAND.nameTelugu}
                  </div>
                  <div className="font-english-display text-[0.65rem] tracking-[0.2em] text-gold-dark dark:text-gold uppercase">
                    {BRAND.nameEnglish}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 font-telugu-body text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-gold/15 pb-2">
                  <span className="text-charcoal/60 dark:text-ivory/60">ప్రాంతం:</span>
                  <span className="font-semibold text-forest dark:text-ivory">ఏలూరు, ఆంధ్రప్రదేశ్</span>
                </div>

                <div className="flex items-center justify-between border-b border-gold/15 pb-2">
                  <span className="text-charcoal/60 dark:text-ivory/60">చట్టబద్ధ రిజిస్ట్రేషన్:</span>
                  <span className="font-mono text-gold-dark dark:text-gold-light font-bold">ప్రభుత్వ నమోదిత చిట్ ఫండ్</span>
                </div>

                <div className="flex items-center justify-between border-b border-gold/15 pb-2">
                  <span className="text-charcoal/60 dark:text-ivory/60">సేవా విధానం:</span>
                  <span className="font-semibold text-forest dark:text-ivory">100% పారదర్శక వేలం</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-telugu-body text-xs text-charcoal/80 dark:text-ivory/80 italic">
                  "{BRAND.mottoTelugu}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
