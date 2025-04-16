
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientButton } from './ui/gradient-button';
import { motion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  
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
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        delay: i * 0.2,
        ease: [0.1, 0.25, 0.3, 1]
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden"
    >
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="shape absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-500/10 blur-3xl" 
          data-speed="2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="shape absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-200/30 dark:bg-purple-500/10 blur-3xl" 
          data-speed="3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="shape absolute top-[30%] right-[20%] w-40 h-40 rounded-full bg-pink-200/30 dark:bg-pink-500/10 blur-3xl" 
          data-speed="1.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
        ></motion.div>
      </div>

      {/* Live Demo Loop */}
      <div className="absolute right-5 md:right-20 top-1/3 transform -translate-y-1/2 hidden md:block">
        <motion.div 
          className="relative w-64 h-64"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm z-0 border border-white/10"></div>
          <div className="floating-device absolute w-24 h-48 bg-secondary dark:bg-secondary/30 rounded-xl shadow-lg transform rotate-12 z-10 border-4 border-gray-800 overflow-hidden">
            <div className="h-2 w-8 bg-gray-300 dark:bg-gray-600 rounded absolute top-2 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {isPlaying ? (
                <div className="w-full h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50 animate-pulse"></div>
              ) : (
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Play className="w-4 h-4 text-primary fill-primary" />
                </button>
              )}
            </div>
          </div>
          <div className="floating-device absolute w-36 h-28 bg-gray-800 rounded-lg shadow-lg transform -rotate-6 left-20 top-32 z-0 overflow-hidden">
            <div className="h-2 w-8 bg-gray-300 dark:bg-gray-600 rounded absolute top-2 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={fadeInUp}
            custom={0}
            className="inline-block px-4 py-2 rounded-full bg-secondary dark:bg-secondary/30 text-sm font-medium mb-6"
          >
            Next-Gen Digital Agency
          </motion.div>
          
          <motion.h1 
            className="headline text-5xl md:text-7xl mb-6" 
            variants={fadeInUp}
            custom={1}
          >
            We Make <span className="text-primary relative inline-block">
              Digital
              <motion.span 
                className="absolute w-full h-1 bg-primary bottom-2 left-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              ></motion.span>
            </span> <br />Products <span className="text-primary">Thrive</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            variants={fadeInUp}
            custom={2}
          >
            We design and develop exceptional web and mobile applications that connect brands with their audiences,
            creating memorable digital experiences that drive growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={fadeInUp}
            custom={3}
          >
            <a href="#contact">
              <GradientButton className="py-3 px-8 text-base group">
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </a>
            
            <a href="#case-studies" className="inline-flex items-center rounded-full bg-secondary/40 backdrop-blur-sm text-primary border border-primary/20 px-6 py-3 font-medium transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 active:shadow-sm">
              <span>See Our Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
