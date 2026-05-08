import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Send, Sparkles, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from "gsap";
import { cn } from "../lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().min(10, "Valid phone number is required"),
  objective: z.string().optional(),
  brief: z.string().min(10, "Please provide more context for your mission")
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
      
      gsap.from(".form-reveal", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="lg:pl-16 pt-36 md:pt-44 pb-20 md:pb-24">
      <Helmet>
        <title>Strategy Alignment | Best Pro Digital Local Growth</title>
        <meta name="description" content="Initialize your connection with Best Pro Digital's GMB and Local SEO experts. Secure your market dominance for 2026." />
        <link rel="canonical" href="https://bestprodigital.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Best Pro Digital",
              "description": "Secure lead delivery for enterprise GMB and Local SEO scaling.",
              "url": "https://bestprodigital.com/contact",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bestprodigital.com"
                }, {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://bestprodigital.com/contact"
                }]
              }
            }
          `}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
          <div>
            <div className="contact-item">
              <p className="text-brand-accent text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-8 font-mono flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Engagement
              </p>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12 text-white">
                Let's <br/> <span className="text-brand-accent italic font-serif lowercase font-light opacity-80">scale</span> <br/> Together.
              </h1>
            </div>
            
            <div className="space-y-6 md:space-y-8 mt-12 md:mt-16">
              {[
                { icon: Mail, label: "Email Us", value: "thebestprodigital@gmail.com" },
                { icon: Phone, label: "Call Us", value: "+1 (800) GROW-PRO" },
                { icon: MapPin, label: "Office", value: "Silicon Valley, CA" }
              ].map((item, i) => (
                <div key={i} className="contact-item flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                    <item.icon className="text-brand-accent w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-bold">{item.label}</div>
                    <div className="text-base md:text-lg font-bold text-white group-hover:text-brand-accent transition-colors break-all md:break-normal">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-reveal bg-brand-surface border border-brand-border p-8 md:p-12 rounded-[2rem] relative overflow-hidden shadow-2xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 md:py-20"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-accent rounded-full flex items-center justify-center mb-6">
                  <ArrowRight className="text-brand-primary w-8 h-8 md:w-10 md:h-10 -rotate-45" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">Transmission Success</h2>
                <p className="text-neutral-500 text-sm">Our growth specialists will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-accent font-bold uppercase tracking-widest text-[10px] border-b border-brand-accent pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">First Name</label>
                    <input 
                      id="firstName"
                      {...register("firstName")}
                      type="text" 
                      placeholder="e.g. John"
                      className={cn(
                        "w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors",
                        errors.firstName && "border-red-500/50 focus:border-red-500"
                      )}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-4 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Last Name</label>
                    <input 
                      id="lastName"
                      {...register("lastName")}
                      type="text" 
                      placeholder="e.g. Doe"
                      className={cn(
                        "w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors",
                        errors.lastName && "border-red-500/50 focus:border-red-500"
                      )}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-4 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Email Channel</label>
                    <input 
                      id="email"
                      {...register("email")}
                      type="email" 
                      placeholder="e.g. john@company.com"
                      className={cn(
                        "w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors",
                        errors.email && "border-red-500/50 focus:border-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-4 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Phone Number</label>
                    <input 
                      id="phone"
                      {...register("phone")}
                      type="tel" 
                      placeholder="e.g. +1 123 456 7890"
                      className={cn(
                        "w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors",
                        errors.phone && "border-red-500/50 focus:border-red-500"
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-4 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="objective" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Objective (Optional)</label>
                  <div className="relative">
                    <select 
                      id="objective"
                      {...register("objective")}
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors appearance-none"
                    >
                      <option value="">Select Objective</option>
                      <option value="GMB Optimization & Ranking">GMB Optimization & Ranking</option>
                      <option value="Local SEO Strategy">Local SEO Strategy</option>
                      <option value="Review Management">Review Management</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Full Digital Audit">Full Digital Audit</option>
                      <option value="Social Media Growth">Social Media Growth</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                       <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="brief" className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Mission Brief</label>
                  <textarea 
                    id="brief"
                    {...register("brief")}
                    rows={4}
                    placeholder="Describe your goals and current constraints..."
                    className={cn(
                      "w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors resize-none",
                      errors.brief && "border-red-500/50 focus:border-red-500"
                    )}
                  ></textarea>
                  {errors.brief && (
                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-4 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.brief.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary w-full py-4 md:py-5 flex items-center justify-center gap-3 text-base md:text-lg uppercase font-black transition-all",
                    isSubmitting && "opacity-70 scale-95 pointer-events-none"
                  )}
                >
                  {isSubmitting ? "Transmitting..." : "Initialize Connection"} 
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
