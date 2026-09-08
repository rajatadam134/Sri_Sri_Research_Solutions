import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, FileUp, Check, Clock } from 'lucide-react';

export const FeasibilityForm: React.FC = () => {
  const [role, setRole] = useState<'sponsor' | 'investigator'>('sponsor');
  const [submitted, setSubmitted] = useState(false);
  const [needsNda, setNeedsNda] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    therapeuticArea: 'Oncology',
    studyPhase: 'Phase II',
    targetPatients: '',
    message: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feasibility" className="py-24 bg-warmwhite-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Feasibility Standards & Pledges (No dummy contacts) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-honey/20 text-honey-700 font-grotesk font-semibold text-xs uppercase tracking-wider mb-3">
                <span>Trial Intake</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-aubergine-950 leading-tight">
                Request Protocol Feasibility Or Hospital Site Partnership
              </h2>
              <p className="mt-4 font-sans text-base text-aubergine-700 leading-relaxed">
                Submit trial parameters or hospital site capabilities. Review board delivers comprehensive site feasibility, patient recruitment forecasts, and regulatory pathway assessment.
              </p>
            </div>

            {/* Scientific Standards & Guarantees */}
            <div className="space-y-4 pt-4 border-t border-lavender/30">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-lavender/30 shadow-sm">
                <div className="p-3 rounded-xl bg-eucalyptus/15 text-eucalyptus-700 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-aubergine-900">
                    48-Hour Feasibility Review
                  </h4>
                  <p className="font-sans text-xs text-aubergine-700 mt-1 leading-relaxed">
                    Dedicated clinical evaluation team maps investigator availability, site infrastructure, and protocol feasibility within 48 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-lavender/30 shadow-sm">
                <div className="p-3 rounded-xl bg-honey/15 text-honey-700 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-aubergine-900">
                    Mutual Confidentiality & NDA
                  </h4>
                  <p className="font-sans text-xs text-aubergine-700 mt-1 leading-relaxed">
                    All submitted protocols, synopses, and investigator credentials protected under statutory non-disclosure frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-lavender/30 shadow-sm">
                <div className="p-3 rounded-xl bg-aubergine-100 text-aubergine-700 mt-0.5">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-aubergine-900">
                    CDSCO & Ethics Committee Alignment
                  </h4>
                  <p className="font-sans text-xs text-aubergine-700 mt-1 leading-relaxed">
                    Preliminary protocol triage validates alignment with NDCT Rules 2019 and registered Institutional Ethics Committees.
                  </p>
                </div>
              </div>
            </div>

            {/* Notice */}
            <div className="p-4 rounded-2xl bg-aubergine-900 text-warmwhite text-xs flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-eucalyptus flex-shrink-0" />
              <span>Direct secure portal transmission. Zero third-party data broker sharing.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-lavender/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-eucalyptus/20 text-eucalyptus-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-aubergine-950">
                  Feasibility Request Submitted
                </h3>
                <p className="font-sans text-sm text-aubergine-700 max-w-md mx-auto">
                  Inquiry logged for {formData.name} ({formData.organization}). Preliminary study assessment report will be dispatched within 48 hours.
                </p>
                {selectedFile && (
                  <p className="font-sans text-xs text-eucalyptus-700 font-medium">
                    Attached file: {selectedFile.name}
                  </p>
                )}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedFile(null);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-honey-400 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Role Switcher */}
                <div>
                  <label className="block text-xs font-grotesk font-bold uppercase tracking-wider text-aubergine-700 mb-2">
                    Inquiry Entity:
                  </label>
                  <div className="grid grid-cols-2 gap-3 p-1.5 bg-warmwhite rounded-2xl border border-lavender/30">
                    <button
                      type="button"
                      onClick={() => setRole('sponsor')}
                      className={`py-2.5 rounded-xl font-grotesk font-bold text-xs tracking-wider uppercase transition-all ${
                        role === 'sponsor'
                          ? 'bg-aubergine-700 text-warmwhite shadow-md'
                          : 'text-aubergine-700 hover:text-aubergine-950'
                      }`}
                    >
                      Sponsor / CRO / Biotech
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('investigator')}
                      className={`py-2.5 rounded-xl font-grotesk font-bold text-xs tracking-wider uppercase transition-all ${
                        role === 'investigator'
                          ? 'bg-aubergine-700 text-warmwhite shadow-md'
                          : 'text-aubergine-700 hover:text-aubergine-950'
                      }`}
                    >
                      Hospital / Investigator
                    </button>
                  </div>
                </div>

                {/* Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                      Lead Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Principal Investigator / Clinical Director"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warmwhite/50 border border-lavender/40 text-sm font-sans focus:outline-none focus:border-honey focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                      {role === 'sponsor' ? 'Pharmaceutical / Biotech Company' : 'Hospital / Clinical Center'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={role === 'sponsor' ? 'Enterprise Name' : 'Medical Institution Name'}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warmwhite/50 border border-lavender/40 text-sm font-sans focus:outline-none focus:border-honey focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Study Scope Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                      Therapeutic Area
                    </label>
                    <select
                      value={formData.therapeuticArea}
                      onChange={(e) => setFormData({ ...formData, therapeuticArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warmwhite/50 border border-lavender/40 text-sm font-sans focus:outline-none focus:border-honey focus:bg-white"
                    >
                      <option value="Oncology">Oncology & Hemato-Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Endocrinology">Endocrinology & Diabetes</option>
                      <option value="Cardiology">Cardiovascular Medicine</option>
                      <option value="Pulmonology">Pulmonology & Respiratory</option>
                      <option value="Dermatology">Dermatology & Immunology</option>
                      <option value="Neurology">Neurology & CNS</option>
                      <option value="Orthopedics">Orthopedics & Rheumatology</option>
                      <option value="Other">Other Specialized Domain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                      {role === 'sponsor' ? 'Study Phase' : 'Site Classification'}
                    </label>
                    <select
                      value={formData.studyPhase}
                      onChange={(e) => setFormData({ ...formData, studyPhase: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-warmwhite/50 border border-lavender/40 text-sm font-sans focus:outline-none focus:border-honey focus:bg-white"
                    >
                      {role === 'sponsor' ? (
                        <>
                          <option value="Phase I">Phase I (Healthy Volunteer / First-in-Human)</option>
                          <option value="Phase II">Phase II (Proof-of-Concept / Dose Finding)</option>
                          <option value="Phase III">Phase III (Pivotal Confirmatory Trial)</option>
                          <option value="Phase IV">Phase IV / Post-Marketing Surveillance</option>
                          <option value="BA/BE">BA / BE Bioequivalence</option>
                          <option value="Device">Medical Device Evaluation</option>
                        </>
                      ) : (
                        <>
                          <option value="Registered Trial Site">Existing Site with Registered IEC</option>
                          <option value="New Trial Department">Setup New Clinical Trial Unit</option>
                          <option value="Investigator Registry">Individual Investigator Enrollment</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Target sample & specifics */}
                <div>
                  <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                    Study Parameters & Clinical Objectives
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide anticipated sample size, primary inclusion criteria, target trial initiation timeline, or site specialities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-warmwhite/50 border border-lavender/40 text-sm font-sans focus:outline-none focus:border-honey focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* File Upload Dropzone for Protocol Synopsis */}
                <div>
                  <label className="block text-xs font-grotesk font-bold text-aubergine-800 uppercase tracking-wider mb-1">
                    Protocol Synopsis / Investigator Profile (Optional)
                  </label>
                  <label className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-lavender/50 hover:border-honey bg-warmwhite/40 cursor-pointer transition-colors group">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-aubergine-100 text-aubergine-700 group-hover:bg-honey group-hover:text-aubergine-950 transition-colors">
                        <FileUp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-grotesk font-bold text-aubergine-900 block">
                          {selectedFile ? selectedFile.name : 'Attach Protocol Synopsis or Site CV'}
                        </span>
                        <span className="text-[11px] font-sans text-aubergine-500 block">
                          PDF, DOCX up to 25MB
                        </span>
                      </div>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Mutual NDA Checkbox */}
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-warmwhite border border-lavender/30">
                  <input
                    type="checkbox"
                    id="ndaCheck"
                    checked={needsNda}
                    onChange={(e) => setNeedsNda(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-lavender text-honey focus:ring-honey"
                  />
                  <label htmlFor="ndaCheck" className="text-xs font-sans text-aubergine-800 cursor-pointer">
                    <span className="font-semibold block">Request Mutual NDA Prior to Disclosure</span>
                    Send standard two-way Non-Disclosure Agreement before exchange of sensitive protocol dossiers.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-honey text-aubergine-950 font-grotesk font-bold text-sm uppercase tracking-wider shadow-glow-honey hover:bg-honey-400 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Feasibility Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
