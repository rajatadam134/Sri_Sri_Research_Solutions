import React, { useState } from 'react';
import { Network, Building2, Users, ShieldCheck } from 'lucide-react';

interface SiteHub {
  id: string;
  region: string;
  tier: string;
  specialties: string[];
  activeTrials: number;
  bedCapacity: string;
  iecRegistered: boolean;
}

const siteHubs: SiteHub[] = [
  {
    id: 'bengaluru',
    region: 'Bengaluru Hub',
    tier: 'Metro Central',
    specialties: ['Oncology', 'Endocrinology', 'Phase I Unit'],
    activeTrials: 8,
    bedCapacity: '1,200+ Multi-specialty Beds',
    iecRegistered: true
  },
  {
    id: 'mumbai',
    region: 'Mumbai & Western Region',
    tier: 'Tertiary Medical Center',
    specialties: ['Cardiovascular', 'Pulmonology', 'BA/BE'],
    activeTrials: 6,
    bedCapacity: '950+ Beds',
    iecRegistered: true
  },
  {
    id: 'delhi',
    region: 'Delhi-NCR Network',
    tier: 'Apex Research Institute',
    specialties: ['Immunology', 'Dermatology', 'Neurology'],
    activeTrials: 7,
    bedCapacity: '1,500+ Beds',
    iecRegistered: true
  },
  {
    id: 'hyderabad',
    region: 'Hyderabad Clinical Corridor',
    tier: 'Biotech & Pharma Hub',
    specialties: ['Bioavailability', 'Gastroenterology', 'Vaccine Trials'],
    activeTrials: 5,
    bedCapacity: '800+ Beds',
    iecRegistered: true
  },
  {
    id: 'belagavi',
    region: 'North Karnataka & Belagavi Site',
    tier: 'Regional Medical College',
    specialties: ['AYUSH & Herbal Studies', 'General Medicine', 'PMS Registries'],
    activeTrials: 4,
    bedCapacity: '700+ Beds',
    iecRegistered: true
  },
  {
    id: 'ahmedabad',
    region: 'Ahmedabad Medical Cluster',
    tier: 'Specialized Oncology Site',
    specialties: ['Solid Tumors', 'Orthopedics', 'Metabolic Trials'],
    activeTrials: 5,
    bedCapacity: '650+ Beds',
    iecRegistered: true
  }
];

export const SiteNetwork: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<SiteHub>(siteHubs[0]);

  return (
    <section className="py-20 bg-aubergine-900 text-warmwhite border-t border-b border-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
              <Network className="w-3.5 h-3.5 mr-1 text-honey" />
              <span>Pan-India Clinical Footprint</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warmwhite">
              Institutional Hospital Network Across Key Patient Corridors
            </h2>
          </div>
          <p className="font-sans text-sm text-lavender max-w-md leading-relaxed">
            Multi-centric site capability with pre-cleared Institutional Ethics Committees (IEC) and full-time on-site Clinical Research Coordinators (CRCs).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hub list selector */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {siteHubs.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-aubergine-800 border-honey shadow-lg shadow-honey/10'
                      : 'bg-aubergine-950/60 border-lavender/15 hover:border-lavender/40 hover:bg-aubergine-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-grotesk text-[10px] uppercase font-bold text-eucalyptus tracking-wider">
                      {hub.tier}
                    </span>
                    {hub.iecRegistered && (
                      <span className="inline-flex items-center text-[10px] font-sans text-warmwhite/60">
                        <ShieldCheck className="w-3 h-3 mr-1 text-eucalyptus" />
                        IEC Active
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base font-bold text-warmwhite mb-2">
                    {hub.region}
                  </h3>

                  <div className="flex items-center justify-between text-xs font-sans text-lavender pt-2 border-t border-lavender/10">
                    <span>{hub.activeTrials} Ongoing Studies</span>
                    <span className="font-grotesk font-semibold text-honey">Details →</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Hub Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-aubergine-800/90 border border-lavender/25 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-honey/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-eucalyptus/20 text-eucalyptus text-xs font-grotesk font-bold uppercase tracking-wider">
                  {selectedHub.tier}
                </span>
                <span className="text-xs font-grotesk text-warmwhite/60 uppercase tracking-wider">
                  Turnkey SMO Deployed
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warmwhite mb-2">
                {selectedHub.region}
              </h3>
              <p className="font-sans text-xs text-lavender mb-6">
                Institutional trial infrastructure with GCP-certified Principal Investigators and dedicated trial monitors.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-aubergine-900 border border-lavender/15">
                  <div className="flex items-center space-x-2 text-honey mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-grotesk text-xs uppercase tracking-wider font-bold">Facility Scale</span>
                  </div>
                  <span className="font-sans text-xs text-warmwhite font-medium">
                    {selectedHub.bedCapacity}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-aubergine-900 border border-lavender/15">
                  <div className="flex items-center space-x-2 text-eucalyptus mb-1">
                    <Users className="w-4 h-4" />
                    <span className="font-grotesk text-xs uppercase tracking-wider font-bold">Investigator Team</span>
                  </div>
                  <span className="font-sans text-xs text-warmwhite font-medium">
                    Full-time CRCs + Qualified PIs
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-warmwhite/80 mb-2">
                  Specialized Disease Focus At This Center
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-aubergine-700 text-warmwhite text-xs font-sans border border-lavender/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-lavender/15 flex items-center justify-between">
              <span className="text-xs font-sans text-lavender">
                Protocol evaluation available for this center
              </span>
              <a
                href="#feasibility"
                className="px-5 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-honey-400 transition-all shadow-glow-honey"
              >
                Inquire For This Site
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
