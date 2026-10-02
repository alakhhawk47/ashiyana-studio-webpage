import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { X, Send, MessageSquare, Phone, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scope, setScope] = useState('Full Architectural Design & 3D');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const encoded = encodeURIComponent(
      `Hello Ashiyana Design Studio, I am ${name || 'a client'}. I would like to discuss my project (${scope}) in Agra. Details: ${details || 'Please connect with me.'}`
    );
    window.open(`https://wa.me/918445364590?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E5E2DA] rounded-[2rem] w-full max-w-lg shadow-2xl p-6 sm:p-8 relative my-auto text-[#111317]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7A7872] hover:text-[#111317] hover:bg-[#FAF9F6] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF8EE] border border-[#F0DFB7] text-[#9E7322] text-[10px] font-bold uppercase tracking-wider mb-3">
            <span>Sanjay Place, Agra Studio</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111317] tracking-tight">
            Start a Project
          </h3>
          <p className="text-xs text-[#55534E] mt-1">
            Connect directly with Ashiyana Design Studio architects for consultation.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#EAF5EF] text-[#1B633B] mx-auto rounded-full flex items-center justify-center border border-[#BDE3CC]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-heading text-xl font-bold text-[#111317]">
              Consultation Requested
            </h4>
            <p className="text-xs text-[#55534E] max-w-xs mx-auto leading-relaxed">
              We received your details and will call you back within business hours.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-full bg-[#EAF5EF] border border-[#BDE3CC] text-[#1B633B] text-xs font-bold uppercase tracking-wider hover:bg-[#D7EFE0] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-white border border-[#DCD8CE] text-[#111317] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111317] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Prashant Singh"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#DCD8CE] text-sm text-[#111317] placeholder:text-[#7A7872] focus:outline-hidden focus:border-[#111317] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111317] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 84453 64590"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#DCD8CE] text-sm text-[#111317] placeholder:text-[#7A7872] focus:outline-hidden focus:border-[#111317] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111317] mb-1">
                Project Discipline
              </label>
              <select
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#DCD8CE] text-sm text-[#111317] focus:outline-hidden focus:border-[#111317] focus:bg-white transition-all"
              >
                <option value="Full Architectural Design & 3D">Full Architectural Design & 3D</option>
                <option value="Modern Interior Architecture">Modern Interior Architecture</option>
                <option value="3D Elevation & Photorealistic Render">3D Elevation & Photorealistic Render</option>
                <option value="Commercial Complex Masterplan">Commercial Complex Masterplan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111317] mb-1">
                Plot Location / Scope
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Location in Agra (e.g. Sanjay Place, Civil Lines, Fatehabad Road) and initial thoughts..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#DCD8CE] text-sm text-[#111317] placeholder:text-[#7A7872] focus:outline-hidden focus:border-[#111317] focus:bg-white transition-all"
              />
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#111317] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Architectural Callback</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-full bg-[#EAF5EF] border border-[#BDE3CC] text-[#1B633B] text-xs font-bold uppercase tracking-wider hover:bg-[#D7EFE0] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Instantly on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
