import React, { useState } from 'react';
import { 
  Dna, 
  Building2, 
  FlaskConical, 
  Eye, 
  Pill, 
  Heart, 
  Activity, 
  Flame, 
  Brain, 
  Bone,
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServiceDomain {
  id: string;
  category: 'core' | 'pharma' | 'specialty';
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge: string;
  isFlagship?: boolean;
  bullets: string[];
}

const servicesData: ServiceDomain[] = [
  {
    id: 'onco',
    category: 'core',
    icon: Dna,
    title: 'Oncology & Hemato-Oncology',
    subtitle: 'Solid Tumors & Hematologic Malignancies',
    badge: 'Flagship Domain',
    isFlagship: true,
    bullets: [
      'Breast, Lung, GI Cancers',
      'Targeted Therapies & Biologics',
      'Supportive Oncology Care'
    ]
  },
  {
    id: 'smo',
    category: 'core',
    icon: Building2,
    title: 'Site Management (SMO)',
    subtitle: 'Hospital Infrastructure & Dedicated CRCs',
    badge: 'Core Operations',
    bullets: [
      'On-Site GCP-Certified Coordinators',
      'Investigator & Ethics Liaison',
      'Audit-Ready Site File Archival'
    ]
  },
  {
    id: 'babe',
    category: 'core',
    icon: FlaskConical,
    title: 'BA/BE Studies',
    subtitle: 'Bioavailability & Bioequivalence',
    badge: 'Pharmacokinetics',
    bullets: [
      'Single & Multiple-Dose PK Designs',
      'Timed Cannulation Blood Draws',
      'Deep-Freeze Bio-Sample Logistics'
    ]
  },
  {
    id: 'ophthalmology',
    category: 'specialty',
    icon: Eye,
    title: 'Ophthalmology',
    subtitle: 'Anterior & Posterior Segment Studies',
    badge: 'Specialized Division',
    bullets: [
      'Glaucoma, DME & Dry Eye Trials',
      'Certified BCVA & OCT Endpoints',
      'Ocular Drug & Device Accountability'
    ]
  },
  {
    id: 'endo',
    category: 'pharma',
    icon: Pill,
    title: 'Endocrinology & Metabolism',
    subtitle: 'Type 1 & 2 Diabetes, Thyroid, Obesity',
    badge: 'Protocol Validated',
    bullets: [
      'Novel GLP-1 & SGLT2 Regimens',
      'Continuous Glucose Monitoring',
      'Diabetic Neuropathy Endpoints'
    ]
  },
  {
    id: 'cardio',
    category: 'pharma',
    icon: Heart,
    title: 'Cardiovascular Medicine',
    subtitle: 'Hypertension, CAD, Heart Failure',
    badge: 'Tertiary Network',
    bullets: [
      'Antiplatelet & Anticoagulant Studies',
      'Post-MI Interventions',
      'Cardiac Device Monitoring'
    ]
  },
  {
    id: 'pulmo',
    category: 'pharma',
    icon: Activity,
    title: 'Pulmonology & Respiratory',
    subtitle: 'COPD, Asthma, Interstitial Lung Disease',
    badge: 'PFT Validated Sites',
    bullets: [
      'Inhaler Device Feasibilities',
      'Spirometry-Standardized Protocols',
      'Biologic Respiratory Therapies'
    ]
  },
  {
    id: 'derma',
    category: 'specialty',
    icon: Flame,
    title: 'Dermatology & Immunology',
    subtitle: 'Psoriasis, Atopic Dermatitis, Vitiligo',
    badge: 'Specialized Endpoints',
    bullets: [
      'Topical & Systemic Formulations',
      'Monoclonal Antibodies',
      'PASI & SCORAD Validated Scores'
    ]
  },
  {
    id: 'neuro',
    category: 'pharma',
    icon: Brain,
    title: 'Neurology & CNS',
    subtitle: 'Epilepsy, Migraine, Neuropathic Pain',
    badge: 'Standardized Scales',
    bullets: [
      'Cognitive Assessments',
      'Pain Management Scales',
      'Sleep & Neurologic Registries'
    ]
  },
  {
    id: 'ortho',
    category: 'specialty',
    icon: Bone,
    title: 'Orthopedics & Rheumatology',
    subtitle: 'Osteoarthritis, RA, Osteoporosis',
    badge: 'Imaging Support',
    bullets: [
      'Intra-Articular Formulations',
      'Bone Mineral Density Scans',
      'WOMAC & Functional Scorecards'
    ]
  }
];

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'pharma' | 'specialty'>('all');

  const filteredData = filter === 'all' 
    ? servicesData 
    : servicesData.filter(d => d.category === filter);

  return (
    <section id="services" className="py-16 sm:py-24 bg-warmwhite text-aubergine-950 relative border-b border-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-aubergine-900/10 text-aubergine-900 font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
              <span>Clinical Services & Therapeutic Domains</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-aubergine-950 leading-tight">
              Clinical Research Capabilities
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-aubergine-700 leading-relaxed">
              Dedicated site infrastructure, trained on-site CRCs, and specialized investigator support across India.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-lavender/25 overflow-x-auto">
          <div className="flex items-center text-xs font-grotesk text-aubergine-700 mr-2 uppercase tracking-wider font-bold flex-shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1.5 text-honey-700" />
            <span>Filter:</span>
          </div>

          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-aubergine-900 text-warmwhite shadow-md'
                : 'bg-white text-aubergine-800 hover:bg-warmwhite-dark border border-lavender/40'
            }`}
          >
            All Portfolios ({servicesData.length})
          </button>

          <button
            onClick={() => setFilter('core')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'core'
                ? 'bg-aubergine-900 text-warmwhite shadow-md'
                : 'bg-white text-aubergine-800 hover:bg-warmwhite-dark border border-lavender/40'
            }`}
          >
            Core Operations & Oncology
          </button>

          <button
            onClick={() => setFilter('pharma')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'pharma'
                ? 'bg-aubergine-900 text-warmwhite shadow-md'
                : 'bg-white text-aubergine-800 hover:bg-warmwhite-dark border border-lavender/40'
            }`}
          >
            Pharma & Biologics
          </button>

          <button
            onClick={() => setFilter('specialty')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'specialty'
                ? 'bg-aubergine-900 text-warmwhite shadow-md'
                : 'bg-white text-aubergine-800 hover:bg-warmwhite-dark border border-lavender/40'
            }`}
          >
            Ophthalmology & Specialties
          </button>
        </div>

        {/* Card Grid: Matches user photo layout, light background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredData.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={`group p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between border ${
                  item.isFlagship
                    ? 'bg-white border-honey/60 shadow-lg ring-1 ring-honey/20 hover:border-honey hover:shadow-xl'
                    : 'bg-white border-lavender/30 hover:border-aubergine-600/40 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl border transition-transform group-hover:scale-105 ${
                      item.isFlagship
                        ? 'bg-honey/15 border-honey/30 text-aubergine-950 shadow-sm'
                        : 'bg-warmwhite-dark border-lavender/40 text-aubergine-900'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`font-grotesk text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                      item.isFlagship
                        ? 'bg-honey/20 text-honey-800 border border-honey/40'
                        : 'bg-eucalyptus/15 text-eucalyptus-800 border border-eucalyptus/30'
                    }`}>
                      {item.isFlagship && <Sparkles className="w-2.5 h-2.5 inline mr-1" />}
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-aubergine-950 group-hover:text-honey-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-aubergine-600 mt-1 mb-4 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>

                  {/* 3 Concise Bullets */}
                  <div className="space-y-2 pt-3 border-t border-lavender/20">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-start text-xs font-sans text-aubergine-800 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-eucalyptus-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-3 border-t border-lavender/20 flex items-center justify-between text-xs font-grotesk font-semibold text-honey-700 group-hover:text-honey-900">
                  <a href="#feasibility" className="hover:underline">
                    Site Feasibility
                  </a>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-aubergine-900 text-warmwhite border border-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div>
            <h4 className="font-serif text-lg sm:text-2xl font-bold text-warmwhite">
              Principal Investigators & Hospital Centers
            </h4>
            <p className="font-sans text-xs sm:text-sm text-lavender mt-1">
              Connect with our site management team for dedicated CRC staffing and protocol execution.
            </p>
          </div>
          <a
            href="#feasibility"
            className="flex-shrink-0 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-honey-400 transition-all shadow-glow-honey"
          >
            Submit Feasibility
          </a>
        </div>

      </div>
    </section>
  );
};
