
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "The team at TheDigitalFront delivered beyond our expectations. Our conversion rate increased by 200% within the first month of launching our new digital platform.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova Solutions",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    quote: "Working with TheDigitalFront was a game-changer for our business. Their attention to detail and focus on user experience resulted in an incredible ROI for our web app.",
    author: "Michael Chen",
    position: "CEO",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  },
  {
    id: 3,
    quote: "I was blown away by the quality of work and the level of service provided by TheDigitalFront. They truly understood our brand and delivered a digital experience that perfectly captures our value proposition.",
    author: "Emily Wong",
    position: "Product Manager",
    company: "Innovate Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
    <section id="testimonials" className={`section-padding ${isDarkMode ? 'bg-gradient-to-b from-secondary/10 to-background' : 'bg-gradient-to-b from-secondary/50 to-white'}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-white'} text-sm font-medium mb-6`}>
            Testimonials
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from some of the businesses we've helped achieve remarkable results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto reveal-on-scroll">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col justify-center transition-all duration-500",
                  isDarkMode 
                    ? "bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-2xl p-10" 
                    : "glass-card rounded-2xl p-10",
                  activeIndex === index 
                    ? "opacity-100 transform translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 transform -translate-x-full" 
                      : "opacity-0 transform translate-x-full"
                )}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-primary" : isDarkMode ? "bg-gray-600" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
