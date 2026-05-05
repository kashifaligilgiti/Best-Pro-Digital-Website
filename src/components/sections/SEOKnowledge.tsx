import { motion } from "motion/react";
import { 
  Search, 
  Globe, 
  Settings, 
  Link2, 
  BarChart3, 
  FileText, 
  Zap, 
  ShieldCheck, 
  Cpu,
  MousePointer2,
  PieChart
} from "lucide-react";

export const SEOKnowledge = () => {
  const pillars = [
    {
      title: "Technical SEO",
      desc: "The foundation. Improving site speed, crawlability, and indexing logic so Google's bots can traverse your site without friction.",
      icon: Settings,
      details: ["Core Web Vitals", "XML Sitemaps", "Schema Markup"]
    },
    {
      title: "On-Page SEO",
      desc: "Relevance engineering. Optimizing content, HTML tags, and internal link structures to match user intent perfectly.",
      icon: FileText,
      details: ["Keyword Research", "Semantic Mapping", "UX Optimization"]
    },
    {
      title: "Off-Page SEO",
      desc: "Authority building. Securing high-quality backlinks and brand mentions to signal trust and dominance to search engines.",
      icon: Link2,
      details: ["Digital PR", "Link Earning", "Brand Signals"]
    }
  ];

  const processFlow = [
    { step: "Audit", label: "Diagnostic", text: "Identifying every technical leak and content gap currently holding you back." },
    { step: "Strategy", label: "Blueprinting", text: "Mapping keywords to business goals based on competitive difficulty." },
    { step: "Execution", label: "Activation", text: "Deploying high-fidelity content and technical fixes in rapid sprints." },
    { step: "Growth", label: "Iterative", text: "Using search data to pivot and expand into new profitable territories." }
  ];

  return (
    <div className="mt-20 md:mt-32 border-t border-brand-border pt-20 md:pt-32 px-6 md:px-12 pb-20 md:pb-32">
      <header className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 text-brand-accent mb-6">
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Algorithm Mastery // 04</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
          The Art of <br />
          <span className="italic font-serif font-light lowercase text-brand-accent">Organic</span> Authority.
        </h2>
        <p className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed font-light">
          SEO is no longer about tricks or keyword stuffing. It is about becoming the definitive answer to a user's question. We build digital assets that own the conversation, not just the rankings.
        </p>
      </header>

      {/* The Pillars grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-10 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[2.5rem] group hover:border-brand-accent/30 transition-all overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">{pillar.title}</h3>
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-8">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillar.details.map((detail, di) => (
                  <span key={di} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 text-white/40 rounded">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-5 transition-opacity">
               <pillar.icon className="w-32 h-32 md:w-40 md:h-40" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Authority Visualizer */}
      <div className="bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden mb-24 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
             <div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
                   The Compound <br/> <span className="text-brand-accent italic">Interest of Value.</span>
                </h3>
                <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base font-light">
                   Paid ads stop when the budget ends. SEO is an investment that compounds. Every piece of content we build acts as a 24/7 salesperson, earning trust and traffic even while you sleep.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                   <div>
                      <div className="text-2xl md:text-3xl font-black text-white">0.3s</div>
                      <div className="text-[10px] uppercase font-black text-brand-accent tracking-widest mt-1">LCP Load Target</div>
                   </div>
                   <div>
                      <div className="text-2xl md:text-3xl font-black text-white">100%</div>
                      <div className="text-[10px] uppercase font-black text-brand-accent tracking-widest mt-1">Intent Alignment</div>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                {/* Graph Visualization */}
                <div className="aspect-video bg-neutral-900/50 rounded-2xl md:rounded-3xl border border-white/5 p-6 md:p-8 flex items-end gap-x-2 md:gap-x-4">
                   {[40, 30, 45, 60, 55, 80, 70, 95].map((h, i) => (
                     <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className="flex-grow bg-brand-accent/20 border-t border-brand-accent rounded-t-sm relative group"
                     >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-brand-accent text-brand-primary text-[8px] font-black px-2 py-0.5 rounded">
                           Month {i + 1}
                        </div>
                     </motion.div>
                   ))}
                </div>
                <div className="mt-6 flex justify-between px-2">
                    <span className="text-[8px] md:text-[9px] font-black uppercase text-white/20 tracking-tighter italic">Foundational phase</span>
                    <span className="text-[8px] md:text-[9px] font-black uppercase text-brand-accent tracking-tighter animate-pulse">Authority breakthrough</span>
                </div>
             </div>
          </div>
      </div>

      {/* SEO Workflow */}
      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12 text-center">
        The SEO <span className="text-brand-accent">Lifecycle</span>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processFlow.map((f, i) => (
          <div key={i} className="relative p-8 bg-brand-surface border border-brand-border rounded-2xl md:rounded-3xl group">
             <div className="text-[10px] uppercase font-black text-brand-accent tracking-[0.3em] mb-4">{f.label}</div>
             <h4 className="text-lg md:text-xl font-bold text-white uppercase mb-4">{f.step}</h4>
             <p className="text-neutral-500 text-xs leading-relaxed font-light">{f.text}</p>
             <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-900 border border-brand-border flex items-center justify-center text-white/10 text-[10px] md:text-xs font-black group-hover:text-brand-accent transition-colors">
                {i + 1}
             </div>
          </div>
        ))}
      </div>

      <div className="mt-24 md:mt-32 p-8 md:p-12 bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-12 items-center relative z-10">
             <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Semantic Intelligence</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                   Google's AI is our <br/> <span className="italic text-brand-accent">Strategic Partner.</span>
                </h3>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                   We leverage advanced NLP models to predict how Google will interpret your content before it's even published. By aligning with Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, and Trustworthiness), we ensure your results are bulletproof.
                </p>
             </div>
             <div className="flex flex-col gap-4">
                <div className="p-6 bg-brand-primary border border-white/5 rounded-xl md:rounded-2xl">
                   <div className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-2">Algorithm Ready</div>
                   <div className="text-lg md:text-xl font-bold text-white uppercase">Zero-Penalty Guarantee</div>
                </div>
                <div className="p-6 bg-brand-accent rounded-xl md:rounded-2xl">
                   <div className="text-[10px] uppercase font-black text-brand-primary/40 tracking-widest mb-2">Traffic Quality</div>
                   <div className="text-lg md:text-xl font-bold text-brand-primary uppercase">Highest LTV Sources</div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};
