import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

const supportSteps = [
  { step: 'Assess', desc: 'Protocol feasibility, site capability, and patient catchment review.' },
  { step: 'Prepare', desc: 'Ethics committee dossiers, essential documents, and site initiation.' },
  { step: 'Coordinate', desc: 'Dedicated on-site CRC workflow, patient visits, and source records.' },
  { step: 'Close', desc: 'Study close-out, audit-ready data reconciliation, and document archival.' },
];

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="about" className="bg-warmwhite py-20 sm:py-28 border-b border-aubergine-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Block 1: About Narrative & 4-Step Support Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-20 border-b border-aubergine-900/10">
          
          {/* Left: Two Concise Paragraphs (<100 words total) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm font-semibold tracking-wider uppercase text-aubergine-700 mb-3">
              Organization
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-aubergine-950 tracking-tight">
              A reliable partner for clinical research delivery
            </h2>
            <div className="space-y-5 text-lg sm:text-xl text-aubergine-800 leading-relaxed max-w-2xl">
              <p>
                Sri Sri Research Solutions supports pharmaceutical sponsors, CROs, and hospital research sites across India with structured site management, regulatory liaison, and quality-driven study execution.
              </p>
              <p>
                Our coordinators ensure adherence to Good Clinical Practice (GCP) and statutory guidelines, enabling research teams to meet protocol milestones with operational discipline and patient safety at the center.
              </p>
            </div>

            {/* Three verified non-overlapping outcomes as plain inline list */}
            <div className="pt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base text-aubergine-800 font-semibold">
              <span>Clear communication</span>
              <span className="text-aubergine-300">•</span>
              <span>Ethical coordination</span>
              <span className="text-aubergine-300">•</span>
              <span>Practical site support</span>
            </div>
          </div>

          {/* Right: How We Support a Study (4-step vertical sequence) */}
          <div className="lg:col-span-5 lg:border-l lg:border-aubergine-900/10 lg:pl-10 space-y-6">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-aubergine-800 pb-3 border-b border-aubergine-900/15">
              How we support a study
            </h3>

            <div className="space-y-6">
              {supportSteps.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono font-bold text-aubergine-600">0{idx + 1}</span>
                    <h4 className="text-base sm:text-lg font-bold text-aubergine-950">
                      {item.step}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-aubergine-800 pl-8 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Block 2: Institutional Purpose Statement (35-50 words) */}
        <div className="py-16 sm:py-20 border-b border-aubergine-900/10">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-aubergine-800 mb-3">
              Our purpose
            </p>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-aubergine-950 leading-relaxed font-normal">
              To contribute to medical science by providing dependable, ethical, and meticulously coordinated site management solutions that help bring innovative treatments to patients responsibly and efficiently.
            </p>
          </div>
        </div>

        {/* Block 3: Quiet Editorial Founder Profile Feature */}
        <div className="pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Portrait Column: Natural Rectangular Editorial Frame */}
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] max-w-sm rounded-[4px] overflow-hidden bg-aubergine-100 border border-aubergine-900/10">
                <picture>
                  <source srcSet="/vishal-iraganti.webp" type="image/webp" />
                  <img
                    src="/vishal-iraganti.png"
                    alt="Vishal Iraganti, Founder of Sri Sri Research Solutions"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-aubergine-950">
                  Vishal Iraganti
                </h3>
                <p className="text-base sm:text-lg font-medium text-aubergine-700 mt-1.5">
                  Founder, Sri Sri Research Solutions • M.Pharm, Pharmacology
                </p>
              </div>

              <div className="w-12 h-px bg-aubergine-900/20 my-3" />

              <p className="font-sans text-lg sm:text-xl text-aubergine-800 max-w-2xl leading-relaxed">
                Founded by Vishal Iraganti, a pharmacologist committed to research integrity and patient safety, Sri Sri Research Solutions provides structured site coordination and clinical study governance across partner hospitals in India.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/founder')}
                  className="inline-flex items-center text-sm sm:text-base font-semibold text-aubergine-950 hover:text-honey-700 transition-colors group cursor-pointer"
                >
                  <span>Read founder profile</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
