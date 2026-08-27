import React, { useState } from 'react';
import { CHIT_SCHEMES } from '../../constants/tokens';
import { HeritageFrame } from '../common/HeritageFrame';
import { Layers, Calendar, CheckCircle2, ArrowRight, Sparkles, Users } from 'lucide-react';

export function ChitSchemes({ onSelectSchemeForInquiry }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'అన్ని పథకాలు (All Schemes)' },
    { id: 'small', label: 'చిన్న పొదుపు (₹50K – ₹1L)' },
    { id: 'business', label: 'వ్యాపార చిట్స్ (₹2.5L – ₹5L)' },
    { id: 'hni', label: 'మెగా గ్రూప్స్ (₹10L – ₹25L)' },
  ];

  const filteredSchemes = CHIT_SCHEMES.filter((scheme) => {
    if (filter === 'all') return true;
    if (filter === 'small') return scheme.chitValue <= 100000;
    if (filter === 'business') return scheme.chitValue > 100000 && scheme.chitValue <= 500000;
    if (filter === 'hni') return scheme.chitValue >= 1000000;
    return true;
  });

  return (
    <section id="schemes" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-surface dark:bg-gold/10 border border-forest/20 dark:border-gold/30 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-2.5">
            <Layers className="w-3.5 h-3.5" />
            <span>నమోదిత చిట్ గ్రూపులు (2026 Active Groups)</span>
          </div>
          <h2 className="font-telugu-display text-3xl sm:text-4xl font-extrabold text-forest dark:text-ivory">
            ప్రస్తుతం అందుబాటులో ఉన్న చిట్ పథకాలు
          </h2>
        </div>
        <p className="font-telugu-body text-sm sm:text-base text-charcoal/80 dark:text-ivory/80 max-w-md">
          మీ ఆదాయ పరిమితి, ఆర్థిక లక్ష్యాలకు అనుగుణంగా తగిన గ్రూప్‌ను ఎంచుకుని నేరుగా అడ్మిషన్ నమోదు చేసుకోండి.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full font-telugu-body text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
              filter === cat.id
                ? 'bg-forest text-white border-forest dark:bg-gold dark:text-forest-deep shadow-sm'
                : 'bg-white dark:bg-forest/60 text-charcoal dark:text-ivory border-gold/30 hover:border-gold'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="group relative bg-white dark:bg-forest/85 border border-gold/40 rounded-[3px] p-6 sm:p-7 shadow-card-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-forest to-terracotta" />

            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-telugu-body text-xs font-bold text-terracotta dark:text-gold-light">
                  {scheme.categoryTelugu}
                </span>
                <span className="px-2.5 py-0.5 bg-forest-surface dark:bg-gold/15 border border-forest/20 dark:border-gold/30 rounded-full text-[0.68rem] font-bold text-forest dark:text-gold-light">
                  {scheme.badge}
                </span>
              </div>

              {/* Title & Total Value */}
              <h3 className="font-telugu-display text-xl font-bold text-forest dark:text-ivory mb-1">
                {scheme.nameTelugu}
              </h3>
              <div className="font-english-display text-3xl font-extrabold text-forest dark:text-gold-light mb-4">
                {scheme.formattedValue}
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2.5 py-3 border-y border-gold/20 font-telugu-body text-xs text-charcoal/90 dark:text-ivory/90 mb-4">
                
                <div className="flex justify-between items-center">
                  <span className="text-charcoal/70 dark:text-ivory/70">నెలవారీ వాయిదా (వాయిదా):</span>
                  <span className="font-bold text-forest dark:text-ivory text-sm">
                    {scheme.formattedMonthly}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-charcoal/70 dark:text-ivory/70">మొత్తం వ్యవధి (Tenure):</span>
                  <span className="font-bold text-forest dark:text-gold">
                    {scheme.tenureMonths} నెలలు
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-charcoal/70 dark:text-ivory/70">అంచనా డివిడెండ్ లాభం:</span>
                  <span className="font-bold text-gold-dark dark:text-gold-light">
                    {scheme.estimatedDividend}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-charcoal/70 dark:text-ivory/70 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-forest" />
                    వేలం తేదీ:
                  </span>
                  <span className="font-semibold text-charcoal dark:text-ivory">
                    {scheme.auctionDate}
                  </span>
                </div>

              </div>

              {/* Ideal for note */}
              <div className="text-xs font-telugu-body text-charcoal/75 dark:text-ivory/70 mb-5 leading-relaxed bg-[#FAF6EC] dark:bg-forest-dark/60 p-2.5 rounded border border-gold/20">
                <strong>ఎవరికి అనుకూలం:</strong> {scheme.recommendedFor}
              </div>
            </div>

            {/* Bottom Actions */}
            <div>
              <div className="flex items-center justify-between text-[0.72rem] font-telugu-body text-charcoal/70 dark:text-ivory/60 mb-3">
                <span className="flex items-center gap-1 text-forest dark:text-gold font-bold">
                  <Users className="w-3.5 h-3.5" />
                  మిగిలిన సీట్లు: {scheme.slotsAvailable}
                </span>
                <span className="text-terracotta font-semibold">
                  {scheme.statusTelugu}
                </span>
              </div>

              <button
                onClick={() => onSelectSchemeForInquiry({
                  name: scheme.nameTelugu,
                  value: scheme.chitValue,
                  tenure: scheme.tenureMonths,
                  monthly: scheme.monthlyInstallment,
                })}
                className="w-full py-2.5 bg-forest hover:bg-forest-light text-white dark:bg-gold dark:text-forest-deep font-telugu-body font-bold text-sm rounded-[2px] transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
              >
                <span>ఈ గ్రూప్‌లో చేరండి</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
