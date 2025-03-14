
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "We are incredibly pleased with the branding services and website development delivered by TheDigitalFront. Their expertise and attention to detail were evident throughout the project. As we prepare to integrate e-commerce functionalities, we're confident that the foundation laid by their team will elevate our online presence and drive business growth. Highly recommend their services for startups in the health and wellness sector.",
    author: "Utpal Ghosh",
    position: "Founder",
    company: "Protein Box",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    highlight: "It was a great experience!"
  },
  {
    id: 2,
    quote: "Working with TheDigitalFront was instrumental in shaping our brand identity and digital presence. They provided comprehensive services including branding, website design, and captivating 2D animations. Their creative approach perfectly aligned with our AI-focused mission, and we're thrilled with the results. The website they developed showcases our platform seamlessly, allowing users to envision the power of AI in SaaS app development.",
    author: "Anand Prabhala",
    position: "CEO",
    company: "Kisai Technologies",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    highlight: "Looking forward to another project"
  },
  {
    id: 3,
    quote: "Our experience working with TheDigitalFront was exceptional. They crafted a Gen-Z, head-turning prototype that perfectly encapsulated our vision at Travlite. Their creativity and attention to detail were evident in every aspect of the project. We absolutely loved the prototype for AI-driven personalized itinerary concept. We're excited about the potential this prototype holds for our startup and look forward to continuing our collaboration with TheDigitalFront.",
    author: "Aryan Raul",
    position: "Co-Founder",
    company: "Travelite",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    highlight: "The best in the industry!"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Set mounted to true when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // This will run every time isDarkMode changes to force a re-render
  useEffect(() => {
    if (mounted) {
      const section = document.getElementById('testimonials');
      if (section) {
        section.style.display = 'none';
        setTimeout(() => {
          section.style.display = 'block';
        }, 0);
      }
    }
  }, [isDarkMode, mounted]);
  
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
    <section id="testimonials" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/10 to-background' : 'bg-gradient-to-b from-white via-purple-50/80 to-white'}`} ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-40 left-1/2 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary/50'} text-sm font-medium mb-6`}>
            Testimonials
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from some of the businesses we've helped achieve remarkable results.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className={`lg:col-span-1 rounded-2xl p-8 overflow-hidden reveal-on-scroll ${isDarkMode ? 'bg-secondary/20 border border-secondary/30' : 'bg-white/80 backdrop-blur-sm shadow-xl'}`}>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-all duration-500",
                      activeTestimonial === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                    )}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <div className="flex items-center gap-4 cursor-pointer">
                      <div className="relative">
                        <div className={cn(
                          "w-12 h-12 rounded-full overflow-hidden ring-2 transition-all duration-300",
                          activeTestimonial === index ? 
                            (index === 0 ? "ring-orange-400" : index === 1 ? "ring-blue-400" : "ring-purple-400") : 
                            "ring-gray-200 dark:ring-gray-700"
                        )}>
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {activeTestimonial === index && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                            <div className={cn(
                              "w-3 h-3 rounded-full",
                              index === 0 ? "bg-orange-400" : index === 1 ? "bg-blue-400" : "bg-purple-400"
                            )}></div>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-base">{testimonial.author}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`lg:col-span-2 rounded-2xl p-8 reveal-on-scroll relative overflow-hidden ${isDarkMode ? 'bg-secondary/20 border border-secondary/30' : 'bg-white/80 backdrop-blur-sm shadow-xl'}`}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={cn(
                    "transition-all duration-700 absolute inset-0 p-8 flex flex-col",
                    activeTestimonial === index ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-full"
                  )}
                  style={{ transitionDelay: activeTestimonial === index ? '0.2s' : '0s' }}
                >
                  <div className={cn(
                    "text-2xl md:text-3xl font-semibold mb-4 font-display",
                    index === 0 ? "text-orange-500 dark:text-orange-400" : 
                    index === 1 ? "text-blue-500 dark:text-blue-400" : 
                    "text-purple-500 dark:text-purple-400"
                  )}>
                    {testimonial.highlight}
                  </div>
                  
                  <div className="relative mt-2 mb-6">
                    <svg className={cn(
                      "absolute -top-3 -left-2 w-10 h-10 opacity-20",
                      index === 0 ? "text-orange-500" : index === 1 ? "text-blue-500" : "text-purple-500"
                    )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.086 2.17-1.258V7.9c-1.06.238-2.1.78-3.122 1.626C7.568 10.378 6.792 11.414 6.262 12.64c-.53 1.226-.796 2.377-.796 3.453 0 1.258.32 2.347.26 3.247.426.91 1.083 1.362 1.972 1.362.85 0 1.54-.283 2.07-.85.53-.567.796-1.258.796-2.07 0-.776-.203-1.526-.61-2.25-.406-.724-.907-1.325-1.5-1.806L7.93 14.47c-.278-.216-.364-.502-.256-.856.107-.355.392-.6.854-.734l.793-.222h.793c.278 0 .538.037.78.113.244.076.43.226.56.447.13.222.194.478.194.767zm8.954 0c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.56-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.086 2.17-1.258V7.9c-1.06.238-2.1.78-3.122 1.626-1.02.847-1.796 1.883-2.327 3.11-.53 1.226-.796 2.377-.796 3.452 0 1.258.32 2.347.96 3.247.426.91 1.083 1.362 1.972 1.362.85 0 1.54-.283 2.07-.85.53-.567.796-1.258.796-2.07 0-.776-.203-1.526-.61-2.25-.406-.724-.907-1.325-1.5-1.806l-.3-.257c-.278-.216-.364-.502-.256-.856.107-.355.392-.6.854-.734l.793-.222h.793c.278 0 .538.037.78.113.244.076.43.226.56.447.13.222.194.478.194.767z" />
                    </svg>
                    <blockquote className="text-base md:text-lg leading-relaxed pl-8">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={cn(
                              "w-5 h-5",
                              index === 0 ? "text-orange-400" : index === 1 ? "text-blue-400" : "text-purple-400"
                            )}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <div className="ml-auto flex items-center gap-1 text-sm">
                        <button 
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                            index === 0 ? "hover:bg-orange-100 dark:hover:bg-orange-900/30" : 
                            index === 1 ? "hover:bg-blue-100 dark:hover:bg-blue-900/30" : 
                            "hover:bg-purple-100 dark:hover:bg-purple-900/30"
                          )}
                          onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                          aria-label="Previous testimonial"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15.5 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <span className="text-muted-foreground">
                          {activeTestimonial + 1}/{testimonials.length}
                        </span>
                        <button 
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                            index === 0 ? "hover:bg-orange-100 dark:hover:bg-orange-900/30" : 
                            index === 1 ? "hover:bg-blue-100 dark:hover:bg-blue-900/30" : 
                            "hover:bg-purple-100 dark:hover:bg-purple-900/30"
                          )}
                          onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                          aria-label="Next testimonial"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8.5 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA - Second of the 3 CTAs */}
          <div className={`mt-16 p-10 rounded-2xl reveal-on-scroll ${
            isDarkMode 
              ? 'bg-secondary/20 border border-secondary/30 backdrop-blur-sm' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 shadow-lg'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="headline text-2xl md:text-3xl mb-4">Ready to transform your digital presence?</h3>
                <p className="mb-6 text-muted-foreground">
                  Join our satisfied clients and experience the difference our expertise can make for your business.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <a href="#contact" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
