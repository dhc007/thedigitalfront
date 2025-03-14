import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentVisible = null;
      Object.entries(sectionRefs.current).forEach(([section, ref]) => {
        if (!ref) return;
        
        const { top, bottom } = ref.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          currentVisible = section;
        }
      });
      
      if (currentVisible) {
        setCurrentSection(currentVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    if (currentSection && sectionRefs.current[currentSection]) {
      const sectionElement = sectionRefs.current[currentSection];
      if (sectionElement) {
        setTimeout(() => {
          const yOffset = -80;
          const y = sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'instant' });
        }, 10);
      }
    }
  }, [isDarkMode, currentSection]);

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
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));
    
    const addAnimations = () => {
      document.querySelectorAll('.animate-reveal').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('scale-x-100');
        }, 800 + (index * 200));
      });
    };
    
    addAnimations();
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background overflow-hidden">
      <Navbar />
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
