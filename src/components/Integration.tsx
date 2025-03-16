
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';

// Define types for InfiniteSlider props
type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

// InfiniteSlider component for smooth scrolling carousels
function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const integrationTools = [
  {
    id: 1,
    name: "WordPress",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
    category: "CMS"
  },
  {
    id: 2,
    name: "Shopify",
    icon: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
    category: "E-commerce"
  },
  {
    id: 3,
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    category: "Frontend"
  },
  {
    id: 4,
    name: "Node.js",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    category: "Backend"
  },
  {
    id: 5,
    name: "Firebase",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    category: "Database"
  },
  {
    id: 6,
    name: "AWS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
    category: "Cloud"
  },
  {
    id: 7,
    name: "Stripe",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png",
    category: "Payment"
  },
  {
    id: 8,
    name: "Adobe XD",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968573.png",
    category: "Design"
  },
  {
    id: 9,
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    category: "Design"
  },
  {
    id: 10,
    name: "Google Analytics",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
    category: "Analytics"
  },
  {
    id: 11,
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    category: "Version Control"
  },
  {
    id: 12,
    name: "Slack",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    category: "Communication"
  }
];

// Split tools into top and bottom rows for different scroll directions
const topRowTools = integrationTools.slice(0, 6);
const bottomRowTools = integrationTools.slice(6, 12);

const Integration = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Create an intersection observer to detect when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="integrations" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-purple-900/5 to-background" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
            Integrations
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Technology</span> Integration
          </h2>
          <p className="text-muted-foreground">
            We integrate with the platforms and tools you already use, ensuring smooth operation and maximum efficiency for your digital products.
          </p>
        </div>
        
        {/* Top row - scrolling from left to right */}
        {isVisible && (
          <div className="py-8">
            <InfiniteSlider
              duration={30}
              reverse={false}
              className="py-4"
              gap={24}
            >
              {topRowTools.map((tool) => (
                <div 
                  key={tool.id}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-32 h-32 flex items-center justify-center rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-secondary/80 to-secondary/20 backdrop-blur-sm border border-secondary/50">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                    />
                  </div>
                  <p className="mt-3 text-center font-medium">{tool.name}</p>
                  <span className="text-sm text-muted-foreground">{tool.category}</span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        )}
        
        {/* Bottom row - scrolling from right to left */}
        {isVisible && (
          <div className="py-8">
            <InfiniteSlider
              duration={30}
              reverse={true}
              className="py-4"
              gap={24}
            >
              {bottomRowTools.map((tool) => (
                <div 
                  key={tool.id}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-32 h-32 flex items-center justify-center rounded-2xl p-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-purple-900/30 to-secondary/20 backdrop-blur-sm border border-secondary/50">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                    />
                  </div>
                  <p className="mt-3 text-center font-medium">{tool.name}</p>
                  <span className="text-sm text-muted-foreground">{tool.category}</span>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Integration;
