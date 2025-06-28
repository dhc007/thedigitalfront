
import { motion } from 'framer-motion';
import { Award, Users, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '$50M+',
    label: 'Documented Savings Generated',
    description: 'Total cost savings delivered to our enterprise clients'
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '100+',
    label: 'Fortune 500 Companies',
    description: 'Successfully transformed with our AI solutions'
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '340%',
    label: 'Average ROI Achieved',
    description: 'Return on investment within first 18 months'
  },
  {
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '95%',
    label: 'Client Satisfaction Rate',
    description: 'Based on post-engagement surveys and testimonials'
  }
];

const clientLogos = [
  { name: 'Global Manufacturing Corp', id: 1 },
  { name: 'Enterprise Financial Services', id: 2 },
  { name: 'International Healthcare Group', id: 3 },
  { name: 'Tech Innovation Leaders', id: 4 },
  { name: 'Strategic Consulting Firm', id: 5 },
  { name: 'Advanced Analytics Co', id: 6 }
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-12 sm:py-16 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our track record of success with Fortune 500 companies demonstrates our commitment to delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-blue-400 mb-3 sm:mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">
                {stat.label}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
            *Client names anonymized for confidentiality - references available upon request
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 rounded-lg p-4 sm:p-6 flex items-center justify-center min-h-[80px] hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white/80 text-xs sm:text-sm font-medium text-center">
                    {client.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="w-full sm:w-px h-px sm:h-6 bg-white/20"></div>
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm font-medium">SOC 2 Type II Compliant</span>
              </div>
              <div className="w-full sm:w-px h-px sm:h-6 bg-white/20"></div>
              <div className="flex items-center text-white">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm font-medium">AI Ethics Board Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
