
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudies = [
  {
    title: "Fortune 500 Financial Services",
    industry: "Banking & Finance",
    challenge: "Manual fraud detection processes causing $2M+ annual losses",
    solution: "AI-powered fraud detection system with real-time analysis",
    results: {
      savings: "$8.5M",
      efficiency: "75%",
      timeframe: "6 months"
    },
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    title: "Global Manufacturing Leader",
    industry: "Manufacturing",
    challenge: "Inefficient supply chain management and inventory optimization",
    solution: "Predictive analytics and AI-driven demand forecasting",
    results: {
      savings: "$12M",
      efficiency: "60%",
      timeframe: "8 months"
    },
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Healthcare Enterprise",
    industry: "Healthcare",
    challenge: "Patient data analysis and treatment optimization",
    solution: "AI-powered patient insights and treatment recommendation engine",
    results: {
      savings: "$5.2M",
      efficiency: "45%",
      timeframe: "10 months"
    },
    icon: <Users className="w-6 h-6" />
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results for Enterprise Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real case studies from Fortune 500 companies that achieved measurable ROI through strategic AI implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="text-blue-600">
                      {study.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-600">{study.results.savings}</p>
                          <p className="text-xs text-gray-600">Savings</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">{study.results.efficiency}</p>
                          <p className="text-xs text-gray-600">Efficiency</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-600">{study.results.timeframe}</p>
                          <p className="text-xs text-gray-600">Timeline</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-4"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How We Can Help Your Enterprise
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
