import React, { useState } from 'react';
// Removed the external import for SectionTitle as it will be defined inline
// import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Ensure lucide-react is installed

// Define the SectionTitle component directly within this file
// This resolves the "Could not resolve" error by making it self-contained.
interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null); // State for submission errors
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'shiveshkumar73520@gmail.com',
      link: 'mailto:shiveshkumar73520@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 93416 19722',
      link: 'tel:+919341619722', // Corrected tel link format
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Nit Meghalaya, Sohra',
      link: 'https://www.google.com/maps/place/NIT+Meghalaya,+Sohra',
    },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    // Clear success/error messages on new input
    setSubmitSuccess(false);
    setSubmitError(null);
  };
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false); // Reset success message
    setSubmitError(null);   // Reset error message
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // --- REAL-WORLD IMPLEMENTATION STARTS HERE ---
        // This is where you would make an actual API call to your backend
        // or a third-party service like Formspree, EmailJS, etc.
        // For demonstration, we'll simulate a successful API call.
        
        // Example with a hypothetical fetch request:
        const response = await fetch('/api/send-email', { // Replace with your actual backend endpoint or third-party service URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Simulate network delay for demonstration purposes
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (response.ok) { // Check if the response status is 2xx (success)
          setSubmitSuccess(true);
          setFormData({ // Clear form on success
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          // Handle non-OK responses (e.g., server errors, validation errors from backend)
          const errorData = await response.json(); // Assuming backend sends JSON error
          setSubmitError(errorData.message || 'Failed to send message. Please try again.');
        }
        // --- REAL-WORLD IMPLEMENTATION ENDS HERE ---

      } catch (error) {
        console.error('Error sending message:', error);
        setSubmitError('An unexpected error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
        // Reset success/error message after a delay
        setTimeout(() => {
          setSubmitSuccess(false);
          setSubmitError(null);
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* SectionTitle component is assumed to be available */}
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!"
        />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Send Me a Message
            </h3>
            
            {submitSuccess && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-start">
                <svg className="h-5 w-5 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Your message has been sent! I'll get back to you as soon as possible.</p>
              </div>
            )}

            {submitError && (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6 flex items-start">
                <svg className="h-5 w-5 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>{submitError}</p>
              </div>
            )}

            {!submitSuccess && ( // Only show form if not successfully submitted
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-600 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500'
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2`}
                    placeholder="Shivesh Kumar"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-600 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-400 focus:ring-indigo-500 focus:border-indigo-500'
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2`}
                    placeholder="shiveshkumar73520@gmail.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-600 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500'
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-600 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500'
                    } bg-white dark:bg-gray-900 focus:outline-none focus:ring-2`}
                    placeholder="Hello, I'd like to discuss a project with you..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                  className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mr-4 text-indigo-600 dark:text-indigo-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Map or Additional Info */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center px-6">
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  Available for Freelance Work
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Currently accepting new projects and collaborations.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full font-medium transition-colors duration-200 hover:bg-indigo-200 dark:hover:bg-indigo-800/40"
                >
                  <Mail size={18} className="mr-2" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
