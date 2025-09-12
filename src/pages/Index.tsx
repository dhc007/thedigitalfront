
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { isDarkMode } = useTheme();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    valueProposition: null,
    services: null,
    process: null,
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
        sectionKey === 'valueProposition' ? 'value-proposition' : sectionKey
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

  // Enhanced schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TheDigitalFront",
    "description": "Product development studio specializing in MVP launch, AI-powered apps, and mobile-first products for startups and businesses",
    "url": "https://thedigitalfront.in",
    "logo": "https://thedigitalfront.in/logo.png",
    "image": "https://thedigitalfront.in/og-image.png",
    "foundingDate": "2020-01-01",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Goa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9284613155",
      "contactType": "customer service",
      "email": "team@thedigitalfront.in",
      "availableLanguage": ["English"]
    },
    "priceRange": "₹3L+",
    "areaServed": ["Global", "India", "United States", "Europe"],
    "service": [
      {
        "@type": "Service",
        "name": "MVP Launch",
        "description": "Complete SaaS development from concept to launch"
      },
      {
        "@type": "Service",
        "name": "AI-Powered Applications",
        "description": "AI/ML integration for smarter products"
      },
      {
        "@type": "Service",
        "name": "Mobile-First Products",
        "description": "Cross-platform mobile app development"
      },
      {
        "@type": "Service",
        "name": "Dedicated Product Squad",
        "description": "Remote product development teams on retainer"
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
        "@type": "Organization",
        "name": "Startup Client"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Helmet>
        <title>TheDigitalFront - We build and launch scalable products — fast</title>
        <meta name="description" content="From SaaS MVPs to AI-powered apps, TheDigitalFront helps startups and businesses go from idea to launch with lean, expert-driven teams." />
        <meta name="keywords" content="MVP development, startup development, AI apps, mobile apps, product studio, SaaS development, Flutter apps" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedigitalfront.in" />
        <meta property="og:title" content="TheDigitalFront - Product Development Studio" />
        <meta property="og:description" content="We build and launch scalable products — fast. From SaaS MVPs to AI-powered apps." />
        <meta property="og:image" content="/media/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thedigitalfront.in" />
        <meta name="twitter:title" content="TheDigitalFront - Product Development Studio" />
        <meta name="twitter:description" content="We build and launch scalable products — fast." />
        <meta name="twitter:image" content="/media/og-image.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://thedigitalfront.in" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navbar currentSection={currentSection} />
      <Hero />
      <ValueProposition />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
