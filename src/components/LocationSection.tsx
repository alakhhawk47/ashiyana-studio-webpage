import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { MapPin, ExternalLink, Star } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <div id="location" className="py-20 lg:py-24 text-[#111317] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#E5E2DA]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF8EE] border border-[#F0DFB7] text-[#9E7322] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#B88E3E]" />
              <span>Studio Headquarters</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#111317]">
              Sanjay Place, Agra
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#7A7872] font-semibold block">
              Direct Google Maps Link
            </span>
            <a
              id="location-get-directions-top-btn"
              href={STUDIO_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] hover:text-[#111317] transition-colors underline underline-offset-4"
            >
              <span>GET DIRECTIONS ↗</span>
            </a>
          </div>
        </div>

        {/* Interactive Map Visualizer & Location Guide in Full-Width Card */}
        <div className="w-full bg-white border border-[#E5E2DA] rounded-[2rem] p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-sm">
          {/* Map Embed Frame with Crisp Light Display */}
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-[1.6rem] overflow-hidden bg-[#FAF9F6]">
            <iframe
              title="Ashiyana Studio Google Maps Location"
              src="https://maps.google.com/maps?q=Ashiyana+Design+Studio+Sanjay+Place+Civil+Lines+Agra&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Verified Overlay Card */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-[#E5E2DA] rounded-2xl p-3.5 shadow-lg max-w-[270px]">
              <div className="flex items-center gap-1.5 text-[#B88E3E] text-xs font-bold mb-1">
                <Star className="w-3.5 h-3.5 fill-[#B88E3E] text-[#B88E3E]" />
                <span>4.9 Rating</span>
                <span className="text-[#7A7872] font-normal">• 43+ Reviews</span>
              </div>
              <p className="font-heading text-xs font-bold text-[#111317] leading-snug">
                {STUDIO_CONFIG.name}
              </p>
              <p className="text-[10px] text-[#55534E] mt-0.5">
                Block 19, Sanjay Place, Civil Lines, Agra
              </p>
            </div>

            {/* Direct Open Badge */}
            <a
              href={STUDIO_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111317] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-lg"
            >
              <span>Open in Maps App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Transit & Arrival Guide */}
          <div className="p-5 mt-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E2DA]">
            <h4 className="text-xs uppercase tracking-widest text-[#B88E3E] font-bold mb-3">
              Transit & Arrival Guide
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white border border-[#E5E2DA] rounded-xl">
                <p className="font-bold text-[#111317] mb-1">From MG Road</p>
                <p className="text-[#55534E] leading-relaxed">
                  Turn into Sanjay Place commercial avenue; 2 mins drive from St. John's crossing.
                </p>
              </div>
              <div className="p-3 bg-white border border-[#E5E2DA] rounded-xl">
                <p className="font-bold text-[#111317] mb-1">Near G.G Nursing Home</p>
                <p className="text-[#55534E] leading-relaxed">
                  Located in Block 19 right beside Max Mall, prominent architectural signage.
                </p>
              </div>
              <div className="p-3 bg-white border border-[#E5E2DA] rounded-xl">
                <p className="font-bold text-[#111317] mb-1">Parking Available</p>
                <p className="text-[#55534E] leading-relaxed">
                  Designated visitor parking spaces available in Sanjay Place plaza ground.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
