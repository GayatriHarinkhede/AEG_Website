import React, { useState } from 'react';
import { Loader2, Send, Building2, Globe, UserCircle, Mail, Phone, Calendar, Users, School } from 'lucide-react';

const SubmitProposalForm = () => {
  const [formData, setFormData] = useState({
    univ: '', country: '', state: '', name: '', dept: '', des: '',
    email: '', phone: '', cname: '', date: '', count: '',
    intcount: '', natcount: '', intuni: '', natuni: '', msg: ''
  });

  const [activeSection, setActiveSection] = useState('institution');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(formData);
    setIsSubmitting(false);
  };

  const Section = ({ title, icon: Icon, children, id }) => (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 
                       transform hover:shadow-xl border-l-4
                       ${activeSection === id ? 'border-indigo-500 scale-100' : 'border-transparent scale-98'}`}
      onFocus={() => setActiveSection(id)}
    >
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="h-6 w-6 text-indigo-500" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );

  const InputField = ({ label, name, type = "text", ...props }) => (
    <div className="relative transition-all duration-300 hover:transform hover:translate-y-[-2px]">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                         focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition-all duration-200 hover:bg-white hover:border-indigo-300"
        {...props}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Proposal</h1>
          <p className="text-gray-600">Submit your conference proposal details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Section title="Institution Details" icon={Building2} id="institution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="University/Institution's Name*"
                name="univ"
                required
              />
              <InputField
                label="Country*"
                name="country"
                as="select"
                required
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </InputField>
              <InputField
                label="State/Province*"
                name="state"
                required
              />
              <InputField
                label="Department*"
                name="dept"
                required
              />
            </div>
          </Section>

          <Section title="Contact Information" icon={UserCircle} id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Contact Person's Name*"
                name="name"
                required
              />
              <InputField
                label="Designation*"
                name="des"
                required
              />
              <InputField
                label="Email ID*"
                name="email"
                type="email"
                required
              />
              <InputField
                label="Contact Number*"
                name="phone"
                required
              />
            </div>
          </Section>

          <Section title="Conference Details" icon={Calendar} id="conference">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Conference Name*"
                name="cname"
                required
              />
              <InputField
                label="Date*"
                name="date"
                type="date"
                required
              />
              <InputField
                label="Expected Participants*"
                name="count"
                type="number"
                required
              />
            </div>
          </Section>

          <Section title="Additional Information" icon={Users} id="additional">
            <div className="space-y-4">
              <textarea
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                rows="4"
                placeholder="Leave a message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                                         focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                         transition-all duration-200 hover:bg-white hover:border-indigo-300
                                         resize-none"
                required
              />
            </div>
          </Section>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                                px-8 py-4 rounded-lg text-white font-medium
                                transition-all duration-300 transform
                                ${isSubmitting
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95'
                }
                                flex items-center justify-center space-x-2
                                shadow-lg hover:shadow-xl
                            `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  <span>Submit Proposal</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProposalForm;