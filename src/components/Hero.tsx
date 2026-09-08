import React, { useRef, useState } from 'react';
import { ArrowRight, Activity, CheckCircle2, Play, Pause, ShieldCheck, Dna, Building2, Clock } from 'lucide-react';
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
    <section className="relative min-h-[95vh] sm:min-h-screen bg-aubergine-950 overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12">
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

      {/* Floating play/pause pill for video */}
      <button
        onClick={togglePlay}
        className="absolute bottom-28 right-6 z-30 p-3 rounded-full bg-aubergine-900/70 backdrop-blur-md border border-lavender/30 text-warmwhite/80 hover:text-honey hover:border-honey transition-all shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
        title={isPlaying ? "Pause DNA Animation" : "Play DNA Animation"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-aubergine-900/85 border border-eucalyptus/40 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-eucalyptus animate-pulse" />
            <span className="font-grotesk font-semibold text-[11px] tracking-[0.2em] uppercase text-eucalyptus">
              CDSCO Compliant • ICH-GCP Accredited SMO
            </span>
          </motion.div>

          {/* Headline with fluid clamp and animated gold shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif fluid-display-hero font-bold tracking-tight text-warmwhite"
          >
            Accelerating Clinical Trials With{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-honey-300 via-honey to-honey-200 animate-shimmer bg-[length:200%_auto]">
              Ethical Precision
              {/* Dynamic decorative stroke underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-honey/70"
                viewBox="0 0 250 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C60 3 190 3 247 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            & Flawless Site Execution.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg lg:text-xl text-warmwhite/80 leading-relaxed max-w-2xl font-normal"
          >
            Sri Sri Research Solutions delivers turnkey clinical trial site management, regulatory liaison, and GCP-certified coordinator infrastructure across India with specialized focus in Oncology & Hemato-Oncology.
          </motion.p>

          {/* Dual Action Magnetic Buttons with fill/wipe hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
          >
            <MagneticButton href="#feasibility">
              <span className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-4 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs tracking-widest uppercase shadow-glow-honey transition-all duration-300 min-h-[48px] w-full sm:w-auto">
                <span className="absolute inset-0 bg-honey-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span>Submit Study Feasibility</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </MagneticButton>
            
            <MagneticButton href="#services">
              <span className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-4 rounded-xl bg-aubergine-900/80 hover:text-aubergine-950 text-warmwhite border border-lavender/30 font-grotesk font-semibold text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-md min-h-[48px] w-full sm:w-auto">
                <span className="absolute inset-0 bg-warmwhite translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  <Activity className="w-4 h-4 mr-2 text-eucalyptus group-hover:text-aubergine-900 transition-colors" />
                  <span>Explore Capabilities</span>
                </span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Micro Trust Bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-lavender font-sans"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus flex-shrink-0" />
              <span>Institutional Ethics Committee (IEC) Liaison</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus flex-shrink-0" />
              <span>Dedicated On-Site CRC Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus flex-shrink-0" />
              <span>100% Protocol Compliance</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Operational Pillars Ticker Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-aubergine-900/85 backdrop-blur-xl border border-lavender/20 shadow-2xl">
          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4 group">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                CDSCO & GCP
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-semibold">
              Regulatory Rigor
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Ethics & DCGI Alignments
            </span>
          </div>

          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4 pl-0 sm:pl-4 group">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Dna className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Oncology Focus
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-semibold">
              Flagship Specialization
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Solid & Hemato Malignancies
            </span>
          </div>

          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4 pl-0 md:pl-4 group">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Turnkey SMO
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-semibold">
              Site Infrastructure
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Dedicated On-Site CRCs
            </span>
          </div>

          <div className="flex flex-col pl-0 md:pl-4 group">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Clock className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Rapid Review
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-semibold">
              Site Feasibility
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Protocol Triage & Setup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
