import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('loading');
    
    setTimeout(() => {
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };
  
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: 'How can I report an issue with a book?',
      answer: 'You can report any issues by emailing support@chemistryforum.in with the book title and specific problem details.'
    },
    {
      question: 'Do you offer personalized study materials?',
      answer: 'Currently, we don\'t offer personalized materials, but we\'re planning to launch this service soon.'
    },
    {
      question: 'How can I contribute to ChemistryForum?',
      answer: 'We welcome educators who want to contribute content. Please reach out to us at info@chemistryforum.in for more details.'
    },
    {
      question: 'Are the NCERT books available offline?',
      answer: 'Yes, all our NCERT books can be downloaded for offline reading through our mobile app.'
    },
    {
      question: 'Do you provide solutions to exercise problems?',
      answer: 'Yes, we provide detailed solutions to all exercise problems found in NCERT textbooks.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Reach out to our team using any of 
          the methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="How can we help you?"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
            
            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-sm">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Alternative ways to reach our team
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">support@chemistryforum.in</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">info@chemistryforum.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-1">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Monday to Friday, 9am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-1">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">ChemistryForum Education Center</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">123 Education Lane, Sector 15</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">New Delhi, 110001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700 flex-grow">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Our Office Hours</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Monday - Friday:</span>
                <span className="font-medium text-gray-800 dark:text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Saturday:</span>
                <span className="font-medium text-gray-800 dark:text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Sunday:</span>
                <span className="font-medium text-gray-800 dark:text-white">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="text-orange-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              
              {expandedFaq === index && (
                <div className="p-4 pt-0 text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-gray-700/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-12 rounded-lg overflow-hidden h-80 bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            Interactive map will be displayed here
            {/* In a real implementation, you would embed a Google Maps or similar service here */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;