
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

  const navLinks = [
    { text: 'Services', href: '#services' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Case Studies', href: '#case-studies' },
    { text: 'About', href: '#social-proof' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b' : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-md">
                <span className="text-white font-bold text-lg sm:text-xl">T</span>
              </div>
            </div>
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              <span>The</span><span className="text-blue-600">Digital</span><span>Front</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                {link.text}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium shadow-md hover:shadow-lg transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
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
