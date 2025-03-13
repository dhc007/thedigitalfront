
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Fintech SaaS Platform",
    category: "SaaS",
    conversionIncrease: "143%",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Redesigned the landing page for a fintech platform, resulting in a 143% increase in sign-ups.",
  },
  {
    id: 2,
    title: "E-commerce Product Launch",
    category: "E-commerce",
    conversionIncrease: "89%",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "Created a high-converting product launch page that increased pre-orders by 89%.",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    category: "Mobile App",
    conversionIncrease: "112%",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    description: "Designed and developed a landing page for a health app, increasing downloads by 112%.",
  }
];

const categories = ["All", "SaaS", "E-commerce", "Mobile App"];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
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
    <section id="case-studies" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
            Our Work
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Results That <span className="text-primary">Speak</span> for Themselves
          </h2>
          <p className="text-muted-foreground">
            Take a look at some of our recent projects and the impressive results we've achieved for our clients.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 reveal-on-scroll">
          <div className="flex flex-wrap gap-2 bg-secondary/50 p-1.5 rounded-full">
            {categories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-white shadow-sm"
                    : "hover:bg-white/50"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white shadow-lg reveal-on-scroll transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="headline text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <span className="font-semibold">{project.conversionIncrease}</span>
                  <span className="text-sm">conversion increase</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
