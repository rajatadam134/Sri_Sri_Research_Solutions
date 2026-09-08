import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  FileCheck2, 
  Stethoscope 
} from 'lucide-react';

interface ProgramCard {
  id: string;
  category: 'certificate' | 'career';
  categoryLabel: string;
  icon: React.ElementType;
  title: string;
  duration: string;
  audience: string;
  curriculum: string[];
  credential: string;
}

const programs: ProgramCard[] = [
  {
    id: 'cert-cr',
    category: 'certificate',
    categoryLabel: 'Certificate Course',
    icon: GraduationCap,
    title: 'Certificate in Clinical Research',
    duration: '3 Months • Hybrid Batches',
    audience: 'Life Sciences, B.Pharm, M.Pharm, MBBS, BDS & Allied Health',
    curriculum: [
      'Phase I–IV Trial Lifecycle & NDCT Rules 2019',
      'Trial Master File (TMF) & ISF Documentation',
      'Informed Consent Process & Audio-Visual Compliance'
    ],
    credential: 'CCRP Industry Certification'
  },
  {
    id: 'cert-pv',
    category: 'certificate',
    categoryLabel: 'Certificate Course',
    icon: ShieldCheck,
    title: 'Certificate in Pharmacovigilance',
    duration: '3 Months • Case-Study Driven',
    audience: 'Pharmacy (B.Pharm, Pharm.D), Medicine & Life Sciences',
    curriculum: [
      'ICSR Case Processing & MedDRA Coding',
      '24-Hour & 14-Day Statutory Regulatory Filings',
      'Periodic Safety Reports (PSUR/PBRER) & Signal Analysis'
    ],
    credential: 'PV Competency Certificate'
  },
  {
    id: 'train-gcp',
    category: 'career',
    categoryLabel: 'Career & Training',
    icon: FileCheck2,
    title: 'ICH-GCP Compliance Workshop',
    duration: '1-Day Intensive Session',
    audience: 'Principal Investigators, Co-Investigators, CRCs & Site Staff',
    curriculum: [
      'Core ICH-GCP E6(R2) Investigator Responsibilities',
      'Ethics Committee Approvals & Protocol Amendments',
      'CDSCO Inspection & Sponsor Audit Preparedness'
    ],
    credential: 'ICH-GCP E6(R2) Accredited'
  },
  {
    id: 'train-staff',
    category: 'career',
    categoryLabel: 'Career & Training',
    icon: Stethoscope,
    title: 'Hospital Site Staff Trainings',
    duration: '2-Day Practical Workshop',
    audience: 'Hospital Research Nurses, Phlebotomists & Lab Technicians',
    curriculum: [
      'Centrifugation, Aliquoting & Cold-Chain (-80°C) Logistics',
      'Standardized eCRF Data Entry & Source Documentation',
      'Investigational Product (IP) Storage & Accountability'
    ],
    credential: 'Site Operations Competency'
  },
  {
    id: 'train-crc',
    category: 'career',
    categoryLabel: 'Career & Training',
    icon: Briefcase,
    title: 'CRC Professional Training',
    duration: '6 Weeks Comprehensive Track',
    audience: 'Graduates Entering Hospital Clinical Trial Operations',
    curriculum: [
      'Day-to-Day Trial Coordination & Patient Scheduling',
      'Pre-screening Logs, Recruitment & Retention',
      'Monitor Visit Preparation & Mock Audit Drills'
    ],
    credential: 'CRC Professional Credential'
  }
];

export const TrainingsCourses: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'certificate' | 'career'>('all');

  const filtered = filter === 'all' 
    ? programs 
    : programs.filter(p => p.category === filter);

  return (
    <section id="trainings" className="py-16 sm:py-24 bg-aubergine-950 text-warmwhite relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-eucalyptus/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic & Operational Programs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warmwhite leading-tight">
              Certificate Courses & Career Trainings
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-lavender leading-relaxed">
              Industry-accredited programs in Clinical Research, Pharmacovigilance, and GCP site operations.
            </p>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-lavender/15 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-honey text-aubergine-950 shadow-glow-honey/30'
                : 'bg-aubergine-900 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            All Programs ({programs.length})
          </button>

          <button
            onClick={() => setFilter('certificate')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'certificate'
                ? 'bg-honey text-aubergine-950 shadow-glow-honey/30'
                : 'bg-aubergine-900 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            Certificate Courses (2)
          </button>

          <button
            onClick={() => setFilter('career')}
            className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
              filter === 'career'
                ? 'bg-eucalyptus text-aubergine-950 shadow-glow-eucalyptus/30'
                : 'bg-aubergine-900 text-warmwhite/70 hover:text-warmwhite border border-lavender/20'
            }`}
          >
            Career & Trainings (3)
          </button>
        </div>

        {/* Clean Responsive Cards Grid (Mobile 1-col, Tablet 2-col, Desktop 3-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-aubergine-900/80 border border-lavender/15 hover:border-honey/50 transition-all duration-200 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Card Header: Icon + Category + Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-aubergine-800 text-honey border border-lavender/20">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider ${
                        item.category === 'certificate'
                          ? 'bg-honey/15 text-honey border border-honey/30'
                          : 'bg-eucalyptus/15 text-eucalyptus border border-eucalyptus/30'
                      }`}>
                        {item.categoryLabel}
                      </span>
                      <p className="text-[11px] font-sans text-lavender/80 mt-1">
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-warmwhite group-hover:text-honey transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Target Audience */}
                  <p className="text-xs font-sans text-honey/90 mt-2 mb-4 leading-relaxed line-clamp-2">
                    <span className="font-semibold text-lavender/70">Audience:</span> {item.audience}
                  </p>

                  {/* 3 Concise Modules */}
                  <div className="space-y-2 pt-3 border-t border-lavender/10">
                    {item.curriculum.map((c, i) => (
                      <div key={i} className="flex items-start text-xs font-sans text-warmwhite/80 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-eucalyptus flex-shrink-0 mr-2 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Credential + CTA */}
                <div className="mt-6 pt-4 border-t border-lavender/10 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-1.5 text-[11px] font-sans text-eucalyptus">
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{item.credential}</span>
                  </div>

                  <a
                    href="#feasibility"
                    className="flex-shrink-0 inline-flex items-center space-x-1 text-xs font-grotesk font-bold uppercase tracking-wider text-honey hover:text-honey-300 transition-colors"
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
