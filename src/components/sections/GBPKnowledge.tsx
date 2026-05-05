import { motion } from "motion/react";
import { Search, MapPin, Star, Share2, Globe, Target, BarChart, Info, BookOpen, Lightbulb } from "lucide-react";

export const GBPKnowledge = () => {
  const rankingFactors = [
    { title: "Relevance", desc: "How well your profile matches the user's search query.", icon: Search },
    { title: "Distance", desc: "How far your business is from the searcher's physical location.", icon: MapPin },
    { title: "Prominence", desc: "How well-known your business is based on links, articles, and reviews.", icon: BarChart },
  ];

  const optimizationSteps = [
    { 
      label: "NAP Consistency", 
      text: "Name, Address, and Phone Number must be identical across the entire web to build Google's trust.",
      type: "Foundational"
    },
    { 
      label: "Geo-Tagged Media", 
      text: "Every image we upload contains hidden metadata telling Google exactly where your business thrives.",
      type: "Advanced"
    },
    { 
      label: "Semantic Citations", 
      text: "We build listings on authoritative local directories that reinforce your business category.",
      type: "Strategic"
    },
    { 
      label: "Review Velocity", 
      text: "It's not just about 5 stars; it's about the frequency and keywords used in customer feedback.",
      type: "Growth"
    }
  ];

  return (
    <div className="mt-20 md:mt-32 border-t border-brand-border pt-20 md:pt-32 px-6 md:px-12 pb-20 md:pb-32">
      <header className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 text-brand-accent mb-6">
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Masterclass // 01</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
          The Anatomy of <br />
          <span className="italic font-serif font-light lowercase text-brand-accent">Local search</span> Dominance.
        </h2>
        <p className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed font-light">
          Most agencies treat Google Business Profiles like a static yellow-page listing. We treat it like a dynamic SEO asset. Here is the mathematical framework behind every #1 ranking we secure.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
        {/* Knowledge Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-brand-surface p-6 md:p-8 border border-brand-border rounded-[1.5rem] md:rounded-3xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Info className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-brand-accent" />
              What is GBP?
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
              Google Business Profile is the primary interface for local search. It accounts for <strong>35% of all local ranking signals</strong>. Without a optimized profile, you are invisible to the users with the highest intent: those searching "Near Me."
            </p>
          </div>

          <div className="bg-brand-surface p-6 md:p-8 border border-brand-border rounded-[1.5rem] md:rounded-3xl">
            <h3 className="text-xl font-bold text-white uppercase mb-6">Critical Factors</h3>
            <div className="space-y-6">
              {rankingFactors.map((factor, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-brand-border flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">{factor.title}</h4>
                    <p className="text-[11px] text-neutral-500 font-light">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Strategy Map */}
        <div className="lg:col-span-8 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-10 md:mb-12">
              Our Optimization <span className="text-brand-accent">Workflow</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 flex-grow">
              {optimizationSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 md:p-8 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent px-2 py-1 bg-brand-accent/10 rounded">
                      {step.type}
                    </span>
                    <span className="text-xl md:text-2xl font-mono opacity-10 group-hover:opacity-100 transition-opacity text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white uppercase mb-2">
                       {step.label}
                    </h4>
                    <p className="text-neutral-500 text-[11px] md:text-xs leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local Ranking Heatmap Visual */}
      <div className="bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden group">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div>
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
                  Visualising <br/> <span className="text-brand-accent italic">Proximity Authority.</span>
               </h3>
               <p className="text-neutral-400 mb-8 leading-relaxed text-sm md:text-base font-light">
                  Local search isn't a single data point. Ranking varies by the literal block your customer is standing on. We optimize your profile to expand its radius of influence from a few blocks to entire cities.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                     <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 font-bold">Tier 1: Map Pack Dominance (#1-3)</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-3 h-3 rounded-full bg-green-900 border border-brand-accent/30"></div>
                     <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/20 font-bold">Tier 2: High visibility (#4-10)</span>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               {/* 5x5 Heatmap Grid Simulation */}
               <div className="grid grid-cols-5 gap-2 md:gap-3 max-w-sm mx-auto p-4 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10">
                  {Array.from({ length: 25 }).map((_, i) => {
                    // Create a "center point" of heat
                    const distFromCenter = Math.sqrt(Math.pow((Math.floor(i / 5) - 2), 2) + Math.pow((i % 5 - 2), 2));
                    const isHot = distFromCenter < 1.5;
                    const isMedium = distFromCenter < 2.5;
                    
                    return (
                      <motion.div 
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold ${
                          isHot ? 'bg-brand-accent text-brand-primary' : 
                          isMedium ? 'bg-green-900/60 text-brand-accent/50 border border-brand-accent/20' : 
                          'bg-neutral-900 text-neutral-700'
                        }`}
                      >
                        {Math.floor(distFromCenter + 1)}
                      </motion.div>
                    );
                  })}
                  {/* Pulse Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-brand-accent/20 rounded-full animate-ping"></div>
                  </div>
               </div>
               <div className="mt-8 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-accent opacity-50">RADIUS EXPANSION ALGORITHM</span>
               </div>
            </div>
         </div>
      </div>

      {/* Bonus Knowledge Blobs */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
         <div className="flex items-center gap-4 p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl">
            <Star className="text-yellow-500 w-6 h-6 fill-yellow-500/20" />
            <div className="text-xs text-white/70 uppercase tracking-widest font-bold">Reviews account for <span className="text-yellow-500">17%</span> of map pack weight.</div>
         </div>
         <div className="flex items-center gap-4 p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl">
            <Target className="text-red-500 w-6 h-6" />
            <div className="text-xs text-white/70 uppercase tracking-widest font-bold">Local SEO conversions are <span className="text-red-500">80%</span> higher than global.</div>
         </div>
         <div className="flex items-center gap-4 p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl">
            <Globe className="text-blue-500 w-6 h-6" />
            <div className="text-xs text-white/70 uppercase tracking-widest font-bold">Over <span className="text-blue-500">5 Billion</span> local searches occur daily.</div>
         </div>
      </div>
    </div>
  );
};
