
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const hero = heroRef.current as HTMLElement;
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
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden"
    >
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl" data-speed="2"></div>
        <div className="shape absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl" data-speed="3"></div>
        <div className="shape absolute top-[30%] right-[20%] w-40 h-40 rounded-full bg-pink-200/30 blur-3xl" data-speed="1.5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6 animate-fade-in">
            Premier Landing Page Agency
          </span>
          
          <h1 className="headline text-5xl md:text-7xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Crafting <span className="text-primary">High-Converting</span> Landing Pages
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We design and develop stunning landing pages that convert visitors into customers,
            helping businesses scale and achieve their growth targets.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="#case-studies" className="btn-outline">View Our Work</a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <h3 className="headline text-4xl md:text-5xl mb-2">98%</h3>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="headline text-4xl md:text-5xl mb-2">120+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="headline text-4xl md:text-5xl mb-2">52%</h3>
              <p className="text-sm text-muted-foreground">Avg. Conversion Rate</p>
            </div>
            <div className="text-center">
              <h3 className="headline text-4xl md:text-5xl mb-2">24hr</h3>
              <p className="text-sm text-muted-foreground">Support Response</p>
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
