"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";

export interface Skiper52ImageItem {
  src: string;
  alt: string;
  code: string;
  title?: string;
  category?: string;
  location?: string;
  onClick?: () => void;
}

interface Skiper52Props {
  images?: Skiper52ImageItem[];
  className?: string;
  onSelectImage?: (index: number) => void;
}

const DEFAULT_IMAGES: Skiper52ImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "The Sanjay Place Courtyard Residence",
    code: "# 01",
    title: "Sanjay Place Courtyard",
    category: "Residential",
    location: "Civil Lines, Agra"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    alt: "Taj Expressway Linear Villa",
    code: "# 02",
    title: "Taj Expressway Villa",
    category: "3D Visualization",
    location: "Fatehabad Road, Agra"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    alt: "Sanjay Place Executive Law Chambers",
    code: "# 03",
    title: "Executive Chambers",
    category: "Commercial",
    location: "Sanjay Place, Agra"
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    alt: "Amber Living Penthouse Interior",
    code: "# 04",
    title: "Amber Penthouse",
    category: "Interiors",
    location: "Khandari, Agra"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Fatehabad Heritage Boutique Hotel",
    code: "# 05",
    title: "Heritage Hotel",
    category: "Hospitality",
    location: "Taj East Gate, Agra"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
    alt: "Dayalbagh Eco Residence",
    code: "# 06",
    title: "Eco Residence",
    category: "Residential",
    location: "Dayalbagh, Agra"
  }
];

const Skiper52: React.FC<Skiper52Props> = ({
  images = DEFAULT_IMAGES,
  className,
  onSelectImage,
}) => {
  return (
    <div className={cn("flex h-full w-full items-center justify-center overflow-hidden", className)}>
      <HoverExpand_001 images={images} onSelectImage={onSelectImage} />
    </div>
  );
};

interface HoverExpandProps {
  images: Skiper52ImageItem[];
  className?: string;
  onSelectImage?: (index: number) => void;
}

const HoverExpand_001: React.FC<HoverExpandProps> = ({
  images,
  className,
  onSelectImage,
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.35,
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
          {images.map((image, index) => {
            const isActive = activeImage === index;
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 group select-none shadow-2xl transition-all duration-300",
                  isActive ? "border-[#C9A86A]/70 ring-1 ring-[#C9A86A]/40" : "hover:border-white/30"
                )}
                initial={{ width: "3.5rem", height: "24rem" }}
                animate={{
                  width: isActive ? "25rem" : "5rem",
                  height: "25rem",
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                onClick={() => {
                  setActiveImage(index);
                  if (isActive && image.onClick) {
                    image.onClick();
                  } else if (onSelectImage) {
                    onSelectImage(index);
                  }
                }}
                onHoverStart={() => setActiveImage(index)}
              >
                {/* Active gradient reveal */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"
                    />
                  )}
                </AnimatePresence>

                {/* Inactive vertical tag */}
                {!isActive && (
                  <div className="absolute top-4 inset-x-0 flex flex-col items-center z-20 pointer-events-none">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#E5C58E] bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                      {image.code}
                    </span>
                    {image.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 [writing-mode:vertical-lr] rotate-180 mt-6">
                        {image.category}
                      </span>
                    )}
                  </div>
                )}

                {/* Active content reveal */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-6"
                    >
                      <div className="flex items-center justify-between gap-2">
                        {image.category && (
                          <span className="px-3 py-1 rounded-full bg-[#0B0D12]/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                            {image.category}
                          </span>
                        )}
                        <p className="text-xs font-mono font-bold text-[#E5C58E] bg-[#C9A86A]/20 px-2.5 py-1 rounded-full border border-[#C9A86A]/40">
                          {image.code}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {image.location && (
                          <p className="text-xs text-white/70 font-medium">{image.location}</p>
                        )}
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                          {image.title || image.alt}
                        </h4>
                        <div className="pt-2">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C9A86A] text-[#0B0D12] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BA80] transition-colors shadow-md">
                            View Details ↗
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <img
                  src={image.src}
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt={image.alt}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { Skiper52, HoverExpand_001 };
