import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  User,
  PhoneCall,
  Building
} from 'lucide-react';
import { BRAND, CHIT_SCHEMES } from '../../constants/tokens';

/**
 * ENQUIRY FORM & MAP NAVIGATION SECTION (HALF & HALF)
 * English-only, minimal and clean layout.
 * Left: High-Conversion Consultation Form
 * Right: Google Map & Office Photo with Navigation
 */

export function EnquiryAndMapSection({ selectedScheme }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    scheme: '₹2,50,000 — Godavari Samruddhi Chit (40 Months)',
    city: 'Eluru (Head Office)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState('map'); // 'map' | 'office'

  // Sync if a scheme is selected from Chit Plans section
  useEffect(() => {
    if (selectedScheme) {
      const match = CHIT_SCHEMES.find(
        (s) => s.id === selectedScheme.id || s.formattedValue === selectedScheme.formattedValue
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          scheme: `${match.formattedValue} — ${match.nameEnglish} (${match.tenureMonths} Months)`,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          scheme: `${selectedScheme.formattedValue || '₹2,50,000'} — ${selectedScheme.nameEnglish || 'Chit Scheme'}`,
        }));
      }
    }
  }, [selectedScheme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const messageText = encodeURIComponent(
      `Hello Shiva Kaveri Chits,\nMy Name: ${formData.fullName || 'Member'}\nPhone: ${formData.phone || ''}\nI am interested in: ${formData.scheme}\nLocation: ${formData.city}`
    );
    window.open(`https://wa.me/919929922469?text=${messageText}`, '_blank');
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Shiva+Kaveri+Chits+Private+Limited%2C+28-8-25%2F1%2C+Eluru+Properties+Rd%2C+opp.+SR+Studio%2C+Vuppu+Rama+Rao+Area%2C+Narasimharao+Pet%2C+Eluru%2C+Andhra+Pradesh+534006`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=Shiva+Kaveri+Chits+Private+Limited%2C+28-8-25%2F1%2C+Eluru+Properties+Rd%2C+opp.+SR+Studio%2C+Vuppu+Rama+Rao+Area%2C+Narasimharao+Pet%2C+Eluru%2C+Andhra+Pradesh+534006&t=&z=17&ie=UTF8&iwloc=B&output=embed`;

  return (
    <section
      id="enquiry"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-ivory dark:bg-[#03120C] text-charcoal dark:text-ivory transition-colors duration-500 border-t border-gold/20"
    >
      {/* Background Texture & Ambient Glow */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] z-[1] mix-blend-multiply dark:mix-blend-screen" />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 40%, rgba(184, 142, 56, 0.08), transparent 70%),
            radial-gradient(circle 450px at 80% 60%, rgba(15, 56, 44, 0.05), transparent 60%)
          `,
        }}
      />

      {/* Subtle English Typography Watermark */}
      <div className="absolute top-[8%] right-[2%] pointer-events-none select-none z-[1] font-english-display font-black text-[clamp(4.5rem,12vw,14rem)] leading-none text-gold/[0.03] dark:text-gold/[0.03] uppercase">
        CONNECT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-white/80 dark:bg-forest-dark/80 backdrop-blur-sm shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark dark:text-gold-light" />
            <span className="font-english-display text-xs sm:text-sm font-bold text-forest dark:text-gold-light tracking-wider uppercase">
              Reach Out & Visit Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest dark:text-ivory tracking-tight leading-tight">
            Start Your Savings Journey <span className="text-gradient-gold">With Us</span>
          </h2>

          <p className="text-xs sm:text-sm text-charcoal/75 dark:text-ivory/75 leading-relaxed">
            Visit our registered office in Eluru or request a personalized consultation below.
          </p>
        </div>

        {/* 50% - 50% Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* =========================================================================
              LEFT COLUMN: CLEAN ENQUIRY FORM (lg:col-span-6)
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full bg-white/95 dark:bg-[#071F17]/95 backdrop-blur-md rounded-2xl border border-gold/30 dark:border-gold/30 p-6 sm:p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Form Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-gold/20 mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-forest dark:text-ivory">
                      Online Consultation Form
                    </h3>
                    <p className="text-xs text-gold-dark dark:text-gold-light uppercase tracking-wider font-semibold mt-0.5">
                      Personalized Financial Guidance
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-forest/5 dark:bg-gold/10 border border-gold/30 flex items-center justify-center text-forest dark:text-gold flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>

                {isSubmitted ? (
                  /* Success Screen */
                  <div className="py-8 px-4 text-center space-y-4 animate-fade-in my-auto">
                    <div className="w-14 h-14 rounded-full bg-forest/10 dark:bg-gold/20 border-2 border-forest dark:border-gold text-forest dark:text-gold mx-auto flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-forest dark:text-ivory">
                      Thank You! Request Received.
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80 dark:text-ivory/80 max-w-sm mx-auto leading-relaxed">
                      Our financial advisor will contact you within <strong>24 hours</strong> with complete scheme details.
                    </p>
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs shadow-sm transition-all cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            scheme: '₹2,50,000 (Godavari Samruddhi Chit)',
                            city: 'Eluru (Head Office)',
                            message: '',
                          });
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 border border-gold/40 text-forest dark:text-gold-light hover:bg-gold/10 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Enquiry Form Inputs */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal/90 dark:text-ivory/90 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal/40 dark:text-ivory/40">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Venkateswara Rao"
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-forest-surface/40 dark:bg-forest/40 border border-gold/30 dark:border-gold/30 text-charcoal dark:text-ivory placeholder-charcoal/40 dark:placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/60 text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Location Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-semibold text-charcoal/90 dark:text-ivory/90 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal/40 dark:text-ivory/40 font-semibold text-xs">
                            +91
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            maxLength="10"
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="99299 XXXXX"
                            className="w-full pl-11 pr-3 py-2.5 rounded-xl bg-forest-surface/40 dark:bg-forest/40 border border-gold/30 dark:border-gold/30 text-charcoal dark:text-ivory placeholder-charcoal/40 dark:placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/60 text-xs sm:text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Location / Town */}
                      <div>
                        <label className="block text-xs font-semibold text-charcoal/90 dark:text-ivory/90 mb-1">
                          Location / Town
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal/40 dark:text-ivory/40">
                            <Building className="w-4 h-4" />
                          </div>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-forest-surface/40 dark:bg-forest/40 border border-gold/30 dark:border-gold/30 text-charcoal dark:text-ivory focus:outline-none focus:ring-2 focus:ring-gold/60 text-xs sm:text-sm transition-all cursor-pointer"
                          >
                            <option value="Eluru (Head Office)" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">Eluru (Head Office)</option>
                            <option value="Bhimavaram" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">Bhimavaram</option>
                            <option value="Tadepalligudem" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">Tadepalligudem</option>
                            <option value="Vijayawada" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">Vijayawada</option>
                            <option value="Other Region" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">Other Region</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Chit Scheme */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal/90 dark:text-ivory/90 mb-1">
                        Select Chit Scheme
                      </label>
                      <select
                        name="scheme"
                        value={formData.scheme}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-forest-surface/40 dark:bg-forest/40 border border-gold/30 dark:border-gold/30 text-charcoal dark:text-ivory focus:outline-none focus:ring-2 focus:ring-gold/60 text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        {CHIT_SCHEMES.map((scheme) => (
                          <option
                            key={scheme.id}
                            value={`${scheme.formattedValue} — ${scheme.nameEnglish} (${scheme.tenureMonths} Months)`}
                            className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory"
                          >
                            {scheme.formattedValue} — {scheme.nameEnglish} ({scheme.tenureMonths} Months)
                          </option>
                        ))}
                        <option value="Custom Scheme / General Advisory" className="bg-white dark:bg-forest-deep text-charcoal dark:text-ivory">
                          Custom Scheme / General Advisory
                        </option>
                      </select>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal/90 dark:text-ivory/90 mb-1">
                        Message / Query (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows="2"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific questions or preferred consultation timing..."
                        className="w-full px-3 py-2 rounded-xl bg-forest-surface/40 dark:bg-forest/40 border border-gold/30 dark:border-gold/30 text-charcoal dark:text-ivory placeholder-charcoal/40 dark:placeholder-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold/60 text-xs sm:text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button & Fast WhatsApp */}
                    <div className="pt-1 space-y-2.5">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#B88E38] via-[#D4AF57] to-[#B88E38] hover:from-[#D4AF57] hover:to-[#B88E38] text-[#08221A] rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-[#08221A] border-t-transparent rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <>
                            <span>Submit Enquiry</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-between text-xs text-charcoal/60 dark:text-ivory/60 pt-0.5">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-forest dark:text-gold" />
                          <span>100% Confidential</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="text-forest dark:text-gold-light hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Direct WhatsApp Chat</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </form>
                )}
              </div>

              {/* Bottom Regulatory Note */}
              <div className="mt-5 pt-3 border-t border-gold/20 flex items-center justify-between text-[0.7rem] text-charcoal/60 dark:text-ivory/60">
                <span>🏛️ Chit Funds Act, 1982 Registered</span>
                <span className="uppercase font-semibold text-gold-dark dark:text-gold-light">Narasimharao Pet, Eluru</span>
              </div>

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: FULL-HEIGHT GOOGLE MAP & OFFICE PHOTO (lg:col-span-6)
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full bg-white/95 dark:bg-[#071F17]/95 backdrop-blur-md rounded-2xl border border-gold/30 dark:border-gold/30 p-6 sm:p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-forest/15 dark:from-gold/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex-1 flex flex-col space-y-4">
                
                {/* Header & View Mode Switcher */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-gold/20">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-forest dark:text-ivory">
                      Office Location & Map
                    </h3>
                    <p className="text-xs text-gold-dark dark:text-gold-light uppercase tracking-wider font-semibold mt-0.5">
                      Direct Google Map Navigation
                    </p>
                  </div>

                  {/* Clean Toggle Switch */}
                  <div className="inline-flex items-center p-1 bg-forest-surface/70 dark:bg-forest/50 border border-gold/30 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setViewMode('map')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        viewMode === 'map'
                          ? 'bg-forest dark:bg-gold text-white dark:text-forest-deep shadow-xs'
                          : 'text-charcoal/70 dark:text-ivory/70 hover:text-forest dark:hover:text-gold-light'
                      }`}
                    >
                      🗺️ Google Map
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('office')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        viewMode === 'office'
                          ? 'bg-forest dark:bg-gold text-white dark:text-forest-deep shadow-xs'
                          : 'text-charcoal/70 dark:text-ivory/70 hover:text-forest dark:hover:text-gold-light'
                      }`}
                    >
                      🏢 Office Photo
                    </button>
                  </div>
                </div>

                {/* Full-Height Media Container (Google Map vs Office Photo) */}
                <div className="flex-1 min-h-[360px] sm:min-h-[400px] w-full rounded-xl overflow-hidden border-2 border-gold/40 shadow-inner relative group">
                  {viewMode === 'map' ? (
                    <>
                      <iframe
                        title="Shiva Kaveri Chits Private Limited Eluru Pinpoint Map"
                        src={mapEmbedUrl}
                        className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98] group-hover:contrast-100 transition-all duration-300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />

                      {/* Floating Pinpoint Location Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#071F17]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gold/50 shadow-lg flex items-center gap-2.5 max-w-[280px] sm:max-w-none">
                        <div className="w-7 h-7 rounded-full bg-red-600/15 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-red-600 animate-bounce" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-forest dark:text-gold-light leading-tight">
                            Shiva Kaveri Chits Private Limited
                          </div>
                          <div className="text-[0.68rem] text-charcoal/70 dark:text-ivory/70 font-medium">
                            Opp. SR Studio, Narasimharao Pet, Eluru (534006)
                          </div>
                        </div>
                      </div>

                      {/* Open in Google Maps Action */}
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 bg-forest/90 dark:bg-gold/95 hover:bg-forest dark:hover:bg-gold text-white dark:text-forest-deep px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Navigate on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </>
                  ) : (
                    <>
                      <img
                        src="/assets/images/siva_kaveri_office.png"
                        alt="Shiva Kaveri Chits — Registered Office Building in Eluru"
                        className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#04130E]/85 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#071F17]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/40 shadow-md flex items-center gap-2 text-xs font-semibold text-forest dark:text-gold-light">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Registered Head Office Building</span>
                      </div>

                      {/* Bottom overlay with quick directions */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-xs text-ivory font-medium bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          Opp. SR Studio, Narasimharao Pet
                        </span>

                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-forest/90 dark:bg-gold/95 hover:bg-forest dark:hover:bg-gold text-white dark:text-forest-deep px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Get Route Directions</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-gold/20 flex items-center justify-between text-[0.7rem] text-charcoal/60 dark:text-ivory/60">
                <span>📍 28-8-25/1, Opp. SR Studio, Narasimharao Pet</span>
                <span className="uppercase font-semibold text-gold-dark dark:text-gold-light">PIN: 534006</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
