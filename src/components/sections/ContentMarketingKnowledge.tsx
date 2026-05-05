import { motion } from "motion/react";
import { 
  FileText, 
  PenTool, 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  Zap,
  BookOpen,
  Layout,
  MessageSquare,
  Search,
  Quote
} from "lucide-react";

export const ContentMarketingKnowledge = () => {
  const contentTypes = [
    {
      title: "Thought Leadership",
      desc: "Architecting industry-defining articles that establish you as the primary authority in your niche. We don't just write; we lead.",
      icon: Lightbulb,
      kpi: "Industry Authority"
    },
    {
      title: "Conversion Copy",
      desc: "High-stakes direct response copy for landing pages and funnels. Every word is engineered to move the needle toward a lead.",
      icon: Target,
      kpi: "2.5x Conv. Lift"
    },
    {
      title: "Case Studies",
      desc: "Data-driven storytelling that proves your results. We turn your success stories into unshakeable social proof assets.",
      icon: BarChart3,
      kpi: "Sales Enablement"
    },
    {
      title: "Email Ecosystems",
      desc: "Nurture sequences that build intimacy at scale. We transform cold opt-ins into loyal brand advocates via strategic automation.",
      icon: MessageSquare,
      kpi: "Retention focus"
    }
  ];

  const strategyFramework = [
    { label: "Semantic Mapping", text: "Identifying the clusters of knowledge your audience is searching for before your competitors do." },
    { label: "E-E-A-T Alignment", text: "Ensuring every piece of content screams Experience, Expertise, Authoritativeness, and Trustworthiness." },
    { label: "Content Atomization", text: "Taking one 'pillar' asset and breaking it into 20+ micro-assets for multi-channel distribution." },
    { label: "Zero-Click Value", text: "Providing so much value in the snippet or intro that users trust your brand before they even click." }
  ];

  return (
    <div className="mt-32 border-t border-brand-border pt-32 px-12 pb-32">
      <header className="mb-20">
        <div className="flex items-center gap-3 text-brand-accent mb-6">
          <PenTool className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Strategic Narrative // 06</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-none">
          Content is the <br />
          <span className="italic font-serif font-light lowercase text-brand-accent">Operating System</span> of trust.
        </h2>
        <p className="max-w-2xl text-neutral-400 text-lg leading-relaxed">
          Most agencies produce noise. We produce resonance. Content marketing is the art of selling without being salesy—it's about educating your way to the top of the market.
        </p>
      </header>

      {/* The Content Matrix */}
      <div className="grid lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-8 bg-brand-surface border border-brand-border rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">
              The Value <span className="text-brand-accent italic font-serif lowercase">of information.</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-accent mb-6">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase mb-3">{type.title}</h4>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                      {type.desc}
                    </p>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-brand-accent px-2 py-1 bg-brand-accent/10 rounded self-start">
                    {type.kpi}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute right-0 top-0 p-8 opacity-5 pointer-events-none">
            <Quote className="w-64 h-64 rotate-180" />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-brand-accent p-10 rounded-[3rem] text-brand-primary flex flex-col justify-between h-full">
            <div>
              <BookOpen className="w-10 h-10 mb-8 opacity-40" />
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none mb-6">The 70/20/10 <br/>Rule of Assets.</h4>
              <p className="text-sm font-medium leading-relaxed opacity-80">
                70% Educational (Trust), 20% Personal (Identity), and 10% Transactional (Sales). This is the mathematical ratio of a profile that converts.
              </p>
            </div>
            <div className="mt-12 space-y-2">
               <div className="flex justify-between text-[10px] font-black uppercase"><span>Education</span><span>70%</span></div>
               <div className="w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-brand-primary"></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Framework UI */}
      <div className="bg-brand-surface border border-brand-border rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
         <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
               <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                  Semantic <br/> <span className="text-brand-accent italic font-serif lowercase">Authority Mapping.</span>
               </h3>
               <p className="text-neutral-400 mb-12 leading-relaxed">
                  We don't just guess what to write about. We audit the entire search landscape to find high-volume, low-competition semantic gaps where your brand can anchor itself.
               </p>
               <div className="space-y-6">
                  {strategyFramework.map((f, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <span className="text-brand-accent font-mono text-sm leading-none pt-1">0{i+1}</span>
                       <div>
                          <h4 className="text-white font-bold uppercase text-sm mb-1">{f.label}</h4>
                          <p className="text-neutral-500 text-xs leading-relaxed">{f.text}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative">
               {/* Visualizer: Semantic Bubbles */}
               <div className="aspect-square bg-neutral-900 shadow-2xl rounded-full border border-white/5 relative flex items-center justify-center p-8 overflow-hidden">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-40 h-40 bg-brand-accent/10 border border-brand-accent/20 rounded-full flex items-center justify-center text-center p-6"
                  >
                     <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Brand Authority <br/> Core</span>
                  </motion.div>
                  
                  {/* Orbiting bubbles */}
                  <div className="absolute top-10 left-20 p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                     <span className="text-[8px] font-bold text-white/40 uppercase">SEO Content</span>
                  </div>
                  <div className="absolute bottom-20 right-10 p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                     <span className="text-[8px] font-bold text-white/40 uppercase">Lead Magnets</span>
                  </div>
                  <div className="absolute top-40 right-5 p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                     <span className="text-[8px] font-bold text-white/40 uppercase">Viral Sprints</span>
                  </div>
                  <div className="absolute bottom-10 left-10 p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                     <span className="text-[8px] font-bold text-white/40 uppercase">Email Nurture</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Basic Knowledge Hub Blobs */}
      <div className="mt-24 grid md:grid-cols-3 gap-8">
         <div className="p-8 bg-brand-surface border border-brand-border rounded-3xl group">
            <Layout className="w-8 h-8 text-white mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-lg font-bold text-white uppercase mb-2">Omni-Channel Flow</h4>
            <div className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider font-medium">One pillar article = 10 social posts + 1 Newsletter + 3 Vertical Videos. We maximize the ROI of every word.</div>
         </div>
         <div className="p-8 bg-brand-surface border border-brand-border rounded-3xl group">
            <Search className="w-8 h-8 text-white mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-lg font-bold text-white uppercase mb-2">Intent Alignment</h4>
            <div className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider font-medium">We map content to the Information, Navigation, and Transaction stages of the customer journey.</div>
         </div>
         <div className="p-8 bg-brand-surface border border-brand-border rounded-3xl group">
            <Zap className="w-8 h-8 text-brand-accent mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-lg font-bold text-white uppercase mb-2">Evergreen Assets</h4>
            <div className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wider font-medium">We build content that compounds. Our assets continue to drive traffic and leads for years after publication.</div>
         </div>
      </div>
    </div>
  );
};
