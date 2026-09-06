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
              Premier Site Management Organization (SMO) and clinical research partner providing turn-key trial execution, patient accrual, and CDSCO/ICH-GCP compliance across India.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                ICH-GCP E6(R2)
              </span>
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                CDSCO Regulated
              </span>
              <span className="px-2.5 py-1 rounded bg-aubergine-800 border border-lavender/20 text-[10px] font-grotesk font-semibold text-eucalyptus uppercase">
                ISO 9001:2015 Ready
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Site Management (SMO)</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Phase I–IV Trials</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Regulatory & IEC Liaison</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">Medical Writing & CSR</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">AYUSH & Herbal Studies</a></li>
              <li><a href="#services" className="hover:text-warmwhite transition-colors">GCP Investigator Training</a></li>
            </ul>
          </div>

          {/* Col 4: Therapeutic */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Therapeutics
            </h4>
            <ul className="space-y-2 text-xs font-sans text-lavender">
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Oncology & Hematology</a></li>
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Endocrinology & Diabetes</a></li>
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Cardiovascular Diseases</a></li>
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Pulmonology & Asthma</a></li>
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Dermatology & Skin</a></li>
              <li><a href="#therapeutics" className="hover:text-warmwhite transition-colors">Neurology & Pain</a></li>
            </ul>
          </div>

          {/* Col 5: Governance & Protocol Desk */}
          <div>
            <h4 className="font-grotesk text-xs uppercase tracking-wider font-bold text-honey mb-4">
              Protocol Inquiries
            </h4>
            <div className="space-y-3 text-xs font-sans text-lavender">
              <p className="leading-relaxed">
                Direct submissions for trial feasibility, site partnership, or ethics committee documentation via our portal.
              </p>
              <a 
                href="#feasibility" 
                className="inline-block px-4 py-2 rounded-lg bg-honey/20 text-honey hover:bg-honey hover:text-aubergine-950 font-grotesk text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                Open Feasibility Form
              </a>
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
