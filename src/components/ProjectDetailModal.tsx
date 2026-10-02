import React from 'react';
import { ProjectItem } from '../types';
import { STUDIO_CONFIG } from '../data/studioData';
import { X, MapPin, Calendar, Layers, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-[#E5E2DA] rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between my-auto text-[#111317]">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E5E2DA] flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#111317] text-white px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              {project.area && (
                <span className="text-xs text-[#7A7872]">
                  • {project.area}
                </span>
              )}
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#111317]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7A7872] hover:text-[#111317] hover:bg-[#FAF9F6] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Showcase */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FAF9F6] border border-[#E5E2DA]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-heading text-lg font-bold text-[#111317] uppercase tracking-tight">
                Architectural Concept & Scope
              </h4>
              <p className="text-sm text-[#55534E] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-2">
                <h5 className="text-xs uppercase tracking-widest text-[#B88E3E] font-bold mb-3">
                  Key Technical Features
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#2A2D35] bg-[#FAF9F6] p-3 rounded-xl border border-[#E5E2DA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B633B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E5E2DA] space-y-4 h-fit shadow-xs">
              <h5 className="text-xs uppercase tracking-widest text-[#B88E3E] font-bold pb-2 border-b border-[#E5E2DA]">
                Project Meta
              </h5>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#7A7872] block">Location</span>
                  <span className="font-bold text-[#111317] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B88E3E]" />
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="text-[#7A7872] block">Completion Year</span>
                  <span className="font-bold text-[#111317] mt-0.5 block">{project.year}</span>
                </div>
                {project.render3DType && (
                  <div>
                    <span className="text-[#7A7872] block">3D Visualization Mode</span>
                    <span className="font-bold text-[#B88E3E] mt-0.5 block">{project.render3DType}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E5E2DA]">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-full bg-[#111317] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Strips */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#B88E3E] font-bold mb-4">
                Additional Photographic & 3D Render Views
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, i) => (
                  <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF9F6] border border-[#E5E2DA]">
                    <img
                      src={imgUrl}
                      alt={`${project.title} gallery view ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#E5E2DA] bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EAF5EF] text-[#1B633B] border border-[#BDE3CC] text-xs font-bold uppercase tracking-wider hover:bg-[#D7EFE0] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </a>
            <a
              href={STUDIO_CONFIG.phoneTel}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#DCD8CE] text-[#111317] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors"
            >
              <span>Call +91 84453 64590</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#DCD8CE] text-[#111317] hover:bg-[#111317] hover:text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
