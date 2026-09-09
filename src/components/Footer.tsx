import React from 'react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-aubergine-950 text-warmwhite pt-16 pb-12 border-t border-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-lavender/15">
          
          {/* Col 1 & 2: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-warmwhite">
                Sri Sri Research Solutions
              </span>
              <span className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-eucalyptus font-semibold">
                Clinical Research & SMO
              </span>
            </div>
            
            <p className="font-serif italic text-sm text-honey/90">
              “Supporting Better Research for Better Healthcare”
            </p>

            <p className="font-sans text-xs sm:text-sm text-lavender max-w-md leading-relaxed">
              Dedicated Clinical Research and Site Management Organization committed to supporting the successful execution of clinical trials with quality, integrity, and regulatory efficiency across India.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                ICH-GCP E6(R2)
              </span>
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                CDSCO Regulated
              </span>
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                Oncology Focus
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Oncology & Hemato-Oncology
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Site Management (SMO)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  BA/BE Studies
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Ophthalmology Trials
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Regulatory & IEC Liaison
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Training & Programs */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Career & Trainings
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Certificate in Clinical Research
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Certificate in Pharmacovigilance
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  ICH-GCP Compliance Workshop
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Hospital Site Staff Trainings
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  CRC Professional Training
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Leadership */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Organization
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li>
                <button onClick={() => navigate('/', '#about')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  About Sri Sri Research
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/founder')} className="text-honey hover:underline transition-colors font-semibold cursor-pointer text-left">
                  Our Founder (Vishal Iraganti)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#about')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Mission & Vision
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#feasibility')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Sponsor Feasibility Portal
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button 
                onClick={() => navigate('/', '#feasibility')} 
                className="w-full text-center px-4 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk text-[11px] font-bold uppercase tracking-wider hover:bg-honey-400 transition-colors shadow-glow-honey cursor-pointer"
              >
                Request Feasibility
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-lavender/70 gap-4">
          <p>
            © {new Date().getFullYear()} Sri Sri Research Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigate('/', '#about')} className="hover:text-warmwhite transition-colors cursor-pointer">About</button>
            <button onClick={() => navigate('/founder')} className="hover:text-warmwhite transition-colors cursor-pointer">Leadership</button>
            <button onClick={() => navigate('/', '#feasibility')} className="text-honey hover:underline cursor-pointer">Sponsor Portal</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
