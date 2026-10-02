/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Proof3DSection } from './components/Proof3DSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ClientStories } from './components/ClientStories';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LassieSectionWrapper } from './components/LassieSectionWrapper';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Initialize Lenis smooth scroll inertia identical to Lassie.ai
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleExploreWork = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EB3A25] text-[#111317] flex flex-col selection:bg-[#111317] selection:text-white relative">
      {/* Lassie-style Floating Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Architectural Sections with Lassie.ai Scroll Card Flow */}
      <main className="flex-1 w-full">
        {/* 01. Hero with Google Trust Badge, Ken Burns Animation & Lassie Inset Scroll Morphing */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreWork={handleExploreWork}
        />

        {/* 02. SPECIAL 3D DESIGN PROOF SECTION (Light Architectural Island Card) */}
        <LassieSectionWrapper id="3d-visualization" theme="light">
          <Proof3DSection onOpenConsultation={handleOpenConsultation} />
        </LassieSectionWrapper>

        {/* 03. Selected Works & Skiper52 Expandable Portfolio (Obsidian Black Island Card) */}
        <LassieSectionWrapper id="portfolio" theme="dark">
          <PortfolioSection onSelectProject={(p) => setSelectedProject(p)} />
        </LassieSectionWrapper>

        {/* 04. Google Reviews Testimonials & Client Stories (Obsidian Black Island Card) */}
        <LassieSectionWrapper id="reviews" theme="dark">
          <ClientStories />
        </LassieSectionWrapper>

        {/* 05. Google Maps Studio Location & Directions - Sanjay Place, Agra (Light Island Card) */}
        <LassieSectionWrapper id="location" theme="light">
          <LocationSection />
        </LassieSectionWrapper>

        {/* 06. Project Inquiry / Consultation Contact Section (Obsidian Black Island Card) */}
        <LassieSectionWrapper id="contact" theme="dark">
          <ContactSection />
        </LassieSectionWrapper>

        {/* 07. Footer (Architectural Black Ending) */}
        <LassieSectionWrapper theme="dark" cardClassName="!rounded-b-none border-b-0 pb-0">
          <Footer onOpenConsultation={handleOpenConsultation} />
        </LassieSectionWrapper>
      </main>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenConsultation={handleOpenConsultation} />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
