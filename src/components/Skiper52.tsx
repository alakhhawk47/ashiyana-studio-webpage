import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { ProjectItem } from "../types";
import { ArrowUpRight, MapPin, Maximize2, Sparkles, Layers } from "lucide-react";

interface Skiper52Props {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  className?: string;
}

export const Skiper52: React.FC<Skiper52Props> = ({
  projects,
  onSelectProject,
  className,
}) => {
  return (
    <div className={cn("w-full flex items-center justify-center overflow-hidden py-4", className)}>
      <HoverExpand_001 projects={projects} onSelectProject={onSelectProject} />
    </div>
  );
};

interface HoverExpandProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  className?: string;
}

export const HoverExpand_001: React.FC<HoverExpandProps> = ({
  projects,
  onSelectProject,
  className,
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  React.useEffect(() => {
    setActiveImage(0);
  }, [projects]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
      }}
      className={cn("relative w-full max-w-7xl px-2 sm:px-4", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-x-auto no-scrollbar py-2"
      >
        <div className="flex w-full min-w-max md:min-w-0 items-center justify-center gap-1.5 sm:gap-2 px-1">
          {projects.map((project, index) => {
            const isActive = activeImage === index;
            const codeString = `# 0${index + 1}`;

            return (
              <motion.div
                key={project.id}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 group select-none shadow-xl transition-colors",
                  isActive ? "border-[#C9A86A]/60 ring-1 ring-[#C9A86A]/40" : "hover:border-white/30"
                )}
                initial={{ width: "4rem", height: "24rem" }}
                animate={{
                  width: isActive ? "25rem" : "5.5rem",
                  height: "25rem",
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                onClick={() => {
                  if (isActive) {
                    onSelectProject(project);
                  } else {
                    setActiveImage(index);
                  }
                }}
                onHoverStart={() => setActiveImage(index)}
              >
                {/* Dark Gradient Overlay for Active Card */}
                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      key="active-gradient"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"
                    />
                  ) : (
                    <motion.div
                      key="inactive-dim"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-black/45 group-hover:bg-black/25 z-10 transition-colors"
                    />
                  )}
                </AnimatePresence>

                {/* Top Code Badge on Inactive Card */}
                {!isActive && (
                  <div className="absolute top-4 inset-x-0 flex flex-col items-center z-20 pointer-events-none">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-white/70 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                      {codeString}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 [writing-mode:vertical-lr] rotate-180 mt-6">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Rich Details Content Overlay on Active Card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="active-content"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-6"
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-[#0B0D12]/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                            {project.category}
                          </span>
                          {project.render3DType && (
                            <span className="px-2.5 py-1 rounded-full bg-[#C9A86A]/20 backdrop-blur-md text-[#E5C58E] text-[10px] font-bold uppercase tracking-wider border border-[#C9A86A]/40 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#C9A86A]" />
                              <span>3D Study</span>
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono font-bold tracking-widest text-[#E5C58E] bg-[#C9A86A]/15 px-2.5 py-1 rounded-full border border-[#C9A86A]/30">
                          {codeString}
                        </span>
                      </div>

                      {/* Bottom Info & Action */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-white/70">
                            <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
                            <span>{project.location}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                            {project.area && (
                              <>
                                <span>•</span>
                                <span>{project.area}</span>
                              </>
                            )}
                          </div>

                          <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-xs text-white/75 leading-relaxed line-clamp-2">
                            {project.tagline}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-[#C9A86A] text-[#0B0D12] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA80] transition-colors shadow-lg group/btn"
                        >
                          <span>Explore Project & 3D Renders</span>
                          <span className="w-5 h-5 rounded-full bg-[#0B0D12]/20 flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300">
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0D12]" />
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hero Image */}
                <img
                  src={project.heroImage}
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt={project.title}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};
