
import { useEffect, useRef } from 'react';

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
  },
  {
    icon: "📊",
    title: "Digital Marketing",
    description: "Data-driven strategies to increase visibility, engage your audience, and drive conversions."
  },
  {
    icon: "🔍",
    title: "SEO & Analytics",
    description: "Optimization and insights to help your digital products rank higher and perform better."
  }
];

const Services = () => {
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
    <section id="services" className="section-padding bg-secondary/50 dark:bg-secondary/10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-background dark:bg-secondary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Full-Spectrum <span className="text-primary">Digital</span> Services
          </h2>
          <p className="text-muted-foreground">
            We offer comprehensive digital solutions to design, develop, and optimize 
            applications and websites that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card dark:bg-secondary/10 dark:backdrop-blur-md rounded-2xl p-8 reveal-on-scroll transition-all duration-500 hover:translate-y-[-8px] hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-xl">
                {service.icon}
              </div>
              <h3 className="headline text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
