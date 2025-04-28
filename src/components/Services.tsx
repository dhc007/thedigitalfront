import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Paintbrush, Code, Smartphone, Lightbulb, Megaphone, LineChart, PencilRuler, Rocket, Film, Clock } from 'lucide-react';

// Counter animation component that only triggers when visible
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  label, 
  suffix = "" 
}: { 
  end: number, 
  duration?: number, 
  label: string, 
  suffix?: string 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <motion.div 
      className="text-center p-6 rounded-xl glass-effect border border-white/5 transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      ref={countRef}
    >
      <h3 className="headline text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
        {count}{suffix}
      </h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

// Service data with icons and images
const services = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/media/uiux-wireframe.jpg",
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that guide users to take action while delighting them at every step."
  },
  {
    icon: <Code className="w-8 h-8" />,
    image: "/media/webdev-code.jpg",
    title: "Web Development",
    description: "Fast, responsive, and accessible websites and web applications built with the latest technologies."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    image: "/media/mobile-app-showcase.jpg",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    image: "/media/digital-transformation.jpg",
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help businesses adapt, evolve, and thrive in the digital landscape."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    image: "/media/social-media-marketing.jpg",
    title: "SMMA & Digital Presence",
    description: "Comprehensive social media marketing and brand management services to enhance your digital footprint and engage your audience effectively."
  }
];

const additionalServices = [
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
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  
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
    <section id="services" className="section-padding relative py-28" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/media/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl"></div>
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
            Our Services
          </motion.span>
          <motion.h2 
            className="headline text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Digital</span> Services
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive digital solutions to design, develop, and optimize 
            applications and websites that drive business growth and innovation.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="glass-effect border border-white/10 rounded-2xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Background image */}
              <div className="h-40 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    console.error(`Failed to load image: ${service.image}`);
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute top-0 -mt-12 left-8 w-16 h-16 rounded-xl glass-effect flex items-center justify-center text-white bg-gradient-to-br from-purple-600/90 to-blue-600/90 shadow-lg">
                  {service.icon}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                
                {/* Learn more button */}
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
            </motion.div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass-effect bg-white/5 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Specialized Solutions
            </motion.span>
            <motion.h2 
              className="headline text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Services</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Custom solutions designed to address your specific business challenges and accelerate growth.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
            {additionalServices.map((service, index) => (
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
                    `bg-gradient-to-r ${service.color}`
                  )} />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      console.error(`Failed to load image: ${service.image}`);
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 relative z-20">
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white",
                    `bg-gradient-to-r ${service.color}`
                  )}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
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
                
                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll">
          <AnimatedCounter end={98} label="Client Satisfaction" suffix="%" />
          <AnimatedCounter end={150} label="Projects Delivered" suffix="+" />
          <AnimatedCounter end={12} label="Years Experience" suffix="+" />
          <motion.div 
            className="text-center p-6 rounded-xl glass-effect border border-white/5 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="headline text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
              4.9<span className="text-2xl">/5</span>
            </h3>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="curve-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="rgba(255,255,255,0.02)">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
