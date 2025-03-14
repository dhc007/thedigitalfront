
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "Their team revolutionized our digital presence with a website that truly represents our brand. Our leads have increased by 150% since launching!",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova Solutions",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    quote: "The digital strategy they developed has transformed our business. Their team is responsive, creative, and truly understands modern web technologies.",
    author: "Michael Chen",
    position: "CEO",
    company: "GrowthLab Ventures",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  },
  {
    id: 3,
    quote: "Working with them has been a game-changer for our e-commerce business. Our conversion rates increased by 85% and our website load time decreased significantly.",
    author: "Emily Wong",
    position: "Product Manager",
    company: "Innovate Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    quote: "These guys are web development wizards! They've helped us build a robust application that handles thousands of users daily without breaking a sweat.",
    author: "David Rodriguez",
    position: "CTO",
    company: "FinTech Innovations",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section id="testimonials" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-secondary/10 to-background' : 'bg-gradient-to-b from-purple-50 to-white'}`} ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
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
        
        <div className="max-w-5xl mx-auto">
          <div className="relative reveal-on-scroll">
            <div className="relative h-auto md:h-96 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-all duration-700 transform",
                      isDarkMode 
                        ? "bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-2xl p-8" 
                        : "bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl p-8",
                      index >= activeIndex && index < activeIndex + 2 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8 absolute"
                    )}
                    style={{ 
                      display: index >= activeIndex && index < activeIndex + 2 ? "block" : "none",
                      transitionDelay: `${(index - activeIndex) * 0.2}s`
                    }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary flex-shrink-0 ring-2 ring-primary/20">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.086 2.17-1.258V7.9c-1.06.238-2.1.78-3.122 1.626C7.568 10.378 6.792 11.414 6.262 12.64c-.53 1.226-.796 2.377-.796 3.453 0 1.258.32 2.347.26 3.247.426.91 1.083 1.362 1.972 1.362.85 0 1.54-.283 2.07-.85.53-.567.796-1.258.796-2.07 0-.776-.203-1.526-.61-2.25-.406-.724-.907-1.325-1.5-1.806L7.93 14.47c-.278-.216-.364-.502-.256-.856.107-.355.392-.6.854-.734l.793-.222h.793c.278 0 .538.037.78.113.244.076.43.226.56.447.13.222.194.478.194.767zm8.954 0c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.56-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.086 2.17-1.258V7.9c-1.06.238-2.1.78-3.122 1.626-1.02.847-1.796 1.883-2.327 3.11-.53 1.226-.796 2.377-.796 3.452 0 1.258.32 2.347.96 3.247.426.91 1.083 1.362 1.972 1.362.85 0 1.54-.283 2.07-.85.53-.567.796-1.258.796-2.07 0-.776-.203-1.526-.61-2.25-.406-.724-.907-1.325-1.5-1.806l-.3-.257c-.278-.216-.364-.502-.256-.856.107-.355.392-.6.854-.734l.793-.222h.793c.278 0 .538.037.78.113.244.076.43.226.56.447.13.222.194.478.194.767z" />
                      </svg>
                      <blockquote className="text-lg leading-relaxed mb-5 pl-7">{testimonial.quote}</blockquote>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className="w-5 h-5 text-yellow-500" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeIndex === index * 2 
                      ? "bg-primary w-8" 
                      : isDarkMode 
                        ? "bg-gray-600" 
                        : "bg-gray-300"
                  )}
                  onClick={() => setActiveIndex(index * 2)}
                  aria-label={`View testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className={`mt-16 p-10 rounded-2xl reveal-on-scroll ${
            isDarkMode 
              ? 'bg-secondary/20 border border-secondary/30' 
              : 'bg-white shadow-lg'
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
