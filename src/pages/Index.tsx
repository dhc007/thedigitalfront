
import { useEffect, useRef, useState } from 'react';
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

  // Setup intersection observer
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
      const sectionElement = document.getElementById(sectionKey === 'caseStudies' ? 'case-studies' : sectionKey);
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

  return (
    <div className="min-h-screen bg-background dark:bg-background overflow-hidden transition-colors">
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
