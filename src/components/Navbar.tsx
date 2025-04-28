import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import { Phone } from 'lucide-react';

interface NavbarProps {
  currentSection?: string | null;
}

const Navbar = ({ currentSection }: NavbarProps = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDarkMode } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      // Determine active section
      let currentSectionFromScroll = 'hero';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionFromScroll = section.id;
        }
      });
      
      setActiveSection(currentSectionFromScroll);
      setScrolled(scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update activeSection when currentSection prop changes
  useEffect(() => {
    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [currentSection]);

  const navLinks = [
    { text: 'Services', href: '#services' },
    { text: 'Work', href: '#case-studies' },
    { text: 'Process', href: '#process' },
    { text: 'Integrations', href: '#integrations' },
    { text: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - now clickable to go to hero section */}
          <a href="#hero" className="focus:outline-none">
            <Logo />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className={`nav-link text-sm font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary dark:text-primary active'
                    : 'text-foreground/80 hover:text-primary dark:text-foreground/80 dark:hover:text-primary'
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
          
          {/* Right side elements */}
          <div className="flex items-center">
            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/9284613155?text=Hey!%20I'm%20interested%20in%20your%20Web%20Agency%20services"
              className="mr-4 p-2 text-primary hover:text-opacity-80 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            <DarkModeToggle />
            
            {/* Mobile menu button */}
            <button
              className="ml-4 p-2 rounded-md text-gray-500 md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } bg-transparent`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  activeSection === link.href.substring(1)
                    ? isDarkMode
                      ? 'bg-secondary/60 text-primary'
                      : 'bg-secondary/60 text-primary'
                    : scrolled
                      ? 'text-gray-800 hover:bg-secondary/30 dark:text-gray-200'
                      : 'hover:bg-secondary/30'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
