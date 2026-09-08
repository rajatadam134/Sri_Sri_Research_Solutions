import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-aubergine-950/90 backdrop-blur-md border-b border-lavender/15 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-warmwhite group-hover:text-honey transition-colors">
              Sri Sri Research Solutions
            </span>
            <span className="font-grotesk text-[10px] tracking-[0.25em] uppercase text-eucalyptus font-semibold">
              Clinical Research & SMO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Courses & Trainings', href: '#trainings' },
              { label: 'About', href: '#about' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-xs uppercase tracking-widest font-grotesk font-semibold text-warmwhite/80 hover:text-warmwhite transition-colors group overflow-hidden rounded-lg"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-honey scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <MagneticButton href="#feasibility">
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey hover:bg-honey-400 hover:shadow-lg transition-all duration-200">
                <span>Site Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 min-w-[44px] min-h-[44px] rounded-lg text-warmwhite hover:bg-aubergine-800 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="pt-4 pb-6 px-4 bg-aubergine-950/98 backdrop-blur-2xl border border-lavender/20 rounded-2xl space-y-4 shadow-2xl">
                <nav className="flex flex-col space-y-2">
                  {[
                    { label: 'Services', href: '#services' },
                    { label: 'Courses & Trainings', href: '#trainings' },
                    { label: 'About', href: '#about' },
                  ].map((link, idx) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 min-h-[44px] flex items-center text-sm uppercase tracking-wider font-grotesk font-semibold text-warmwhite hover:text-honey rounded-xl hover:bg-aubergine-900 transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                <div className="pt-3 border-t border-lavender/15 flex flex-col space-y-2">
                  <a
                    href="#feasibility"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[48px] flex items-center justify-center py-3 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey active:scale-95 transition-all"
                  >
                    Request Study Feasibility
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
