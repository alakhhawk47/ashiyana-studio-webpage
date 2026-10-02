import React from 'react';
import { FEATURED_PROJECTS } from '../data/projectsData';
import { ProjectItem } from '../types';
import { Skiper52 } from './Skiper52';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  return (
    <div id="portfolio" className="py-20 lg:py-24 text-[#F7F6F2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-10 border-b border-white/10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A86A] block">
              02 / SELECTED WORKS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white">
              Portfolio & 3D Studies
            </h2>
          </div>
        </div>

        {/* PRIMARY SKIPER52 UI WORK SHOWCASE */}
        <div className="w-full">
          <Skiper52
            projects={FEATURED_PROJECTS}
            onSelectProject={onSelectProject}
          />
        </div>

      </div>
    </div>
  );
};
