import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-aubergine-950 text-warmwhite pt-16 pb-12 border-t border-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-lavender/15">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-warmwhite">
                Sri Sri Research Solutions
              </span>
              <span className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-eucalyptus font-semibold">
                Clinical Research & SMO
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-lavender max-w-md leading-relaxed">
              Site Management Organization (SMO) and clinical research partner providing trial execution, trained CRC personnel, and CDSCO/ICH-GCP regulatory compliance across India.
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
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Oncology & Hemato-Oncology</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Site Management (SMO)</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">BA/BE Studies</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Ophthalmology Trials</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Regulatory & IEC Liaison</a></li>
            </ul>
          </div>

          {/* Col 4: Training & Programs */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Career & Trainings
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li><a href="#trainings" className="hover:text-warmwhite transition-colors">Certificate in Clinical Research</a></li>
              <li><a href="#trainings" className="hover:text-warmwhite transition-colors">Certificate in Pharmacovigilance</a></li>
              <li><a href="#trainings" className="hover:text-warmwhite transition-colors">ICH-GCP Compliance Workshop</a></li>
              <li><a href="#trainings" className="hover:text-warmwhite transition-colors">Hospital Site Staff Trainings</a></li>
              <li><a href="#trainings" className="hover:text-warmwhite transition-colors">CRC Professional Training</a></li>
            </ul>
          </div>

          {/* Col 5: Governance & Protocol Desk */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Education & Inquiries
            </h4>
            <div className="space-y-3 text-xs font-sans text-lavender">
              <p className="leading-relaxed">
                Explore Certificate Courses in Clinical Research and Pharmacovigilance, or submit protocol feasibility.
              </p>
              <div className="space-y-2 pt-1">
                <a 
                  href="#trainings" 
                  className="block text-honey hover:underline font-grotesk text-xs font-bold uppercase tracking-wider"
                >
                  Courses & Trainings →
                </a>
                <a 
                  href="#feasibility" 
                  className="inline-block px-4 py-2 rounded-lg bg-honey/20 text-honey hover:bg-honey hover:text-aubergine-950 font-grotesk text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Open Feasibility Form
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-lavender/70 gap-4">
          <p>
            © {new Date().getFullYear()} Sri Sri Research Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-warmwhite transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warmwhite transition-colors">Ethics Charter</a>
            <a href="#" className="hover:text-warmwhite transition-colors">Terms of Engagement</a>
            <a href="#feasibility" className="text-honey hover:underline">Sponsor Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
