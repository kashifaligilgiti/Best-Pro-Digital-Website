import { motion } from "motion/react";
import { 
  Palette, 
  Type, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Layers, 
  Fingerprint,
  Brush,
  Eye,
  Zap,
  Award
} from "lucide-react";

export const GlobalBrandingKnowledge = () => {
  const brandPillars = [
    {
      title: "Visual Identity",
      desc: "More than just a logo. We architect a complete visual language—colors, typography, and imagery—that instantly communicates your elite status.",
      icon: Palette,
      feature: "Distinctive Aesthetics"
    },
    {
      title: "Brand Voice",
      desc: "Developing a unique tonality and messaging framework that resonates with your ideal audience across every platform.",
      icon: Type,
      feature: "Emotional Resonance"
    },
    {
      title: "Strategic Positioning",
      desc: "Defining your 'Unique Selling Proposition' and carving out a dominant space in the market that competitors can't touch.",
      icon: Target,
      feature: "Market Dominance"
    },
    {
      title: "Cultural DNA",
      desc: "Defining the values and story that build internal culture and external loyalty. We turn your business into a movement.",
      icon: Fingerprint,
      feature: "Deep Loyalty"
    }
  ];

  const designPrinciples = [
    { label: "Simplicity", text: "Removing the noise to ensure your core message is heard instantly and clearly." },
    { label: "Consistency", text: "Every touchpoint feels like the same brand, building cumulative trust over time." },
    { label: "Adaptability", text: "Modern branding must work on a favicon just as well as a 50ft billboard." }
  ];

  return (
    <div className="mt-32 border-t border-brand-border pt-32 px-12 pb-32">
      <header className="mb-20">
        <div className="flex items-center gap-3 text-brand-accent mb-6">
          <Palette className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Identity Systems // 08</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-none">
          The Soul of <br />
          <span className="italic font-serif font-light lowercase text-brand-accent">Authority</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-lg leading-relaxed">
          Marketing buys attention; Branding keeps it. We don't just design logos; we architect the emotional infrastructure that turns strangers into advocates.
        </p>
      </header>

      {/* Brand Identity Matrix */}
      <div className="grid lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4 bg-brand-accent p-12 rounded-[3.5rem] text-brand-primary flex flex-col justify-between h-full group overflow-hidden relative">
           <div className="relative z-10">
              <Brush className="w-12 h-12 mb-10 opacity-30 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                 Design is <br/> Thinking <br/> <span className="italic opacity-60">Made Visual.</span>
              </h3>
              <p className="font-medium text-sm leading-relaxed opacity-80 mb-12">
                 Elite brands aren't created by accident. They are engineered. Every curve of a typeface and every hex code of a color carries psychological weight.
              </p>
           </div>
           <div className="relative z-10 space-y-4">
              {designPrinciples.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-widest">{p.label} Principle</span>
                </div>
              ))}
           </div>
           
           {/* Decor */}
           <div className="absolute -right-20 -bottom-20 opacity-10">
              <Sparkles className="w-[400px] h-[400px]" />
           </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="grid md:grid-cols-2 gap-8 h-full">
              {brandPillars.map((pillar, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 bg-brand-surface border border-brand-border rounded-[2.5rem] group hover:border-brand-accent/50 transition-all flex flex-col justify-between"
                >
                   <div>
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase mb-4">{pillar.title}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/5 text-[9px] font-black uppercase text-brand-accent tracking-widest">
                      {pillar.feature}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      {/* Psychology Section */}
      <div className="bg-brand-surface border border-brand-border rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
         <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
               <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                  The Psychology of <br/> <span className="text-brand-accent italic font-serif lowercase">Visual Perception.</span>
               </h3>
               <p className="text-neutral-400 mb-12 leading-relaxed">
                  We leverage cognitive science to ensure your brand is processed by the brain as 'Trustworthy' and 'Premium' in under 50 milliseconds. From color theory to golden-ratio layout engineering, every pixel has a purpose.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-brand-primary border border-white/5 rounded-3xl">
                     <Eye className="w-8 h-8 text-brand-accent mb-4" />
                     <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Pre-attentive</h4>
                     <p className="text-[11px] text-white/40 leading-relaxed text-neutral-500">Unconscious processing of color and form.</p>
                  </div>
                  <div className="p-8 bg-brand-primary border border-white/5 rounded-3xl">
                     <Award className="w-8 h-8 text-brand-accent mb-4" />
                     <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Cognitive Trust</h4>
                     <p className="text-[11px] text-white/40 leading-relaxed text-neutral-500">Verification of status and credibility tokens.</p>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               {/* Brand Asset Mockup Visualization */}
               <div className="aspect-square bg-neutral-900 rounded-[3rem] border border-white/5 relative overflow-hidden p-8 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10 pattern-grid-white"></div>
                  
                  {/* Floating Identity Assets */}
                  <div className="relative z-10 w-full h-full flex flex-col gap-4">
                     <div className="h-1/2 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden group/card relative">
                        <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Typography System</div>
                        <div className="text-3xl font-black text-white tracking-tighter italic">Modern Grotesk</div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/card:scale-110 transition-transform">
                           <Type className="w-32 h-32" />
                        </div>
                     </div>
                     <div className="flex gap-4 h-1/2">
                        <div className="w-2/3 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-6 flex flex-col justify-between">
                           <div className="text-[8px] font-black text-brand-accent uppercase tracking-widest">Brand Mark</div>
                           <div className="w-12 h-12 bg-brand-accent rounded-full"></div>
                        </div>
                        <div className="w-1/3 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center gap-2">
                           {[...Array(4)].map((_, i) => (
                             <div key={i} className="w-full h-1.5 bg-white/10 rounded-full" />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Global Expansion Hub */}
      <div className="mt-32 p-12 bg-white/5 border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic">Scaling the Vision.</h3>
           <p className="text-neutral-400 text-sm leading-relaxed">
             Global branding isn't about being big; it's about being consistent at scale. Whether you have one location or one hundred, your brand essence must remain pure. We build 'Brand Guardrails' that protect your equity as you grow.
           </p>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-brand-accent">100%</div>
              <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Coherence</div>
           </div>
           <div className="w-px h-12 bg-white/10 hidden md:block" />
           <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-brand-accent">∞</div>
              <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Equity</div>
           </div>
        </div>
      </div>
    </div>
  );
};
