
import { useRef, useEffect } from 'react';

// Replace emoji icons with premium images in Services
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechFlow",
    company: "TechFlow",
    text: "Working with this agency has been a game-changer for our business. Their attention to detail and innovative approach resulted in a website that perfectly represents our brand and has significantly increased our conversions.",
    image: "/testimonials/person1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder",
    company: "Innovate Solutions",
    text: "The team's expertise in both design and development enabled us to launch our product ahead of schedule. Their collaborative approach and technical knowledge made the entire process smooth and successful.",
    image: "/testimonials/person2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Brand Elevate",
    text: "From concept to execution, the agency delivered beyond our expectations. Our website now perfectly captures our brand essence while providing an exceptional user experience for our customers.",
    image: "/testimonials/person3.jpg"
  },
  {
    id: 4,
    name: "David Park",
    position: "CTO",
    company: "Future Systems",
    text: "I've worked with many digital agencies, but none have matched their level of technical expertise and creativity. They don't just build websites; they craft digital experiences that drive growth.",
    image: "/testimonials/person4.jpg"
  }
];

const Testimonials = () => {
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
    <section id="testimonials" className="section-padding relative bg-gradient-to-b from-background via-purple-900/5 to-background" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-400/30 blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/30 text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Clients</span> Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="p-8 rounded-2xl border border-secondary/30 bg-secondary/20 backdrop-blur-sm shadow-lg group hover:bg-secondary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <p className="text-lg text-foreground/90 relative">
                  <span className="absolute -top-2 -left-2 text-primary text-opacity-30 text-4xl">"</span>
                  {testimonial.text}
                  <span className="absolute -bottom-7 -right-2 text-primary text-opacity-30 text-4xl">"</span>
                </p>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/70">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 bg-gradient-to-tl from-purple-500/20 to-transparent w-32 h-32 rounded-tl-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
