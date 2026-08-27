import React from 'react';
import { BRAND, TRUST_PILLARS } from '../../constants/tokens';
import { HeritageFrame } from '../common/HeritageFrame';
import { ShieldCheck, Landmark, Scale, Clock, Award, FileCheck, CheckCircle2, Lock } from 'lucide-react';

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Scale: Scale,
  Clock: Clock,
};

export function TrustSecurity() {
  return (
    <section id="security" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/10 dark:bg-gold/10 border border-forest/20 dark:border-gold/30 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>చట్టబద్ధమైన భద్రత & నియమాలు</span>
        </div>
        <h2 className="font-telugu-display text-3xl sm:text-4xl font-extrabold text-forest dark:text-ivory mb-3">
          100% ప్రభుత్వ రక్షణ & చట్టబద్ధమైన పారదర్శకత
        </h2>
        <p className="font-telugu-body text-sm sm:text-base text-charcoal/80 dark:text-ivory/80">
          మీ కష్టార్జితమైన సొమ్ముకు పూర్తి భద్రత కల్పించే ప్రభుత్వ అధీకృత నిబంధనలు మరియు బ్యాంకింగ్ గ్యారెంటీలు:
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TRUST_PILLARS.map((pillar, idx) => {
          const IconComponent = ICON_MAP[pillar.icon] || ShieldCheck;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-forest/80 border border-gold/30 rounded-[3px] p-6 shadow-card-light hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded bg-forest-surface dark:bg-forest-dark border border-forest/20 dark:border-gold/30 flex items-center justify-center text-forest dark:text-gold mb-4 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-telugu-display text-base font-bold text-forest dark:text-ivory mb-2">
                  {pillar.titleTelugu}
                </h3>
                <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 leading-relaxed">
                  {pillar.descTelugu}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-forest text-[0.68rem] font-english-display text-gold-dark dark:text-gold uppercase font-semibold">
                {pillar.titleEnglish}
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Registration Proof Banner */}
      <div className="bg-forest text-white rounded-[4px] p-8 sm:p-10 shadow-heritage-lg border-2 border-gold/60 relative overflow-hidden">
        
        {/* Background Subtle Watermark */}
        <div className="absolute right-0 bottom-0 text-[10rem] font-telugu-display font-black text-white/5 pointer-events-none select-none leading-none">
          రక్షణ
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-gold/40 rounded text-xs font-telugu-body text-gold-light">
              <Lock className="w-3.5 h-3.5" />
              <span>రిజిస్ట్రార్ ఆఫ్ చిట్స్, ఏలూరు కార్యాలయ పరిధి</span>
            </div>

            <h3 className="font-telugu-display text-2xl sm:text-3xl font-extrabold text-ivory">
              ఆంధ్రప్రదేశ్ చిట్ ఫండ్స్ చట్టం 1982 క్రింద నమోదిత సంస్థ
            </h3>

            <p className="font-telugu-body text-sm sm:text-base text-ivory/85 leading-relaxed">
              కంపెనీ ప్రారంభించిన ప్రతి చిట్ గ్రూప్‌కు సమానమైన మొత్తాన్ని (100% Chit Value) ముందుగానే ప్రభుత్వ అధీకృత జాతీయ బ్యాంకులో డిపాజిట్ చేసి, రిజిస్ట్రార్ ఆఫ్ చిట్స్ వారి ముందస్తు అనుమతి (Prior Sanction Order) పొందిన తర్వాతే గ్రూప్ ప్రారంభించబడుతుంది.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-telugu-body text-gold-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>రిజిస్ట్రేషన్ సంఖ్య: {BRAND.registrationNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>పారదర్శక ఆడిట్ రికార్డులు & రశీదులు</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>నామినేషన్ (Nominee) సౌకర్యం కలదు</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>తక్షణ SMS మరియు WhatsApp రశీదులు</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded border border-gold/40 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <div className="font-english-display text-xs tracking-widest text-gold-light uppercase font-bold">
              ESTD 1998 • 25+ YEARS
            </div>
            <div className="font-telugu-display text-lg font-bold text-white">
              నిరంతర విశ్వసనీయ సేవ
            </div>
            <p className="font-telugu-body text-xs text-ivory/80">
              పశ్చిమ గోదావరి ప్రజల మన్ననలు పొందిన విశ్వసనీయ బ్రాండ్.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
