
import { motion } from 'framer-motion';
import { Check, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise AI Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for comprehensive AI transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-2 border-blue-200 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">
                  Enterprise AI Audit
                </CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">Starting at $45K</span>
                  <p className="text-blue-100 mt-2">4-week comprehensive assessment</p>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 mb-8">
                  {[
                    "Complete AI readiness evaluation",
                    "Strategic roadmap development",
                    "ROI analysis and projections",
                    "Technology stack recommendations",
                    "Implementation timeline",
                    "Risk assessment and mitigation",
                    "Executive presentation and buy-in"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Custom pricing based on:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Company size and complexity</li>
                    <li>• Industry-specific requirements</li>
                    <li>• Current technology infrastructure</li>
                    <li>• Scope of AI implementation</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pricing Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-gray-200 shadow-xl">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Pricing Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Small (50-200 employees)</option>
                      <option>Medium (200-1000 employees)</option>
                      <option>Large (1000-5000 employees)</option>
                      <option>Enterprise (5000+ employees)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Technology</option>
                      <option>Retail</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AI Implementation Scope
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Single Department</option>
                      <option>Multiple Departments</option>
                      <option>Company-wide</option>
                      <option>Enterprise-wide</option>
                    </select>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">
                      Estimated Investment Range
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      $45K - $150K
                    </p>
                    <p className="text-sm text-blue-700">
                      Based on your selections. Final pricing determined after consultation.
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg rounded-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
