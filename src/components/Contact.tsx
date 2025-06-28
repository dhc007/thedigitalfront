
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Schedule Your Strategic AI Consultation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your enterprise with AI? Let's discuss your specific needs and create a customized strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Our team of AI experts is ready to help you navigate your digital transformation journey. 
                Contact us to start your AI assessment today.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Email</h4>
                  <a href="mailto:team@thedigitalfront.in" className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                    team@thedigitalfront.in
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Phone</h4>
                  <a href="tel:+919284613155" className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                    +91 9284613155
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Office</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    India (Remote Office)<br />
                    Serving clients globally
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Response Time</h4>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-vertical"
                  placeholder="Tell us about your AI transformation goals and current challenges..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
