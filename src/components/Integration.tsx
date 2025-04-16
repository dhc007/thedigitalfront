
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InfiniteSlider } from './ui/infinite-slider';
import { cn } from '@/lib/utils';

const integrations = [
  {
    name: 'Firebase',
    logo: '/media/firebasegoogle.png',
    summary: 'Google\'s platform for mobile and web'
  },
  {
    name: 'Stripe',
    logo: '/media/stripe.png',
    summary: 'Online payment processing for internet businesses'
  },
  {
    name: 'WordPress',
    logo: '/media/wordpress.png',
    summary: 'Popular CMS powering millions of websites'
  },
  {
    name: 'Twilio',
    logo: '/media/twilio.png',
    summary: 'Communication APIs for SMS and voice'
  },
  {
    name: 'Mailchimp',
    logo: '/media/mailchimp.png',
    summary: 'Marketing automation platform and email service'
  },
  {
    name: 'Figma',
    logo: '/media/figma.png',
    summary: 'Collaborative interface design tool for teams'
  },
  {
    name: 'Hubspot',
    logo: '/media/hubspot.png',
    summary: 'CRM platform for marketing and sales'
  },
  {
    name: 'WhatsApp',
    logo: '/media/whatsapp.png',
    summary: 'Messaging app with business integration capabilities'
  },
  {
    name: 'Google Analytics',
    logo: '/media/googleanalytics.png',
    summary: 'Website traffic analytics and insights'
  }
];

// Integration card component with improved container styling
const IntegrationCard = ({ name, logo, summary }: { name: string; logo: string; summary: string }) => {
  return (
    <motion.div 
      className="min-w-[280px] h-[200px] flex flex-col items-center p-6 rounded-xl glass-effect mx-3 transition-all duration-300 border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] group"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="w-full h-20 flex items-center justify-center mb-4 bg-white/5 rounded-lg p-3">
        <img 
          src={logo} 
          alt={`${name} logo`}
          className="h-14 max-w-[140px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
            console.error(`Failed to load image: ${logo}`);
          }}
        />
      </div>
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground text-center">{summary}</p>
    </motion.div>
  );
};

const Integration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="integrations" className="section-padding relative py-28" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/media/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect bg-white/5 text-sm font-medium mb-6">
            Integrations
          </span>
          <h2 className="headline text-4xl md:text-5xl font-bold mb-6">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Connections</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We integrate with the tools you already use, making your workflows smoother and more efficient.
          </p>
        </motion.div>
        
        <div className="my-16 reveal-on-scroll overflow-hidden">
          <motion.div 
            className="glass-effect p-6 rounded-2xl border border-white/10 shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InfiniteSlider
              duration={45}
              durationOnHover={60}
              reverse={false}
              className="py-4"
            >
              {integrations.map((integration, i) => (
                <IntegrationCard 
                  key={i} 
                  name={integration.name} 
                  logo={integration.logo}
                  summary={integration.summary}
                />
              ))}
            </InfiniteSlider>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center max-w-xl">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">30+ integrations</span> available to keep your tech stack connected and your business running smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="curve-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="rgba(255,255,255,0.02)">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Integration;
