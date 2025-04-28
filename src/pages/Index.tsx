import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TubeNavbar from '@/components/TubeNavbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Integration from '@/components/Integration';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { isDarkMode } = useTheme();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    services: null,
    caseStudies: null,
    process: null,
    integration: null,
    testimonials: null,
    contact: null
  });

  // Setup intersection observer for section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.id;
          setCurrentSection(section);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections
    Object.keys(sectionRefs.current).forEach(sectionKey => {
      const sectionElement = document.getElementById(
        sectionKey === 'caseStudies' ? 'case-studies' : 
        sectionKey === 'integration' ? 'integrations' : sectionKey
      );
      if (sectionElement) {
        observer.observe(sectionElement);
        sectionRefs.current[sectionKey] = sectionElement;
      }
    });
    
    return () => {
      Object.values(sectionRefs.current).forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = {
      hero: document.getElementById('hero'),
      services: document.getElementById('services'),
      caseStudies: document.getElementById('case-studies'),
      process: document.getElementById('process'),
      integration: document.getElementById('integrations'),
      testimonials: document.getElementById('testimonials'),
      contact: document.getElementById('contact')
    };
  }, []);

  // Enhanced schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TheDigitalFront",
    "description": "Next-Gen Digital Agency that designs and develops exceptional web and mobile applications",
    "url": "https://thedigitalfront.in",
    "logo": "https://thedigitalfront.in/logo.png",
    "image": "https://thedigitalfront.in/og-image.png",
    "foundingDate": "2018-01-01",
    "founders": [
      {
        "@type": "Person",
        "name": "Digital Front Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-123-456-7890",
      "contactType": "customer service",
      "email": "hello@thedigitalfront.in",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://twitter.com/thedigitalfront",
      "https://www.facebook.com/thedigitalfront",
      "https://www.linkedin.com/company/thedigitalfront",
      "https://www.instagram.com/thedigitalfront"
    ],
    "priceRange": "$$",
    "areaServed": ["Global", "India", "United States", "United Kingdom"],
    "service": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Professional web application development"
      },
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Custom mobile application development for iOS and Android"
      },
      {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "User-centered interface and experience design"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Strategic digital marketing campaigns"
      }
    ],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Client Review"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden transition-colors">
      <Helmet>
        <title>TheDigitalFront - Next-Gen Digital Agency | Web & Mobile Development</title>
        <meta name="description" content="We design and develop exceptional web and mobile applications that connect brands with their audiences, creating memorable digital experiences that drive growth." />
        <meta name="keywords" content="digital agency, web development, mobile apps, UI/UX design, digital marketing, e-commerce" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedigitalfront.in" />
        <meta property="og:title" content="TheDigitalFront - Next-Gen Digital Agency" />
        <meta property="og:description" content="Transform your digital presence with our cutting-edge web and app development services." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thedigitalfront.in" />
        <meta name="twitter:title" content="TheDigitalFront - Next-Gen Digital Agency" />
        <meta name="twitter:description" content="Transform your digital presence with our cutting-edge web and app development services." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://thedigitalfront.in" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <TubeNavbar currentSection={currentSection} />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Integration />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
