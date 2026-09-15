import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { useRouter } from '../context/RouterContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', path: '/', hash: '#about' },
    { label: 'Founder', path: '/founder' },
    { label: 'Services', path: '/', hash: '#services' },
    { label: 'Training', path: '/', hash: '#trainings' },
  ];

  const handleNavClick = (path: string, hash?: string) => {
    navigate(path, hash);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPath === '/founder'
          ? 'bg-aubergine-950/95 backdrop-blur-md border-b border-lavender/15 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex flex-col text-left group cursor-pointer flex-shrink min-w-0 pr-2"
          >
            <span className="font-serif text-[clamp(1.18rem,5.75vw,1.875rem)] sm:text-3xl font-bold tracking-tight text-warmwhite group-hover:text-honey transition-colors whitespace-nowrap">
              Sri Sri Research Solutions
            </span>
            <span className="font-grotesk text-[10px] sm:text-xs tracking-[0.22em] uppercase text-eucalyptus font-semibold mt-0.5 whitespace-nowrap">
              Clinical Research & SMO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isCurrent = link.path === currentPath && !link.hash;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`relative px-3.5 py-2 text-xs uppercase tracking-widest font-grotesk font-semibold transition-colors group overflow-hidden rounded-lg cursor-pointer ${
                    isCurrent ? 'text-honey' : 'text-warmwhite/80 hover:text-warmwhite'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-honey transition-transform duration-300 origin-left ${
                      isCurrent ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <MagneticButton onClick={() => handleNavClick('/', '#feasibility')}>
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey hover:bg-honey-400 hover:shadow-lg transition-all duration-200 cursor-pointer">
                <span>Request Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 min-w-[40px] min-h-[40px] rounded-lg text-warmwhite hover:bg-aubergine-800 focus:outline-none flex items-center justify-center cursor-pointer"
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
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="pt-4 pb-6 px-4 bg-aubergine-950/98 backdrop-blur-2xl border border-lavender/20 rounded-2xl space-y-4 shadow-2xl">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.button
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      onClick={() => handleNavClick(link.path, link.hash)}
                      className={`px-4 py-3 min-h-[44px] flex items-center text-sm uppercase tracking-wider font-grotesk font-semibold rounded-xl transition-colors text-left w-full cursor-pointer ${
                        link.path === currentPath && !link.hash
                          ? 'text-honey bg-aubergine-900'
                          : 'text-warmwhite hover:text-honey hover:bg-aubergine-900'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>
                <div className="pt-3 border-t border-lavender/15 flex flex-col space-y-2">
                  <button
                    onClick={() => handleNavClick('/', '#feasibility')}
                    className="w-full min-h-[48px] flex items-center justify-center py-3 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-wider uppercase shadow-glow-honey active:scale-95 transition-all cursor-pointer"
                  >
                    Request Study Feasibility
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
