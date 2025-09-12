
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'MVP Launch',
    subtitle: 'From idea to product in 8–12 weeks',
    description: 'Complete SaaS development from concept to launch with full strategy, design, and development.',
    price: 'Starting from ₹3.5L / $4,000',
    cta: 'Request MVP Quote'
  },
  {
    icon: <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'AI-Powered Apps',
    subtitle: 'Add AI features that drive real value',
    description: 'Integrate cutting-edge AI/ML capabilities into your products for smarter workflows and enhanced user experiences.',
    price: 'Starting from ₹4L / $5,000',
    cta: 'Discuss AI Use-Cases'
  },
  {
    icon: <Cog className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'Mobile-First Products',
    subtitle: 'Flutter apps with scalable backends',
    description: 'Cross-platform mobile applications with robust backend infrastructure and admin dashboards.',
    price: 'Starting from ₹3L / $3,500',
    cta: 'Start Mobile Project'
  },
  {
    icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
    title: 'Dedicated Product Squad',
    subtitle: 'Remote dev team on retainer',
    description: 'Your dedicated product development team with continuous delivery and weekly sprint cycles.',
    price: 'Starting from ₹3L/month / $3,500/month',
    cta: 'Book a Squad Call'
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
            Core Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build — we define product strategy, ship working software, and help you scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-primary mb-4 sm:mb-6">
                {service.icon}
              </div>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <h4 className="text-sm sm:text-base font-medium text-primary mb-3">
                  {service.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {service.price}
                </p>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-sm font-medium rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
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
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            onClick={() => window.location.href = '/services'}
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
