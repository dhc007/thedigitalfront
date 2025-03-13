
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: "✨",
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that guide users to take action while delighting them at every step."
  },
  {
    icon: "🚀",
    title: "Development",
    description: "Fast, responsive, and accessible code that ensures your landing page performs flawlessly on all devices."
  },
  {
    icon: "📊",
    title: "CRO",
    description: "Data-driven conversion rate optimization to maximize the effectiveness of your landing page."
  },
  {
    icon: "🔎",
    title: "SEO",
    description: "On-page optimization to help your landing page rank higher in search results and drive organic traffic."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Fluid layouts that adapt perfectly to any screen size, ensuring a consistent experience for all users."
  },
  {
    icon: "📈",
    title: "Analytics",
    description: "Comprehensive tracking and reporting to measure performance and identify opportunities for improvement."
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
    <section id="services" className="section-padding bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-white text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Everything You Need for a <span className="text-primary">Successful</span> Landing Page
          </h2>
          <p className="text-muted-foreground">
            We offer comprehensive services to design, develop, and optimize high-converting landing pages
            that help you achieve your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 reveal-on-scroll transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
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
