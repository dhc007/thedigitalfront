
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { GradientButton } from './ui/gradient-button';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  // Updated nav items to match requested structure
  const navItems: NavItem[] = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update activeTab when currentSection prop changes
  useEffect(() => {
    if (currentSection) {
      if (currentSection === 'case-studies') {
        setActiveTab('Our Work');
      } else if (currentSection === 'integrations') {
        setActiveTab('Integrations');
      } else if (currentSection === 'testimonials') {
        setActiveTab('Testimonials');
      } else if (currentSection === 'process') {
        setActiveTab('Process');
      } else if (currentSection === 'services') {
        setActiveTab('Services');
      } else if (currentSection === 'contact') {
        setActiveTab('Contact');
      } else {
        // Capitalize first letter
        const capitalizedSection = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
        setActiveTab(capitalizedSection);
      }
    }
  }, [currentSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? 'glass-effect border-b border-white/5 backdrop-blur-xl py-2' : 'bg-transparent py-4',
      className
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - clickable to go to hero section */}
          <a href="#hero" className="focus:outline-none">
            <Logo />
          </a>
          
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-3 glass-effect border border-white/5 py-1 px-1 rounded-full shadow-lg">
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
                          className="absolute inset-0 w-full bg-white/10 rounded-full -z-0"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          </div>
                        </motion.div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* CTA Button - Desktop */}
            <div className="hidden md:block ml-4">
              <a href="#contact">
                <GradientButton className="py-2 px-4 text-sm">
                  Let's Talk
                </GradientButton>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="ml-2 p-2 rounded-md text-foreground md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 transition-transform duration-300" /> :
                <Menu className="w-6 h-6 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 top-16 glass-effect backdrop-blur-xl z-40 md:hidden transition-all duration-300 border-t border-white/5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "py-3 px-4 text-lg rounded-lg transition-colors",
                    activeTab === item.name
                      ? "glass-effect text-primary border border-white/10"
                      : "hover:bg-white/5"
                  )}
                >
                  {item.name}
                </a>
              ))}
              
              {/* CTA in Mobile Menu */}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <GradientButton className="w-full py-3">
                  Let's Connect
                </GradientButton>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default TubeNavbar;
