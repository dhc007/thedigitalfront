
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'AI Strategy & Roadmap',
    subtitle: 'Executive Clarity & Direction',
    description: 'Transform uncertainty into actionable strategy. We work with C-suite executives to develop comprehensive AI implementation roadmaps that align with business objectives.',
    features: [
      'AI Readiness Assessment',
      'Strategic Planning Sessions',
      'ROI Projections & Business Cases',
      'Technology Stack Recommendations'
    ],
    deliverables: '4-week comprehensive audit + 12-month roadmap'
  },
  {
    icon: <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'Enterprise AI Training',
    subtitle: 'Workforce Transformation',
    description: 'Bridge the AI skills gap across your organization. Our training programs equip teams with practical AI knowledge and implementation capabilities.',
    features: [
      'Executive AI Workshops',
      'Technical Team Training',
      'Change Management Support',
      'Ongoing Mentorship Programs'
    ],
    deliverables: 'Custom curriculum + hands-on workshops + certification'
  },
  {
    icon: <Cog className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'Custom AI Solutions',
    subtitle: 'Development & Integration',
    description: 'From proof-of-concept to full-scale deployment. We build and integrate AI solutions that solve real business problems and deliver measurable results.',
    features: [
      'Custom AI Development',
      'System Integration',
      'Performance Optimization',
      'Ongoing Support & Maintenance'
    ],
    deliverables: 'Production-ready AI systems + full documentation'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Three Pillars of AI Transformation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology combines strategic planning, workforce development, and technical implementation 
            to ensure sustainable AI adoption across your enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-3 sm:mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Features:</h5>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-blue-100">
                <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Deliverables:</h5>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">{service.deliverables}</p>
              </div>

              <Button 
                variant="outline"
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full group-hover:shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
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
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Start Your AI Journey?
          </h3>
          <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Get a comprehensive AI readiness assessment and discover your organization's transformation potential.
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Assessment
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
