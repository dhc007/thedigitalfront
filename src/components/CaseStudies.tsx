
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    id: 1,
    title: "Protein Box",
    category: "E-commerce",
    conversionIncrease: "120%",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "A healthy meal subscription service providing nutritious food options for health-conscious consumers.",
    url: "https://protein-box.com"
  },
  {
    id: 2,
    title: "Flexibus",
    category: "Travel",
    conversionIncrease: "85%",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Designed and developed a modern travel booking platform with real-time tracking and scheduling features.",
    url: "https://flexibus.in"
  },
  {
    id: 3,
    title: "Kisai Technologies",
    category: "SaaS",
    conversionIncrease: "160%",
    image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Brand identity and website design for an AI-focused SaaS company, showcasing their platform seamlessly.",
    url: "https://kis.ai"
  },
  {
    id: 4,
    title: "Travelite",
    category: "Mobile App",
    conversionIncrease: "92%",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Gen-Z, head-turning prototype for AI-driven personalized itinerary concept.",
    url: "#"
  },
  {
    id: 5,
    title: "BSRTC",
    category: "Government",
    conversionIncrease: "75%",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Transport management and booking system for the Bihar State Road Transport Corporation.",
    url: "https://bsrtc.org"
  },
  {
    id: 6,
    title: "Hope Projects Scotland",
    category: "Non-Profit",
    conversionIncrease: "110%",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Website for a charity organization focused on community development and supporting underprivileged communities.",
    url: "https://hopeprojectscotlandpreview.wpcomstaging.com"
  },
  {
    id: 7,
    title: "E-Zamindar",
    category: "Blockchain",
    conversionIncrease: "95%",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "India's first blockchain-backed property ledger providing digital solutions for land records management.",
    url: "https://ezamindar.com"
  },
  {
    id: 8,
    title: "Souza Lopes Comforts",
    category: "Hospitality",
    conversionIncrease: "88%",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    description: "Property booking and management system for a luxury Airbnb-style accommodations business.",
    url: "https://souzalopescomforts.com"
  }
];

// Reduced categories
const categories = ["All", "E-commerce", "SaaS", "Travel", "Mobile App", "Government", "Blockchain", "Hospitality"];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeCategory === "All") {
        setVisibleProjects(projects);
      } else {
        setVisibleProjects(projects.filter(project => project.category === activeCategory));
      }
      setIsLoading(false);
    }, 300); // Short delay to show loading state
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
    <section id="case-studies" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
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
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
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
        
        <div className="flex justify-center mb-12 reveal-on-scroll overflow-x-auto pb-4">
          <div className={`flex flex-wrap ${isMobile ? 'justify-start' : 'justify-center'} gap-2 ${isDarkMode ? 'bg-secondary/30' : 'bg-secondary/50'} p-1.5 rounded-full`}>
            {categories.map((category, index) => (
              <button
                key={index}
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
              <div 
                key={project.id}
                className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-secondary/20 border border-secondary/30' : 'bg-white'} shadow-lg reveal-on-scroll transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
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
                </a>
                
                <div className="p-6">
                  <h3 className="headline text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className={cn(
                    "flex items-center gap-2 font-semibold",
                    project.id % 3 === 0 ? "text-purple-500 dark:text-purple-400" : 
                    project.id % 3 === 1 ? "text-blue-500 dark:text-blue-400" : 
                    "text-orange-500 dark:text-orange-400"
                  )}>
                    <span>{project.conversionIncrease}</span>
                    <span className="text-sm">conversion increase</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8 reveal-on-scroll">
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
