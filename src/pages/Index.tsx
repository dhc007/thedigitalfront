
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Integration from '@/components/Integration';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animations
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
    
    // Observe all elements with the reveal-on-scroll class
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));
    
    // Add animations to page elements
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
