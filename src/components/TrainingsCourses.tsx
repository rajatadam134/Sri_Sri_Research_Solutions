import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase, 
  FileCheck2, 
  Stethoscope,
  ChevronDown,
  Clock,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

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
  const [expandedWorkshop, setExpandedWorkshop] = useState<string | null>(null);

  const certificates = programs.filter(p => p.category === 'certificate');
  const careers = programs.filter(p => p.category === 'career');

  const filterOptions = [
    { key: 'all', label: `All Programs (${programs.length})` },
    { key: 'certificate', label: 'Certificate Courses (2)' },
    { key: 'career', label: 'Career & Trainings (3)' },
  ];

  return (
    <section id="trainings" className="py-20 sm:py-28 bg-aubergine-950 text-warmwhite relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-eucalyptus/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fluid Scale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey font-grotesk font-semibold text-[11px] uppercase tracking-[0.2em] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic & Operational Programs</span>
            </div>
            <h2 className="font-serif fluid-heading-section font-bold tracking-tight text-warmwhite">
              Certificate Courses & Career Trainings
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-lavender leading-relaxed">
              Industry-accredited programs in Clinical Research, Pharmacovigilance, and GCP site operations.
            </p>
          </div>
        </div>

        {/* Filter Switcher with Animated Highlight */}
        <div className="flex items-center gap-2 mb-10 pb-4 border-b border-lavender/15 overflow-x-auto no-scrollbar scroll-mask-edge">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key as any)}
                className={`relative px-4 py-2 rounded-full text-xs font-grotesk font-bold tracking-wider uppercase transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
                  isActive ? 'text-aubergine-950 font-extrabold' : 'text-warmwhite/70 hover:text-warmwhite'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTrainingFilter"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-honey rounded-full shadow-glow-honey/30"
                  />
                )}
                <span className="relative z-10">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Section 1: Flagship Certificate Programs */}
        {(filter === 'all' || filter === 'certificate') && (
          <div className="mb-14">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-eucalyptus font-bold">
                Flagship Professional Accreditations
              </span>
              <span className="text-xs font-sans text-lavender/70">
                3-Month Comprehensive Programs
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certificates.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="relative group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-aubergine-900/90 to-aubergine-900/50 border border-lavender/20 hover:border-honey/60 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top ambient fill on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-honey/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-2xl bg-honey/15 text-honey border border-honey/30 group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider bg-honey/20 text-honey border border-honey/40">
                            {item.categoryLabel}
                          </span>
                          <div className="flex items-center justify-end space-x-1.5 text-xs text-lavender/80 mt-1.5 font-sans">
                            <Clock className="w-3.5 h-3.5 text-eucalyptus" />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl font-bold text-warmwhite group-hover:text-honey transition-colors">
                        {item.title}
                      </h3>

                      {/* Audience */}
                      <div className="mt-3 mb-6 p-3 rounded-xl bg-aubergine-950/60 border border-lavender/10 flex items-start space-x-2.5">
                        <Users className="w-4 h-4 text-eucalyptus flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-sans text-lavender/90 leading-relaxed">
                          <span className="font-semibold text-warmwhite">Target: </span>
                          {item.audience}
                        </p>
                      </div>

                      {/* Curriculum Bullets */}
                      <div className="space-y-2.5 pt-4 border-t border-lavender/15">
                        <span className="block text-[11px] font-grotesk uppercase tracking-wider text-eucalyptus font-bold mb-2">
                          Key Curriculum Modules:
                        </span>
                        {item.curriculum.map((c, i) => (
                          <div key={i} className="flex items-start text-xs font-sans text-warmwhite/85 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-eucalyptus flex-shrink-0 mr-2.5 mt-0.5" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-8 pt-5 border-t border-lavender/15 flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-xs font-sans text-eucalyptus font-medium">
                        <Award className="w-4 h-4 flex-shrink-0 text-honey" />
                        <span className="truncate">{item.credential}</span>
                      </div>

                      <MagneticButton href="#feasibility">
                        <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-honey-400 transition-all shadow-glow-honey">
                          <span>Enroll</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </MagneticButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Asymmetric Section 2: Career & Hospital Site Staff Trainings (Numbered Timeline Rows) */}
        {(filter === 'all' || filter === 'career') && (
          <div className="mt-12">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-eucalyptus font-bold">
                Hospital Site Operations & Compliance Workshops
              </span>
              <span className="text-xs font-sans text-lavender/70">
                Short-Track Intensive Modules
              </span>
            </div>

            <div className="space-y-4">
              {careers.map((item, idx) => {
                const Icon = item.icon;
                const isExpanded = expandedWorkshop === item.id;
                const workshopNum = `0${idx + 1}`;

                return (
                  <div
                    key={item.id}
                    onClick={() => setExpandedWorkshop(isExpanded ? null : item.id)}
                    className="p-6 sm:p-7 rounded-2xl bg-aubergine-900/60 border border-lavender/15 hover:border-eucalyptus/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Left: Number + Icon + Title */}
                      <div className="flex items-center space-x-4">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-eucalyptus/60 group-hover:text-eucalyptus transition-colors">
                          {workshopNum}
                        </span>

                        <div className="p-2.5 rounded-xl bg-aubergine-800 text-eucalyptus border border-lavender/20">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <h4 className="font-serif text-lg sm:text-xl font-bold text-warmwhite group-hover:text-honey transition-colors">
                            {item.title}
                          </h4>
                          <span className="font-sans text-xs text-lavender/70 block mt-0.5">
                            {item.duration} • {item.credential}
                          </span>
                        </div>
                      </div>

                      {/* Right: Toggle & Enroll */}
                      <div className="flex items-center space-x-3 self-end md:self-auto">
                        <span className="text-xs font-grotesk uppercase tracking-wider text-eucalyptus font-bold hidden sm:inline">
                          {isExpanded ? 'Collapse Curriculum' : 'View Curriculum'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-eucalyptus transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        <a
                          href="#feasibility"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 rounded-xl bg-aubergine-800 hover:bg-honey hover:text-aubergine-950 text-warmwhite text-xs font-grotesk font-bold uppercase tracking-wider transition-all border border-lavender/20"
                        >
                          Register
                        </a>
                      </div>
                    </div>

                    {/* Expandable Curriculum Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-lavender/15 overflow-hidden"
                        >
                          <p className="text-xs font-sans text-honey mb-3">
                            <span className="font-semibold text-lavender">Target Audience: </span>
                            {item.audience}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {item.curriculum.map((c, i) => (
                              <div key={i} className="p-3 rounded-xl bg-aubergine-950/70 border border-lavender/10 flex items-start space-x-2 text-xs font-sans text-warmwhite/85">
                                <CheckCircle2 className="w-3.5 h-3.5 text-eucalyptus flex-shrink-0 mt-0.5" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
