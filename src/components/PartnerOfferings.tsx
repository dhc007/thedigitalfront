
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, PencilRuler, LineChart, Film, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const offerings = [
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic, engagement, and conversions through targeted digital channels.",
    icon: <LineChart className="w-6 h-6" />,
    image: "/media/firebasegoogle.png",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Rapid Graphic Design",
    description: "Fast-turnaround visual assets for businesses needing professional design with quick delivery.",
    icon: <PencilRuler className="w-6 h-6" />,
    image: "/media/stripe-2.png",
    color: "from-green-600 to-green-400"
  },
  {
    title: "Product Marketing",
    description: "Comprehensive strategies to position, promote, and sell your products to the right audience.",
    icon: <Rocket className="w-6 h-6" />,
    image: "/media/wordpress-2.png",
    color: "from-purple-600 to-purple-400"
  },
  {
    title: "Infographic Animations",
    description: "Engaging motion graphics that explain complex concepts and captivate your audience.",
    icon: <Film className="w-6 h-6" />,
    image: "/media/lottiefiles.png",
    color: "from-orange-600 to-orange-400"
  },
  {
    title: "24-Hour Prototype Website",
    description: "Functional website prototypes delivered in less than a day for immediate testing and feedback.",
    icon: <Clock className="w-6 h-6" />,
    image: "/media/figma.png",
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
    <section id="partner-offerings" className="section-padding relative bg-gradient-to-b from-background via-purple-900/5 to-background py-20" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/30 text-sm font-medium mb-6">
            Partner Offerings
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            Beyond our core services, we offer specialized partner solutions to meet your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          {offerings.map((offering, index) => (
            <motion.div 
              key={index}
              className="rounded-2xl overflow-hidden border border-secondary/30 backdrop-blur-sm relative group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image background */}
              <div className="h-48 w-full overflow-hidden">
                <div className={cn(
                  "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300",
                  `bg-gradient-to-r ${offering.color}`
                )} />
                <img 
                  src={offering.image} 
                  alt={offering.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    console.error(`Failed to load image: ${offering.image}`);
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-6 relative bg-background/80 backdrop-blur-md h-56">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-4 text-white",
                  `bg-gradient-to-r ${offering.color}`
                )}>
                  {offering.icon}
                </div>
                
                <h3 className="text-xl font-medium mb-2">{offering.title}</h3>
                <p className="text-muted-foreground text-sm">{offering.description}</p>
                
                <div className="absolute bottom-6 right-6">
                  <div className="p-2 rounded-full bg-secondary/60 group-hover:bg-primary/20 transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOfferings;
