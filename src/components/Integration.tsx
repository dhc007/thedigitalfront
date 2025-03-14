
import { useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

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

const Integration = () => {
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
    <section id="integrations" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute opacity-20 top-10 left-10 transform rotate-12">
          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
        </div>
        <div className="absolute opacity-20 bottom-20 right-20 transform -rotate-12">
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary/50'} text-sm font-medium mb-6`}>
            Integrations
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Seamless <span className="text-primary">Technology</span> Integration
          </h2>
          <p className="text-muted-foreground">
            We integrate with the platforms and tools you already use, ensuring smooth operation and maximum efficiency for your digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-12">
          {integrationTools.map((tool, index) => (
            <div
              key={tool.id}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg reveal-on-scroll ${
                isDarkMode 
                  ? 'bg-secondary/30 hover:bg-secondary/40 border border-secondary/50' 
                  : 'bg-white hover:bg-gray-50 shadow'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <span className="text-xs text-muted-foreground mt-1">{tool.category}</span>
            </div>
          ))}
        </div>
        
        <div className={`max-w-4xl mx-auto rounded-2xl p-10 reveal-on-scroll ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30' 
            : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100'
        }`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="headline text-2xl md:text-3xl mb-4">Ready to integrate with your tech stack?</h3>
              <p className="mb-6 text-muted-foreground">
                We work with all modern technologies and can build custom integrations for your specific needs.
                Our solutions are flexible, scalable, and designed to grow with your business.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-3 bg-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-6 bg-pink-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
