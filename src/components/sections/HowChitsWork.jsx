import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../constants/tokens';
import { HeritageFrame } from '../common/HeritageFrame';
import { OrnamentDivider } from '../common/OrnamentDivider';
import { ClipboardCheck, Coins, Gavel, ShieldCheck, Check, HelpCircle, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  ClipboardCheck: ClipboardCheck,
  Coins: Coins,
  Gavel: Gavel,
  ShieldCheck: ShieldCheck,
};

export function HowChitsWork({ onOpenInquiry }) {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto bg-[#FAF6EC] dark:bg-forest-dark/40 border-y border-gold/30 rounded-3xl my-6">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/10 dark:bg-gold/10 border border-forest/20 dark:border-gold/30 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>సులువుగా అర్థం చేసుకోండి</span>
        </div>
        <h2 className="font-telugu-display text-3xl sm:text-4xl font-extrabold text-forest dark:text-ivory mb-3">
          చిట్ ఫండ్ ఎలా పనిచేస్తుంది?
        </h2>
        <p className="font-telugu-body text-sm sm:text-base text-charcoal/80 dark:text-ivory/80">
          పొదుపు మరియు రుణ సదుపాయాన్ని ఏకకాలంలో అందించే సురక్షితమైన 4-దశల ఆర్థిక ప్రయాణం:
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {HOW_IT_WORKS_STEPS.map((item, idx) => {
          const IconComponent = ICON_MAP[item.icon] || ClipboardCheck;
          return (
            <div
              key={item.step}
              className="relative bg-white dark:bg-forest/80 border border-gold/30 rounded-2xl p-6 shadow-card-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-forest text-gold font-english-display font-bold text-base flex items-center justify-center shadow-sm">
                  {item.step}
                </div>
                <div className="p-2 bg-forest-surface dark:bg-forest-dark rounded-lg border border-forest/10">
                  <IconComponent className="w-5 h-5 text-forest dark:text-gold" />
                </div>
              </div>

              <div>
                <h3 className="font-telugu-display text-base font-bold text-forest dark:text-ivory mb-2">
                  {item.titleTelugu}
                </h3>
                <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
                  {item.descTelugu}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-forest text-[0.68rem] font-english-display tracking-wider text-gold-dark dark:text-gold uppercase font-semibold">
                {item.titleEnglish}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison: Why Chit Fund vs Traditional Methods */}
      <div className="bg-white dark:bg-forest/90 border border-gold/40 rounded-2xl p-6 sm:p-8 shadow-card-light">
        <h3 className="font-telugu-display text-xl sm:text-2xl font-bold text-forest dark:text-ivory text-center mb-6">
          చిట్ ఫండ్ ఎందుకు ఉత్తమమైన ఎంపిక? (చిట్ vs ఇతర మార్గాలు)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-telugu-body text-xs sm:text-sm">
          
          <div className="p-4 bg-forest-surface dark:bg-forest-dark/70 rounded-xl border border-forest/20 space-y-2">
            <div className="font-bold text-forest dark:text-gold-light text-base border-b border-forest/20 pb-2">
              ✨ శివ కావేరి చిట్స్
            </div>
            <ul className="space-y-2 text-charcoal/90 dark:text-ivory/90">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>పొదుపుతో పాటు అత్యవసర రుణ సదుపాయం</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>ప్రతి నెలా డివిడెండ్ ద్వారా వాయిదా తగ్గింపు</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>24-48 గంటల్లో వేగవంతమైన నిధుల చెల్లింపు</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-forest-dark/40 rounded border border-gray-200 dark:border-forest/40 space-y-2 opacity-80">
            <div className="font-bold text-charcoal dark:text-ivory text-base border-b border-gray-200 dark:border-forest pb-2">
              🏦 బ్యాంక్ లోన్లు
            </div>
            <ul className="space-y-2 text-charcoal/70 dark:text-ivory/70">
              <li>• క్లిష్టమైన డాక్యుమెంటేషన్ & ప్రాసెసింగ్ ఫీజులు</li>
              <li>• అధిక వడ్డీ భారం మరియు పెనాల్టీలు</li>
              <li>• అప్రూవల్ కోసం రోజుల తరబడి నిరీక్షణ</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-forest-dark/40 rounded border border-gray-200 dark:border-forest/40 space-y-2 opacity-80">
            <div className="font-bold text-charcoal dark:text-ivory text-base border-b border-gray-200 dark:border-forest pb-2">
              💰 సాధారణ బ్యాంక్ RD / FD
            </div>
            <ul className="space-y-2 text-charcoal/70 dark:text-ivory/70">
              <li>• అత్యవసర సమయాల్లో నిధులు డ్రా చేయలేరు</li>
              <li>• నిర్ణీత కాలానికి ముందే తీస్తే పెనాల్టీ</li>
              <li>• పరిమితమైన వడ్డీ రేట్లు మాత్రమే లభిస్తాయి</li>
            </ul>
          </div>

        </div>

        <div className="text-center pt-6 mt-4 border-t border-gold/20">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest hover:bg-forest-light text-white font-telugu-body font-bold text-sm rounded transition-all"
          >
            <span>మీ సందేహాలను నివృత్తి చేసుకోండి (ఉచిత సలహా)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
