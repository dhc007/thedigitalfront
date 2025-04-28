
import { useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Updated testimonials with more professional details
const testimonials = [
  {
    id: 1,
    name: "Utpal Ghosh",
    position: "CEO",
    company: "Protein-Box",
    text: "Working with TheDigitalFront was a smooth experience. They understood our vision for Protein Box perfectly and delivered a website that truly represents our brand. Highly recommend them!",
    image: "/media/testimonial-1.jpg",
    project: "FnB Platform Site Development"
  },
  {
    id: 2,
    name: "Anand Prabhala",
    position: "CEO",
    company: "Kis.ai",
    text: "TheDigitalFront has been an incredible partner for Kis.ai. Their expertise in web design and execution helped us bring our vision to life with precision and creativity. Highly recommend their team for any brand looking to make a strong digital impression.",
    image: "/media/testimonial-2.jpg",
    project: "SaaS Application Redesign"
  },
  {
    id: 3,
    name: "Poorna Tejasvi",
    position: "Co-Founder",
    company: "Travelite",
    text: "From concept to execution, TheDigitalFront delivered beyond our expectations. Our Prototype now perfectly captures our brand essence while providing an exceptional user experience for our customers.",
    image: "/media/testimonial-3.jpg",
    project: "Application Prototype"
  },
  {
    id: 4,
    name: "Deepak Pausker",
    position: "Partner",
    company: "Million Minds Infotech Pvt. Ltd.",
text: "I've worked with many digital agencies, but none have matched their level of creativity. They don't just build websites; they craft digital experiences that drive growth.",
    image: "/media/testimonial-4.jpg",
    project: "Govt Project"
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
    <section id="testimonials" className="section-padding relative py-28" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/media/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass-effect bg-white/5 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="headline text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Clients</span> Say
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="p-8 rounded-xl glass-effect border border-white/5 shadow-lg group transition-all duration-300 hover:border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-purple-500/30 rotate-180" />
                <p className="text-lg text-foreground/90 relative z-10">
                  {testimonial.text}
                </p>
                <Quote className="absolute -bottom-4 -right-2 w-8 h-8 text-purple-500/30" />
              </div>
              
              <div className="flex items-center mt-8 pt-4 border-t border-white/10">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex-shrink-0 cursor-pointer">
                      <Avatar className="w-16 h-16 border-2 border-purple-500/30 ring-2 ring-purple-500/10 ring-offset-2 ring-offset-background">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            console.error(`Failed to load testimonial image: ${testimonial.image}`);
                          }}
                        />
                        <AvatarFallback className="bg-secondary text-primary text-lg">
                          {testimonial.name.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 glass-effect bg-white/5 border border-white/10">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{testimonial.project}</h4>
                        <p className="text-xs text-muted-foreground">
                          Delivered a complete {testimonial.project.toLowerCase()} solution that increased engagement by 45%.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <div className="ml-4">
                  <h4 className="font-medium text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/70">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
