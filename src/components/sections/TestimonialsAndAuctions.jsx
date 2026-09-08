import React from 'react';
import { TESTIMONIALS, UPCOMING_AUCTIONS, BRAND } from '../../constants/tokens';
import { HeritageFrame } from '../common/HeritageFrame';
import { OrnamentDivider } from '../common/OrnamentDivider';
import { MessageSquareQuote, Calendar, Clock, Star, MapPin, CheckCircle, Gavel } from 'lucide-react';

export function TestimonialsAndAuctions() {
  return (
    <section id="auctions" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto">
      
      {/* 2-Column Layout: Testimonials (Left) & Auction Schedule (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Customer Testimonials */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/10 dark:bg-gold/10 border border-forest/20 dark:border-gold/30 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-2.5">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>సభ్యుల అనుభవాలు (Customer Stories)</span>
            </div>
            <h2 className="font-telugu-display text-2xl sm:text-3xl font-extrabold text-forest dark:text-ivory">
              మా సభ్యుల నిజమైన విజయగాథలు
            </h2>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 mt-1">
              ఏలూరు, తాడేపల్లిగూడెం, భీమవరం ప్రాంతాలలో వేలాది కుటుంబాలు పంచుకున్న విశ్వాసం:
            </p>
          </div>

          <div className="space-y-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-forest/80 border border-gold/30 rounded-2xl p-5 sm:p-6 shadow-card-light space-y-3"
              >
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <span className="text-[0.68rem] font-telugu-body font-semibold px-2.5 py-0.5 bg-forest-surface dark:bg-forest-dark text-forest dark:text-gold rounded-full border border-forest/10">
                    {t.scheme}
                  </span>
                </div>

                <p className="font-telugu-body text-xs sm:text-sm text-charcoal/90 dark:text-ivory/90 leading-relaxed italic">
                  "{t.content}"
                </p>

                <div className="pt-2 border-t border-gray-100 dark:border-forest flex items-center justify-between font-telugu-body">
                  <div>
                    <div className="font-bold text-forest dark:text-ivory text-sm">
                      {t.name}
                    </div>
                    <div className="text-[0.72rem] text-charcoal/60 dark:text-ivory/60">
                      {t.role}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[0.7rem] text-terracotta dark:text-gold-light">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Live Auction Calendar & Notice Board */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-terracotta/10 border border-terracotta/30 rounded-full text-xs font-telugu-body font-bold text-terracotta dark:text-gold-light mb-2.5">
              <Gavel className="w-3.5 h-3.5" />
              <span>లైవ్ వేలం క్యాలెండర్ (Live Auction Notice)</span>
            </div>
            <h2 className="font-telugu-display text-2xl sm:text-3xl font-extrabold text-forest dark:text-ivory">
              రాబోయే వేలం తేదీలు & సమయాలు
            </h2>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 mt-1">
              వేలంలో నేరుగా లేదా ఆన్‌లైన్ ద్వారా పాల్గొనవచ్చు. నిర్ణీత సమయంలో ఏలూరు బ్రాంచ్‌లో నిర్వహించబడుతుంది:
            </p>
          </div>

          <div className="bg-white dark:bg-forest/80 border-2 border-gold/40 rounded-2xl p-5 sm:p-6 shadow-card-light space-y-4">
            
            <div className="flex items-center justify-between text-xs font-telugu-body font-bold text-forest dark:text-gold-light border-b border-gold/30 pb-2">
              <span>మార్చి 2026 వేలం వివరాలు</span>
              <span className="text-[0.68rem] font-mono text-terracotta">LIVE UPDATES</span>
            </div>

            <div className="space-y-3">
              {UPCOMING_AUCTIONS.map((auc, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-forest-surface dark:bg-forest-dark rounded-xl border border-forest/15 hover:border-gold transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 font-telugu-body text-xs">
                      <span className="font-mono font-bold text-forest dark:text-gold">
                        {auc.groupCode}
                      </span>
                      <span className="text-charcoal/40">•</span>
                      <span className="font-english-display font-bold text-sm text-charcoal dark:text-ivory">
                        {auc.chitValue}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-charcoal/75 dark:text-ivory/70 font-telugu-body mt-1">
                      <span className="flex items-center gap-1 font-semibold text-forest dark:text-ivory">
                        <Calendar className="w-3 h-3 text-gold" />
                        {auc.auctionDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold" />
                        {auc.time}
                      </span>
                    </div>
                  </div>

                  <div className="text-right sm:border-l sm:border-forest/20 sm:pl-3">
                    <div className="text-[0.68rem] text-charcoal/60 dark:text-ivory/60 font-telugu-body">
                      వాయిదా: <strong>{auc.installmentNo}</strong>
                    </div>
                    <div className="text-xs font-bold text-gold-dark dark:text-gold font-telugu-body">
                      గత డివిడెండ్: {auc.lastDividend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#FAF6EC] dark:bg-forest-dark/80 rounded text-xs font-telugu-body text-charcoal/80 dark:text-ivory/80 space-y-1 border border-gold/30">
              <div className="font-bold text-forest dark:text-gold-light">
                వేలంలో పాల్గొనడానికి సూచనలు:
              </div>
              <p>
                1. ముందస్తుగా వాయిదా చెల్లించిన సభ్యులు మాత్రమే వేలంలో పాల్గొనడానికి అర్హులు.
                <br />
                2. వేలం పాడిన వెంటనే కన్ఫర్మేషన్ స్లిప్ ఇవ్వబడుతుంది.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
