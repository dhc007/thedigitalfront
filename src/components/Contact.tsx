
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const basinEndpoint = "https://usebasin.com/f/43f785c099d7"; // Your Basin Form ID

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(basinEndpoint, {
        method: "POST",
        body: formDataToSend, // ✅ Send as FormData
      });

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }

      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        duration: 3000,
      });

      // Reset form after submission
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation Effect
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
    <section id="contact" className={`section-padding relative ${isDarkMode ? 'bg-gradient-to-b from-background via-purple-900/5 to-background' : 'bg-gradient-to-b from-white via-purple-50 to-white'}`} ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-secondary/50'} text-sm font-medium mb-6`}>
            Contact Us
          </span>
          <h2 className="headline text-4xl md:text-5xl mb-6">
            Let's Create Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your digital presence and boost your business? 
            Get in touch with us today to discuss your project.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isDarkMode ? 'bg-secondary/20 border border-secondary/30' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-12 flex flex-col justify-center">
              <h2 className="headline text-3xl md:text-4xl mb-6">Let’s Work Together</h2>
              <p className="mb-8 text-white/90">Reach out to us to discuss your project.</p>
            </div>

            <div className={`p-12 transition-colors ${isDarkMode ? 'bg-background' : 'bg-gray-50'}`}>
              <h2 className="headline text-3xl mb-6 text-gray-800 dark:text-gray-100">Get in Touch</h2>

              {isSubmitted ? (
                <div className={`border rounded-lg p-6 text-center ${isDarkMode ? 'bg-green-900/20 border-green-800 text-green-100' : 'bg-green-50 border-green-200 text-green-800'}`}>
                  <svg className={`w-12 h-12 mx-auto ${isDarkMode ? 'text-green-400' : 'text-green-500'} mb-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p>We’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your Company (Optional)" />
                  <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="Your Message" />
                  <button type="submit" className={cn("btn-primary w-full flex items-center justify-center", isSubmitting && "opacity-70 cursor-not-allowed")} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
