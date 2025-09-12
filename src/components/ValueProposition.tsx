import { motion } from 'framer-motion';
import { User, Zap, Users, Bot } from 'lucide-react';

const values = [
  {
    icon: <User className="w-8 h-8" />,
    title: 'Founder-Led Delivery',
    description: 'Direct communication with a founder/PM.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Startup-Focused Speed',
    description: 'MVPs launched in weeks, not months.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Senior Expert Squads',
    description: 'Small teams of senior engineers, not junior taskforces.'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'AI-First Capabilities',
    description: 'We integrate AI/ML for smarter products.'
  }
];

const ValueProposition = () => {
  return (
    <section id="value-proposition" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Founders Choose TheDigitalFront
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;