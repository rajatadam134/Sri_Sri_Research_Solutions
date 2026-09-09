import React from 'react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#140e15] text-warmwhite pt-16 pb-12 border-t border-lavender/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-lavender/10">
          
          {/* Brand & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button 
              onClick={() => navigate('/')} 
              className="flex flex-col text-left cursor-pointer group"
            >
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-warmwhite group-hover:text-honey-400 transition-colors">
                Sri Sri Research Solutions
              </span>
              <span className="font-sans text-xs text-lavender/70 font-medium">
                Clinical Research & Site Management Organization
              </span>
            </button>
            
            <p className="font-sans text-xs sm:text-sm text-lavender/80 max-w-sm leading-relaxed">
              Supporting clinical trials across India through dedicated on-site coordination, regulatory alignment, and trial governance.
            </p>
          </div>

          {/* Nav Group 1: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-warmwhite uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-lavender/80">
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Site management (SMO)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Regulatory & ethics
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Oncology trials
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#services')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  BA/BE studies
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Group 2: Training (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-warmwhite uppercase tracking-wider">
              Training
            </h4>
            <ul className="space-y-2 text-xs text-lavender/80">
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
                  ICH-GCP workshop
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#trainings')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Hospital site staff training
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Group 3: Organization & Action (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-warmwhite uppercase tracking-wider">
              Organization
            </h4>
            <ul className="space-y-2 text-xs text-lavender/80">
              <li>
                <button onClick={() => navigate('/', '#about')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/founder')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Founder profile
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/', '#feasibility')} className="hover:text-warmwhite transition-colors cursor-pointer text-left">
                  Feasibility request
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-lavender/60 gap-4">
          <p>
            © {new Date().getFullYear()} Sri Sri Research Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigate('/', '#about')} className="hover:text-warmwhite transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => navigate('/founder')} className="hover:text-warmwhite transition-colors cursor-pointer">
              Founder
            </button>
            <button onClick={() => navigate('/', '#feasibility')} className="text-honey-400 hover:text-honey-300 transition-colors cursor-pointer">
              Request feasibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
