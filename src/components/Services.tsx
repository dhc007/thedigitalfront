
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that guide users to take action while delighting them at every step."
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Fast, responsive, and accessible websites and web applications built with the latest technologies."
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices."
  },
  {
    icon: "🚀",
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help businesses adapt, evolve, and thrive in the digital landscape."
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
    <section id="services" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/10 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-background dark:bg-secondary/80 text-sm font-medium mb-6 animate-pulse">
            Our Services
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Full-Spectrum <span className="text-primary bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Digital</span> Services
          </h2>
          <p className="text-muted-foreground">
            We offer comprehensive digital solutions to design, develop, and optimize 
            applications and websites that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "p-8 rounded-2xl transition-all duration-500 hover:translate-y-[-8px] reveal-on-scroll group relative overflow-hidden",
                isDarkMode 
                  ? "bg-secondary/40 backdrop-blur-md border border-secondary/30 hover:shadow-lg hover:shadow-purple-500/30" 
                  : "bg-white shadow-lg hover:shadow-xl border border-gray-100"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>
              
              {/* Service icon with gradient background */}
              <div className={cn(
                "w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-2xl relative z-10",
                index % 2 === 0 
                  ? "bg-gradient-to-br from-purple-500/40 to-blue-500/40 text-purple-600 dark:text-purple-300"
                  : "bg-gradient-to-br from-blue-500/40 to-pink-500/40 text-blue-600 dark:text-blue-300"
              )}>
                {service.icon}
                
                {/* Animated ring */}
                <div className="absolute inset-0 border-2 border-dashed rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" style={{ animationDuration: '10s' }}></div>
              </div>
              
              <h3 className="headline text-2xl mb-4 relative z-10 group-hover:text-primary">{service.title}</h3>
              <p className="text-muted-foreground relative z-10">{service.description}</p>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full"></div>
              
              {/* Learn more button */}
              <div className="mt-6 relative z-10">
                <a href="#contact" className="inline-flex items-center text-sm font-medium text-primary group/link">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity animate-float"></div>
              <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity animate-float" style={{animationDelay: "1s"}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity animate-float" style={{animationDelay: "2s"}}></div>
            </div>
          ))}
        </div>

        {/* Stats Counter Section - Moved from Hero */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll">
          {[
            { label: "Client Satisfaction", value: 98, suffix: "%" },
            { label: "Projects Delivered", value: 120, suffix: "+" },
            { label: "Years Experience", value: 8, suffix: "" },
            { label: "Customer Rating", value: 4.9, suffix: "/5" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-2xl text-center counter-item",
                isDarkMode 
                  ? "bg-secondary/40 backdrop-blur-md border border-secondary/30" 
                  : "bg-white shadow-lg border border-gray-100"
              )}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 counter-value bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300" data-target={stat.value}>{stat.value}{stat.suffix}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}} />

      {/* Counter Animation Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const counterItems = entry.target.querySelectorAll('.counter-value');
                counterItems.forEach(counter => {
                  const target = parseFloat(counter.getAttribute('data-target'));
                  const suffix = counter.textContent.replace(/[0-9.]/g, '');
                  let count = 0;
                  const increment = target / 50;
                  
                  const updateCounter = () => {
                    if (count < target) {
                      count += increment;
                      counter.textContent = Number.isInteger(target) 
                        ? Math.ceil(count) + suffix 
                        : count.toFixed(1) + suffix;
                      requestAnimationFrame(updateCounter);
                    } else {
                      counter.textContent = target + suffix;
                    }
                  };
                  
                  updateCounter();
                });
              }
            });
          }, { threshold: 0.1 });
          
          const counterSections = document.querySelectorAll('.counter-item');
          counterSections.forEach(section => {
            observer.observe(section);
          });
        });
      ` }} />
    </section>
  );
};

export default Services;
