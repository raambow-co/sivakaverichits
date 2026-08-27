import React, { useState } from 'react';
import { BRAND, FAQS } from '../../constants/tokens';
import { HeritageFrame } from '../common/HeritageFrame';
import { OrnamentDivider } from '../common/OrnamentDivider';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, ChevronUp, Send, CheckCircle2, HelpCircle } from 'lucide-react';

export function ContactInquiry({ selectedScheme, onResetScheme }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    chitValue: selectedScheme ? selectedScheme.name : '₹2,50,000 (గోదావరి సమృద్ధి చిట్)',
    location: 'ఏలూరు',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `నమస్కారం Siva Kaveri Chits, నా పేరు: ${formData.name || 'సభ్యుడు'}, మొబైల్: ${formData.phone || ''}, నేను ${formData.chitValue} చిట్ గ్రూప్‌లో చేరాలనుకుంటున్నాను.`
    );
    window.open(`https://wa.me/919440123456?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1360px] mx-auto">
      
      {/* 2-Column Grid: FAQs (Left) & Contact Form + Branch Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/10 dark:bg-gold/10 border border-forest/20 dark:border-gold/30 rounded-full text-xs font-telugu-body font-bold text-forest dark:text-gold-light mb-2.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>తరచుగా అడిగే ప్రశ్నలు (FAQs)</span>
            </div>
            <h2 className="font-telugu-display text-2xl sm:text-3xl font-extrabold text-forest dark:text-ivory">
              చిట్ ఫండ్ గురించిన సందేహాలు & సమాధానాలు
            </h2>
            <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 mt-1">
              మీ పెట్టుబడి భద్రత, వేలం పద్ధతి మరియు చెల్లింపులపై పూర్తి స్పష్టత:
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-forest/80 border border-gold/30 rounded-[3px] overflow-hidden shadow-card-light transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-telugu-display font-bold text-sm sm:text-base text-forest dark:text-ivory hover:bg-forest-surface/50 dark:hover:bg-forest-dark/50 transition-colors"
                  >
                    <span>{faq.qTelugu}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-dark dark:text-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal/50 dark:text-ivory/50 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 font-telugu-body text-xs sm:text-sm text-charcoal/85 dark:text-ivory/85 leading-relaxed border-t border-gray-100 dark:border-forest pt-3">
                      {faq.aTelugu}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Branch Visit Card */}
          <div className="bg-[#FAF6EC] dark:bg-forest-dark/80 border border-gold/40 rounded-[3px] p-5 space-y-3">
            <h4 className="font-telugu-display text-base font-bold text-forest dark:text-gold-light">
              ప్రత్యక్షంగా మా ఏలూరు కార్యాలయాన్ని సందర్శించండి:
            </h4>
            <div className="space-y-2 text-xs font-telugu-body text-charcoal/80 dark:text-ivory/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest dark:text-gold flex-shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-forest dark:text-gold flex-shrink-0" />
                <span>{BRAND.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest dark:text-gold flex-shrink-0" />
                <span>హెల్ప్‌లైన్: <strong>{BRAND.phone} / {BRAND.mobile}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Callback & Inquiry Form */}
        <div className="lg:col-span-6">
          <HeritageFrame variant="parchment" className="border-2 border-gold/60 shadow-heritage-md">
            
            <div className="mb-5 border-b border-gold/30 pb-3">
              <span className="font-english-display text-xs font-bold tracking-widest text-terracotta uppercase block">
                JOIN A CHIT GROUP OR INQUIRE
              </span>
              <h3 className="font-telugu-display text-xl sm:text-2xl font-extrabold text-forest">
                సభ్యత్వ నమోదు & విచారణ ఫారం
              </h3>
              <p className="font-telugu-body text-xs text-charcoal/80 mt-1">
                మీ వివరాలు సమర్పించండి, మా ఏలూరు బ్రాంచ్ ప్రతినిధి వెంటనే సంప్రదిస్తారు:
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-white dark:bg-forest/60 border border-forest/30 rounded text-center space-y-4">
                <div className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-telugu-display text-xl font-bold text-forest">
                  ధన్యవాదాలు! మీ అభ్యర్థన అందింది.
                </h4>
                <p className="font-telugu-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  మా ఏలూరు చిట్ కన్సల్టెంట్ అతి త్వరలో <strong>{formData.phone}</strong> నంబర్‌కు కాల్ చేసి పూర్తి డాక్యుమెంటేషన్ వివరాలు అందజేస్తారు.
                </p>
                
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-telugu-body font-bold text-sm rounded flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>తక్షణ WhatsApp సంభాషణ ప్రారంభించండి</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-forest underline font-telugu-body"
                >
                  మరొక విచారణ నమోదు చేయండి
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-telugu-body">
                
                <div>
                  <label className="block text-xs font-bold text-forest mb-1">
                    మీ పూర్తి పేరు (Full Name): *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ఉదా: రావులపాటి సుబ్బారావు"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-gold/40 rounded text-sm text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-forest mb-1">
                      మొబైల్ నంబర్ (Phone Number): *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="ఉదా: 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-gold/40 rounded text-sm text-charcoal focus:outline-none focus:border-forest font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest mb-1">
                      మీ ప్రాంతం / ఊరు (City/Town):
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-gold/40 rounded text-sm text-charcoal focus:outline-none focus:border-forest"
                    >
                      <option value="ఏలూరు">ఏలూరు (Eluru)</option>
                      <option value="తాడేపల్లిగూడెం">తాడేపల్లిగూడెం (Tadepalligudem)</option>
                      <option value="భీమవరం">భీమవరం (Bhimavaram)</option>
                      <option value="జంగారెడ్డిగూడెం">జంగారెడ్డిగూడెం (Jangareddygudem)</option>
                      <option value="పాలకొల్లు">పాలకొల్లు (Palakollu)</option>
                      <option value="ఇతర ప్రాంతం">ఇతర ప్రాంతం (Other Region)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest mb-1">
                    మీరు ఆసక్తి గల చిట్ పథకం (Selected Chit Scheme):
                  </label>
                  <select
                    value={formData.chitValue}
                    onChange={(e) => setFormData({ ...formData, chitValue: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-gold/40 rounded text-sm text-charcoal focus:outline-none focus:border-forest"
                  >
                    <option value="₹50,000 (లక్ష్మీ పొదుపు చిట్)">₹50,000 (లక్ష్మీ పొదుపు చిట్ - ₹2,000/నెలకు)</option>
                    <option value="₹1,00,000 (శుభలాభ్ ఫ్యామిలీ చిట్)">₹1,00,000 (శుభలాభ్ ఫ్యామిలీ చిట్ - ₹4,000/నెలకు)</option>
                    <option value="₹2,50,000 (గోదావరి సమృద్ధి చిట్)">₹2,50,000 (గోదావరి సమృద్ధి చిట్ - ₹8,333/నెలకు)</option>
                    <option value="₹5,00,000 (రత్న గర్భ ప్రీమియం)">₹5,00,000 (రత్న గర్భ ప్రీమియం - ₹12,500/నెలకు)</option>
                    <option value="₹10,00,000 (విజయ వైభవ్ మెగా)">₹10,00,000 (విజయ వైభవ్ మెగా - ₹20,000/నెలకు)</option>
                    <option value="₹25,00,000 (రాజరాజేశ్వరి రాయల్)">₹25,00,000 (రాజరాజేశ్వరి రాయల్ - ₹50,000/నెలకు)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest mb-1">
                    సందేశం లేదా సందేహాలు (Optional Notes):
                  </label>
                  <textarea
                    rows="2"
                    placeholder="మీ ప్రశ్నలు లేదా సౌకర్యవంతమైన సమయం రాయండి..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-gold/40 rounded text-xs text-charcoal focus:outline-none focus:border-forest resize-none"
                  />
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-forest hover:bg-forest-light text-white font-bold text-sm rounded shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>విచారణ సమర్పించండి (కాల్ బ్యాక్ పొందండి)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>నేరుగా WhatsApp లో చాట్ చేయండి: {BRAND.whatsapp}</span>
                  </button>
                </div>

              </form>
            )}

          </HeritageFrame>
        </div>

      </div>

    </section>
  );
}
