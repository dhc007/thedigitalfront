
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Pricing = () => {
  const [companySize, setCompanySize] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const size = parseInt(companySize);
    if (size && size > 0) {
      let basePrice = 45000;
      
      if (size >= 10000) {
        basePrice = 200000;
      } else if (size >= 5000) {
        basePrice = 125000;
      } else if (size >= 1000) {
        basePrice = 75000;
      }
      
      setEstimatedPrice(basePrice);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanySize(e.target.value);
    setEstimatedPrice(null);
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Enterprise AI Audit Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent, value-based pricing that scales with your organization's needs and complexity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Pricing Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">AI Audit Calculator</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Company Size (Number of Employees)
                </label>
                <input
                  type="number"
                  value={companySize}
                  onChange={handleInputChange}
                  placeholder="Enter number of employees"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  min="1"
                />
              </div>
              
              <Button
                onClick={calculatePrice}
                disabled={!companySize || parseInt(companySize) <= 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Calculate Audit Price
              </Button>
              
              {estimatedPrice && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-4 sm:p-6 border-2 border-blue-200 shadow-md"
                >
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Estimated Investment</p>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                      ${estimatedPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      *4-Week Comprehensive AI Audit
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Final pricing based on detailed requirements assessment
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                What's Included in Every AI Audit
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
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
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200">
              <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg">ROI Guarantee</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We're so confident in our methodology that we guarantee a minimum 3:1 ROI 
                within 12 months of implementation, or we'll continue working with you at no additional cost.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Your Assessment
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
