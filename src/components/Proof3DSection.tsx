import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Eye, CheckCircle2, ArrowRight, Sliders } from 'lucide-react';

interface Proof3DSectionProps {
  onOpenConsultation: () => void;
}

export const Proof3DSection: React.FC<Proof3DSectionProps> = ({ onOpenConsultation }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior' | 'layout'>('exterior');

  const rendersByTab = {
    exterior: {
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      title: "Agra Courtyard Villa Elevation",
      beforeLabel: "2D Engineering CAD & Wireframe",
      afterLabel: "Photorealistic 3D Sunlight & Material Simulation"
    },
    interior: {
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      title: "Civil Lines Master Living Suite",
      beforeLabel: "Spatial Volume & Framing Study",
      afterLabel: "High-Definition Texture & Lighting Render"
    },
    layout: {
      before: "https://images.unsplash.com/photo-1581291518655-9523c932ded6?auto=format&fit=crop&w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      title: "Commercial Chamber Planning",
      beforeLabel: "Zoning & Flow Draft",
      afterLabel: "Finished Spatial Simulation"
    }
  };

  const currentComparison = rendersByTab[activeTab];

  return (
    <div id="3d-visualization" className="py-20 lg:py-24 text-[#111317]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#111317] leading-[1.05]">
            Visualize <br />
            <span className="font-serif-accent italic font-normal text-[#B88E3E]">
              before you
            </span>{' '}
            build.
          </h2>
        </div>

        {/* Interactive 2D to 3D Comparison Slider in White Card */}
        <div className="mb-14 bg-white border border-[#E5E2DA] rounded-[2rem] p-5 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E5E2DA]">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-[#B88E3E]">
                Interactive Render Explorer
              </span>
              <h3 className="font-heading font-bold text-xl text-[#111317]">
                {currentComparison.title}
              </h3>
            </div>

            {/* Switch Tabs Pill */}
            <div className="flex items-center bg-[#FAF9F6] border border-[#E5E2DA] p-1 rounded-full gap-1">
              {(['exterior', 'interior', 'layout'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-[#111317] text-white shadow-xs'
                      : 'text-[#55534E] hover:text-[#111317]'
                  }`}
                >
                  {tab === 'exterior' && 'Exterior Elevation'}
                  {tab === 'interior' && 'Interior Living'}
                  {tab === 'layout' && 'Zoning & Space'}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden select-none group border border-[#E5E2DA]">
            {/* After Image (Full Background) */}
            <img
              src={currentComparison.after}
              alt="3D Photorealistic Render"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 right-4 z-10 bg-black/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-white/20">
              {currentComparison.afterLabel}
            </div>

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentComparison.before}
                alt="2D Architectural Plan"
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125"
                style={{
                  width: '100%',
                  minWidth: '100%',
                  maxWidth: 'none',
                }}
              />
              <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-white/20">
                {currentComparison.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#111317] border-2 border-white text-white flex items-center justify-center shadow-md">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Native Touch/Mouse Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare 2D CAD vs 3D Render"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#55534E] px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B88E3E]" />
              Drag slider horizontally to compare CAD wireframes vs. photorealistic 3D visualization.
            </span>
            <span className="font-semibold text-[#111317]">
              Zero guesswork before site mobilization.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
