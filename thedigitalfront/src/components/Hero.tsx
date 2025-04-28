import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientButton } from './ui/gradient-button';
import { motion } from 'framer-motion';
import { ChevronDown, MousePointer, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse move for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX / width) * 100;
      const y = (clientY / height) * 100;
      
      setMousePosition({ x, y });
      
      // Update gradient position
      const gradientEl = document.querySelector('.interactive-gradient') as HTMLElement;
      if (gradientEl) {
        gradientEl.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(167, 139, 250, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
      {/* Interactive background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="interactive-gradient absolute inset-0"></div>
        
        {/* Grid pattern overlay inspired by BuildUI */}
        <div className="absolute inset-0 bg-[url('/media/grid-pattern.svg')] bg-repeat opacity-10"></div>
        
        {/* Glow spots */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      {/* Demo loop - inspired by BuildUI */}
      <motion.div 
        className="absolute right-10 top-1/3 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative w-[420px] h-[320px] perspective-viewer">
          <div className="absolute inset-0 rounded-2xl glass-effect z-0 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl"></div>
          </div>
          
          {/* Demo content */}
          <div className="relative z-10 p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
               <div className="text-xs font-mono text-white/50">Your Application</div>
            </div>
            
            <div className="space-y-3">
              <div className="h-8 w-full bg-white/5 rounded-md"></div>
              <div className="flex space-x-3">
                <div className="h-44 w-48 bg-white/5 rounded-md overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse-slow"></div>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="h-6 w-full bg-white/5 rounded-md"></div>
                  <div className="h-6 w-3/4 bg-white/5 rounded-md"></div>
                  <div className="h-6 w-5/6 bg-white/5 rounded-md"></div>
                  <div className="h-6 w-4/5 bg-white/5 rounded-md"></div>
                  <div className="h-6 w-2/3 bg-white/5 rounded-md"></div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <div className="h-8 w-28 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-md flex items-center justify-center">
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-xs font-medium text-white/70"
                  >
                    <MousePointer className="w-3 h-3 inline mr-1" /> Go Live Now!
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating effect */}
          <motion.div
            animate={{ 
              rotateX: [-2, 2, -2],
              rotateY: [2, -2, 2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 z-20"
          />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={fadeInUp}
            custom={0}
            className="inline-block px-4 py-2 rounded-full glass-effect bg-white/5 text-sm font-medium mb-6"
          >
            Next-Gen Digital Agency
          </motion.div>
          
          <motion.h1 
            className="headline text-5xl md:text-7xl font-bold mb-6 tracking-tight" 
            variants={fadeInUp}
            custom={1}
          >
            We craft <span className="text-gradient-primary animate-text-shimmer inline-block">digital experiences</span> that transform brands
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            variants={fadeInUp}
            custom={2}
          >
We design and develop exceptional web and mobile applications and marketing strategies that connect brands with their audiences,
            creating memorable digital experiences that drive growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6"
            variants={fadeInUp}
            custom={3}
          >
            <a href="#contact">
              <GradientButton className="py-3 px-8 text-base font-medium group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-90 transition-opacity"></span>
              </GradientButton>
            </a>
            
            <a href="#case-studies" className="inline-flex items-center rounded-full glass-effect bg-white/5 text-primary border border-primary/20 px-6 py-3 font-medium transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 active:shadow-sm">
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
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-full max-w-[200px] mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <span className="text-sm text-muted-foreground mb-2 text-center">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
