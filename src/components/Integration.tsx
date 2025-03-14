
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from "@/lib/utils";

const integrationTools = [
  {
    id: 1,
    name: "WordPress",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
    category: "CMS",
    color: "blue"
  },
  {
    id: 2,
    name: "Shopify",
    icon: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
    category: "E-commerce",
    color: "green"
  },
  {
    id: 3,
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    category: "Frontend",
    color: "cyan"
  },
  {
    id: 4,
    name: "Node.js",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    category: "Backend",
    color: "green"
  },
  {
    id: 5,
    name: "Firebase",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    category: "Database",
    color: "amber"
  },
  {
    id: 6,
    name: "AWS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
    category: "Cloud",
    color: "orange"
  },
  {
    id: 7,
    name: "Stripe",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png",
    category: "Payment",
    color: "purple"
  },
  {
    id: 8,
    name: "Adobe XD",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968573.png",
    category: "Design",
    color: "pink"
  },
  {
    id: 9,
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    category: "Design",
    color: "rose"
  },
  {
    id: 10,
    name: "Google Analytics",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
    category: "Analytics",
    color: "yellow"
  },
  {
    id: 11,
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    category: "Version Control",
    color: "gray"
  },
  {
    id: 12,
    name: "Slack",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    category: "Communication",
    color: "purple"
  }
];

const Integration = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Track mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation for the floating icons in the background
  const getRandomPosition = (index: number) => {
    const positions = [
      { top: '10%', left: '5%' },
      { top: '15%', left: '85%' },
      { top: '55%', left: '10%' },
      { top: '75%', left: '80%' },
      { top: '35%', left: '25%' },
      { top: '60%', left: '65%' },
      { top: '80%', left: '40%' },
      { top: '20%', left: '50%' }
    ];
    return positions[index % positions.length];
  };

  const getGradientByColor = (color: string) => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      cyan: 'from-cyan-500 to-cyan-600',
      amber: 'from-amber-500 to-amber-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      rose: 'from-rose-500 to-rose-600',
      yellow: 'from-yellow-500 to-yellow-600',
      gray: 'from-gray-500 to-gray-600'
    };
    return gradients[color as keyof typeof gradients] || 'from-purple-500 to-blue-600';
  };

  const getBgColor = (tool: any, isHovered: boolean) => {
    if (isDarkMode) {
      if (isHovered) {
        return `bg-gradient-to-r ${getGradientByColor(tool.color)}`;
      }
      return 'bg-secondary/30 border-secondary/50';
    }
    
    if (isHovered) {
      return `bg-gradient-to-r ${getGradientByColor(tool.color)}`;
    }
    return 'bg-white hover:bg-gray-50';
  };

  const handleToolHover = (id: number | null) => {
    setHoveredTool(id);
    if (cursorRef.current) {
      if (id !== null) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        const tool = integrationTools.find(t => t.id === id);
        if (tool) {
          cursorRef.current.style.background = `radial-gradient(circle, rgba(${tool.color === 'blue' ? '59, 130, 246' : tool.color === 'green' ? '34, 197, 94' : tool.color === 'purple' ? '168, 85, 247' : '147, 51, 234'}, 0.3) 0%, rgba(${tool.color === 'blue' ? '59, 130, 246' : tool.color === 'green' ? '34, 197, 94' : tool.color === 'purple' ? '168, 85, 247' : '147, 51, 234'}, 0.1) 70%)`;
        }
      } else {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRef.current.style.background = 'rgba(168, 85, 247, 0.2)';
      }
    }
  };

  return (
    <section id="integrations" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
      {/* Custom cursor effect */}
      <div 
        ref={cursorRef}
        className="fixed w-12 h-12 rounded-full bg-purple-500/30 pointer-events-none z-50 transition-all duration-200" 
        style={{
          transform: 'translate(-50%, -50%)', 
          backdropFilter: 'blur(4px)',
          opacity: 0,
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
      
      {/* Decorative floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {integrationTools.slice(0, 8).map((tool, index) => (
          <div 
            key={`floating-${tool.id}`}
            className="absolute w-16 h-16 opacity-20 animate-float"
            style={{
              ...getRandomPosition(index),
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${6 + index % 4}s`
            }}
          >
            <img 
              src={tool.icon} 
              alt={tool.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-12">
          {integrationTools.map((tool, index) => (
            <div
              key={tool.id}
              className={cn(
                "flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 transform cursor-pointer hover:scale-105 hover:shadow-lg reveal-on-scroll border integration-item",
                getBgColor(tool, hoveredTool === tool.id),
                hoveredTool === tool.id ? 'text-white border-transparent' : isDarkMode ? 'border-secondary/50' : 'border-gray-100 shadow'
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => handleToolHover(tool.id)}
              onMouseLeave={() => handleToolHover(null)}
            >
              <div className={cn(
                "w-14 h-14 mb-4 flex items-center justify-center rounded-full p-2 transition-colors duration-300",
                hoveredTool === tool.id ? 'bg-white/20' : isDarkMode ? 'bg-white/10' : 'bg-gray-50'
              )}>
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-sm font-medium text-center">{tool.name}</h3>
              <span className={cn(
                "text-xs mt-1",
                hoveredTool === tool.id ? 'text-white/80' : 'text-muted-foreground'
              )}>{tool.category}</span>
            </div>
          ))}
        </div>
        
        {/* Integration CTA - one of the 3 CTAs */}
        <div className={`max-w-4xl mx-auto rounded-2xl p-10 reveal-on-scroll overflow-hidden relative ${
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
          
          {/* Animated particles */}
          <div className="absolute bottom-0 left-1/4 w-full h-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-purple-500/20 animate-float"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 5 + 3}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.8; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .integration-item:hover {
          box-shadow: 0 10px 25px -5px rgba(var(--primary-rgb), 0.1), 
                      0 10px 10px -5px rgba(var(--primary-rgb), 0.04);
        }
      `}</style>
    </section>
  );
};

export default Integration;
