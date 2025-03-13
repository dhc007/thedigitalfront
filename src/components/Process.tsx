
import { useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and the specific challenges you're facing."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our research, we develop a tailored strategy to create a landing page that will achieve your specific goals."
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create beautiful, conversion-focused mockups that align with your brand and resonate with your audience."
  },
  {
    number: "04",
    title: "Development",
    description: "We transform the designs into a fully functional, responsive landing page with clean, optimized code."
  },
  {
    number: "05",
    title: "Testing",
    description: "We conduct thorough testing to ensure your landing page works flawlessly across all devices and browsers."
  },
  {
    number: "06",
    title: "Launch & Optimize",
    description: "After launch, we continuously monitor performance and make data-driven improvements to maximize conversions."
  }
];

const Process = () => {
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
    <section id="process" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            How We <span className="text-primary">Deliver</span> Results
          </h2>
          <p className="text-muted-foreground">
            Our proven six-step process ensures that we create landing pages that not only look great but also convert visitors into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-5 -left-5 text-7xl font-display font-bold text-primary/10">
                {step.number}
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative z-10">
                <h3 className="headline text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
