import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-aubergine-900/90 backdrop-blur-md border-b border-lavender/15 shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-warmwhite group-hover:text-honey transition-colors">
              Sri Sri Research Solutions
            </span>
            <span className="font-grotesk text-[10px] tracking-[0.22em] uppercase text-eucalyptus font-semibold">
              Clinical Research & SMO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-sans font-medium text-warmwhite/80 hover:text-honey transition-colors">
              Services
            </a>
            <a href="#trainings" className="text-sm font-sans font-medium text-warmwhite/80 hover:text-honey transition-colors">
              Courses & Trainings
            </a>
            <a href="#about" className="text-sm font-sans font-medium text-warmwhite/80 hover:text-honey transition-colors">
              About
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#feasibility" 
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey hover:bg-honey-400 hover:shadow-lg transition-all duration-200"
            >
              <span>Site Feasibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-warmwhite hover:bg-aubergine-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-aubergine-900/98 backdrop-blur-xl border border-lavender/20 rounded-2xl space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 text-base font-medium text-warmwhite hover:text-honey rounded-lg hover:bg-aubergine-800"
              >
                Services
              </a>
              <a 
                href="#trainings" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 text-base font-medium text-warmwhite hover:text-honey rounded-lg hover:bg-aubergine-800"
              >
                Courses & Trainings
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="px-3 py-2 text-base font-medium text-warmwhite hover:text-honey rounded-lg hover:bg-aubergine-800"
              >
                About
              </a>
            </nav>
            <div className="pt-3 border-t border-lavender/15 flex flex-col space-y-2">
              <a 
                href="#feasibility" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey"
              >
                Request Study Feasibility
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
