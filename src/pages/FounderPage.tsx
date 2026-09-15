import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SEO } from '../components/SEO';

const focusAreas = [
  {
    title: 'Ethical trial conduct & patient safety',
    description: 'Prioritizing participant rights, informed consent adherence, and safety reporting across all study protocols.'
  },
  {
    title: 'Site coordination & investigator liaison',
    description: 'Providing hospital investigative sites with trained coordinator teams, documentation discipline, and monitoring support.'
  },
  {
    title: 'Clinical research education',
    description: 'Training aspiring clinical research coordinators and hospital staff in Good Clinical Practice and regulatory compliance.'
  }
];

export const FounderPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-warmwhite min-h-screen text-aubergine-950 pt-28 sm:pt-36 pb-20">
      <SEO 
        title="Vishal Iraganti | Founder, Sri Sri Research Solutions"
        description="Profile of Vishal Iraganti, Founder of Sri Sri Research Solutions, detailing his pharmacology background, site management focus, and commitment to Good Clinical Practice."
        canonicalPath="/founder"
        ogImage="/vishal-iraganti.png"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs text-aubergine-600 mb-6">
            <button 
              onClick={() => navigate('/', '#about')}
              className="hover:text-aubergine-950 transition-colors flex items-center cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>About</span>
            </button>
            <span>/</span>
            <span className="text-aubergine-900 font-medium">Founder</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-aubergine-950 tracking-tight">
            Vishal Iraganti
          </h1>
          <p className="text-sm sm:text-base text-aubergine-700 mt-2">
            Founder, Sri Sri Research Solutions • Master of Pharmacy (M.Pharm), Pharmacology
          </p>
        </div>

        {/* Profile Grid: Portrait left, Bio right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-aubergine-900/10">
          
          {/* Portrait Column: Natural Rectangular Frame */}
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-[4px] overflow-hidden bg-aubergine-100 border border-aubergine-900/10">
              <picture>
                <source srcSet="/vishal-iraganti.webp" type="image/webp" />
                <img
                  src="/vishal-iraganti.png"
                  alt="Vishal Iraganti, Founder of Sri Sri Research Solutions"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />
              </picture>
            </div>
            <p className="text-xs text-aubergine-600 mt-3">
              Vishal Iraganti • Founder & Clinical Director
            </p>
          </div>

          {/* Bio Column (max 180 words, factual) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-[17px] text-aubergine-800/90 leading-[1.6]">
              <p>
                Vishal Iraganti founded Sri Sri Research Solutions to deliver disciplined, compliant, and patient-centered site management for clinical research across India. With a Master of Pharmacy (M.Pharm) in Pharmacology, his academic background provides a firm scientific basis for protocol comprehension, pharmacology endpoints, and Good Clinical Practice (GCP) standards.
              </p>
              <p>
                His work centers on establishing dependable partnerships between hospital investigators, institutional ethics committees, and trial sponsors. By cultivating trained on-site clinical research coordinators and rigorous documentation practices, he supports study teams in executing clinical trials that meet statutory requirements while upholding research integrity and patient welfare.
              </p>
            </div>

            {/* Areas of Focus (3 plain items with subtle rules) */}
            <div className="pt-8 border-t border-aubergine-900/10 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-aubergine-700">
                Areas of focus
              </h3>

              <div className="divide-y divide-aubergine-900/10">
                {focusAreas.map((item, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0">
                    <h4 className="text-sm font-semibold text-aubergine-950">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-aubergine-700 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Primary Action */}
            <div className="pt-8 border-t border-aubergine-900/10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate('/', '#feasibility')}
                className="inline-flex items-center text-sm font-medium text-aubergine-950 hover:text-honey-700 transition-colors group cursor-pointer"
              >
                <span>Discuss a study</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="mailto:vishal@srisriresearchsolutions.info"
                className="inline-flex items-center text-sm font-medium text-honey-700 hover:text-honey-800 transition-colors"
              >
                <span>vishal@srisriresearchsolutions.info</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default FounderPage;
