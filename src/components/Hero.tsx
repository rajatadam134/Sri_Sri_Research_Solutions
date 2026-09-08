import React, { useRef, useState } from 'react';
import { ArrowRight, Activity, CheckCircle2, Play, Pause, ShieldCheck, Dna, Building2, Clock } from 'lucide-react';

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
    <section className="relative min-h-[92vh] sm:min-h-screen bg-aubergine-700 overflow-hidden flex flex-col justify-between pt-24 sm:pt-32 pb-12">
      {/* Background Video Layer with Seamless Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/landing-bg.png"
          className="w-full h-full object-cover object-center opacity-70 scale-105 transform filter brightness-95 contrast-105 dna-video-mask"
        >
          <source src="/dna-hero.mp4" type="video/mp4" />
        </video>

        {/* Vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-aubergine-700 via-aubergine-700/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-aubergine-700 via-transparent to-aubergine-700/80 z-10" />
      </div>

      {/* Floating play/pause pill for video */}
      <button
        onClick={togglePlay}
        className="absolute bottom-28 right-6 z-30 p-2.5 rounded-full bg-aubergine-900/60 backdrop-blur-md border border-lavender/30 text-warmwhite/80 hover:text-honey transition-all"
        title={isPlaying ? "Pause DNA Animation" : "Play DNA Animation"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-aubergine-900/80 border border-eucalyptus/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-eucalyptus animate-pulse" />
            <span className="font-grotesk font-semibold text-xs tracking-wider uppercase text-eucalyptus">
              CDSCO Compliant • ICH-GCP Accredited SMO
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warmwhite leading-[1.12]">
            Accelerating Clinical Trials With{' '}
            <span className="text-honey">
              Ethical Precision
            </span>{' '}
            & Flawless Site Execution.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg sm:text-xl text-warmwhite/85 leading-relaxed max-w-2xl font-normal">
            Sri Sri Research Solutions delivers turnkey clinical trial site management, regulatory liaison, and GCP-certified coordinator infrastructure across India with specialized focus in Oncology & Hemato-Oncology.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <a
              href="#feasibility"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-sm tracking-wider uppercase shadow-glow-honey hover:bg-honey-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Submit Study Feasibility</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-aubergine-900/70 hover:bg-aubergine-800 text-warmwhite border border-lavender/30 font-grotesk font-semibold text-sm tracking-wide transition-all backdrop-blur-sm"
            >
              <Activity className="w-4 h-4 mr-2 text-eucalyptus" />
              <span>Explore Capabilities</span>
            </a>
          </div>

          {/* Micro Trust Bullets */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-lavender font-sans">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus" />
              <span>Institutional Ethics Committee (IEC) Liaison</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus" />
              <span>Dedicated On-Site CRC Support</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-eucalyptus" />
              <span>100% Protocol Compliance</span>
            </div>
          </div>

        </div>
      </div>

      {/* Operational Pillars Ticker Bar (No confidential numbers) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-aubergine-900/85 backdrop-blur-md border border-lavender/20 shadow-2xl">
          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                CDSCO & GCP
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-medium">
              Regulatory Rigor
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Ethics & DCGI Alignments
            </span>
          </div>

          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4 pl-0 sm:pl-4">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Dna className="w-5 h-5" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Oncology Focus
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-medium">
              Flagship Specialization
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Solid & Hemato Malignancies
            </span>
          </div>

          <div className="flex flex-col border-r border-lavender/10 last:border-0 pr-4 pl-0 md:pl-4">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Building2 className="w-5 h-5" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Turnkey SMO
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-medium">
              Site Infrastructure
            </span>
            <span className="text-[11px] text-warmwhite/60 font-sans mt-0.5">
              Dedicated On-Site CRCs
            </span>
          </div>

          <div className="flex flex-col pl-0 md:pl-4">
            <div className="flex items-center space-x-2 text-honey mb-1">
              <Clock className="w-5 h-5" />
              <span className="font-grotesk text-base sm:text-lg font-bold text-warmwhite">
                Rapid Review
              </span>
            </div>
            <span className="font-grotesk text-xs uppercase tracking-wider text-eucalyptus font-medium">
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
