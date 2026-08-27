import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 04 — HOW THE CHIT WORKS (చిట్ ఎలా పనిచేస్తుంది?)
 * 
 * CORE STATEMENT:
 *   "చిట్ ఎలా పనిచేస్తుంది?"
 *   Supporting: "సులభమైన ప్రక్రియ. స్పష్టమైన ప్రతి అడుగు."
 */

const CHIT_PROCESS_STEPS = [
  {
    step: "01",
    titleTelugu: "పథకాన్ని ఎంచుకోండి",
    descTelugu: "మీ బడ్జెట్ మరియు ఆర్థిక లక్ష్యాలకు సరిపడే నెలవారీ చిట్ విలువను ఎంచుకోండి.",
  },
  {
    step: "02",
    titleTelugu: "సభ్యత్వం పొందండి",
    descTelugu: "ప్రాథమిక పత్రాలను సమర్పించి, అధికారిక గ్రూప్‌లో సులభంగా నమోదు చేసుకోండి.",
  },
  {
    step: "03",
    titleTelugu: "నెలవారీ చెల్లింపు",
    descTelugu: "ప్రతి నెలా డివిడెండ్ లాభం తగ్గింపుతో మిగిలిన అసలు వాయిదా మొత్తాన్ని చెల్లించండి.",
  },
  {
    step: "04",
    titleTelugu: "వేలం ప్రక్రియ",
    descTelugu: "అత్యవసర నిధులు అవసరమైనప్పుడు నెలవారీ పారదర్శక లైవ్ వేలంలో పాల్గొనండి.",
  },
  {
    step: "05",
    titleTelugu: "చిట్ మొత్తాన్ని పొందండి",
    descTelugu: "వేలంలో నిర్ణయమైన మొత్తాన్ని డాక్యుమెంటేషన్ పూర్తయిన తర్వాత సురక్షితంగా పొందండి.",
  },
  {
    step: "06",
    titleTelugu: "పథకం కొనసాగింపు",
    descTelugu: "వేలం తర్వాత మిగిలిన నెలవారీ వాయిదాలను క్రమం తప్పకుండా చెల్లిస్తూ ప్రయాణాన్ని పూర్తి చేయండి.",
  },
];

export function HowChitsWorkSection() {
  const scrollToSchemes = () => {
    const schemesElem = document.getElementById('schemes');
    if (schemesElem) {
      schemesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="how-it-works"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 select-none"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 65% 45% at 50% 35%, rgba(184, 142, 56, 0.07), transparent 70%),
            radial-gradient(circle at 15% 75%, rgba(15, 56, 44, 0.04), transparent 50%)
          `,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 35%, rgba(27, 83, 66, 0.30), transparent 75%),
            radial-gradient(circle at 15% 75%, rgba(184, 142, 56, 0.06), transparent 55%)
          `,
        }}
      />

      {/* Faint Telugu Watermark ("క్రమశిక్షణ" - Discipline) */}
      <div className="absolute top-[8%] -left-[5%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.025] font-telugu-display font-black text-[clamp(6rem,16vw,20rem)] leading-none text-forest dark:text-gold">
        క్రమశిక్షణ
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-16 sm:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-telugu-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
            చిట్ ఎలా పనిచేస్తుంది?
          </h2>
          <p className="font-telugu-body text-base sm:text-lg text-charcoal/70 dark:text-ivory/70 leading-relaxed">
            సులభమైన ప్రక్రియ. స్పష్టమైన ప్రతి అడుగు.
          </p>
        </div>

        {/* =======================================================================
            DESKTOP: CONTINUOUS HORIZONTAL GOLD TIMELINE (6 STEPS)
            ======================================================================= */}
        <div className="hidden lg:block relative py-8">
          
          {/* Continuous Gold Hairline Connector */}
          <div className="absolute top-[52px] left-[4%] right-[4%] h-[1px] bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 z-0" />

          {/* 6 Step Nodes */}
          <div className="grid grid-cols-6 gap-6 relative z-10">
            {CHIT_PROCESS_STEPS.map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center space-y-4">
                
                {/* Node Milestone Indicator */}
                <div className="w-10 h-10 rounded-full border border-gold/60 bg-ivory dark:bg-[#071D16] flex items-center justify-center text-gold font-english-display text-xs font-bold shadow-xs group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                  {item.step}
                </div>

                {/* Step Content */}
                <div className="space-y-2 px-1">
                  <h3 className="font-telugu-display text-base font-bold text-forest dark:text-ivory leading-snug group-hover:text-gold transition-colors duration-200">
                    {item.titleTelugu}
                  </h3>
                  <p className="font-telugu-body text-xs text-charcoal/70 dark:text-ivory/70 leading-relaxed font-normal">
                    {item.descTelugu}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* =======================================================================
            MOBILE & TABLET: PURPOSEFUL VERTICAL TIMELINE
            ======================================================================= */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 border-l border-gold/30 ml-3 sm:ml-4">
          {CHIT_PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className="relative group space-y-1.5">
              
              {/* Vertical Timeline Pip */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full border border-gold/70 bg-ivory dark:bg-[#071D16] flex items-center justify-center text-gold font-english-display text-[0.65rem] font-bold">
                {item.step}
              </div>

              <h3 className="font-telugu-display text-lg font-bold text-forest dark:text-ivory">
                {item.titleTelugu}
              </h3>

              <p className="font-telugu-body text-xs sm:text-sm text-charcoal/75 dark:text-ivory/75 leading-relaxed">
                {item.descTelugu}
              </p>

            </div>
          ))}
        </div>

        {/* Standardized Bottom CTA */}
        <div className="text-center mt-14 sm:mt-20">
          <button
            onClick={scrollToSchemes}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-[2px] font-telugu-body font-bold text-sm sm:text-base shadow-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>పథకాలను చూడండి</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>
  );
}
