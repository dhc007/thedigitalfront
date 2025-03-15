
import { useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const integrationTools = [
  {
    id: 1,
    name: "WordPress",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
    category: "CMS"
  },
  {
    id: 2,
    name: "Shopify",
    icon: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
    category: "E-commerce"
  },
  {
    id: 3,
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    category: "Frontend"
  },
  {
    id: 4,
    name: "Node.js",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    category: "Backend"
  },
  {
    id: 5,
    name: "Firebase",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    category: "Database"
  },
  {
    id: 6,
    name: "AWS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
    category: "Cloud"
  },
  {
    id: 7,
    name: "Stripe",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png",
    category: "Payment"
  },
  {
    id: 8,
    name: "Adobe XD",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968573.png",
    category: "Design"
  },
  {
    id: 9,
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    category: "Design"
  },
  {
    id: 10,
    name: "Google Analytics",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
    category: "Analytics"
  },
  {
    id: 11,
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    category: "Version Control"
  },
  {
    id: 12,
    name: "Slack",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    category: "Communication"
  }
];

// Split tools into top and bottom rows for different scroll directions
const topRowTools = integrationTools.slice(0, 6);
const bottomRowTools = integrationTools.slice(6, 12);

const Integration = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topCarouselRef = useRef<HTMLDivElement | null>(null);
  const bottomCarouselRef = useRef<HTMLDivElement | null>(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    // Animation for seamless scrolling on both carousels
    let animationFrameId: number;
    let topPosition = 0;
    let bottomPosition = 0;
    
    const animateCarousels = () => {
      if (topCarouselRef.current && bottomCarouselRef.current) {
        // Top carousel scrolls from left to right
        topPosition -= 0.5;
        if (topPosition <= -topCarouselRef.current.scrollWidth / 2) {
          topPosition = 0;
        }
        topCarouselRef.current.style.transform = `translateX(${topPosition}px)`;
        
        // Bottom carousel scrolls from right to left
        bottomPosition += 0.5;
        if (bottomPosition >= bottomCarouselRef.current.scrollWidth / 2) {
          bottomPosition = 0;
        }
        bottomCarouselRef.current.style.transform = `translateX(${bottomPosition}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animateCarousels);
    };

    // Intersection Observer to start animation when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrameId = requestAnimationFrame(animateCarousels);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="integrations" className={`section-padding relative overflow-hidden transition-colors ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary/50'} text-sm font-medium mb-6`}>
            Integrations
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Technology</span> Integration
          </h2>
          <p className="text-muted-foreground">
            We integrate with the platforms and tools you already use, ensuring smooth operation and maximum efficiency for your digital products.
          </p>
        </div>
        
        {/* Top row - scrolling from left to right */}
        <div className="overflow-hidden mb-12 py-8">
          <div 
            className="flex space-x-16 py-4 whitespace-nowrap"
            style={{ width: "200%" }}
            ref={topCarouselRef}
          >
            {[...topRowTools, ...topRowTools].map((tool, index) => (
              <div 
                key={`${tool.id}-${index}`} 
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'bg-secondary/30' : 'bg-white/80 shadow-md'}`}>
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                  />
                </div>
                <p className="mt-3 text-center font-medium">{tool.name}</p>
                <span className="text-sm text-muted-foreground">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom row - scrolling from right to left */}
        <div className="overflow-hidden mb-16 py-8">
          <div 
            className="flex space-x-16 py-4 whitespace-nowrap"
            style={{ width: "200%" }}
            ref={bottomCarouselRef}
          >
            {[...bottomRowTools, ...bottomRowTools].map((tool, index) => (
              <div 
                key={`${tool.id}-${index}`} 
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'bg-secondary/30' : 'bg-white/80 shadow-md'}`}>
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                  />
                </div>
                <p className="mt-3 text-center font-medium">{tool.name}</p>
                <span className="text-sm text-muted-foreground">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Integration CTA */}
        <div className={`max-w-4xl mx-auto rounded-2xl p-10 overflow-hidden relative ${
          isDarkMode 
            ? 'border border-purple-800/30 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-md' 
            : 'border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="md:w-2/3">
              <h3 className="headline text-2xl md:text-3xl mb-4">Ready to integrate with your tech stack?</h3>
              <p className="mb-6 text-muted-foreground">
                We work with all modern technologies and can build custom integrations for your specific needs.
                Our solutions are flexible, scalable, and designed to grow with your business.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
                <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
              </a>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-3 bg-purple-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-6 bg-pink-500/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10"></path>
                    <path d="M12 20V4"></path>
                    <path d="M6 20v-6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
        }
        
        @keyframes pulse-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Integration;
