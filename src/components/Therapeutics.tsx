import React, { useState } from 'react';
import { 
  Heart, 
  Dna, 
  Brain, 
  Bone, 
  Leaf, 
  Pill, 
  Activity,
  Flame,
  Filter
} from 'lucide-react';

interface TherapeuticDomain {
  id: string;
  category: 'pharma' | 'metabolic' | 'ayush';
  icon: React.ElementType;
  title: string;
  indication: string;
  stats: string;
  focus: string[];
}

const domains: TherapeuticDomain[] = [
  {
    id: 'onco',
    category: 'pharma',
    icon: Dna,
    title: 'Oncology & Hematology',
    indication: 'Solid Tumors & Hematologic Malignancies',
    stats: '12+ Completed Studies',
    focus: ['Breast, Lung, GI Cancers', 'Targeted Therapies', 'Supportive Oncology Care']
  },
  {
    id: 'endo',
    category: 'metabolic',
    icon: Pill,
    title: 'Endocrinology & Metabolism',
    indication: 'Type 1 & 2 Diabetes, Thyroid, Obesity',
    stats: '1,500+ Patients Enrolled',
    focus: ['Novel GLP-1 & SGLT2 Regimens', 'Continuous Glucose Monitoring', 'Diabetic Neuropathy']
  },
  {
    id: 'cardio',
    category: 'metabolic',
    icon: Heart,
    title: 'Cardiovascular Medicine',
    indication: 'Hypertension, CAD, Heart Failure',
    stats: '8 Active Hospital Sites',
    focus: ['Antiplatelet & Anticoagulant Studies', 'Post-MI Interventions', 'Cardiac Device Monitoring']
  },
  {
    id: 'ayush',
    category: 'ayush',
    icon: Leaf,
    title: 'AYUSH & Phytomedicine',
    indication: 'Classical Formulations & Standardized Extracts',
    stats: 'Specialized Niche',
    focus: ['Evidence-based Ayurveda', 'Herbal Immunomodulators', 'Standardized Safety Biomarkers']
  },
  {
    id: 'pulmo',
    category: 'pharma',
    icon: Activity,
    title: 'Pulmonology & Respiratory',
    indication: 'COPD, Asthma, Interstitial Lung Disease',
    stats: 'PFT Validated Sites',
    focus: ['Inhaler Device Feasibilities', 'Post-COVID Pulmonary Fibrosis', 'Biologic Therapies']
  },
  {
    id: 'derma',
    category: 'pharma',
    icon: Flame,
    title: 'Dermatology & Immunology',
    indication: 'Psoriasis, Atopic Dermatitis, Vitiligo',
    stats: 'Rapid Patient Accrual',
    focus: ['Topical Formulations', 'Monoclonal Antibodies', 'PASI & SCORAD Validated Scores']
  },
  {
    id: 'neuro',
    category: 'metabolic',
    icon: Brain,
    title: 'Neurology & CNS',
    indication: 'Epilepsy, Migraine, Neuropathic Pain',
    stats: 'High Retention Rate',
    focus: ['Cognitive Assessments', 'Pain Management Scales', 'Sleep & Mood Registries']
  },
  {
    id: 'ortho',
    category: 'metabolic',
    icon: Bone,
    title: 'Orthopedics & Rheumatology',
    indication: 'Osteoarthritis, Rheumatoid Arthritis, Osteoporosis',
    stats: 'Multi-Centric Network',
    focus: ['Intra-Articular Formulations', 'Bone Mineral Density Scans', 'WOMAC / VAS Scorecards']
  }
];

export const Therapeutics: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pharma' | 'metabolic' | 'ayush'>('all');

  const filteredDomains = filter === 'all' 
    ? domains 
    : domains.filter(d => d.category === filter);

  return (
    <section id="therapeutics" className="py-24 bg-aubergine-800 text-warmwhite relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-eucalyptus/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-honey/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-eucalyptus/20 text-eucalyptus font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
              <span>Therapeutic Taxonomy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warmwhite leading-tight">
              Deep Scientific Expertise Across Critical Disease Portfolios
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-lavender leading-relaxed">
              Every trial matches dedicated investigators and qualified patient pools from vetted medical colleges and multi-specialty tertiary hospitals across India.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-lavender/15">
          <div className="flex items-center text-xs font-grotesk text-lavender mr-2 uppercase tracking-wider font-bold">
            <Filter className="w-3.5 h-3.5 mr-1.5 text-honey" />
            <span>Filter Indication:</span>
          </div>

          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all ${
              filter === 'all'
                ? 'bg-honey text-aubergine-950 shadow-glow-honey/30'
                : 'bg-aubergine-900/80 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            All Portfolios ({domains.length})
          </button>

          <button
            onClick={() => setFilter('pharma')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all ${
              filter === 'pharma'
                ? 'bg-honey text-aubergine-950 shadow-glow-honey/30'
                : 'bg-aubergine-900/80 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            Pharma & Biologics
          </button>

          <button
            onClick={() => setFilter('metabolic')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all ${
              filter === 'metabolic'
                ? 'bg-honey text-aubergine-950 shadow-glow-honey/30'
                : 'bg-aubergine-900/80 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            Cardio & Metabolic
          </button>

          <button
            onClick={() => setFilter('ayush')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all ${
              filter === 'ayush'
                ? 'bg-eucalyptus text-aubergine-950 shadow-glow-eucalyptus/30'
                : 'bg-aubergine-900/80 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            AYUSH & Phytomedicine
          </button>
        </div>

        {/* Grid of Domains */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDomains.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group p-6 rounded-2xl bg-aubergine-900/90 border border-lavender/15 hover:border-honey/60 hover:bg-aubergine-900 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-aubergine-800 border border-lavender/20 text-honey group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-grotesk text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-eucalyptus/15 text-eucalyptus">
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-warmwhite group-hover:text-honey transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-lavender/90 mt-1 mb-4">
                    {item.indication}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-lavender/10">
                    {item.focus.map((f, i) => (
                      <div key={i} className="flex items-center text-xs font-sans text-warmwhite/75">
                        <span className="w-1 h-1 rounded-full bg-eucalyptus mr-2" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-grotesk font-semibold text-honey/80 group-hover:text-honey">
                  <a href="#feasibility" className="hover:underline">
                    Site Feasibility
                  </a>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Investigator Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-aubergine-700 to-aubergine-900 border border-lavender/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-warmwhite">
              Are you a Principal Investigator or Hospital Administrator?
            </h4>
            <p className="font-sans text-sm text-lavender mt-1">
              Empower your clinical department with turnkey CRC staff, Ethics Committee documentation, and funded global studies.
            </p>
          </div>
          <a
            href="#feasibility"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-eucalyptus text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-eucalyptus-300 transition-all shadow-glow-eucalyptus"
          >
            Join Site Network
          </a>
        </div>

      </div>
    </section>
  );
};
