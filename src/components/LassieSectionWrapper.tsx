import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface LassieSectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  className?: string;
  cardClassName?: string;
}

export const LassieSectionWrapper: React.FC<LassieSectionWrapperProps> = ({
  id,
  children,
  theme = 'light',
  className = '',
  cardClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure the scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Soft spring to provide the organic, heavy inertia feel of lassie.ai
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    mass: 0.5,
  });

  // Lassie.ai card scale & glide mechanics:
  // [0 -> 0.22]: Section glides in, expands from 0.94 -> 1.0, lifts y from 45px -> 0px
  // [0.22 -> 0.78]: Fully pinned in center, scale 1.0
  // [0.78 -> 1.0]: Slightly contracts to 0.97 as next card ascends
  const scale = useTransform(smoothProgress, [0, 0.22, 0.8, 1], [0.94, 1, 1, 0.97]);
  const y = useTransform(smoothProgress, [0, 0.22], [45, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.15], [0.82, 1]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 transition-colors duration-500 ${className}`}
    >
      <motion.div
        style={{ scale, y, opacity }}
        className={`w-full overflow-hidden transition-all duration-500 will-change-transform ${
          theme === 'dark'
            ? 'rounded-[28px] sm:rounded-[38px] lg:rounded-[50px] bg-[#0B0D12] text-[#F7F6F2] border border-white/10 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.7)]'
            : 'rounded-[28px] sm:rounded-[38px] lg:rounded-[50px] bg-[#F8F7F4] text-[#111317] border border-[#E2DFD6] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.08)]'
        } ${cardClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
