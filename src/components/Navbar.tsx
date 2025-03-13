
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-display text-2xl font-bold">Pixel<span className="text-primary">Wave</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            </li>
            <li>
              <a href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">Work</a>
            </li>
            <li>
              <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Process</a>
            </li>
            <li>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            </li>
          </ul>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
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

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg",
        isMobileMenuOpen ? "max-h-[500px] border-b" : "max-h-0"
      )}>
        <div className="container mx-auto px-6 py-4">
          <ul className="flex flex-col gap-4 mb-6">
            <li>
              <a 
                href="#services" 
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#process" 
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
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
