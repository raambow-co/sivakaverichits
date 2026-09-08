import React, { useState } from 'react';
import { HeritageFrame } from '../common/HeritageFrame';
import { OrnamentDivider } from '../common/OrnamentDivider';
import { Calculator, Sparkles, TrendingUp, PiggyBank, ArrowRight, Check } from 'lucide-react';

const CHIT_PRESETS = [
  { value: 50000, label: "₹50 వేలు" },
  { value: 100000, label: "₹1 లక్ష" },
  { value: 250000, label: "₹2.5 లక్షలు" },
  { value: 500000, label: "₹5 లక్షలు" },
  { value: 1000000, label: "₹10 లక్షలు" },
  { value: 2500000, label: "₹25 లక్షలు" },
];

export function ChitCalculator({ onSelectSchemeForInquiry }) {
  const [chitValue, setChitValue] = useState(500000);
  const [tenure, setTenure] = useState(40); // months

  // Financial Computations
  const grossMonthly = Math.round(chitValue / tenure);
  // Average dividend rate estimated across auction lifetime (~18%)
  const avgDividendMonthly = Math.round(grossMonthly * 0.18);
  const netMonthly = grossMonthly - avgDividendMonthly;
  const totalDividendBenefit = avgDividendMonthly * tenure;
  // Maximum bidding discount as per AP Chit Funds Act (max 30% to 40%)
  const maxBidAmount = Math.round(chitValue * 0.70); // 70% min payout
  const totalNetPayment = netMonthly * tenure;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/40 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-3">
          <Calculator className="w-3.5 h-3.5 text-gold-dark" />
          <span>ఇంటరాక్టివ్ ఫైనాన్షియల్ టూల్</span>
        </div>
        <h2 className="font-telugu-display text-3xl sm:text-4xl font-extrabold text-forest dark:text-ivory mb-3">
          చిట్ & డివిడెండ్ క్యాలిక్యులేటర్
        </h2>
        <p className="font-telugu-body text-sm sm:text-base text-charcoal/80 dark:text-ivory/80">
          మీరు ఎంచుకున్న చిట్ మొత్తం మరియు కాలవ్యవధి ఆధారంగా నెలవారీ వాయిదా, అంచనా వేసిన డివిడెండ్ లాభం మరియు తక్షణ నిధుల లెక్కింపును ప్రత్యక్షంగా పరిశీలించండి:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Interactive Controls */}
        <div className="lg:col-span-6 bg-white dark:bg-forest/80 p-6 sm:p-8 rounded-3xl border border-gold/30 shadow-card-light space-y-7">
          
          {/* Preset Buttons */}
          <div>
            <label className="font-telugu-display text-sm font-bold text-forest dark:text-gold-light block mb-2.5">
              త్వరిత చిట్ మొత్తం ఎంచుకోండి (Quick Select):
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {CHIT_PRESETS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setChitValue(p.value)}
                  className={`py-2 px-1 text-xs font-bold font-telugu-body rounded-lg border transition-all ${
                    chitValue === p.value
                      ? 'bg-forest text-white border-forest dark:bg-gold dark:text-forest-deep shadow-sm'
                      : 'bg-forest-surface dark:bg-forest-dark text-charcoal dark:text-ivory border-gray-200 dark:border-forest hover:border-gold'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider for Chit Value */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-telugu-body">
              <span className="text-sm font-bold text-charcoal dark:text-ivory">చిట్ మొత్తం (Total Chit Value):</span>
              <span className="font-english-display text-xl font-bold text-forest dark:text-gold">
                {formatINR(chitValue)}
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="2500000"
              step="25000"
              value={chitValue}
              onChange={(e) => setChitValue(Number(e.target.value))}
              className="w-full h-2.5 bg-forest-surface dark:bg-forest-dark rounded-lg appearance-none cursor-pointer accent-forest dark:accent-gold"
            />
            <div className="flex justify-between text-[0.7rem] text-charcoal/60 dark:text-ivory/60 font-mono">
              <span>₹50,000</span>
              <span>₹10,00,000</span>
              <span>₹25,00,000</span>
            </div>
          </div>

          {/* Tenure Buttons */}
          <div>
            <label className="font-telugu-display text-sm font-bold text-forest dark:text-gold-light block mb-2.5">
              చిట్ వ్యవధి (Tenure in Months):
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[25, 30, 40, 50].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setTenure(m)}
                  className={`py-2.5 text-xs font-bold font-telugu-body rounded-lg border text-center transition-all ${
                    tenure === m
                      ? 'bg-forest text-white border-forest dark:bg-gold dark:text-forest-deep shadow-sm'
                      : 'bg-forest-surface dark:bg-forest-dark text-charcoal dark:text-ivory border-gray-200 dark:border-forest hover:border-gold'
                  }`}
                >
                  <span className="block text-sm font-english-display">{m}</span>
                  <span className="text-[0.65rem]">నెలలు</span>
                </button>
              ))}
            </div>
          </div>

          {/* Why Chit Fund is unique alert */}
          <div className="p-4 bg-[#FAF6EC] dark:bg-forest-dark/80 border border-gold/40 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 font-telugu-body text-xs font-bold text-terracotta dark:text-gold-light">
              <Sparkles className="w-4 h-4" />
              <span>చిట్ ఫండ్ ప్రత్యేకత — డ్యూయల్ బెనిఫిట్ (Dual Benefit)</span>
            </div>
            <p className="font-telugu-body text-xs text-charcoal/80 dark:text-ivory/80 leading-relaxed">
              మీరు చివర వరకు వేలం పాడకుండా ఉంటే అధిక డివిడెండ్‌తో మెరుగైన రాబడి వస్తుంది. అత్యవసర నిధులు అవసరమైతే తక్కువ సమయంలో వేలంలో నిధులు పొందవచ్చు.
            </p>
          </div>

        </div>

        {/* Right Side: Computed Results Card */}
        <div className="lg:col-span-6">
          <HeritageFrame variant="parchment" className="border-2 border-gold/60 shadow-heritage-md space-y-6">
            
            <div className="flex items-center justify-between border-b border-gold/30 pb-3">
              <div>
                <span className="font-english-display text-xs tracking-widest text-terracotta uppercase font-bold block">
                  ESTIMATED CHIT SUMMARY
                </span>
                <h3 className="font-telugu-display text-xl font-bold text-forest">
                  అంచనా వేసిన ప్రయోజనాల పట్టిక
                </h3>
              </div>
              <div className="text-right">
                <span className="font-english-display text-xs text-charcoal/60 block">చిట్ విలువ</span>
                <span className="font-english-display text-xl font-bold text-forest">
                  {formatINR(chitValue)}
                </span>
              </div>
            </div>

            {/* Key Number Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 bg-white dark:bg-forest/60 border border-gold/20 rounded-xl shadow-sm">
                <span className="font-telugu-body text-xs text-charcoal/70 dark:text-ivory/70 block">
                  అసలు నెలవారీ వాయిదా (Gross):
                </span>
                <span className="font-english-display text-2xl font-bold text-charcoal dark:text-ivory block mt-1">
                  {formatINR(grossMonthly)}
                </span>
                <span className="text-[0.68rem] text-charcoal/60 dark:text-ivory/60 font-telugu-body">
                  డివిడెండ్ తగ్గకముందు
                </span>
              </div>

              <div className="p-4 bg-forest-surface border border-forest/20 rounded-xl shadow-sm">
                <span className="font-telugu-body text-xs font-bold text-forest block">
                  సగటు నెట్ వాయిదా (Net Installment):
                </span>
                <span className="font-english-display text-2xl font-bold text-forest block mt-1">
                  {formatINR(netMonthly)}
                </span>
                <span className="text-[0.68rem] text-forest/80 font-telugu-body font-semibold">
                  (సుమారు ~{formatINR(avgDividendMonthly)} డివిడెండ్ తగ్గింపుతో)
                </span>
              </div>

              <div className="p-4 bg-[#FFF8EE] border border-gold/40 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 text-gold-dark font-telugu-body text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>మొత్తం డివిడెండ్ లాభం:</span>
                </div>
                <span className="font-english-display text-2xl font-bold text-gold-dark block mt-1">
                  ~ {formatINR(totalDividendBenefit)}
                </span>
                <span className="text-[0.68rem] text-charcoal/70 font-telugu-body">
                  మీకు లభించే సగటు తగ్గింపు బోనస్
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-forest/60 border border-gold/20 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 text-terracotta font-telugu-body text-xs font-bold">
                  <PiggyBank className="w-3.5 h-3.5" />
                  <span>తక్షణ వేలం నిధుల పరిమితి:</span>
                </div>
                <span className="font-english-display text-2xl font-bold text-terracotta block mt-1">
                  {formatINR(maxBidAmount)} – {formatINR(chitValue * 0.95)}
                </span>
                <span className="text-[0.68rem] text-charcoal/60 dark:text-ivory/60 font-telugu-body">
                  వేలం పాడినప్పుడు తక్షణ చెల్లింపు
                </span>
              </div>

            </div>

            <OrnamentDivider />

            {/* CTA action to join this plan */}
            <div className="space-y-3 pt-1">
              <button
                onClick={() => onSelectSchemeForInquiry({
                  name: `చిట్ ప్లాన్: ${formatINR(chitValue)} (${tenure} నెలలు)`,
                  value: chitValue,
                  tenure: tenure,
                  monthly: netMonthly,
                })}
                className="w-full py-3.5 bg-forest hover:bg-forest-light text-white font-telugu-body font-bold text-base rounded-xl shadow-card-light hover:shadow-card-hover transition-all flex items-center justify-center gap-2"
              >
                <span>ఈ ప్లాన్ ({formatINR(chitValue)}) కోసం అడ్మిషన్ నమోదు చేసుకోండి</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-between text-[0.72rem] text-charcoal/70 font-telugu-body px-1">
                <span>✓ ఎటువంటి దాగి ఉన్న చార్జీలు లేవు</span>
                <span>✓ చట్టబద్ధమైన ఏలూరు రిజిస్ట్రేషన్</span>
                <span>✓ 24 గంటల్లో అప్రూవల్</span>
              </div>
            </div>

          </HeritageFrame>
        </div>

      </div>

    </section>
  );
}
