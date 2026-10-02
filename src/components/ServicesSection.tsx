import React from 'react';
import { STUDIO_SERVICES } from '../data/projectsData';
import { Compass, Layers, Home, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div id="services" className="py-20 lg:py-24 text-[#111317]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#E5E2DA]">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88E3E] block">
              03 / STUDIO DISCIPLINES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#111317]">
              Comprehensive Design Services
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#55534E] max-w-sm">
            From initial site sketches and municipality bylaws to photorealistic 3D visualization and precise turnkey finishing in Agra.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E5E2DA] rounded-2xl p-8 flex flex-col justify-between hover:border-[#B88E3E]/60 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E2DA]">
                  <span className="text-xs font-bold tracking-widest text-[#B88E3E] uppercase">
                    SERVICE {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FDF8EE] text-[#B88E3E] border border-[#F0DFB7] flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#111317] mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] mb-4">
                  {service.subtitle}
                </p>

                <p className="text-sm text-[#55534E] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A7872]">
                    Core Deliverables
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs text-[#2A2D35] bg-[#FAF9F6] border border-[#E5E2DA] px-3 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B633B]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5E2DA] flex items-center justify-between">
                <span className="text-xs text-[#7A7872]">
                  Turnkey Coordination Included
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF9F6] border border-[#DCD8CE] text-[#111317] hover:bg-[#111317] hover:text-white transition-all group"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
