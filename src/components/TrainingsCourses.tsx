import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface CertificateProgram {
  id: string;
  type: string;
  title: string;
  duration: string;
  audience: string;
  summary: string;
  modules: string[];
}

const certificatePrograms: CertificateProgram[] = [
  {
    id: 'cr',
    type: 'Certificate course',
    title: 'Certificate in Clinical Research',
    duration: '3 months',
    audience: 'Life sciences, pharmacy, medicine, and allied health graduates',
    summary: 'Structured grounding in Phase I–IV clinical trial conduct, statutory ethics guidelines, and essential documentation standards in India.',
    modules: [
      'Trial phases and regulatory framework (NDCT Rules 2019)',
      'Trial Master File (TMF) and Investigator Site File management',
      'Informed consent process and subject rights protection'
    ]
  },
  {
    id: 'pv',
    type: 'Certificate course',
    title: 'Certificate in Pharmacovigilance',
    duration: '3 months',
    audience: 'Pharmacy, life sciences, and healthcare graduates',
    summary: 'Practical training in adverse drug event processing, regulatory safety reporting timelines, and post-marketing surveillance principles.',
    modules: [
      'Individual Case Safety Report (ICSR) processing',
      'MedDRA terminology and coding practices',
      'Statutory expedited and periodic safety reporting'
    ]
  }
];

interface Workshop {
  id: string;
  duration: string;
  title: string;
  audience: string;
  details: string[];
}

const workshops: Workshop[] = [
  {
    id: 'gcp',
    duration: '1-day session',
    title: 'ICH-GCP Compliance Workshop',
    audience: 'Investigators, co-investigators, coordinators, and institutional site teams',
    details: [
      'Principal investigator duties and site responsibilities under ICH-GCP E6(R2)',
      'Ethics committee approvals, protocol amendments, and notifications',
      'Inspection and sponsor audit preparedness workflows'
    ]
  },
  {
    id: 'staff',
    duration: '2-day session',
    title: 'Hospital Site Staff Training',
    audience: 'Research nurses, phlebotomists, and hospital clinical lab technicians',
    details: [
      'Biological sample processing, aliquoting, and cold-chain integrity',
      'Source documentation standards and data entry discipline',
      'Investigational product accountability and storage verification'
    ]
  },
  {
    id: 'crc',
    duration: '6-week track',
    title: 'CRC Professional Training',
    audience: 'Candidates preparing for on-site trial coordinator roles in hospital environments',
    details: [
      'Daily site coordination, subject appointment workflows, and visit logs',
      'Screening procedures, recruitment support, and retention practices',
      'Monitor visit facilitation and documentation resolution'
    ]
  }
];

export const TrainingsCourses: React.FC = () => {
  const { navigate } = useRouter();
  const [expandedWorkshop, setExpandedWorkshop] = useState<string | null>(null);

  const toggleWorkshop = (id: string) => {
    setExpandedWorkshop(expandedWorkshop === id ? null : id);
  };

  return (
    <section id="trainings" className="bg-warmwhite py-20 sm:py-28 border-b border-aubergine-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <p className="text-sm font-semibold tracking-wider uppercase text-aubergine-700 mb-3">
            Education
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-aubergine-950 tracking-tight">
            Training for clinical research practice
          </h2>
          <p className="mt-4 font-sans text-lg sm:text-xl text-aubergine-800 leading-relaxed">
            Professional certificate programs and targeted site-staff workshops built around Good Clinical Practice and operational standards.
          </p>
        </div>

        {/* 1. Certificate Courses: Comparison Editorial (2 Columns) */}
        <div className="mb-20">
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-aubergine-800 pb-3 border-b border-aubergine-900/15 mb-8">
            Certificate programs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 md:divide-x md:divide-aubergine-900/10">
            {certificatePrograms.map((prog, idx) => (
              <div key={prog.id} className={idx > 0 ? 'md:pl-10 lg:pl-14' : ''}>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm sm:text-base font-semibold text-aubergine-600 block">
                      {prog.type} • {prog.duration}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-aubergine-950 mt-1">
                      {prog.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-aubergine-800">
                    <span className="font-semibold text-aubergine-950">Audience: </span>
                    {prog.audience}
                  </p>

                  <p className="text-base sm:text-lg text-aubergine-900 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="pt-2">
                    <p className="text-sm font-bold text-aubergine-950 uppercase tracking-wider mb-2">
                      Key learning areas
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-aubergine-800 list-disc pl-5 marker:text-honey-600">
                      {prog.modules.map((mod, i) => (
                        <li key={i}>{mod}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => navigate('/', '#feasibility')}
                      className="inline-flex items-center text-sm sm:text-base font-semibold text-aubergine-950 hover:text-honey-700 transition-colors group cursor-pointer"
                    >
                      <span>Request course information</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Workshops and Career Training: Agenda Listing */}
        <div>
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-aubergine-800 pb-3 border-b border-aubergine-900/15 mb-6">
            Workshops and site staff training
          </h3>

          <div className="divide-y divide-aubergine-900/10 border-b border-aubergine-900/10">
            {workshops.map((ws) => {
              const isExpanded = expandedWorkshop === ws.id;
              return (
                <div key={ws.id} className="py-5 sm:py-6">
                  <div 
                    onClick={() => toggleWorkshop(ws.id)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleWorkshop(ws.id);
                      }
                    }}
                  >
                    <div className="md:col-span-2 text-sm sm:text-base font-semibold text-aubergine-600">
                      {ws.duration}
                    </div>

                    <div className="md:col-span-5 font-bold text-base sm:text-lg text-aubergine-950 group-hover:text-honey-700 transition-colors">
                      {ws.title}
                    </div>

                    <div className="md:col-span-4 text-sm sm:text-base text-aubergine-800">
                      {ws.audience}
                    </div>

                    <div className="md:col-span-1 flex justify-end text-aubergine-500 group-hover:text-aubergine-950">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expandable curriculum details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-aubergine-900/10 pl-0 md:pl-6">
                      <p className="text-sm font-bold text-aubergine-950 uppercase tracking-wider mb-2">
                        Curriculum topics
                      </p>
                      <ul className="space-y-1.5 text-sm sm:text-base text-aubergine-800 list-disc pl-5 marker:text-honey-600">
                        {ws.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6">
            <button
              onClick={() => navigate('/', '#feasibility')}
              className="inline-flex items-center text-sm sm:text-base font-semibold text-aubergine-950 hover:text-honey-700 transition-colors group cursor-pointer"
            >
              <span>Ask about upcoming training</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingsCourses;
