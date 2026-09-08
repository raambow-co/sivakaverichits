import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/**
 * SECTION 09 — FREQUENTLY ASKED QUESTIONS
 * Clear, concise answers covering enrolment, dividends, auctions, and safety.
 */

const FAQ_ITEMS = [
  {
    id: '01',
    question: 'How do I join a chit fund scheme with Siva Kaveri Chits?',
    answer:
      'Select a scheme that matches your monthly savings budget and submit basic KYC documents (Aadhaar, PAN card, and bank details). Our representative will guide you through the official enrolment and agreement process.',
  },
  {
    id: '02',
    question: 'How do monthly installments and dividend discounts work?',
    answer:
      'Each month, the auction discount (minus the foreman commission) is equally distributed among all non-prized members as a dividend. This dividend is deducted directly from your monthly installment, lowering your actual payment.',
  },
  {
    id: '03',
    question: 'How is the monthly live auction conducted?',
    answer:
      'Auctions are conducted openly on a fixed date every month at our registered Eluru office. Members who require capital participate in the transparent bidding within government-regulated discount limits.',
  },
  {
    id: '04',
    question: 'When and how is the prize money disbursed?',
    answer:
      'After winning the auction and completing standard statutory surety documentation as mandated by the Chit Funds Act, 1982, the prize amount is directly credited to your verified bank account.',
  },
  {
    id: '05',
    question: 'What scheme durations and values are available?',
    answer:
      'We offer flexible schemes ranging from ₹50,000 up to ₹10,00,000 with tenures of 25 to 40 months, designed for micro-savers, families, and commercial business enterprises.',
  },
  {
    id: '06',
    question: 'Is Siva Kaveri Chits registered with the government?',
    answer:
      'Yes. Siva Kaveri Chits is fully registered under the Chit Funds Act, 1982 with the Government of Andhra Pradesh. All schemes are pre-approved by the Registrar of Chits with 100% bank-backed statutory security deposits.',
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
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/15"
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

      {/* Subtle Background Watermark */}
      <div className="absolute top-[10%] right-[3%] pointer-events-none select-none z-[1] opacity-[0.02] dark:opacity-[0.028] font-black text-[clamp(4rem,14vw,18rem)] leading-none text-forest dark:text-gold uppercase tracking-tight">
        CLARITY
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Understated CTA */}
          <div
            className={`lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky lg:top-28 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-gold" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-terracotta dark:text-gold-light">
                Questions & Answers
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-forest dark:text-ivory leading-[1.2] tracking-tight">
              Have Questions?<br />
              <span className="text-gradient-gold">We Have Clear Answers.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-charcoal/80 dark:text-ivory/80 leading-relaxed font-normal">
              Essential knowledge before starting your structured savings journey with Siva Kaveri Chits.
            </p>

            <div className="pt-4 border-t border-gold/20 space-y-2">
              <div className="text-xs text-charcoal/60 dark:text-ivory/60 font-medium">
                Have a specific question not listed here?
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('start-journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-forest dark:text-gold-light hover:text-gold dark:hover:text-ivory font-semibold text-sm sm:text-base border-b border-forest/30 dark:border-gold/40 hover:border-gold pb-1 transition-all duration-300 group cursor-pointer"
              >
                <span>Speak Directly with Our Team</span>
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
                    className="w-full py-4 sm:py-5 flex items-start justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-5">
                      <span className="text-xs sm:text-sm font-bold text-gold tracking-wider">
                        {item.id}
                      </span>

                      <h3
                        className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-200 ${
                          isOpen
                            ? 'text-forest dark:text-gold-light'
                            : 'text-forest/90 dark:text-ivory/90 group-hover:text-forest dark:group-hover:text-ivory'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div className="text-lg sm:text-xl font-light text-gold select-none transition-transform duration-300 pl-2">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${idx}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5'
                        : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-7 sm:pl-10 pr-3 sm:pr-6">
                      <p className="text-xs sm:text-sm lg:text-base text-charcoal/80 dark:text-ivory/80 leading-relaxed">
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
