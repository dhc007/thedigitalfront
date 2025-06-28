
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Strategic AI Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your enterprise with AI? Let's discuss your specific challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Get Your AI Readiness Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Smith"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.smith@company.com"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <Input 
                    placeholder="Your Company"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Job Title
                  </label>
                  <Input 
                    placeholder="CTO, VP of Innovation, etc."
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Size
                  </label>
                  <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                    <option>Select company size</option>
                    <option>50-200 employees</option>
                    <option>200-1000 employees</option>
                    <option>1000-5000 employees</option>
                    <option>5000+ employees</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current AI Challenges
                  </label>
                  <Textarea 
                    placeholder="Describe your current challenges with AI implementation or what you're hoping to achieve..."
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-full"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-blue-400" />
                  Book a Call Directly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Prefer to speak directly? Schedule a 30-minute strategic consultation to discuss your AI transformation goals.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">hello@thedigitalfront.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">New York, NY & San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-blue-200 text-sm">
                We respond to all enterprise inquiries within 2 business hours. 
                For urgent matters, call us directly for immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
