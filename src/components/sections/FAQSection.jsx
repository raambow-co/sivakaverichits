import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SECTION 09 — FAQ (తరచుగా అడిగే ప్రశ్నలు & సమాధానాలు)
 * 
 * CORE STATEMENT:
 *   "మీకు ఉన్న ప్రశ్నలకు… మా సమాధానాలు."
 *   Supporting: "చిట్లో చేరే ముందు తెలుసుకోవాల్సిన ముఖ్యమైన విషయాలు."
 */

const FAQ_ITEMS = [
  {
    id: '01',
    question: 'చిట్లో ఎలా చేరాలి?',
    answer:
      'మీకు నచ్చిన చిట్ పథకాన్ని ఎంచుకుని, ప్రాథమిక గుర్తింపు పత్రాలు సమర్పించడం ద్వారా సులభంగా సభ్యత్వం పొందవచ్చు. మా ప్రతినిధులు ప్రతి అడుగులో మీకు మార్గదర్శనం చేస్తారు.',
  },
  {
    id: '02',
    question: 'నెలవారీ చెల్లింపు ఎలా ఉంటుంది?',
    answer:
      'ప్రతి నెలా నిర్ణీత తేదీలోపు వాయిదా చెల్లించాలి. వేలంలో లభించిన డివిడెండ్ లాభం మీ నెలవారీ చెల్లింపులో నేరుగా తగ్గింపుగా లభిస్తుంది.',
  },
  {
    id: '03',
    question: 'వేలం ప్రక్రియ ఎలా జరుగుతుంది?',
    answer:
      'ప్రతి నెలా నిర్దిష్ట తేదీన పారదర్శకమైన లైవ్ వేలం నిర్వహించబడుతుంది. నిధులు అత్యవసరమైన సభ్యులు వేలంలో పాల్గొని గరిష్ట రాయితీతో చిట్ మొత్తాన్ని పొందవచ్చు.',
  },
  {
    id: '04',
    question: 'చిట్ మొత్తాన్ని ఎప్పుడు పొందవచ్చు?',
    answer:
      'వేలంలో గెలుపొందిన తర్వాత అవసరమైన పూచీకత్తు డాక్యుమెంటేషన్ పూర్తి కాగానే, నిర్ణీత గడువులోగా చిట్ మొత్తం మీ ఖాతాలో జమ చేయబడుతుంది.',
  },
  {
    id: '05',
    question: 'చిట్ కాలవ్యవధి ఎంత?',
    answer:
      'మీరు ఎంచుకున్న పథకాన్ని బట్టి కాలవ్యవధి 25 నుంచి 50 నెలల వరకు ఉంటుంది. మీ ఆర్థిక ప్రణాళికకు సరిపోయే కాలాన్ని ఎంచుకోవచ్చు.',
  },
  {
    id: '06',
    question: 'చెల్లింపులకు సంబంధించిన వివరాలు ఎక్కడ తెలుసుకోవచ్చు?',
    answer:
      'మీ నెలవారీ రసీదులు, డివిడెండ్ వివరాలు మరియు వేలం ఫలితాలు మా కార్యాలయంలో మరియు అధికారిక రికార్డుల్లో ఎప్పటికప్పుడు స్పష్టంగా అందుబాటులో ఉంటాయి.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15 select-none"
    >
      {/* Background Texture & Ambient Halos */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(184, 142, 56, 0.07), transparent 55%),
            radial-gradient(circle at 20% 80%, rgba(15, 56, 44, 0.05), transparent 50%)
          `,
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(27, 83, 66, 0.35), transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(184, 142, 56, 0.07), transparent 55%)
          `,
        }}
      />

      {/* Faint Telugu Watermark ("స్పష్టత" - Clarity) */}
      <div className="absolute top-[10%] right-[3%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.028] font-telugu-display font-black text-[clamp(7rem,18vw,22rem)] leading-none text-forest dark:text-gold">
        స్పష్టత
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Understated CTA */}
          <div
            className={`lg:col-span-5 space-y-8 sm:space-y-10 lg:sticky lg:top-28 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-5 h-[1px] bg-gold" />
              <span className="font-english-display text-[0.7rem] tracking-[0.25em] text-gold uppercase font-semibold">
                FAQ
              </span>
            </div>

            <h2 className="font-telugu-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest dark:text-ivory leading-[1.25] tracking-tight">
              మీకు ఉన్న ప్రశ్నలకు…<br />
              <span className="text-gradient-gold">మా సమాధానాలు.</span>
            </h2>

            <p className="font-telugu-body text-base sm:text-lg text-charcoal/80 dark:text-ivory/80 leading-relaxed font-normal">
              చిట్లో చేరే ముందు తెలుసుకోవాల్సిన ముఖ్యమైన విషయాలు.
            </p>

            <div className="pt-6 border-t border-gold/20 space-y-2">
              <div className="text-xs font-telugu-body text-charcoal/60 dark:text-ivory/60">
                ఇంకా ప్రశ్న ఉందా?
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('start-journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 text-forest dark:text-gold-light hover:text-gold dark:hover:text-ivory font-telugu-body font-semibold text-sm sm:text-base border-b border-forest/30 dark:border-gold/40 hover:border-gold pb-1 transition-all duration-300 group cursor-pointer"
              >
                <span>మాతో మాట్లాడండి</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Vertical Questions List */}
          <div
            className={`lg:col-span-7 space-y-2 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.id}
                  className={`border-b transition-colors duration-300 ${
                    isOpen
                      ? 'border-gold/50 bg-forest/[0.02] dark:bg-gold/[0.02]'
                      : 'border-gold/15 hover:border-gold/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-english-display text-xs sm:text-sm font-bold text-gold tracking-wider">
                        {item.id}
                      </span>

                      <h3
                        className={`font-telugu-display text-base sm:text-lg lg:text-xl font-bold transition-colors duration-200 ${
                          isOpen
                            ? 'text-forest dark:text-gold-light'
                            : 'text-forest/90 dark:text-ivory/90 group-hover:text-forest dark:group-hover:text-ivory'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div className="text-xl sm:text-2xl font-light font-english-display text-gold select-none transition-transform duration-300 pl-2">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${idx}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-6'
                        : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-8 sm:pl-11 pr-4 sm:pr-8">
                      <p className="font-telugu-body text-sm sm:text-base text-charcoal/80 dark:text-ivory/80 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
