import { motion } from "motion/react";
import { 
  Share2, 
  Users, 
  MessageCircle, 
  Video, 
  Image, 
  BarChart2, 
  Calendar, 
  Heart, 
  Zap,
  Smartphone,
  Layers,
  Sparkles
} from "lucide-react";

export const SocialMediaKnowledge = () => {
  const contentPillars = [
    {
      title: "Short-Form Video",
      desc: "TikToks and Reels aren't just trends; they are the primary engine for organic reach in 2024. We produce high-retention vertical content that stops the scroll.",
      icon: Video,
      tags: ["Reels", "TikTok", "Shorts"]
    },
    {
      title: "Visual Storytelling",
      desc: "Curating a high-fidelity aesthetic that reflects your brand's elite status. Every post is a brick in your brand's digital headquarters.",
      icon: Image,
      tags: ["Curation", "Branding", "Design"]
    },
    {
      title: "Community Growth",
      desc: "Turning followers into fans and fans into customers. Our community management team fosters real human connection at scale.",
      icon: MessageCircle,
      tags: ["Engagement", "Loyalty", "Support"]
    }
  ];

  const algorithmSecrets = [
    { label: "The Red-Meat Hook", text: "The first 1.5 seconds determine if a user watches or scrolls. We engineer 'Hooks' based on psychological triggers." },
    { label: "Engagement Velocity", text: "The first hour after posting is critical. We use strategic interaction to signal to the algorithm that your content is 'Viral-Ready'." },
    { label: "Hashtag Clustering", text: "Moving beyond generic tags to semantic clusters that tell the platform exactly who your ideal customer is." },
    { label: "Shareable Assets", text: "Creating 'Saves' and 'Shares' is 10x more valuable than 'Likes'. We build infographic assets that people want to keep." }
  ];

  return (
    <div className="mt-20 md:mt-32 border-t border-brand-border pt-20 md:pt-32 px-6 md:px-12 pb-20 md:pb-32">
      <header className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 text-brand-accent mb-6">
          <Share2 className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Cultural Resonance // 05</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
          The Currency of <br />
          <span className="italic font-serif font-light lowercase text-brand-accent">Attention</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed font-light">
          Social media is not about "posting." It is about occupying real estate in your customer's mind. We don't just manage profiles; we architect digital movements.
        </p>
      </header>

      {/* Strategy Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
        {contentPillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-10 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem] group hover:border-brand-accent/30 transition-all relative overflow-hidden flex flex-col h-full"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-accent mb-6 md:mb-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500">
                <pillar.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">{pillar.title}</h3>
              <p className="text-neutral-500 text-[11px] md:text-sm leading-relaxed mb-8 md:mb-10 flex-1 font-light">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag, ti) => (
                  <span key={ti} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-white/40 rounded-full border border-white/5 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Ambient Pulse */}
            <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Sparkles className="w-32 h-32 md:w-40 md:h-40" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Algorithm Matrix */}
      <div className="bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden mb-24 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              Dominating the <br/> <span className="text-brand-accent italic font-serif lowercase">Algorithm Game.</span>
            </h3>
            <p className="text-neutral-400 mb-10 md:mb-12 leading-relaxed text-sm md:text-base font-light">
              Algorithms don't reward "good" content; they reward content that keeps users on the platform. We reverse-engineer platform behavior to ensure your brand is consistently pushed to new audiences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {algorithmSecrets.map((secret, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl group">
                  <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2 group-hover:translate-x-1 transition-transform">{secret.label}</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed font-light">{secret.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Smartphone Simulation Visual */}
            <div className="w-full max-w-[280px] md:max-w-[300px] aspect-[9/19] bg-neutral-950 rounded-[2.5rem] md:rounded-[3rem] border-[4px] border-neutral-900 mx-auto relative overflow-hidden shadow-2xl">
               {/* Content Feed Simulation */}
               <div className="absolute inset-0 p-4 pt-12 space-y-6">
                  {/* Fake Post 1 */}
                  <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-accent"></div>
                        <div className="w-24 h-2 bg-white/10 rounded"></div>
                     </div>
                     <div className="w-full aspect-square bg-gradient-to-br from-brand-accent/20 to-brand-primary rounded-2xl"></div>
                     <div className="flex gap-4">
                        <Heart className="w-4 h-4 text-brand-accent fill-brand-accent" />
                        <MessageCircle className="w-4 h-4 text-white/40" />
                        <Share2 className="w-4 h-4 text-white/40 ml-auto" />
                     </div>
                  </div>
                  {/* Fake Post 2 */}
                  <div className="space-y-3 opacity-50">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                        <div className="w-24 h-2 bg-white/10 rounded"></div>
                     </div>
                     <div className="w-full h-32 bg-white/5 rounded-2xl"></div>
                  </div>
               </div>
               
               {/* UI Accents */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full"></div>
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Floating Data Blobs */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute -right-4 md:-right-10 top-20 p-4 bg-brand-accent rounded-2xl shadow-xl z-20"
            >
               <BarChart2 className="w-6 h-6 text-brand-primary" />
               <div className="text-[10px] font-black text-brand-primary uppercase mt-1">+420% Growth</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Engine Flow */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
         <div className="md:w-1/3 p-8 md:p-10 bg-brand-accent text-brand-primary rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
            <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-10 md:mb-8">
               The Viral <br/> Workflow.
            </h3>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="text-2xl font-mono font-black border-b-2 border-brand-primary/20">01</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">Ideation & Hook Mapping</div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="text-2xl font-mono font-black border-b-2 border-brand-primary/20">02</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">High-Fi Production</div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="text-2xl font-mono font-black border-b-2 border-brand-primary/20">03</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">Growth Distribution</div>
               </div>
            </div>
         </div>
         
         <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between group hover:border-brand-accent/20 transition-all">
               <Calendar className="w-8 h-8 text-white mb-8 group-hover:text-brand-accent transition-colors" />
               <div>
                  <h4 className="text-lg font-bold text-white uppercase mb-2">Omni-Channel Strategy</h4>
                  <p className="text-neutral-500 text-[11px] md:text-xs leading-relaxed font-light">
                     Don't spread yourself thin. We identify the 2-3 platforms where your ideal clients live and dominate them with native content.
                  </p>
               </div>
            </div>
            <div className="p-8 bg-brand-surface border border-brand-border rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between group hover:border-brand-accent/20 transition-all">
               <Zap className="text-brand-accent w-8 h-8 mb-8" />
               <div>
                  <h4 className="text-lg font-bold text-white uppercase mb-2">Trend Hijacking</h4>
                  <p className="text-neutral-500 text-[11px] md:text-xs leading-relaxed font-light">
                     We catch trends in the first 24 hours, giving your brand the first-mover advantage that builds massive organic traction.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
