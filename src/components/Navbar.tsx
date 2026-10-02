import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: '3D Design', href: '#3d-visualization' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl transition-all duration-300"
      >
        {/* Floating Transparent Glassmorphic Pill Container matching Reference Image 2 */}
        <div
          className={`relative w-full rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/[0.09] hover:bg-white/[0.13] backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] py-2.5 px-4 sm:px-7'
              : 'bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] py-3 px-4 sm:px-7'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Left: Round White Brand Icon & Name "ASHIYANA STUDIO" */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              {/* Circular White Icon Mark */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0B0D12] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0B0D12]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 10h6" />
                  <path d="M9 14h6" />
                  <path d="M9 18h6" />
                </svg>
              </div>

              {/* Exact Brand Name: ASHIYANA STUDIO */}
              <span className="font-heading font-black text-sm sm:text-base tracking-wider text-white uppercase whitespace-nowrap">
                ASHIYANA STUDIO
              </span>
            </a>

            {/* Center: Clean Horizontal Navigation Links (Image 2 style) */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-sm font-medium text-white/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1 text-[14px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Clean White Pill CTA Button (Image 2 style) */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={onOpenConsultation}
                className="bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer whitespace-nowrap"
              >
                Book a consultation
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onOpenConsultation}
                className="bg-white text-black font-bold text-xs px-3.5 py-1.5 rounded-full cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-white border border-white/20 bg-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Matching Sleek Dark Aesthetic) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md sm:hidden">
          <div className="fixed top-0 right-0 w-[82%] max-w-xs h-full bg-[#0E121A] border-l border-white/15 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-white">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white text-[#0B0D12] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 text-[#0B0D12]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18" />
                      <path d="M5 21V7l7-4 7 4v14" />
                    </svg>
                  </div>
                  <span className="font-heading font-black text-sm tracking-wider text-white uppercase">
                    ASHIYANA STUDIO
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-white/80 hover:text-white py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-sm"
              >
                Book a consultation
              </button>
              <p className="text-[11px] text-center text-neutral-500">
                Sanjay Place, Agra
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
