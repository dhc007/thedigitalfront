
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`relative pt-16 pb-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${isDarkMode ? 'bg-purple-900/10' : 'bg-purple-200/50'} blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 rounded-full ${isDarkMode ? 'bg-blue-900/10' : 'bg-blue-200/50'} blur-3xl`}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and Company Info */}
          <div className="md:col-span-4">
            <Logo className="mb-6" />
            <p className="text-muted-foreground max-w-md mb-6">
              We create exceptional digital experiences that transform businesses through innovative web and mobile applications, driving growth and engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                aria-label="Twitter" 
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-blue-500 text-gray-500 hover:text-white shadow-sm hover:shadow'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-blue-600 text-gray-500 hover:text-white shadow-sm hover:shadow'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-gray-500 hover:text-white shadow-sm hover:shadow'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Dribbble" 
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-pink-500 text-gray-400 hover:text-white' 
                    : 'bg-white hover:bg-pink-400 text-gray-500 hover:text-white shadow-sm hover:shadow'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className={`text-base font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-primary transition-colors block">Our Work</a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors block">Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors block">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h4 className={`text-base font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">Mobile Applications</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">E-commerce Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">Digital Marketing</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className={`text-base font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:team@thedigitalfront.in" className="hover:text-primary transition-colors">team@thedigitalfront.in</a>
              </li>
              <li className="flex gap-3 text-muted-foreground group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a 
                  href="https://wa.me/9284613155?text=Hey!%20I'm%20interested%20in%20your%20Web%20Agency%20services" 
                  className="hover:text-primary transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +91 9284613155
                </a>
              </li>
              <li className="flex gap-3 text-muted-foreground group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Goa, India</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 pt-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {currentYear} TheDigitalFront. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
