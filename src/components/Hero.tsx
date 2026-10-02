import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Phone, MessageSquare, ArrowUpRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

const HERO_BACKGROUNDS = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85",
    title: "Civil Lines Master Living Suite",
    type: "Bespoke Interiors & Joinery",
    tag: "Modern Living Interior"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
    title: "Sanjay Place Courtyard Residence",
    type: "Architecture & 3D Spatial Planning",
    tag: "3D Visualized & Built"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=85",
    title: "Taj Corridor Linear Villa",
    type: "Photorealistic 3D Visualization",
    tag: "Precision Elevation"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  // Hero scroll transform: headline drifts up and gently dims on scroll
  const contentY = useTransform(smoothProgress, [0, 0.45], [0, -60]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0.15]);
  const bgScale = useTransform(smoothProgress, [0, 0.5], [1, 1.08]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen min-h-[700px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden m-0 p-0"
    >
      {/* Inset Morphing Container: contracts into a soft-corner floating architectural card on scroll */}
      <div
        className={`relative w-full h-full flex flex-col justify-between overflow-hidden transition-[clip-path,border-radius,box-shadow] duration-700 ease-out-quint bg-[#0C0E14] border-b border-white/10 ${
          isScrolled
            ? 'clip-inset-collapsed shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]'
            : 'clip-inset-full shadow-none border-t-0'
        }`}
      >
        {/* Background Architectural Interior Carousel with Cinematic Ken Burns Movement */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 origin-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={HERO_BACKGROUNDS[currentBg].image}
                alt={HERO_BACKGROUNDS[currentBg].title}
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
              />
              {/* Cinematic Vignette Overlays matching Reference Image 1 UI Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 lg:w-[68%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Main Hero Content (Floats in front of background with soft scroll drift) */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-28 sm:pt-32 lg:pt-36 pb-6 lg:pb-8"
        >
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold tracking-[-0.035em] text-white leading-[1.06]"
            >
              Distinctive spaces. <br />
              <span className="font-serif-accent italic font-normal text-[#C9A86A]">
                precision 3D planning
              </span>{' '}
              before you build.
            </motion.h1>

            {/* Primary & Secondary Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Primary Start Project Pill */}
              <button
                id="hero-start-project-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111317] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md group border border-white/20 cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Direct Call Button */}
              <a
                id="hero-call-now-btn"
                href={STUDIO_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-white/90 backdrop-blur-md text-[#111317] text-xs sm:text-sm font-semibold uppercase tracking-wider border border-[#DCD8CE] hover:bg-white transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#7A7872]" />
                <span>Call Studio</span>
              </a>

              {/* WhatsApp Quick Button */}
              <a
                id="hero-whatsapp-btn"
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-[#EAF5EF] text-[#1B633B] text-xs sm:text-sm font-semibold uppercase tracking-wider border border-[#BDE3CC] hover:bg-[#D7EFE0] transition-all shadow-2xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Social Proof Pill Badge - Real Google Reviews 4.9 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4 text-xs"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs text-white">
                <div className="flex items-center text-[#C9A86A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A86A] text-[#C9A86A]" />
                  ))}
                </div>
                <span className="font-extrabold text-white">4.9</span>
                <span className="text-white/80 uppercase tracking-wider font-medium text-[11px]">Google Rating</span>
                <span className="text-white/40">•</span>
                <span className="font-bold text-white text-[11px]">43+ Reviews</span>
              </div>

              <div className="text-xs text-white/70">
                Verified client feedback in Sanjay Place, Agra
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
