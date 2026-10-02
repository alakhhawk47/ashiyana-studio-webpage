import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Architecture',
    location: 'Agra',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div id="contact" className="py-20 lg:py-24 text-[#F7F6F2] relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Studio Pitch & Direct Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
                Initiate your <br />
                <span className="font-serif-accent italic font-normal text-[#C9A86A]">
                  spatial
                </span>{' '}
                project.
              </h2>
              <p className="text-base text-[#9AA3B4] leading-relaxed">
                Whether you have an empty plot ready for architectural blueprints, require complete 3D visualization, or need modern interior transformation in Agra.
              </p>
            </div>

            {/* Direct Action Hub in Dark Card */}
            <div className="p-7 rounded-[2rem] bg-[#131722] border border-white/10 space-y-3.5 shadow-xl">
              <h3 className="text-xs uppercase tracking-widest text-[#C9A86A] font-bold">
                Direct Communication
              </h3>

              {/* Call */}
              <a
                id="contact-call-btn"
                href={STUDIO_CONFIG.phoneTel}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A202E] border border-white/15 hover:border-[#C9A86A] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#131722] text-white flex items-center justify-center border border-white/15">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#828B9C] tracking-wider block">
                      Call Studio Directly
                    </span>
                    <span className="text-sm font-bold text-white">
                      {STUDIO_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9A86A] group-hover:translate-x-1 transition-transform">
                  CALL →
                </span>
              </a>

              {/* WhatsApp */}
              <a
                id="contact-whatsapp-btn"
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0E291C] text-[#55D28A] border border-[#1F5438] hover:bg-[#133A27] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2016] text-[#55D28A] flex items-center justify-center border border-[#1F5438]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#55D28A]/80 tracking-wider block">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-[#55D28A]">
                      Discuss Requirements
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#55D28A] group-hover:translate-x-1 transition-transform">
                  CHAT ↗
                </span>
              </a>

              {/* Directions */}
              <a
                id="contact-directions-btn"
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A202E] border border-white/15 hover:border-[#C9A86A] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#131722] text-[#C9A86A] flex items-center justify-center border border-white/15">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#828B9C] tracking-wider block">
                      Studio Address
                    </span>
                    <span className="text-xs font-bold text-white">
                      Shop 9, Block 19, Sanjay Place, Agra
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9A86A] group-hover:translate-x-1 transition-transform">
                  GET DIRECTIONS ↗
                </span>
              </a>
            </div>

            {/* Reassurance Metrics */}
            <div className="grid grid-cols-2 gap-4 text-xs text-[#9AA3B4]">
              <div className="p-4 rounded-2xl bg-[#131722] border border-white/10">
                <span className="font-bold text-white block mb-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Response Time</span>
                </span>
                <span>Within 2 to 4 business hours</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#131722] border border-white/10">
                <span className="font-bold text-white block mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Studio Walk-Ins</span>
                </span>
                <span>Mon-Sat, 10 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form in Dark Card */}
          <div className="lg:col-span-7 bg-[#131722] border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#0E291C] text-[#55D28A] mx-auto rounded-full flex items-center justify-center border border-[#1F5438]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-[#9AA3B4] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Ashiyana Design Studio. Our architectural team will review your project requirements and connect with you shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={STUDIO_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A86A] text-[#0B0D12] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA80] transition-colors shadow-lg"
                  >
                    <span>Connect on WhatsApp for Immediate Priority</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    Book Architectural Consultation
                  </h3>
                  <p className="text-xs text-[#828B9C]">
                    Fill in your details below. We review site dimensions, municipal feasibility, and budget expectations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alakhraj Singh"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A86A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 84453 XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A86A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/80 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/15 text-white text-sm focus:outline-none focus:border-[#C9A86A] transition-colors"
                    >
                      <option value="Residential Architecture">Residential Villa / Bungalow</option>
                      <option value="Interior Architecture">Modern Interior Design</option>
                      <option value="3D Visualization Only">Photorealistic 3D Planning & Elevation</option>
                      <option value="Commercial / Office">Commercial / Office Space</option>
                      <option value="Renovation">Complete Facade Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-white/80 mb-2">
                      Site Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Sanjay Place, Agra / Fatehabad Rd"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A86A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-white/80 mb-2">
                    Plot Dimensions & Project Brief
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site area (e.g., 200 sq. yards), floors planned, or key aesthetic preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A86A] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C9A86A] text-[#0B0D12] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA80] transition-colors shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#828B9C] mt-2">
                    Ashiyana Design Studio values your privacy. Your contact details remain confidential.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
