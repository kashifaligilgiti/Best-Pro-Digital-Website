import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState, FormEvent, useEffect, useRef } from "react";
import gsap from "gsap";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted to thebestprodigital@gmail.com");
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="lg:pl-16 pt-32 md:pt-40 pb-20 md:pb-24">
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
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">First Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. John"
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Last Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Doe"
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Email Channel</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="e.g. john@company.com"
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="e.g. +1 123 456 7890"
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Objective (Optional)</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors appearance-none"
                    >
                      <option>Select Objective</option>
                      <option>GMB Optimization & Ranking</option>
                      <option>Local SEO Strategy</option>
                      <option>Review Management</option>
                      <option>Lead Generation</option>
                      <option>Full Digital Audit</option>
                      <option>Social Media Growth</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                       <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-white/40 ml-4">Mission Brief</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="Describe your goals and current constraints..."
                    className="w-full bg-brand-primary/50 border border-brand-border rounded-xl px-5 py-3.5 md:px-6 md:py-4 text-white focus:border-brand-accent outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 md:py-5 flex items-center justify-center gap-3 text-base md:text-lg uppercase font-black">
                  Initialize Connection <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
