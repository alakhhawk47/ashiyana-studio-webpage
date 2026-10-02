import React from 'react';
import { Star } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="bg-[#0B0D12] text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* ITEM 1: 4.9 ★ GOOGLE RATING */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 text-[#C9A86A] text-base mb-1 font-bold">
              <span className="font-heading text-2xl text-white font-extrabold tracking-tight">4.9</span>
              <Star className="w-5 h-5 fill-[#C9A86A] text-[#C9A86A]" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-bold">
              GOOGLE RATING
            </span>
          </div>

          {/* ITEM 2: 43+ GOOGLE REVIEWS */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
            <div className="font-heading text-2xl font-extrabold text-white mb-1 tracking-tight">
              43+
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9AA3B4] font-bold">
              GOOGLE REVIEWS
            </span>
          </div>

          {/* ITEM 3: ARCHITECTURE • INTERIORS */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
            <div className="font-heading text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
              ARCHITECTURE
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9AA3B4] font-bold">
              • INTERIORS
            </span>
          </div>

          {/* ITEM 4: 3D VISUALIZATION */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
            <div className="font-heading text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
              3D
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-bold">
              VISUALIZATION
            </span>
          </div>

          {/* ITEM 5: AGRA, UTTAR PRADESH */}
          <div className="pt-4 md:pt-0 col-span-2 md:col-span-1 flex flex-col items-center justify-center">
            <div className="font-heading text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
              AGRA
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9AA3B4] font-bold">
              UTTAR PRADESH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
