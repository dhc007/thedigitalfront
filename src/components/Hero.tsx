
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              AI Strategy That Drives Results, Not Hype
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Transform Your Enterprise with{' '}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Strategic AI Implementation
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help Fortune 500 companies identify, implement, and scale AI solutions that deliver measurable ROI. 
              Our proven methodology has generated <span className="font-semibold text-blue-600">$50M+ in documented savings</span>.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                100+ Fortune 500 Companies
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                340% Average ROI
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your AI Readiness Assessment
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-medium transition-all"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">$50M+</div>
                    <div className="text-xs sm:text-sm text-blue-100">Savings Generated</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">340%</div>
                    <div className="text-xs sm:text-sm text-blue-100">Average ROI</div>
                  </div>
                </div>
                <div className="text-center text-white">
                  <div className="text-lg sm:text-xl font-semibold mb-2">Enterprise AI Transformation</div>
                  <div className="text-sm sm:text-base text-blue-100">Proven Results Across Industries</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-800" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
