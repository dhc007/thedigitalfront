
import { motion } from 'framer-motion';

const clientLogos = [
  { name: "Fortune 500 Bank", logo: "/media/client-bank.png" },
  { name: "Global Manufacturer", logo: "/media/client-manufacturing.png" },
  { name: "Healthcare Leader", logo: "/media/client-healthcare.png" },
  { name: "Tech Enterprise", logo: "/media/client-tech.png" },
  { name: "Retail Giant", logo: "/media/client-retail.png" },
  { name: "Energy Corp", logo: "/media/client-energy.png" }
];

const stats = [
  { number: "$50M+", label: "In Documented Savings" },
  { number: "100+", label: "Companies Transformed" },
  { number: "95%", label: "Client Satisfaction Rate" },
  { number: "4.9/5", label: "Average Rating" }
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join the Fortune 500 companies that have transformed their operations with our AI expertise
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Fortune 500 Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 px-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium text-center">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            "TheDigitalFront didn't just implement AI solutions – they transformed our entire approach to data-driven decision making. The ROI exceeded our expectations by 300%."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              JS
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">John Smith</p>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="text-gray-500">Fortune 500 Financial Services</p>
            </div>
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center space-x-8 mt-16 opacity-60"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-green-600 text-sm font-bold">SOC 2</span>
            </div>
            <p className="text-sm text-gray-600">Compliant</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-blue-600 text-sm font-bold">ISO</span>
            </div>
            <p className="text-sm text-gray-600">Certified</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-purple-600 text-sm font-bold">GDPR</span>
            </div>
            <p className="text-sm text-gray-600">Ready</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
