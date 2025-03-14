
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

// Counter animation component
const AnimatedCounter = ({ end, duration = 2000, label, suffix = "" }: { end: number, duration?: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div className="text-center transform hover:scale-105 transition-transform duration-300" ref={countRef}>
      <h3 className="headline text-4xl md:text-5xl mb-2">
        {count}{suffix}
      </h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const hero = heroRef.current;
      const shapes = hero.querySelectorAll('.shape');
      
      shapes.forEach((shape: Element) => {
        const speed = (shape as HTMLElement).dataset.speed || '2';
        const x = (window.innerWidth - e.pageX * parseFloat(speed)) / 100;
        const y = (window.innerHeight - e.pageY * parseFloat(speed)) / 100;
        
        (shape as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Floating animation for devices
  useEffect(() => {
    const interval = setInterval(() => {
      const devices = document.querySelectorAll('.floating-device');
      devices.forEach((device, index) => {
        const delay = index * 0.5;
        (device as HTMLElement).style.animation = `float 4s ease-in-out ${delay}s infinite`;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden"
    >
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-500/10 blur-3xl" data-speed="2"></div>
        <div className="shape absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-200/30 dark:bg-purple-500/10 blur-3xl" data-speed="3"></div>
        <div className="shape absolute top-[30%] right-[20%] w-40 h-40 rounded-full bg-pink-200/30 dark:bg-pink-500/10 blur-3xl" data-speed="1.5"></div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/4 right-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Floating Devices */}
      <div className="absolute right-5 md:right-20 top-1/3 transform -translate-y-1/2 hidden md:block">
        <div className="relative w-64 h-64">
          <div className="floating-device absolute w-24 h-48 bg-secondary dark:bg-secondary/30 rounded-xl shadow-lg transform rotate-12 z-10 border-4 border-white dark:border-gray-800">
            <div className="h-2 w-8 bg-gray-300 dark:bg-gray-600 rounded absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="floating-device absolute w-36 h-28 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform -rotate-6 left-20 top-32 z-0">
            <div className="h-2 w-8 bg-gray-300 dark:bg-gray-600 rounded absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary dark:bg-secondary/30 text-sm font-medium mb-6 animate-fade-in">
            Next-Gen Digital Agency
          </span>
          
          <h1 className="headline text-5xl md:text-7xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We Make <span className="text-primary relative inline-block">
              Digital
              <span className="absolute w-full h-1 bg-primary bottom-2 left-0 transform scale-x-0 origin-left transition-transform duration-700 animate-reveal"></span>
            </span> <br />Products <span className="text-primary">Thrive</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We design and develop exceptional web and mobile applications that connect brands with their audiences,
            creating memorable digital experiences that drive growth.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 bg-white dark:bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10"></span>
            </a>
            <a href="#case-studies" className="btn-outline group">
              <span>Explore Our Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
            <AnimatedCounter end={98} label="Client Satisfaction" suffix="%" />
            <AnimatedCounter end={150} label="Projects Delivered" suffix="+" />
            <AnimatedCounter end={12} label="Years Experience" suffix="+" />
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="headline text-4xl md:text-5xl mb-2">4.9<span className="text-2xl">/5</span></h3>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
