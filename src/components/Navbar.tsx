
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
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
      let currentSection = 'hero';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
      setScrolled(scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Home', href: '#hero' },
    { text: 'Services', href: '#services' },
    { text: 'Work', href: '#case-studies' },
    { text: 'Process', href: '#process' },
    { text: 'Integrations', href: '#integrations' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-background/80 backdrop-blur-lg shadow-md border-b border-gray-800/30' 
            : 'bg-white/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />
          
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
            ? 'max-h-96 opacity-100 border-b' 
            : 'max-h-0 opacity-0 border-b-0'
        } ${
          isDarkMode 
            ? 'bg-background/90 backdrop-blur-lg border-gray-800/30' 
            : 'bg-white/90 backdrop-blur-lg border-gray-100'
        }`}
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
