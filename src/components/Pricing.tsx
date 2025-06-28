
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Pricing = () => {
  const [companySize, setCompanySize] = useState('1000-5000');
  const [timeline, setTimeline] = useState('4-weeks');

  const getEstimatedPrice = () => {
    const basePrices = {
      '100-1000': 45000,
      '1000-5000': 75000,
      '5000-10000': 125000,
      '10000+': 200000
    };
    
    const timelineMultiplier = {
      '4-weeks': 1,
      '8-weeks': 1.6,
      '12-weeks': 2.2
    };
    
    return basePrices[companySize] * timelineMultiplier[timeline];
  };

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
            Enterprise AI Transformation Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, value-based pricing that scales with your organization's needs and complexity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Pricing Calculator</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size (Employees)
                </label>
                <select 
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="100-1000">100 - 1,000</option>
                  <option value="1000-5000">1,000 - 5,000</option>
                  <option value="5000-10000">5,000 - 10,000</option>
                  <option value="10000+">10,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Engagement Timeline
                </label>
                <select 
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="4-weeks">4 Weeks (AI Audit)</option>
                  <option value="8-weeks">8 Weeks (Strategy + POC)</option>
                  <option value="12-weeks">12 Weeks (Full Implementation)</option>
                </select>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Estimated Investment</p>
                  <p className="text-4xl font-bold text-blue-600">
                    ${getEstimatedPrice().toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    *Final pricing based on detailed requirements assessment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included in Every Engagement
              </h3>
              
              <div className="space-y-4">
                {[
                  'Comprehensive AI Readiness Assessment',
                  'Executive Strategy Sessions & Workshops',
                  'Custom AI Implementation Roadmap',
                  'ROI Analysis & Business Case Development',
                  'Technology Stack Recommendations',
                  'Risk Assessment & Mitigation Strategies',
                  'Change Management Framework',
                  'Team Training & Knowledge Transfer',
                  '90-Day Post-Implementation Support',
                  'Quarterly Strategic Review Sessions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">ROI Guarantee</h4>
              <p className="text-gray-700 text-sm">
                We're so confident in our methodology that we guarantee a minimum 3:1 ROI 
                within 12 months of implementation, or we'll continue working with you at no additional cost.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
