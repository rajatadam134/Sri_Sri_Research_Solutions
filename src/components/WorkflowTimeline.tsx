import React from 'react';
import { FileSearch, CheckCircle, Users, Activity, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Protocol & Site Feasibility',
    duration: 'Week 1–2',
    description: 'Evaluate patient pool density, investigator interest, and site infrastructure across our pre-vetted hospital network.'
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Ethics Dossier & Regulatory Filing',
    duration: 'Week 3–6',
    description: 'Submit to Institutional Ethics Committees (IEC), coordinate queries, and secure CDSCO/DCGI regulatory trial clearance.'
  },
  {
    number: '03',
    icon: Users,
    title: 'Site Initiation & CRC Deployment',
    duration: 'Week 7–8',
    description: 'Conduct Site Initiation Visit (SIV), train investigators on eCRF protocols, and deploy dedicated on-site CRCs.'
  },
  {
    number: '04',
    icon: Activity,
    title: 'Patient Accrual & Monitoring',
    duration: 'Execution Phase',
    description: 'Informed consent execution, scheduled participant visits, lab sample logistics, and regular CRA monitoring visits.'
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Data Lock & CSR Submission',
    duration: 'Study Closeout',
    description: 'Query resolution, database hard lock, blind code break if applicable, and drafting ICH E3 Clinical Study Report.'
  }
];

export const WorkflowTimeline: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-aubergine-900 text-warmwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
            <span>Study Lifecycle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warmwhite leading-tight">
            From Feasibility To Final Study Report: Controlled Trial Milestones
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-lavender">
            Clear, transparent project management eliminating blind spots, ensuring milestone predictability for sponsors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-aubergine-800/80 border border-lavender/20 flex flex-col justify-between hover:border-honey/60 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-grotesk font-bold text-2xl text-honey/40 group-hover:text-honey transition-colors">
                      {s.number}
                    </span>
                    <span className="font-grotesk text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-eucalyptus/20 text-eucalyptus">
                      {s.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-aubergine-700 flex items-center justify-center text-honey mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-base font-bold text-warmwhite mb-2">
                    {s.title}
                  </h3>

                  <p className="font-sans text-xs text-lavender/90 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-lavender/10 text-[11px] font-grotesk text-eucalyptus uppercase tracking-wider">
                  Phase Milestone Check
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
