import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  currentSection?: string | null;
}

const Navbar = ({ currentSection }: NavbarProps = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center mr-2 sm:mr-3">
              <span className="text-white font-bold text-lg sm:text-xl">T</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              TheDigitalFront
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Process
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="/services" className="text-gray-700 hover:text-primary font-medium px-4">
                Services
              </a>
              <a href="#process" className="text-gray-700 hover:text-primary font-medium px-4">
                Process
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium px-4">
                Contact
              </a>
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;