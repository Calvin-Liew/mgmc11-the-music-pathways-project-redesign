import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      userType: '',
      message: '',
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#002A5C] to-[#001d3f] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Got questions about the Project? Feedback? A resource you think should be added? Let us know!
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002A5C] mb-2">Thank you!</h3>
                  <p className="text-gray-600">Your message has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name <span className="text-[#D12A2A]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors text-sm sm:text-base"
                      />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-[#D12A2A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="userType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Help us learn more about you <span className="text-[#D12A2A]">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-3">To help us improve our resources, we would love to know more about our users.</p>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="teacher-primary">Teacher, Primary</option>
                      <option value="teacher-intermediate">Teacher, Intermediate</option>
                      <option value="teacher-secondary">Teacher, Secondary</option>
                      <option value="instructor-college">Instructor or Professor, College</option>
                      <option value="instructor-university">Instructor or Professor, University</option>
                      <option value="private-instructor">Private Instructor</option>
                      <option value="guidance-counselor">Guidance Counselor</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">I prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Comment or Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#002A5C] focus:outline-none transition-colors resize-none"
                      placeholder="Do you have questions or comments? Did you find other resources you think we should add to the roster?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#002A5C] text-white rounded-xl font-semibold hover:bg-[#001d3f] hover:shadow-xl transition-all transform hover:-translate-y-1 text-base md:text-lg"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

