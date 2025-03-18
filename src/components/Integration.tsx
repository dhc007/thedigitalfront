
import { useRef, useEffect } from 'react';
import { InfiniteSlider } from './ui/infinite-slider';
import { cn } from '@/lib/utils';

const integrations = [
  {
    name: 'Firebase',
    logo: '/media/firebasegoogle.png'
  },
  {
    name: 'Stripe',
    logo: '/media/stripe.png'
  },
  {
    name: 'WordPress',
    logo: '/media/wordpress.png'
  },
  {
    name: 'Twilio',
    logo: '/media/twilio.png'
  },
  {
    name: 'Mailchimp',
    logo: '/media/mailchimp.png'
  },
  {
    name: 'Figma',
    logo: '/integrations/figma.png'
  },
  {
    name: 'Hubspot',
    logo: '/media/hubspot.png'
  },
  {
    name: 'WhatsAPP',
    logo: '/media/whatsapp.png'
  },
  {
    name: 'Lottie Files',
    logo: '/media/lottiefiles.png'
  }
];

// Create a separate file for this component
const IntegrationLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="min-w-32 h-20 flex items-center justify-center p-4 rounded-xl border border-secondary/30 bg-secondary/20 backdrop-blur-sm mx-2">
      <img 
        src={logo} 
        alt={`${name} logo`}
        className="h-10 max-w-[100px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
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
    <section id="integrations" className="section-padding relative bg-gradient-to-b from-background via-purple-900/5 to-background" ref={sectionRef}>
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
        
        <div className="my-16 reveal-on-scroll">
          <InfiniteSlider
            duration={30}
            durationOnHover={60}
            reverse={false}
            className="py-4"
          >
            {integrations.map((integration, i) => (
              <IntegrationLogo 
                key={i} 
                name={integration.name} 
                logo={integration.logo} 
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default Integration;
