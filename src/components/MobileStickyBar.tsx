import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Phone, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E2DA] px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        id="mobile-sticky-call-btn"
        href={STUDIO_CONFIG.phoneTel}
        className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl bg-[#FAF9F6] text-[#111317] border border-[#E5E2DA] text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-[#55534E] mb-0.5" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        id="mobile-sticky-whatsapp-btn"
        href={STUDIO_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl bg-[#EAF5EF] text-[#1B633B] border border-[#BDE3CC] text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      {/* Get Directions Button - EXACT REQUIREMENT */}
      <a
        id="mobile-sticky-directions-btn"
        href={STUDIO_CONFIG.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl bg-[#FAF9F6] text-[#111317] border border-[#E5E2DA] text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform"
      >
        <MapPin className="w-4 h-4 text-[#B88E3E] mb-0.5" />
        <span>Directions ↗</span>
      </a>

      {/* Project CTA */}
      <button
        onClick={onOpenConsultation}
        className="flex-1 flex flex-col items-center justify-center py-2 rounded-xl bg-[#111317] text-white text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-xs"
      >
        <ArrowUpRight className="w-4 h-4 mb-0.5 text-white" />
        <span>Inquire</span>
      </button>
    </div>
  );
};
