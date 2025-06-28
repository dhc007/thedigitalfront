
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import CaseStudies from '@/components/CaseStudies';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { isDarkMode } = useTheme();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    services: null,
    pricing: null,
    caseStudies: null,
    socialProof: null,
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
        sectionKey === 'socialProof' ? 'social-proof' : sectionKey
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
    "description": "AI Consulting & Transformation agency specializing in enterprise AI strategy and implementation",
    "url": "https://thedigitalfront.com",
    "logo": "https://thedigitalfront.com/logo.png",
    "image": "https://thedigitalfront.com/og-image.png",
    "foundingDate": "2018-01-01",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@thedigitalfront.com",
      "availableLanguage": ["English"]
    },
    "priceRange": "$45,000+",
    "areaServed": ["Global", "United States", "Europe"],
    "service": [
      {
        "@type": "Service",
        "name": "AI Strategy & Roadmap",
        "description": "Comprehensive AI implementation strategy for enterprise clients"
      },
      {
        "@type": "Service",
        "name": "Enterprise AI Training",
        "description": "Professional AI training programs for enterprise teams"
      },
      {
        "@type": "Service",
        "name": "Custom AI Solutions",
        "description": "Tailored AI development and integration services"
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
        "name": "Fortune 500 Client"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Helmet>
        <title>TheDigitalFront - AI Strategy That Drives Results, Not Hype</title>
        <meta name="description" content="Transform your enterprise with strategic AI implementation. We help Fortune 500 companies identify, implement, and scale AI solutions that deliver measurable ROI." />
        <meta name="keywords" content="AI consulting, enterprise AI, AI strategy, digital transformation, AI implementation, Fortune 500" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedigitalfront.com" />
        <meta property="og:title" content="TheDigitalFront - AI Strategy That Drives Results" />
        <meta property="og:description" content="Transform your enterprise with strategic AI implementation. $50M+ in documented savings." />
        <meta property="og:image" content="/media/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thedigitalfront.com" />
        <meta name="twitter:title" content="TheDigitalFront - AI Strategy That Drives Results" />
        <meta name="twitter:description" content="Transform your enterprise with strategic AI implementation." />
        <meta name="twitter:image" content="/media/og-image.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://thedigitalfront.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navbar currentSection={currentSection} />
      <Hero />
      <Services />
      <Pricing />
      <CaseStudies />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
