import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  Activity 
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { MagneticButton } from '../components/MagneticButton';
import { SEO } from '../components/SEO';

export const FounderPage: React.FC = () => {
  const { navigate } = useRouter();

  const focusAreas = [
    { title: 'GCP & CDSCO Compliance', desc: 'NDCT Rules 2019 & Institutional Ethics' },
    { title: 'Site Management & Coordination', desc: 'On-site CRC infrastructure across India' },
    { title: 'Patient-Centered Research', desc: 'Strict safety, consent, and retention' },
    { title: 'Pharmacology & Protocol Rigor', desc: 'Deep pharmacokinetic & pharmacodynamic alignment' },
  ];

  return (
    <div className="min-h-screen bg-warmwhite text-aubergine-950">
      <SEO 
        title="Meet Our Founder | SMO Sri Sri Research Solutions"
        description="Learn about Vishal Iraganti, Founder of SMO Sri Sri Research Solutions, and his commitment to ethical, quality-driven clinical research."
        canonicalPath="/founder"
        ogImage="/vishal-iraganti.png"
      />

      {/* Top Banner & Breadcrumb Nav */}
      <section className="pt-28 sm:pt-36 pb-8 bg-aubergine-950 text-warmwhite border-b border-lavender/15 relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-honey/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-eucalyptus/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate('/', '#about')}
            className="inline-flex items-center space-x-2 text-xs font-grotesk font-bold uppercase tracking-wider text-lavender hover:text-honey transition-colors mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey font-grotesk font-semibold text-[11px] uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leadership Profile</span>
            </div>
            <h1 className="font-serif fluid-display-hero font-bold tracking-tight text-warmwhite">
              Meet Our Founder
            </h1>
            <p className="mt-3 font-sans text-base sm:text-lg text-lavender max-w-2xl leading-relaxed">
              Driving ethical rigor, scientific standards, and quality-centric site management across India's clinical research ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Hero / Bio Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Credential Badge (Desktop Sticky) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-28">
              <div className="relative w-full max-w-md">
                {/* Subtle outer backdrop accent */}
                <div className="absolute -inset-2 bg-gradient-to-br from-honey/30 via-aubergine-800 to-eucalyptus/20 rounded-3xl blur-xl opacity-60" />

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-aubergine-900 to-aubergine-950 border-2 border-honey/40 shadow-2xl">
                  <picture>
                    <source srcSet="/vishal-iraganti.webp" type="image/webp" />
                    <img
                      src="/vishal-iraganti.png"
                      alt="Vishal Iraganti, Founder of SMO Sri Sri Research Solutions"
                      className="w-full h-auto object-cover object-top filter contrast-105"
                      loading="eager"
                    />
                  </picture>

                  {/* Overlay Gradient at base */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-aubergine-950 via-aubergine-950/70 to-transparent p-6 pt-16 text-warmwhite">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-xl font-bold block text-warmwhite">
                          Vishal Iraganti
                        </span>
                        <span className="font-grotesk text-xs uppercase tracking-wider text-honey font-semibold block mt-0.5">
                          Founder, SMO Sri Sri Research Solutions
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider bg-honey/20 text-honey border border-honey/30">
                        M.Pharm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Credential Pill */}
                <div className="mt-4 p-4 rounded-2xl bg-white border border-lavender/30 shadow-md flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-honey/15 text-honey-800 flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-grotesk text-[10px] font-bold uppercase tracking-widest text-aubergine-600 block">
                      Confirmed Academic Credential
                    </span>
                    <span className="font-serif text-sm font-bold text-aubergine-950">
                      Master of Pharmacy (M.Pharm) — Pharmacology
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Vision, Quote & Capabilities */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Designation & Header */}
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-aubergine-900/10 text-aubergine-900 font-grotesk font-semibold text-[11px] uppercase tracking-[0.2em] mb-3">
                  <span>SCIENTIFIC DIRECTION & LEADERSHIP</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-aubergine-950 leading-tight">
                  Vishal Iraganti
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="font-grotesk text-sm sm:text-base text-honey-800 font-bold uppercase tracking-wider">
                    Founder, SMO Sri Sri Research Solutions
                  </span>
                  <span className="text-lavender">•</span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-grotesk font-bold uppercase tracking-wider bg-eucalyptus/15 text-eucalyptus-900 border border-eucalyptus/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>M.Pharm (Pharmacology)</span>
                  </span>
                </div>
              </div>

              {/* Bio Narrative (Ground in confirmed M.Pharm Pharmacology facts) */}
              <div className="space-y-4 font-sans text-base text-aubergine-800 leading-relaxed pt-4 border-t border-lavender/25">
                <p>
                  Vishal Iraganti is the Founder of SMO Sri Sri Research Solutions, establishing the organization with a resolute commitment to advancing ethical, quality-driven, and patient-centric clinical research across India. Holding a Master of Pharmacy (M.Pharm) in Pharmacology, his academic background provides the foundational bedrock for the company’s uncompromising standards of scientific rigor, protocol compliance, and Good Clinical Practice (GCP) alignment.
                </p>
                <p>
                  Driven by a vision to bridge clinical investigative potential with international quality benchmarks, Vishal spearheads site management strategies that ensure seamless regulatory adherence, rapid feasibility turnaround, and robust ethics committee coordination. Under his stewardship, Sri Sri Research Solutions delivers dependable trial coordination that empowers sponsors, CROs, and hospital investigator networks to bring critical therapeutics to patients safely and efficiently.
                </p>
              </div>

              {/* Founder Pull Quote */}
              <div className="p-6 sm:p-8 rounded-2xl bg-aubergine-950 text-warmwhite border border-honey/30 shadow-xl relative overflow-hidden">
                <Quote className="absolute right-4 bottom-2 w-20 h-20 text-warmwhite/5 pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center space-x-2 text-honey text-xs font-grotesk font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Leadership Philosophy</span>
                  </div>
                  <blockquote className="font-serif text-lg sm:text-xl font-normal italic text-warmwhite leading-relaxed">
                    “Our mission is grounded in absolute scientific integrity and ethical responsibility. Every trial protocol we manage represents an opportunity to improve patient outcomes through uncompromising Good Clinical Practice.”
                  </blockquote>
                  <div className="pt-2 text-xs font-sans text-lavender">
                    — Vishal Iraganti, Founder
                  </div>
                </div>
              </div>

              {/* Core Focus Areas */}
              <div className="space-y-4 pt-4">
                <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-aubergine-700 font-bold block">
                  Pillars of Operational Rigor
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((area, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-white border border-lavender/30 shadow-sm flex items-start space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-eucalyptus/15 text-eucalyptus-800 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-grotesk text-xs font-bold uppercase tracking-wider text-aubergine-900">
                          {area.title}
                        </h4>
                        <p className="font-sans text-xs text-aubergine-600 mt-0.5">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-lavender/25 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton onClick={() => navigate('/', '#feasibility')}>
                  <span className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-widest shadow-glow-honey hover:bg-honey-400 transition-all w-full sm:w-auto">
                    <span>Submit Study Feasibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MagneticButton>

                <button
                  onClick={() => navigate('/', '#services')}
                  className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white hover:bg-warmwhite border border-lavender/40 text-aubergine-900 font-grotesk font-semibold text-xs uppercase tracking-wider transition-colors w-full sm:w-auto"
                >
                  <Activity className="w-4 h-4 text-honey-700" />
                  <span>Explore Clinical Domains</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
