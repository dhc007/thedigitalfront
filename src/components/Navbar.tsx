
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['hero', 'services', 'case-studies', 'process', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 100; // Adjust based on your navbar height
        
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3 dark:bg-background/90" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex mr-8">
            <li className="px-3">
              <a 
                href="#services" 
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap relative",
                  activeSection === 'services' ? 'text-primary' : 'hover:text-primary',
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                  activeSection === 'services' ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                Services
              </a>
            </li>
            <li className="px-3">
              <a 
                href="#case-studies" 
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap relative",
                  activeSection === 'case-studies' ? 'text-primary' : 'hover:text-primary',
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                  activeSection === 'case-studies' ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                Work
              </a>
            </li>
            <li className="px-3">
              <a 
                href="#process" 
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap relative",
                  activeSection === 'process' ? 'text-primary' : 'hover:text-primary',
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                  activeSection === 'process' ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                Process
              </a>
            </li>
            <li className="px-3">
              <a 
                href="#testimonials" 
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap relative",
                  activeSection === 'testimonials' ? 'text-primary' : 'hover:text-primary',
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300",
                  activeSection === 'testimonials' ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <a href="#contact" className="btn-primary whitespace-nowrap">Contact Us</a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button 
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn(
                "block h-0.5 bg-foreground transition-all duration-300 w-6",
                isMobileMenuOpen && "transform rotate-45 translate-y-2"
              )}></span>
              <span className={cn(
                "block h-0.5 bg-foreground transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "block h-0.5 bg-foreground transition-all duration-300 w-6",
                isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
              )}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background/95 dark:bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg",
        isMobileMenuOpen ? "max-h-[500px] border-b" : "max-h-0"
      )}>
        <div className="container mx-auto px-6 py-4">
          <ul className="flex flex-col gap-4 mb-6">
            <li>
              <a 
                href="#services" 
                className={cn(
                  "block py-2 text-sm font-medium transition-colors relative",
                  activeSection === 'services' ? 'text-primary' : 'hover:text-primary'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
                {activeSection === 'services' && (
                  <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className={cn(
                  "block py-2 text-sm font-medium transition-colors relative",
                  activeSection === 'case-studies' ? 'text-primary' : 'hover:text-primary'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
                {activeSection === 'case-studies' && (
                  <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#process" 
                className={cn(
                  "block py-2 text-sm font-medium transition-colors relative",
                  activeSection === 'process' ? 'text-primary' : 'hover:text-primary'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
                {activeSection === 'process' && (
                  <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={cn(
                  "block py-2 text-sm font-medium transition-colors relative",
                  activeSection === 'testimonials' ? 'text-primary' : 'hover:text-primary'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
                {activeSection === 'testimonials' && (
                  <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-primary"></span>
                )}
              </a>
            </li>
          </ul>
          <a 
            href="#contact" 
            className="btn-primary block text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
