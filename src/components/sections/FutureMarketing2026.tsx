import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Brain, 
  Search, 
  Eye, 
  ShieldCheck, 
  Zap,
  Globe,
  MessageSquare
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FutureMarketing2026 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trends header reveal
      gsap.fromTo(".future-header > *", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".future-header",
            start: "top 95%"
          }
        }
      );

      // Trend cards stagger
      gsap.fromTo(".trend-card", 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trend-card-grid",
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );

      // Knowledge hub sections
      gsap.fromTo(".knowledge-hub-item", 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          scrollTrigger: {
            trigger: ".knowledge-hub-grid",
            start: "top 95%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const trends = [
    {
      year: "2026",
      title: "The Zero-Click Search Era",
      desc: "By 2026, AI Overviews will answer 80% of informational queries directly. Marketing shifts from 'clicks' to 'brand mentions' in LLM training sets.",
      icon: Search,
      impact: "High Strategy Shift"
    },
    {
      year: "2026",
      title: "Agentic AI Commerce",
      desc: "Marketing will no longer target humans exclusively; we will market to AI Agents who shop and negotiate on behalf of their users.",
      icon: Brain,
      impact: "Technical Integration"
    },
    {
      year: "2026",
      title: "Post-Cookie Identity",
      desc: "Standard cookies are dead. 2026 is the year of 'Zero-Party Data' where brands must provide value to get users to share their DNA voluntarily.",
      icon: ShieldCheck,
      impact: "Privacy Dominance"
    },
    {
      year: "2026",
      title: "Hyper-Personalized Video",
      desc: "Real-time generative video based on individual user data. Every ad is unique, rendered on-the-fly for the person watching.",
      icon: Eye,
      impact: "Creative Automation"
    }
  ];

  return (
    <div ref={containerRef} className="mt-40 md:mt-60 lg:pl-16 pb-32 md:pb-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-20 relative z-10">
        <header className="future-header mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12 overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-brand-accent mb-6">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Temporal Analysis // 2026</span>
            </div>
            <h2 className="text-5xl md:text-[8vw] lg:text-[9vw] font-black uppercase tracking-tighter text-white leading-[0.8] mb-8">
              The 2026 <br />
              <span className="italic font-serif font-light lowercase text-brand-accent">Horizon.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
              Digital marketing is evolving faster than current infrastructure can adapt. Here is the roadmap of the impending shift in the digital meta.
            </p>
          </div>
          
          <div className="hidden lg:block bg-brand-surface border border-white/5 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] w-full max-w-sm">
             <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Market Prediction Confidence</div>
             <div className="flex items-end gap-1 h-32 mb-8">
                {[0.4, 0.6, 0.5, 0.8, 0.9, 0.85].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-accent/20 rounded-t-lg transition-all hover:bg-brand-accent" style={{ height: `${h * 100}%` }} />
                ))}
             </div>
             <div className="text-xs text-white/60 leading-relaxed font-medium italic">"The transition from Search Engines to Answer Engines will be complete by Q4 2026."</div>
          </div>
        </header>

        <div className="trend-card-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trends.map((trend, i) => (
            <div key={i} className="trend-card group relative p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                    <trend.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-white/20">{trend.year}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter mb-4 leading-tight">{trend.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed group-hover:text-neutral-300 transition-colors font-light">
                  {trend.desc}
                </p>
              </div>
              <div className="mt-8 md:mt-12 pt-6 border-t border-white/5">
                <div className="text-[9px] font-black uppercase text-brand-accent tracking-widest bg-brand-accent/10 px-3 py-1.5 rounded-full inline-block">
                  Impact: {trend.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Basic Knowledge Hub */}
        <div className="knowledge-hub-grid mt-24 md:mt-40 grid lg:grid-cols-12 gap-8 lg:gap-12">
           <div className="lg:col-span-12 mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Digital Foundations <span className="text-brand-accent font-serif lowercase italic">0.1</span></h3>
           </div>
           
           <div className="knowledge-hub-item lg:col-span-8 space-y-6 md:space-y-8">
              <div className="p-8 md:p-12 bg-brand-surface border border-brand-border rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden group">
                 <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                       <h4 className="text-2xl font-black text-white uppercase mb-6 tracking-tighter leading-none">The Marketing <br/> Funnel Logic.</h4>
                       <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-8 font-light">
                          Most fail because they target 'Bottom of Funnel' (Ready to buy) without ever building 'Top of Funnel' (Awareness). Digital strategy is about building a sequence that leads a stranger from curiosity to conversion.
                       </p>
                       <ul className="space-y-4">
                          {['TOFU: Awareness & Attention', 'MOFU: Consideration & Intent', 'BOFU: Decision & Action'].map((step, i) => (
                             <li key={i} className="flex gap-4 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{step}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                    <div className="relative mt-8 md:mt-0">
                       {/* Funnel Viz */}
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-full h-10 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center"><span className="text-[9px] font-black text-white/20">AWARENESS</span></div>
                          <div className="w-[80%] h-10 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center"><span className="text-[9px] font-black text-white/20">CONSIDERATION</span></div>
                          <div className="w-[60%] h-10 md:h-12 bg-brand-accent/20 border border-brand-accent/30 rounded-xl flex items-center justify-center"><span className="text-[9px] font-black text-brand-accent">CONVERSION</span></div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                 <div className="p-8 md:p-10 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem]">
                    <Globe className="w-8 h-8 md:w-10 md:h-10 text-brand-accent mb-6" />
                    <h4 className="text-lg font-bold text-white uppercase mb-3">Omni-Channel Flow</h4>
                    <p className="text-neutral-500 text-xs leading-relaxed font-light">
                       Modern users interact with a brand 8+ times before buying. We sync Social, Search, and Display to ensure a seamless experience.
                    </p>
                 </div>
                 <div className="p-8 md:p-10 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem]">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-brand-accent mb-6" />
                    <h4 className="text-lg font-bold text-white uppercase mb-3">Retargeting Logic</h4>
                    <p className="text-neutral-500 text-xs leading-relaxed font-light">
                       Don't lose traffic. We implement server-side tracking to re-engage users who showed interest but didn't convert yet.
                    </p>
                 </div>
              </div>
           </div>

           <div className="knowledge-hub-item lg:col-span-4 mt-8 lg:mt-0">
              <div className="h-full bg-brand-accent p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col justify-between">
                 <div>
                    <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-brand-primary mb-8 md:mb-12 opacity-30" />
                    <h4 className="text-3xl font-black text-brand-primary uppercase tracking-tighter leading-none mb-6 italic">The Social <br/> Proof Engine.</h4>
                    <p className="text-sm font-bold text-brand-primary/70 leading-relaxed md:leading-relaxed">
                       Digital Trust is the primary currency of 2026. Reviews, Case Studies, and UGC are not optional—they are the technical requirements for growth.
                    </p>
                 </div>
                 <div className="mt-8 md:mt-12 space-y-6">
                    <div className="flex justify-between text-[10px] font-black uppercase text-brand-primary">
                       <span>Trust Score</span>
                       <span>98%</span>
                    </div>
                    <div className="w-full h-1.5 bg-brand-primary/10 rounded-full overflow-hidden">
                       <div className="w-[98%] h-full bg-brand-primary transition-all duration-[2000ms]" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
