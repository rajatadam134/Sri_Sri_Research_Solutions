import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndexedListRowProps {
  index: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  bullets: string[];
  isFlagship?: boolean;
}

export const IndexedListRow: React.FC<IndexedListRowProps> = ({
  index,
  category,
  badge,
  icon: Icon,
  title,
  subtitle,
  bullets,
  isFlagship = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`group relative border-b border-lavender/30 transition-colors duration-300 cursor-pointer overflow-hidden ${
        isFlagship
          ? 'bg-honey/5 hover:bg-honey/15'
          : 'bg-transparent hover:bg-aubergine-900/[0.04]'
      }`}
    >
      {/* Background fill wipe effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-aubergine-900/[0.06] via-honey/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />

      <div className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Column: Number Index + Badge + Icon */}
        <div className="flex items-center space-x-4 sm:space-x-6 min-w-[220px]">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-aubergine-400 group-hover:text-honey transition-colors">
            {index}
          </span>
          
          <div className="p-2.5 rounded-xl bg-white border border-lavender/40 text-aubergine-900 shadow-sm group-hover:scale-105 group-hover:border-honey transition-all">
            <Icon className="w-5 h-5 text-honey-700" />
          </div>

          <div className="flex flex-col">
            <span className="font-grotesk text-[10px] uppercase font-bold tracking-widest text-eucalyptus-800">
              {badge}
            </span>
            <span className="font-sans text-[11px] text-aubergine-500 uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>

        {/* Center Column: Title, Subtitle, Collapsible Bullets */}
        <div className="flex-1 md:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-aubergine-950 group-hover:text-honey-700 transition-colors">
              {title}
            </h3>
            {isFlagship && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider bg-honey/20 text-honey-900 border border-honey/40">
                Flagship
              </span>
            )}
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-aubergine-700 mt-1">
            {subtitle}
          </p>

          {/* Collapsible Bullets Reveal (Smooth spring height & opacity) */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-lavender/25">
                  {bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-sans text-aubergine-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-eucalyptus flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Site Feasibility Link */}
        <div className="flex items-center justify-end min-w-[150px] pt-2 md:pt-0">
          <a
            href="#feasibility"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-grotesk font-bold uppercase tracking-wider text-aubergine-900 bg-white border border-lavender/40 group-hover:bg-honey group-hover:border-honey group-hover:text-aubergine-950 transition-all shadow-sm"
          >
            <span>Site Feasibility</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
