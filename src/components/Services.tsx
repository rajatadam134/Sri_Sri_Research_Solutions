import React from 'react';
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
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { IndexedListRow } from './IndexedListRow';
import { MagneticButton } from './MagneticButton';

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
  const flagshipItem = servicesData.find(s => s.isFlagship);
  const regularItems = servicesData.filter(s => s.id !== 'onco');

  return (
    <section id="services" className="py-20 sm:py-28 bg-warmwhite text-aubergine-950 relative border-b border-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fluid Scale and Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-aubergine-900/10 text-aubergine-900 font-grotesk font-semibold text-[11px] uppercase tracking-[0.2em] mb-3">
              <span>CLINICAL SERVICES & THERAPEUTIC DOMAINS</span>
            </div>
            <h2 className="font-serif fluid-heading-section font-bold tracking-tight text-aubergine-950">
              Clinical Research Capabilities
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-aubergine-700 leading-relaxed">
              Dedicated site infrastructure, trained on-site CRCs, and specialized investigator support across India.
            </p>
          </div>
        </div>

        {/* Flagship Domain Bento Hero: Oncology & Hemato-Oncology */}
        {flagshipItem && (
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-aubergine-950 via-aubergine-900 to-aubergine-800 text-warmwhite p-8 sm:p-12 border border-honey/40 shadow-2xl relative overflow-hidden group">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-honey/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-honey text-aubergine-950 shadow-glow-honey">
                    <Dna className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-grotesk font-bold uppercase tracking-wider bg-honey/20 text-honey border border-honey/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{flagshipItem.badge}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-warmwhite">
                  {flagshipItem.title}
                </h3>

                <p className="font-sans text-base text-lavender max-w-xl">
                  {flagshipItem.subtitle} — High-complexity protocol execution with comprehensive patient support and certified site coordinators.
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-lavender/15">
                  {flagshipItem.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-sans text-warmwhite/90">
                      <CheckCircle2 className="w-4 h-4 text-eucalyptus flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4 pt-4 lg:pt-0">
                <MagneticButton href="#feasibility">
                  <span className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-widest shadow-glow-honey hover:bg-honey-400 transition-all">
                    <span>Prioritize Protocol Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MagneticButton>
                <span className="text-[11px] font-sans text-lavender/70">
                  Direct investigator liaison & rapid triage
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Numbered / Indexed Horizontal List */}
        <div className="border-t border-lavender/30">
          <div>
            {regularItems.map((item, index) => {
              const rowNumber = String(index + 1).padStart(2, '0');
              return (
                <IndexedListRow
                  key={item.id}
                  index={rowNumber}
                  category={item.category}
                  badge={item.badge}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  bullets={item.bullets}
                  isFlagship={item.isFlagship}
                />
              );
            })}
          </div>
        </div>

        {/* Callout Banner with refined styling */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-aubergine-950 text-warmwhite border border-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-warmwhite">
              Principal Investigators & Hospital Centers
            </h4>
            <p className="font-sans text-xs sm:text-sm text-lavender">
              Connect with our site management team for dedicated CRC staffing and protocol execution.
            </p>
          </div>
          <MagneticButton href="#feasibility">
            <span className="flex-shrink-0 px-7 py-3.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-widest hover:bg-honey-400 transition-all shadow-glow-honey inline-block">
              Submit Feasibility
            </span>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
