import React, { useRef, useState } from 'react';
import { ArrowRight, Activity, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroParticles } from './HeroParticles';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen bg-aubergine-950 overflow-hidden flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Background Video Layer with Seamless Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/landing-bg.png"
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-60 scale-105 transform filter brightness-90 contrast-110 dna-video-mask"
        >
          <source src="/dna-hero.mp4" type="video/mp4" />
        </video>

        {/* Dynamic interactive biological particle network over the video */}
        <HeroParticles />

        {/* Vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-aubergine-950 via-aubergine-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-aubergine-950 via-transparent to-aubergine-950/90 z-10" />
      </div>

      {/* Floating play/pause control */}
      <button
        onClick={togglePlay}
        className="absolute bottom-10 right-6 sm:right-8 z-30 p-3 rounded-full bg-aubergine-900/70 backdrop-blur-md border border-lavender/30 text-warmwhite/80 hover:text-honey hover:border-honey transition-all shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
        title={isPlaying ? "Pause DNA Animation" : "Play DNA Animation"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow Context Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-xs font-grotesk font-semibold text-eucalyptus uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-eucalyptus" />
            <span>Clinical research & site management in India</span>
          </motion.div>

          {/* Headline in Zodiak Serif with subtle gold italic accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif fluid-display-hero font-bold tracking-tight text-warmwhite"
          >
            Accelerating Clinical Trials With{' '}
            <span className="relative inline-block text-honey-300 italic font-normal">
              Ethical Precision
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-honey/60"
                viewBox="0 0 250 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C60 3 190 3 247 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            & Rigorous Site Coordination.
          </motion.h1>

          {/* Subtitle matching site's disciplined editorial tone */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg lg:text-xl text-warmwhite/80 leading-relaxed max-w-2xl font-normal"
          >
            Sri Sri Research Solutions delivers site management, regulatory liaison, and GCP-trained coordinator infrastructure across India with specialized focus in Oncology & Hemato-Oncology.
          </motion.p>

          {/* Dual Action Magnetic Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
          >
            <MagneticButton href="#feasibility">
              <span className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-4 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-widest uppercase shadow-glow-honey transition-all duration-300 min-h-[48px] w-full sm:w-auto cursor-pointer">
                <span className="absolute inset-0 bg-honey-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span>Submit Study Feasibility</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </MagneticButton>
            
            <MagneticButton href="#services">
              <span className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-4 rounded-xl bg-aubergine-900/80 hover:text-aubergine-950 text-warmwhite border border-lavender/30 font-grotesk font-semibold text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-md min-h-[48px] w-full sm:w-auto cursor-pointer">
                <span className="absolute inset-0 bg-warmwhite translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-eucalyptus group-hover:text-aubergine-900 transition-colors" />
                  <span>Explore Capabilities</span>
                </span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Micro Trust Metadata Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-lavender/80 font-sans border-t border-lavender/10"
          >
            <span>Regulatory & ethics coordination</span>
            <span className="hidden sm:inline text-lavender/30">•</span>
            <span>Dedicated on-site CRC support</span>
            <span className="hidden sm:inline text-lavender/30">•</span>
            <span>Oncology & multi-specialty studies</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
