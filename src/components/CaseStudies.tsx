
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useQuery } from '@tanstack/react-query';
import { GradientButton } from './ui/gradient-button';

// Using the provided project descriptions with correct image paths and error handling
const projects = [
  {
    id: 1,
    title: "Protein Box",
    category: "E-commerce",
    image: "/media/ProteinBox.png",
    description: "We helped Protein Box, a startup providing healthy protein meals, achieve its goals by capturing leads and increasing profitability.",
    url: "https://protein-box.com"
  },
  {
    id: 2,
    title: "Flexibus",
    category: "Travel",
    image: "/media/cover.png",
    description: "We developed a stunning app and website for Flexibus, a startup in Goa aiming to enhance the experience of people traveling via public transport.",
    url: "https://flexibus.in"
  },
  {
    id: 3,
    title: "Kisai Technologies",
    category: "SaaS",
    image: "/media/Kisai.png",
    description: "Brand identity and website design for an AI-focused SaaS company, showcasing their platform seamlessly.",
    url: "https://kis.ai"
  },
  {
    id: 4,
    title: "Travelite",
    category: "Mobile App",
    image: "/media/Travelite.png",
    description: "We crafted a Gen-Z, head-turning prototype for Travlite, a startup aiming to provide personalized itineraries using AI.",
    url: "#"
  },
  {
    id: 5,
    title: "BSRTC",
    category: "Government",
    image: "/media/BSRTC_Logo.jpg",
    description: "Transport management and booking system for the Bihar State Road Transport Corporation.",
    url: "https://bsrtc.org"
  },
  {
    id: 6,
    title: "Hope Project Scotland",
    category: "Non-Profit",
    image: "/media/HopeProjectScotland.png",
    description: "Website for a charity organization focused on community development and supporting underprivileged communities.",
    url: "https://hopeprojectscotlandpreview.wpcomstaging.com"
  },
  {
    id: 7,
    title: "E-Zamindar",
    category: "Blockchain",
    image: "/media/e-zamindar.jpg", 
    description: "India's first blockchain-backed property ledger providing digital solutions for land records management.",
    url: "https://ezamindar.com"
  },
  {
    id: 8,
    title: "Souza Lopes Comforts",
    category: "Hospitality",
    image: "/media/SouzaLopesComforts.png",
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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
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

  // Handle image loading errors
  const handleImageError = (projectId: number) => {
    console.error(`Failed to load image for project ID: ${projectId}`);
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };
  
  return (
    <section id="case-studies" className={`section-padding relative transition-colors bg-gradient-to-b from-background via-purple-900/5 to-background`} ref={sectionRef}>
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
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
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
          <div className={`flex flex-wrap ${isMobile ? 'justify-start' : 'justify-center'} gap-2 bg-secondary/30 p-1.5 rounded-full`}>
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === category
                    ? "bg-secondary text-secondary-foreground shadow-sm" 
                    : "hover:bg-secondary/70"
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
                className={`rounded-2xl overflow-hidden bg-secondary/20 border border-secondary/30 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  {imageErrors[project.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-muted/20">
                      <p className="text-muted-foreground text-sm">Image unavailable</p>
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-primary/70 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
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
          <a href="#contact">
            <GradientButton className="py-3 px-8 text-base">
              Let's Connect
            </GradientButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
