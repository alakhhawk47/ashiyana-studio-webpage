import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_CONFIG } from '../data/studioData';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const handleTalkClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#000000] text-[#EB3A25] pt-12 sm:pt-16 pb-8 overflow-hidden border-t-2 border-[#EB3A25] select-none">
      
      {/* 3D Animated Faceted Glass Cross / Prism in the Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            rotateY: [0, 180, 360],
            rotateX: [12, -12, 12],
            rotateZ: [0, 8, -8, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[580px] lg:h-[580px] opacity-25 lg:opacity-40"
        >
          {/* Faceted Translucent 3D Glass Geometric Shape with Refractive Highlights */}
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full filter drop-shadow-[0_0_40px_rgba(235,58,37,0.15)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="glassFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#EB3A25" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="glassFacet2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#EB3A25" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#111111" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="specularGlow" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#EB3A25" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Faceted 3D Cross Structure */}
            <g stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5">
              {/* Outer Contour */}
              <polygon
                points="175,40 325,40 325,175 460,175 460,325 325,325 325,460 175,460 175,325 40,325 40,175 175,175"
                fill="url(#glassFacet1)"
              />

              {/* Inner Bevels & Refraction Facets */}
              <polygon
                points="250,110 325,175 250,250 175,175"
                fill="url(#glassFacet2)"
                stroke="rgba(255,255,255,0.5)"
              />
              <polygon
                points="325,175 390,250 325,325 250,250"
                fill="url(#glassFacet1)"
                stroke="rgba(255,255,255,0.6)"
              />
              <polygon
                points="250,250 325,325 250,390 175,325"
                fill="url(#glassFacet2)"
                stroke="rgba(255,255,255,0.5)"
              />
              <polygon
                points="175,175 250,250 175,325 110,250"
                fill="url(#glassFacet1)"
                stroke="rgba(255,255,255,0.6)"
              />

              {/* Central Diamond Core */}
              <polygon
                points="250,180 320,250 250,320 180,250"
                fill="rgba(255, 255, 255, 0.12)"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
              />

              {/* Internal Refraction Wirelines */}
              <line x1="40" y1="175" x2="460" y2="325" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
              <line x1="175" y1="40" x2="325" y2="460" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
              <line x1="175" y1="40" x2="250" y2="250" stroke="url(#specularGlow)" strokeWidth="2" />
              <line x1="325" y1="40" x2="250" y2="250" stroke="rgba(255,255,255,0.3)" />
              <line x1="460" y1="175" x2="250" y2="250" stroke="url(#specularGlow)" strokeWidth="2" />
              <line x1="460" y1="325" x2="250" y2="250" stroke="rgba(255,255,255,0.3)" />
              <line x1="325" y1="460" x2="250" y2="250" stroke="url(#specularGlow)" strokeWidth="2" />
              <line x1="175" y1="460" x2="250" y2="250" stroke="rgba(255,255,255,0.3)" />
              <line x1="40" y1="325" x2="250" y2="250" stroke="url(#specularGlow)" strokeWidth="2" />
              <line x1="40" y1="175" x2="250" y2="250" stroke="rgba(255,255,255,0.3)" />
            </g>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Hero Header: Let's make it happen & ©26 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 sm:mb-12">
          
          {/* Left Title: Let's make it happen. */}
          <div className="lg:col-span-8">
            <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.5rem] font-black text-[#EB3A25] leading-[0.88] tracking-[-0.04em]">
              Let's make<br />it happen.
            </h2>
          </div>

          {/* Right Watermark: ©26 */}
          <div className="lg:col-span-4 flex items-start lg:justify-end">
            <span className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[10.5rem] font-black text-[#EB3A25] leading-none tracking-[-0.06em]">
              ©26
            </span>
          </div>

        </div>

        {/* Subtitle Prompt: Drop us a line to talk about your project */}
        <div className="mb-6 sm:mb-8 max-w-xl">
          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#EB3A25] leading-snug tracking-tight">
            Drop us a line to talk about your project.
          </p>
        </div>

        {/* FULL WIDTH "LET'S TALK" BUTTON - Transitions from RED to WHITE on Cursor Hover */}
        <div className="mb-12 sm:mb-16">
          <button
            onClick={handleTalkClick}
            className="group relative w-full bg-[#EB3A25] hover:bg-white text-black transition-colors duration-300 ease-out py-5 sm:py-6 lg:py-7 px-6 sm:px-10 flex items-center justify-between cursor-pointer shadow-2xl"
          >
            <span className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] tracking-tight text-black transition-colors duration-300">
              Let's Talk
            </span>
            <span className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-black transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
              ↗
            </span>
          </button>
        </div>

        {/* Bottom Strip: ++, Links, Address, and All rights reserved */}
        <div className="pt-6 border-t border-[#EB3A25]/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs sm:text-sm font-bold text-[#EB3A25]">
          
          {/* Logo ++ & Quick Navigation */}
          <div className="md:col-span-5 flex items-center gap-6 sm:gap-8 flex-wrap">
            <span className="font-black text-lg tracking-widest text-[#EB3A25]">
              ++
            </span>
            <a
              href="#hero"
              className="text-[#EB3A25] hover:underline underline-offset-4"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="text-[#EB3A25] hover:underline underline-offset-4"
            >
              Work
            </a>
            <a
              href="#3d-visualization"
              className="text-[#EB3A25] hover:underline underline-offset-4"
            >
              3D Design
            </a>
            <button
              onClick={handleTalkClick}
              className="text-[#EB3A25] hover:underline underline-offset-4 cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={scrollToTop}
              className="text-[#EB3A25] hover:underline underline-offset-4 cursor-pointer text-xs"
            >
              Top ↑
            </button>
          </div>

          {/* Physical Address Block in Red */}
          <div className="md:col-span-4 text-left md:text-center leading-relaxed">
            <p>{STUDIO_CONFIG.address.line1}, {STUDIO_CONFIG.address.line2}</p>
            <p>{STUDIO_CONFIG.address.cityStatePin}</p>
          </div>

          {/* Copyright Right Side */}
          <div className="md:col-span-3 text-left md:text-right font-medium">
            <span>All rights reserved ©2026</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
