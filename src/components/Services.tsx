
import { motion } from 'framer-motion';
import { Target, GraduationCap, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Target className="w-12 h-12" />,
    title: "STRATEGY",
    subtitle: "AI Roadmap & Executive Clarity",
    description: "Comprehensive AI strategy development, opportunity identification, and executive-level roadmap creation tailored to your industry and business objectives.",
    features: [
      "AI Readiness Assessment",
      "Strategic Roadmap Development",
      "ROI Analysis & Projections",
      "Executive Stakeholder Alignment"
    ]
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "EDUCATION",
    subtitle: "Enterprise AI Training Programs",  
    description: "Comprehensive training programs designed to upskill your teams and ensure successful AI adoption across all organizational levels.",
    features: [
      "C-Suite AI Literacy Programs",
      "Technical Team Training",
      "Change Management Workshops",
      "Ongoing Support & Mentorship"
    ]
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "DEVELOPMENT",
    subtitle: "Custom AI Solutions & Integration",
    description: "End-to-end AI solution development, from proof-of-concept to enterprise-scale deployment with seamless integration into existing systems.",
    features: [
      "Custom AI Development",
      "System Integration",
      "Proof of Concept",
      "Scalable Implementation"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Three-Pillar Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that takes your organization from AI uncertainty to strategic advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                {service.subtitle}
              </h4>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
