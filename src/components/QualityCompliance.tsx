import React from 'react';
import { ShieldCheck, FileCheck, Lock, Award, Eye, ClipboardCheck } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'ICH-GCP E6(R2) & NDCT 2019',
    description: 'Every trial workflow adheres to Indian New Drugs and Clinical Trials Rules (2019) and global ICH-GCP quality standards.'
  },
  {
    icon: FileCheck,
    title: 'Institutional Ethics Liaison',
    description: 'Independent, registered Ethics Committee (IEC) clearances, ongoing study safety oversight, and protocol amendment filings.'
  },
  {
    icon: Eye,
    title: 'Audit-Ready Monitoring',
    description: 'Risk-based monitoring (RBM) and 100% Source Document Verification (SDV) to eliminate data queries before database lock.'
  },
  {
    icon: Lock,
    title: 'Secure Archival & Chain of Custody',
    description: 'Temperature-monitored specimen logistics, calibrated equipment validation, and 15-year statutory trial document archival.'
  },
  {
    icon: ClipboardCheck,
    title: 'Safety Reporting & Pharmacovigilance',
    description: 'Mandatory 24-hour Serious Adverse Event (SAE) reporting to Ethics Committees, Sponsors, and CDSCO licensing authorities.'
  },
  {
    icon: Award,
    title: 'Trained & Certified Personnel',
    description: 'Every CRC and investigator completes accredited Good Clinical Practice and Human Subjects Protection certifications.'
  }
];

export const QualityCompliance: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-warmwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-eucalyptus/20 text-eucalyptus-800 font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
            <span>Quality & Governance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-aubergine-950">
            Uncompromising Ethical Standards & Regulatory Rigor
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-aubergine-700/80">
            Clinical research demands zero error tolerance. Our quality management system provides multi-tier verification at every protocol checkpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-lavender/30 shadow-sm hover:shadow-xl hover:border-eucalyptus transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-eucalyptus/15 text-eucalyptus-700 flex items-center justify-center mb-6 group-hover:bg-honey group-hover:text-aubergine-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-aubergine-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-aubergine-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-lavender/20 flex items-center text-xs font-grotesk font-bold text-eucalyptus-700 tracking-wider uppercase">
                  <span>Standard Operating Procedure Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
