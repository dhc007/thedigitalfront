
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { GradientButton } from '@/components/ui/gradient-button';
import { ChevronDown } from 'lucide-react';

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+81", country: "Japan" },
  { code: "+971", country: "UAE" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+91', // Default country code
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Set country code
  const selectCountryCode = (code: string) => {
    setFormData(prevData => ({
      ...prevData,
      countryCode: code
    }));
    setIsCountryDropdownOpen(false);
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
    formDataToSend.append("phone", `${formData.countryCode} ${formData.phone}`); // Send phone with country code
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
        setFormData({ name: "", email: "", company: "", countryCode: "+91", phone: "", message: "" });
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
    <section id="contact" className="section-padding relative bg-gradient-to-b from-background via-purple-900/5 to-background" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
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

        <div className="max-w-5xl mx-auto bg-secondary/20 border border-secondary/30 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-12 flex flex-col justify-center">
              <h2 className="headline text-3xl md:text-4xl mb-6">Let's Work Together</h2>
              <p className="mb-8 text-white/90">Reach out to us to discuss your project.</p>
            </div>

            <div className="p-12 transition-colors bg-background">
              <h2 className="headline text-3xl mb-6 text-primary">Get in Touch</h2>

              {isSubmitted ? (
                <div className="border rounded-lg p-6 text-center bg-green-900/20 border-green-800 text-green-100">
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your Company (Optional)" />

                  {/* Phone Number with Country Code - Improved dropdown */}
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-4 sm:col-span-3 relative" ref={countryDropdownRef}>
                      <div 
                        className="flex items-center justify-between h-10 px-3 border border-input rounded-md bg-background cursor-pointer"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      >
                        <span>{formData.countryCode}</span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </div>
                      
                      {isCountryDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-background border border-input rounded-md shadow-lg max-h-60 overflow-auto">
                          {countryCodes.map((country) => (
                            <div 
                              key={country.code} 
                              className="px-3 py-2 hover:bg-secondary cursor-pointer"
                              onClick={() => selectCountryCode(country.code)}
                            >
                              <div className="font-medium">{country.code}</div>
                              <div className="text-xs text-muted-foreground">{country.country}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="col-span-8 sm:col-span-9" 
                      placeholder="Your Phone Number" 
                    />
                  </div>

                  <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="Your Message" />

                  <GradientButton type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Let's Connect"}
                  </GradientButton>
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
