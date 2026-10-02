import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { ShieldCheck, Compass, Sparkles, Building, Layers, CheckCircle2, Star } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <div id="about" className="py-20 lg:py-24 text-[#F7F6F2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/30 text-[#E5C58E] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Studio Philosophy & Context</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
              Integrity in planning. <br />
              <span className="font-serif-accent italic font-normal text-[#C9A86A]">
                clarity in
              </span>{' '}
              every execution.
            </h2>

            <p className="text-base text-[#9AA3B4] leading-relaxed">
              At Ashiyana Design Studio, we believe architecture should respond with precision to climate, context, and the human routine. Operating from our studio in Sanjay Place, Civil Lines, Agra, we bridge high-end conceptual design with constructible site reality.
            </p>

            <p className="text-sm text-[#828B9C] leading-relaxed">
              Our 4.9-star Google rating and enthusiastic client feedback are built upon a simple commitment: providing complete 3D visualization transparency before construction begins, accompanied by meticulous on-site finish supervision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C9A86A] font-bold">
                  STUDIO DISCIPLINE
                </span>
                <p className="text-sm font-bold text-white">
                  Architectural Masterplanning & 3D Spatial Studies
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C9A86A] font-bold">
                  REGIONAL PRACTICE
                </span>
                <p className="text-sm font-bold text-white">
                  Agra, Mathura & NCR Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual / Architecture Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: 3D Visualization */}
            <div className="bg-[#131722] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#C9A86A]/40 transition-all shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Photorealistic 3D
              </h3>
              <p className="text-xs text-[#9AA3B4] leading-relaxed">
                Explore every surface, daylight angle, and joinery profile in high-definition CGI before buying materials.
              </p>
            </div>

            {/* Card 2: Responsible Team */}
            <div className="bg-[#131722] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#C9A86A]/40 transition-all shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Responsible Team
              </h3>
              <p className="text-xs text-[#9AA3B4] leading-relaxed">
                Commended by clients across Agra for punctual milestones, proactive site coordination, and structural honesty.
              </p>
            </div>

            {/* Card 3: Modern Finishing */}
            <div className="bg-[#131722] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#C9A86A]/40 transition-all shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#C9A86A]/10 text-[#C9A86A] flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Modern Finishing
              </h3>
              <p className="text-xs text-[#9AA3B4] leading-relaxed">
                Expertise in Italian stone, fluted panels, concealed lighting details, and seamless architectural finishes.
              </p>
            </div>

            {/* Card 4: Verified Rating Highlight */}
            <div className="bg-gradient-to-br from-[#181D2A] to-[#121622] border border-[#C9A86A]/30 text-white rounded-2xl p-6 space-y-3 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A86A]/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex text-[#C9A86A] text-xs gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
                  ))}
                </div>
                <div className="font-heading text-3xl font-extrabold text-white">4.9 / 5.0</div>
                <p className="text-xs text-[#9AA3B4] mt-1 leading-relaxed">
                  Google Verified Rating across 43+ genuine reviews from Agra homeowners and commercial clients.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#E5C58E] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                <span>100% VERIFIED CLIENT REVIEWS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
