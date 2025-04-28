
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, PencilRuler, LineChart, Film, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const offerings = [
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that increase visibility and conversions through targeted channels.",
    icon: <LineChart className="w-6 h-6" />,
    image: "/media/digital-marketing.jpg",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Rapid Design Sprint",
    description: "48-hour design sprints delivering stunning visuals and assets when you need them most.",
    icon: <PencilRuler className="w-6 h-6" />,
    image: "/media/rapid-design.jpg",
    color: "from-green-600 to-green-400"
  },
  {
    title: "Product Launch",
    description: "End-to-end launch strategies that position your product for maximum market impact.",
    icon: <Rocket className="w-6 h-6" />,
    image: "/media/product-launch.jpg",
    color: "from-purple-600 to-purple-400"
  },
  {
    title: "Motion Graphics",
    description: "Captivating animations and explainer videos that simplify complex concepts for your audience.",
    icon: <Film className="w-6 h-6" />,
    image: "/media/motion-graphics.jpg",
    color: "from-orange-600 to-orange-400"
  },
  {
    title: "24h MVP Website",
    description: "From concept to live site in under 24 hours so you can test ideas and iterate quickly.",
    icon: <Clock className="w-6 h-6" />,
    image: "/media/mvp-website.jpg",
    color: "from-pink-600 to-pink-400"
  },
];

const PartnerOfferings = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="partner-offerings" className="section-padding relative py-28" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/media/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass-effect bg-white/5 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Partner Offerings
          </motion.span>
          <motion.h2 
            className="headline text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beyond our core services, we offer specialized partner solutions to meet your specific business needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
          {offerings.map((offering, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden glass-effect relative group h-full cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
              
              {/* Background image */}
              <div className="h-full w-full absolute">
                <div className={cn(
                  "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300",
                  `bg-gradient-to-r ${offering.color}`
                )} />
                <img 
                  src={offering.image} 
                  alt={offering.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    console.error(`Failed to load image: ${offering.image}`);
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8 relative z-20">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white",
                  `bg-gradient-to-r ${offering.color}`
                )}>
                  {offering.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground mb-6">{offering.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-effect border border-white/10 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-200 group"
                  >
                    Learn more
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="curve-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="rgba(255,255,255,0.02)">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default PartnerOfferings;
