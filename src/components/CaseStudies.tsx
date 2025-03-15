
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useQuery } from '@tanstack/react-query';

const projects = [
  {
    id: 1,
    title: "Protein Box",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "A healthy meal subscription service providing nutritious food options for health-conscious consumers.",
    url: "https://protein-box.com"
  },
  {
    id: 2,
    title: "Flexibus",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Designed and developed a modern travel booking platform with real-time tracking and scheduling features.",
    url: "https://flexibus.in"
  },
  {
    id: 3,
    title: "Kisai Technologies",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Brand identity and website design for an AI-focused SaaS company, showcasing their platform seamlessly.",
    url: "https://kis.ai"
  },
  {
    id: 4,
    title: "Travelite",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Gen-Z, head-turning prototype for AI-driven personalized itinerary concept.",
    url: "#"
  },
  {
    id: 5,
    title: "BSRTC",
    category: "Government",
    image: "https://images.unsplash.com/photo-1634462426237-15c15a88eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Transport management and booking system for the Bihar State Road Transport Corporation.",
    url: "https://bsrtc.org"
  },
  {
    id: 6,
    title: "Hope Projects Scotland",
    category: "Non-Profit",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Website for a charity organization focused on community development and supporting underprivileged communities.",
    url: "https://hopeprojectscotlandpreview.wpcomstaging.com"
  },
  {
    id: 7,
    title: "E-Zamindar",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "India's first blockchain-backed property ledger providing digital solutions for land records management.",
    url: "https://ezamindar.com"
  },
  {
    id: 8,
    title: "Souza Lopes Comforts",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Property booking and management system for a luxury Airbnb-style accommodations business.",
    url: "https://souzalopescomforts.com"
  }
];

// Simplified categories
const categories = ["All", "E-commerce", "SaaS", "Travel", "Mobile App", "Blockchain", "Government"];

const fetchProjects = (category: string) => {
  return new Promise<typeof projects>((resolve) => {
    setTimeout(() => {
      if (category === 'All') {
        resolve(projects);
      } else {
        resolve(projects.filter(project => project.category === category));
      }
    }, 300);
  });
};

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();

  const { data: visibleProjects, isLoading } = useQuery({
    queryKey: ['projects', activeCategory],
    queryFn: () => fetchProjects(activeCategory),
    initialData: projects
  });
  
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
    <section id="case-studies" className={`section-padding relative transition-colors ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-purple-400/40 rounded-full blur-3xl"></div>
        <div className="absolute opacity-30 top-10 left-10 transform rotate-12">
          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
        </div>
        <div className="absolute opacity-30 bottom-20 right-20 transform -rotate-12">
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary/50'} text-sm font-medium mb-6`}>
            Our Work
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Speak</span> for Themselves
          </h2>
          <p className="text-muted-foreground">
            Take a look at some of our recent projects and the impressive results we've achieved for our clients.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className={`flex flex-wrap ${isMobile ? 'justify-start' : 'justify-center'} gap-2 ${isDarkMode ? 'bg-secondary/30' : 'bg-secondary/50'} p-1.5 rounded-full`}>
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === category
                    ? isDarkMode 
                      ? "bg-secondary text-secondary-foreground shadow-sm" 
                      : "bg-white shadow-sm"
                    : isDarkMode 
                      ? "hover:bg-secondary/70" 
                      : "hover:bg-white/50"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {visibleProjects.map((project, index) => (
              <a 
                key={project.id}
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-secondary/20 border border-secondary/30' : 'bg-white'} shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className={`absolute top-4 right-4 ${isDarkMode ? 'bg-primary/70 text-primary-foreground' : 'bg-black/70 text-white'} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="headline text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <a href="#contact" className="btn-primary group relative overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
