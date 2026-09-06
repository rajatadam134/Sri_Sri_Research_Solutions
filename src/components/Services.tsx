import React, { useState } from 'react';
import { 
  Building2, 
  FlaskConical, 
  FileText, 
  ShieldCheck, 
  GraduationCap, 
  Leaf, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  summary: string;
  features: string[];
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'smo',
    icon: Building2,
    category: 'Core Operational Strength',
    title: 'Site Management Organization (SMO)',
    summary: 'Turnkey site infrastructure management for hospitals and private clinical sites, deploying dedicated Clinical Research Coordinators (CRCs) to handle patient flow, documentation, and investigator workflows.',
    features: [
      'Establishing dedicated clinical trial departments inside hospitals',
      'Deploying trained, GCP-certified Clinical Research Coordinators (CRCs)',
      'Patient recruitment, rapid pre-screening, and scheduled retention',
      'Biological sample processing, cold-chain handling, and couriering'
    ],
    deliverables: ['100% on-time participant visit tracking', 'Zero major source data deviations', 'Audit-ready site files']
  },
  {
    id: 'operations',
    icon: FlaskConical,
    category: 'Full-Phase Execution',
    title: 'Clinical Trial Operations (Phase I–IV)',
    summary: 'End-to-end trial delivery across interventional drug trials, medical device investigations, bioavailability/bioequivalence (BA/BE), and observational registries.',
    features: [
      'Phase II & III multi-centric efficacy and safety studies',
      'Post-Marketing Surveillance (PMS) and Phase IV registries',
      'Medical device clinical evaluation and performance studies',
      'Clinical trial monitoring (CRA visits, remote SDR/SDV)'
    ],
    deliverables: ['Predictable study startup timelines', 'Standardized eCRF data collection', 'Comprehensive monitoring reports']
  },
  {
    id: 'regulatory',
    icon: ShieldCheck,
    category: 'Compliance & Approvals',
    title: 'Regulatory Affairs & Ethics Liaison',
    summary: 'Strategic liaison with CDSCO (DCGI), Institutional Ethics Committees (IEC), and state licensing authorities to secure expedited, compliant study authorizations.',
    features: [
      'Initial ethics committee submission dossier compilation',
      'Ethics committee registration & periodic renewal under NDCT Rules 2019',
      'Serious Adverse Event (SAE) causal analysis and mandatory 24h/14d reporting',
      'Import/Export licenses for study drugs, biological samples, and test kits'
    ],
    deliverables: ['Zero regulatory clearance delays', 'Standardized IEC correspondence', 'Safety reporting compliance']
  },
  {
    id: 'medical-writing',
    icon: FileText,
    category: 'Scientific Documentation',
    title: 'Medical Writing & Biometrics',
    summary: 'Authoring scientifically robust, CDSCO and ICH-compliant trial protocols, investigator brochures, informed consent forms, and final study reports.',
    features: [
      'Clinical trial protocol design with statistical power calculations',
      'Patient Information Sheets (PIS) & Informed Consent Forms (ICF) in regional Indian languages',
      'Clinical Study Reports (CSR) in ICH E3 structure',
      'Standard Operating Procedures (SOPs) for hospital research units'
    ],
    deliverables: ['ICH E6/E3 compliant documents', 'Vernacular language validated ICFs', 'Peer-reviewed manuscript drafting']
  },
  {
    id: 'ayush',
    icon: Leaf,
    category: 'Specialized Domain',
    title: 'AYUSH, Herbal & Nutraceutical Studies',
    summary: 'Pioneering scientific validation for traditional Indian formulations, herbal drugs, dietary supplements, and phytomedicines with contemporary clinical endpoints.',
    features: [
      'Herbal drug standardization and batch-to-batch consistency tracking',
      'Classical Ayurvedic and botanical formulations clinical safety trials',
      'Nutraceutical and functional food gut-health and metabolic studies',
      'Pharmacovigilance for herbal products'
    ],
    deliverables: ['Scientifically validated herbal efficacy dossiers', 'Ayush ministry aligned documentation', 'Publication-ready data']
  },
  {
    id: 'training',
    icon: GraduationCap,
    category: 'Capacity Building',
    title: 'GCP Training & Investigator Workshops',
    summary: 'Professional training programs empowering hospital clinicians, nurses, and coordinators with the latest regulatory mandates and ethical standards.',
    features: [
      'ICH-GCP E6(R2) & New Drugs and Clinical Trials Rules (2019) certifications',
      'Essential documents maintenance (Trial Master File & Investigator Site File)',
      'Informed consent administration and audio-video (AV) recording compliance',
      'Handling regulatory audits and sponsor inspections'
    ],
    deliverables: ['Certified site personnel', 'Reduced audit vulnerability', 'Elevated research culture']
  }
];

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);
  const selectedService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <section id="services" className="py-24 bg-warmwhite text-aubergine-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-eucalyptus/15 text-eucalyptus-700 font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-aubergine-900 leading-tight">
            Integrated Solutions From Protocol Inception To Regulatory Approval
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-aubergine-700/80">
            Tailored clinical services designed to reduce study start-up lag, maintain zero compliance deviations, and recruit representative patient cohorts across India.
          </p>
        </div>

        {/* Desktop Interactive Layout: Tabs Left, Rich Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Column */}
          <div className="lg:col-span-5 space-y-2.5">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start space-x-4 ${
                    isActive 
                      ? 'bg-aubergine-700 text-warmwhite border-aubergine-700 shadow-xl shadow-aubergine-950/10' 
                      : 'bg-warmwhite-light text-aubergine-900 border-lavender/30 hover:border-eucalyptus/50 hover:bg-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl mt-0.5 ${
                    isActive ? 'bg-honey text-aubergine-950' : 'bg-eucalyptus/15 text-eucalyptus-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className={`text-[11px] font-grotesk tracking-wider uppercase font-semibold block ${
                      isActive ? 'text-eucalyptus' : 'text-aubergine-600'
                    }`}>
                      {service.category}
                    </span>
                    <h3 className={`font-serif text-base sm:text-lg font-bold mt-0.5 ${
                      isActive ? 'text-warmwhite' : 'text-aubergine-950'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-lavender/25 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eucalyptus/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-honey/20 text-honey-700 text-xs font-grotesk font-bold uppercase tracking-wider">
                  {selectedService.category}
                </span>
                <span className="text-xs font-grotesk text-aubergine-500 uppercase tracking-wider">
                  Sri Sri Certified Protocol
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-aubergine-950">
                {selectedService.title}
              </h3>

              <p className="font-sans text-aubergine-700 leading-relaxed text-base">
                {selectedService.summary}
              </p>

              {/* Service Highlights */}
              <div className="pt-2">
                <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-aubergine-900 mb-3">
                  Key Operational Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-warmwhite/60 border border-lavender/20">
                      <CheckCircle2 className="w-4 h-4 text-eucalyptus-600 flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-aubergine-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Deliverables */}
              <div className="pt-4 border-t border-lavender/20">
                <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-aubergine-900 mb-2">
                  Guaranteed Sponsor Deliverables
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-aubergine-50 text-aubergine-800 text-xs font-sans font-medium border border-lavender/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-honey mr-2" />
                      {deliv}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 flex items-center justify-between">
                <a
                  href="#feasibility"
                  className="inline-flex items-center space-x-2 text-sm font-grotesk font-bold text-honey-600 hover:text-honey-700 group"
                >
                  <span>Inquire for this service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs font-sans text-aubergine-500">
                  Response within 24 working hours
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
