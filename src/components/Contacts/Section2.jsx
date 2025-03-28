import { useState } from 'react';
import axios from 'axios';

const Section2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: {
      design: false,
      business: false,
      astrology: false
    },
    privacyAgree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'privacyAgree') {
        setFormData({
          ...formData,
          [name]: checked
        });
      } else {
        setFormData({
          ...formData,
          services: {
            ...formData.services,
            [name]: checked
          }
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.privacyAgree) {
      setSubmitResult({
        success: false,
        message: 'Please agree to the privacy statement to proceed.'
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Transform the data for the API
      const apiData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        design_service: formData.services.design,
        business_service: formData.services.business,
        astrology_service: formData.services.astrology
      };
      
      // Submit to the backend API
      const response = await axios.post('http://localhost:8000/submit-form', apiData);
      
      if (response.data.success) {
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          services: {
            design: false,
            business: false,
            astrology: false
          },
          privacyAgree: false
        });
        
        setSubmitResult({
          success: true,
          message: 'Your message has been sent successfully!'
        });
      } else {
        setSubmitResult({
          success: false,
          message: response.data.message || 'There was an error submitting the form. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitResult({
        success: false,
        message: 'There was an error submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16" style={{ backgroundColor: "#000322" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Need Astrological Guidance? Let's Talk!</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-opacity-30 rounded-xl p-8 shadow-lg border border-navy-700" style={{ backgroundColor: "#000322" }}>
            {submitResult.message && (
              <div className={`mb-6 p-4 rounded ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitResult.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-navy-900 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-navy-900 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Id*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-navy-900 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone no*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-navy-900 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-8 mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="design"
                      name="design"
                      checked={formData.services.design}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="design" className="text-white">Design</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="business"
                      name="business"
                      checked={formData.services.business}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="business" className="text-white">Business & Legal</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="astrology"
                      name="astrology"
                      checked={formData.services.astrology}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="astrology" className="text-white">Astrology</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 rounded bg-navy-900 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacyAgree"
                    name="privacyAgree"
                    checked={formData.privacyAgree}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 mr-2 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacyAgree" className="text-gray-300 text-sm">
                    Please do not submit sensitive or personal information via this form.
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  // inline-block bg-white hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500
                  className={`${
                    isSubmitting ? 'bg-gray-400' : 'bg-white hover:bg-[#6C5CE7] hover:text-white'
                  } text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500`}
                >
                  {isSubmitting ? 'Sending...' : 'Send a message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;