import React, { useState } from 'react';
import { CheckCircle2, FileUp } from 'lucide-react';

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
    <section id="feasibility" className="bg-aubergine-950 text-warmwhite py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Verified Notes */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[13px] font-medium text-lavender/80">
              Protocol Feasibility
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-warmwhite tracking-tight">
              Start a feasibility conversation
            </h2>

            <p className="font-sans text-base text-lavender/90 leading-relaxed max-w-md">
              Share initial study parameters or hospital capabilities. We assess protocol alignment, site capacity, and operational requirements under strict confidentiality.
            </p>

            <div className="pt-6 border-t border-lavender/15 space-y-3 text-xs sm:text-[13px] text-lavender/80">
              <p className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-honey" />
                <span>For sponsors, CROs, and hospital research teams</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-honey" />
                <span>Mutual NDA requests can be indicated below</span>
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-aubergine-900/60 p-8 rounded-[4px] border border-lavender/15">
                <div className="w-12 h-12 bg-eucalyptus/20 text-eucalyptus rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-warmwhite">
                  Feasibility inquiry received
                </h3>
                <p className="text-sm text-lavender max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name} ({formData.organization}). Our clinical team will review your study parameters and follow up directly.
                </p>
                {selectedFile && (
                  <p className="text-xs text-eucalyptus font-medium">
                    Attached file: {selectedFile.name}
                  </p>
                )}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedFile(null);
                  }}
                  className="mt-2 px-5 py-2.5 rounded-[4px] bg-honey-600 hover:bg-honey-700 text-white font-medium text-xs tracking-wide transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Role Toggle */}
                <div>
                  <label className="block text-xs font-medium text-lavender/80 mb-2">
                    Inquiry type
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-aubergine-900/80 rounded-[4px] border border-lavender/15">
                    <button
                      type="button"
                      onClick={() => setRole('sponsor')}
                      className={`py-2 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                        role === 'sponsor'
                          ? 'bg-warmwhite text-aubergine-950 font-semibold'
                          : 'text-lavender/80 hover:text-warmwhite'
                      }`}
                    >
                      Sponsor / CRO / Biotech
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('investigator')}
                      className={`py-2 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                        role === 'investigator'
                          ? 'bg-warmwhite text-aubergine-950 font-semibold'
                          : 'text-lavender/80 hover:text-warmwhite'
                      }`}
                    >
                      Hospital / Investigator
                    </button>
                  </div>
                </div>

                {/* Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-warmwhite mb-1.5">
                      Contact name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-aubergine-900/60 border border-lavender/20 text-sm text-warmwhite placeholder:text-lavender/40 focus:outline-none focus:border-honey-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-warmwhite mb-1.5">
                      {role === 'sponsor' ? 'Organization / Company *' : 'Hospital / Institution *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-aubergine-900/60 border border-lavender/20 text-sm text-warmwhite placeholder:text-lavender/40 focus:outline-none focus:border-honey-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Therapeutic Area & Phase */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-warmwhite mb-1.5">
                      Therapeutic area
                    </label>
                    <select
                      value={formData.therapeuticArea}
                      onChange={(e) => setFormData({ ...formData, therapeuticArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-aubergine-900/90 border border-lavender/20 text-sm text-warmwhite focus:outline-none focus:border-honey-500"
                    >
                      <option value="Oncology">Oncology & Hemato-Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Endocrinology">Endocrinology & Diabetes</option>
                      <option value="Cardiology">Cardiovascular Medicine</option>
                      <option value="Pulmonology">Pulmonology & Respiratory</option>
                      <option value="Dermatology">Dermatology & Immunology</option>
                      <option value="Neurology">Neurology & CNS</option>
                      <option value="Orthopedics">Orthopedics & Rheumatology</option>
                      <option value="Other">Other clinical domain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-warmwhite mb-1.5">
                      {role === 'sponsor' ? 'Study phase' : 'Site classification'}
                    </label>
                    <select
                      value={formData.studyPhase}
                      onChange={(e) => setFormData({ ...formData, studyPhase: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-aubergine-900/90 border border-lavender/20 text-sm text-warmwhite focus:outline-none focus:border-honey-500"
                    >
                      {role === 'sponsor' ? (
                        <>
                          <option value="Phase I">Phase I (Healthy Volunteer / First-in-Human)</option>
                          <option value="Phase II">Phase II (Proof-of-Concept / Dose Finding)</option>
                          <option value="Phase III">Phase III (Pivotal Confirmatory Trial)</option>
                          <option value="Phase IV">Phase IV / Post-Marketing Registry</option>
                          <option value="BA/BE">BA / BE Study</option>
                          <option value="Device">Medical Device Evaluation</option>
                        </>
                      ) : (
                        <>
                          <option value="Registered Trial Site">Existing site with registered Ethics Committee</option>
                          <option value="New Trial Department">New clinical research unit</option>
                          <option value="Investigator Registry">Individual investigator interest</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Parameters & Message */}
                <div>
                  <label className="block text-xs font-medium text-warmwhite mb-1.5">
                    Study parameters / site notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder={role === 'sponsor' ? "Enrollment timeline, target sample size, key criteria..." : "Site bed strength, clinical equipment, ethics committee status..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[4px] bg-aubergine-900/60 border border-lavender/20 text-sm text-warmwhite placeholder:text-lavender/40 focus:outline-none focus:border-honey-500 transition-colors resize-none"
                  />
                </div>

                {/* File Attachment */}
                <div>
                  <label className="block text-xs font-medium text-warmwhite mb-1.5">
                    Protocol synopsis / site profile (optional)
                  </label>
                  <div className="relative border border-dashed border-lavender/30 hover:border-lavender/60 rounded-[4px] p-3 text-center transition-colors bg-aubergine-900/40">
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center space-x-2 text-xs text-lavender/80">
                      <FileUp className="w-4 h-4 text-honey-500" />
                      <span>{selectedFile ? selectedFile.name : "Attach PDF or DOCX file"}</span>
                    </div>
                  </div>
                </div>

                {/* NDA Checkbox */}
                <div className="flex items-start space-x-3 pt-1">
                  <input
                    id="nda"
                    type="checkbox"
                    checked={needsNda}
                    onChange={(e) => setNeedsNda(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded-[2px] text-honey-600 bg-aubergine-900 border-lavender/40 focus:ring-0"
                  />
                  <label htmlFor="nda" className="text-xs text-lavender/80 cursor-pointer leading-snug">
                    Request mutual Non-Disclosure Agreement (NDA) before sharing detailed protocol documentation.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-[4px] bg-honey-600 hover:bg-honey-700 text-white font-medium text-sm transition-colors cursor-pointer"
                  >
                    Send request
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeasibilityForm;
