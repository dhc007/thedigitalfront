
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface TubeNavbarProps {
  currentSection?: string | null;
  className?: string;
}

const TubeNavbar = ({ currentSection, className }: TubeNavbarProps) => {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  const navItems: NavItem[] = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update activeTab when currentSection prop changes
  useEffect(() => {
    if (currentSection) {
      if (currentSection === 'case-studies') {
        setActiveTab('Work');
      } else if (currentSection === 'integrations') {
        setActiveTab('Integrations');
      } else {
        // Capitalize first letter
        const capitalizedSection = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
        setActiveTab(capitalizedSection);
      }
    }
  }, [currentSection]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isDarkMode 
        ? 'bg-background/80 backdrop-blur-lg border-b border-gray-800/30' 
        : 'bg-white/80 backdrop-blur-lg shadow-md',
      className
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - clickable to go to hero section */}
          <a href="#hero" className="focus:outline-none">
            <Logo />
          </a>
          
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-3 bg-background/5 border border-border py-1 px-1 rounded-full shadow-lg">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveTab(item.name)}
                      className={cn(
                        "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                        "text-foreground/80 hover:text-primary",
                        isActive && "text-primary"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="lamp"
                          className="absolute inset-0 w-full bg-secondary rounded-full -z-0"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/9284613155?text=Hey!%20I'm%20interested%20in%20your%20Web%20Agency%20services"
              className="ml-6 p-2 text-primary hover:text-opacity-80 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            {/* Mobile menu button */}
            <button
              className="ml-4 p-2 rounded-md text-gray-500 md:hidden focus:outline-none"
              onClick={() => {}}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TubeNavbar;
