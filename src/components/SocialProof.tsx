
import { motion } from 'framer-motion';
import { Award, Users, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    value: '$50M+',
    label: 'Documented Savings Generated',
    description: 'Total cost savings delivered to our enterprise clients'
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '100+',
    label: 'Fortune 500 Companies',
    description: 'Successfully transformed with our AI solutions'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '340%',
    label: 'Average ROI Achieved',
    description: 'Return on investment within first 18 months'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '95%',
    label: 'Client Satisfaction Rate',
    description: 'Based on post-engagement surveys and testimonials'
  }
];

const clientLogos = [
  { name: 'Global Manufacturing Corp', width: 'w-32' },
  { name: 'Enterprise Financial Services', width: 'w-28' },
  { name: 'International Healthcare Group', width: 'w-36' },
  { name: 'Tech Innovation Leaders', width: 'w-30' },
  { name: 'Strategic Consulting Firm', width: 'w-34' },
  { name: 'Advanced Analytics Co', width: 'w-32' }
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record of success with Fortune 500 companies demonstrates our commitment to delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">
                {stat.label}
              </h4>
              <p className="text-gray-400 text-sm">
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
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-400 mb-12">
            *Client names anonymized for confidentiality - references available upon request
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${client.width} h-16 bg-white/10 rounded-lg flex items-center justify-center`}
              >
                <div className="text-white/60 text-xs font-medium text-center px-2">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center text-white">
              <Award className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center text-white">
              <Award className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-sm font-medium">SOC 2 Type II Compliant</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center text-white">
              <Award className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-sm font-medium">AI Ethics Board Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
