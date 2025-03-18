import { useRef, useEffect } from 'react';
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
    logo: '/media/stripe-2.png',
    summary: 'Online payment processing for internet businesses'
  },
  {
    name: 'WordPress',
    logo: '/media/wordpress-2.png',
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
    name: 'Lottie Files',
    logo: '/media/lottiefiles.png',
    summary: 'Lightweight animations for web and apps'
  }
];

// Integration card component
const IntegrationCard = ({ name, logo, summary }: { name: string; logo: string; summary: string }) => {
  return (
    <div className="min-w-[280px] h-auto flex flex-col items-center p-6 rounded-xl border border-secondary/30 bg-secondary/20 backdrop-blur-sm mx-3 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] group">
      <div className="w-full h-16 flex items-center justify-center mb-4">
        <img 
          src={logo} 
          alt={`${name} logo`}
          className="h-12 max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground text-center">{summary}</p>
    </div>
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
    <section id="integrations" className="section-padding relative bg-gradient-to-b from-background via-purple-900/5 to-background py-20" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/30 text-sm font-medium mb-6">
            Integrations
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Connections</span>
          </h2>
          <p className="text-muted-foreground">
            We integrate with the tools you already use, making your workflows smoother and more efficient.
          </p>
        </div>
        
          <div className="my-16 reveal-on-scroll overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default Integration;
