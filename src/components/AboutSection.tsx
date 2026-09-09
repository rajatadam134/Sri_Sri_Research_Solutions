import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  HeartHandshake, 
  FileSpreadsheet, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { MagneticButton } from './MagneticButton';

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();

  const whyChooseUsPoints = [
    {
      title: 'Quality-Focused Support',
      desc: 'Quality-focused clinical research support across every trial phase.',
      icon: ShieldCheck,
    },
    {
      title: 'Patient Safety & Ethics',
      desc: 'Uncompromising commitment to patient safety and ethical research conduct.',
      icon: HeartHandshake,
    },
    {
      title: 'Experienced Professionals',
      desc: 'Experienced and dedicated clinical research coordinators and site teams.',
      icon: UserCheck,
    },
    {
      title: 'Regulatory & GCP Rigor',
      desc: 'Strong focus on statutory regulatory standards and ICH-GCP compliance.',
      icon: CheckCircle2,
    },
    {
      title: 'Efficient Site Coordination',
      desc: 'Efficient study coordination, investigator support, and site management.',
      icon: Clock,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Transparent communication and collaborative approach with all partners.',
      icon: Target,
    },
    {
      title: 'Commitment to Objectives',
      desc: 'Commitment to study timelines, data quality, and trial objectives.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-warmwhite-dark text-aubergine-950 relative border-b border-lavender/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Main Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-aubergine-900/10 text-aubergine-900 font-grotesk font-semibold text-[11px] uppercase tracking-[0.2em] mb-3">
            <span>ABOUT SMO SRI SRI RESEARCH SOLUTIONS</span>
          </div>
          <h2 className="font-serif fluid-heading-section font-bold tracking-tight text-aubergine-950">
            Supporting Better Research for Better Healthcare
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-aubergine-800 leading-relaxed">
            SMO Sri Sri Research Solutions is a dedicated Clinical Research and Site Management Organization committed to supporting the successful execution of clinical research studies with quality, integrity, and efficiency.
          </p>
        </div>

        {/* Narrative & Lifecycle Support Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 space-y-5 font-sans text-sm sm:text-base text-aubergine-700 leading-relaxed">
            <p>
              We work closely with pharmaceutical companies, biotechnology companies, Contract Research Organizations (CROs), investigators, hospitals, and research institutions to facilitate the smooth and compliant conduct of clinical trials. Our focus is on building strong partnerships, maintaining high-quality standards, and ensuring that every study is conducted in accordance with applicable regulatory requirements, ethical principles, and Good Clinical Practice (GCP).
            </p>
            <p>
              We provide comprehensive support across the clinical research process, including site identification and feasibility, study start-up, regulatory and ethics coordination, patient recruitment support, clinical trial coordination, data and document management, monitoring support, and study close-out activities.
            </p>
          </div>

          {/* Quick Lifecycle Highlights */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-lavender/30 shadow-md space-y-4">
            <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-honey-700 font-bold block">
              End-to-End Trial Lifecycle Support
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs font-sans text-aubergine-900">
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                Site Feasibility & Start-up
              </div>
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                Regulatory & Ethics (IEC)
              </div>
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                Patient Recruitment
              </div>
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                On-Site CRC Coordination
              </div>
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                Data & Document Archival
              </div>
              <div className="p-3 rounded-xl bg-warmwhite border border-lavender/20">
                Monitoring & Close-Out
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Dual Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-lavender/30 shadow-sm flex flex-col justify-between group hover:border-honey/60 transition-all duration-300">
            <div>
              <div className="p-3 w-fit rounded-2xl bg-honey/15 text-honey-800 mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <span className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-honey-700 font-bold block mb-2">
                Our Purpose
              </span>
              <h3 className="font-serif text-2xl font-bold text-aubergine-950 mb-3">
                Our Mission
              </h3>
              <p className="font-sans text-sm sm:text-base text-aubergine-700 leading-relaxed">
                To contribute to the advancement of healthcare and medical science by providing reliable, ethical, and high-quality clinical research solutions that help bring innovative treatments to patients efficiently and responsibly.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-lavender/30 shadow-sm flex flex-col justify-between group hover:border-eucalyptus/60 transition-all duration-300">
            <div>
              <div className="p-3 w-fit rounded-2xl bg-eucalyptus/15 text-eucalyptus-800 mb-6 group-hover:scale-105 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-eucalyptus-800 font-bold block mb-2">
                Our Horizon
              </span>
              <h3 className="font-serif text-2xl font-bold text-aubergine-950 mb-3">
                Our Vision
              </h3>
              <p className="font-sans text-sm sm:text-base text-aubergine-700 leading-relaxed">
                To become a trusted and respected partner in clinical research by delivering quality-driven, patient-focused, and scientifically sound research solutions while fostering long-term relationships with sponsors, CROs, investigators, and research organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us - 7 Pillars */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-aubergine-700 font-bold block mb-2">
              Operational Excellence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-aubergine-950">
              Why Choose Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUsPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-lavender/30 hover:border-aubergine-600/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-xl bg-eucalyptus/15 text-eucalyptus-800">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-grotesk text-sm font-bold text-aubergine-900 tracking-wide">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-aubergine-700 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* "Meet Our Founder" CTA Block */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-aubergine-950 via-aubergine-900 to-aubergine-800 text-warmwhite border border-honey/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-honey/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Thumbnail */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
              <div className="relative group cursor-pointer" onClick={() => navigate('/founder')}>
                <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-honey/50 shadow-2xl bg-aubergine-900/80">
                  <picture>
                    <source srcSet="/vishal-iraganti.webp" type="image/webp" />
                    <img 
                      src="/vishal-iraganti.png" 
                      alt="Vishal Iraganti, Founder of SMO Sri Sri Research Solutions"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  </picture>
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider bg-honey text-aubergine-950 shadow-glow-honey">
                  M.Pharm • Pharmacology
                </span>
              </div>
            </div>

            {/* Content & CTA */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-honey/20 border border-honey/30 text-honey font-grotesk font-bold text-[11px] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Leadership & Scientific Direction</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warmwhite">
                Meet Our Founder: Vishal Iraganti
              </h3>

              <p className="font-sans text-sm sm:text-base text-lavender max-w-2xl leading-relaxed">
                Founded on scientific rigor in Pharmacology and an unwavering commitment to Good Clinical Practice (GCP), SMO Sri Sri Research Solutions provides trusted trial execution and certified site coordination across India.
              </p>

              <div className="pt-2">
                <MagneticButton onClick={() => navigate('/founder')}>
                  <span className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-widest hover:bg-honey-400 transition-all shadow-glow-honey">
                    <span>View Founder Profile & Bio</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
