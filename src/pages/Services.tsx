import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Rocket, Bot, Smartphone, Users, Palette, TrendingUp, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mainServices = [
  {
    icon: <Rocket className="w-10 h-10" />,
    title: 'MVP Launch (SaaS & Startups)',
    description: 'From concept to live SaaS in 8–12 weeks. Strategy, wireframes, full-stack development, deployment, and 30-day support.',
    deliverables: 'Scoping, Wireframes, Next.js/React/Node/Flutter dev, Deployment, 30-day bug fix.',
    price: '₹3.5L / $4,000',
    cta: 'Request MVP Quote'
  },
  {
    icon: <Bot className="w-10 h-10" />,
    title: 'AI-Powered Applications',
    description: 'Integrating AI/ML into products for smarter workflows and features.',
    deliverables: 'AI use-case workshop, Model integration, API development, UI workflows, Optimization.',
    price: '₹4L / $5,000',
    cta: 'Discuss AI Use-Cases'
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Mobile-First Products',
    description: 'Flutter cross-platform apps with backend + admin dashboard.',
    deliverables: 'Mobile scoping, Flutter apps, Admin dashboard, Store submission.',
    price: '₹3L / $3,500',
    cta: 'Start Mobile Project'
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Dedicated Product Squad (Retainer)',
    description: 'Your ongoing product team with weekly sprints and continuous delivery.',
    deliverables: '1 full-stack dev + 1 mobile dev + PM.',
    price: '₹3L/month / $3,500/month',
    cta: 'Book a Squad Call'
  }
];

const addOnServices = [
  { icon: <Palette className="w-6 h-6" />, title: 'UI/UX Design' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Digital Marketing' },
  { icon: <Zap className="w-6 h-6" />, title: 'Motion Graphics' },
  { icon: <Clock className="w-6 h-6" />, title: 'Rapid Sprint' },
  { icon: <Rocket className="w-6 h-6" />, title: '24h MVP Website' }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - TheDigitalFront | Product Development Studio</title>
        <meta name="description" content="Tailored services for startups and businesses. From MVP launch to AI integration, mobile apps, and dedicated product squads." />
      </Helmet>

      <Navbar />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Tailored Services, Clear Outcomes
              </h1>
              <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto">
                We help startups and businesses launch, scale, and innovate with speed and precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-primary mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <p className="text-gray-700">{service.deliverables}</p>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-sm text-gray-500">Starting Price</p>
                      <p className="text-2xl lg:text-3xl font-bold text-primary">{service.price}</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg rounded-full font-medium"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Add-on Services
              </h2>
              <p className="text-lg text-gray-600">
                Additional services to complement your main project
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect service package for your needs.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-medium"
                onClick={() => window.location.href = '/#contact'}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;