
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    industry: 'Manufacturing',
    title: 'Global Manufacturing Leader',
    subtitle: 'Predictive Maintenance Revolution',
    challenge: 'Reducing unplanned downtime across 50+ production facilities worldwide',
    solution: 'AI-powered predictive maintenance system with IoT integration',
    results: [
      { metric: '40%', label: 'Reduction in Unplanned Downtime' },
      { metric: '$12M', label: 'Annual Cost Savings' },
      { metric: '6 Months', label: 'Implementation Timeline' }
    ],
    tags: ['IoT', 'Predictive Analytics', 'Machine Learning']
  },
  {
    industry: 'Financial Services',
    title: 'International Banking Group',
    subtitle: 'Fraud Detection Transformation',
    challenge: 'Improving fraud detection accuracy while reducing false positives',
    solution: 'Advanced ML algorithms with real-time transaction analysis',
    results: [
      { metric: '75%', label: 'Improvement in Detection Rate' },
      { metric: '$8.5M', label: 'Prevented Fraud Losses' },
      { metric: '60%', label: 'Reduction in False Positives' }
    ],
    tags: ['Machine Learning', 'Real-time Analytics', 'Risk Management']
  },
  {
    industry: 'Healthcare',
    title: 'Major Hospital Network',
    subtitle: 'Patient Care Optimization',
    challenge: 'Optimizing patient flow and resource allocation across facilities',
    solution: 'AI-driven patient scheduling and resource management platform',
    results: [
      { metric: '30%', label: 'Faster Patient Processing' },
      { metric: '$15M', label: 'Annual Operational Savings' },
      { metric: '95%', label: 'Staff Satisfaction Increase' }
    ],
    tags: ['Healthcare AI', 'Optimization', 'Resource Management']
  }
];

const handleCaseStudyClick = () => {
  // Navigate to case study page - for now show maintenance message
  alert('Case study details are currently under maintenance. Please check back soon for detailed case studies.');
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Real Results from Real Enterprises
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped industry leaders transform their operations and achieve measurable ROI through strategic AI implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                  {study.industry}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-3 sm:mb-4">
                  {study.subtitle}
                </h4>
              </div>

              <div className="mb-4 sm:mb-6">
                <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Challenge:</h5>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{study.challenge}</p>
                
                <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Solution:</h5>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{study.solution}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Key Results:</h5>
                <div className="space-y-2 sm:space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-2.5 sm:p-3">
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">{result.metric}</span>
                      <span className="text-xs sm:text-sm text-gray-700 text-right font-medium">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleCaseStudyClick}
                variant="outline" 
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full"
              >
                View Full Case Study
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your AI Transformation
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
