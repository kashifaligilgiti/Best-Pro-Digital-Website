import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Zap, ArrowUpRight, BarChart3, TrendingUp, ShieldCheck, ZapOff, Sparkles } from "lucide-react";
import { SERVICES } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GBPKnowledge } from "../components/sections/GBPKnowledge";
import { PPCKnowledge } from "../components/sections/PPCKnowledge";
import { AIReceptionistKnowledge } from "../components/sections/AIReceptionistKnowledge";
import { SEOKnowledge } from "../components/sections/SEOKnowledge";
import { SocialMediaKnowledge } from "../components/sections/SocialMediaKnowledge";
import { ContentMarketingKnowledge } from "../components/sections/ContentMarketingKnowledge";
import { CRMKnowledge } from "../components/sections/CRMKnowledge";
import { GlobalBrandingKnowledge } from "../components/sections/GlobalBrandingKnowledge";

gsap.registerPlugin(ScrollTrigger);

export const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      // Parallax effect for the background text
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Staggered benefit reveal
      gsap.fromTo(".benefit-card", 
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div ref={containerRef} className="lg:pl-16 pt-32 md:pt-40 pb-24 overflow-hidden">
      <Helmet>
        <title>{service.title} | GMB Rankup Service Matrix</title>
        <meta name="description" content={service.desc} />
      </Helmet>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 md:py-20 relative">
        <div className="parallax-bg absolute top-0 left-0 text-[20vw] font-black opacity-[0.02] leading-none select-none tracking-tighter pointer-events-none uppercase">
          {service.title.split(' ')[0]}
        </div>
        
        <div className="max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className={`font-mono ${service.accentColor} text-sm tracking-[0.3em] font-bold`}>{service.num}</span>
              <div className="h-px w-8 md:w-12 bg-brand-border"></div>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-brand-accent" />
                Service Deep-Dive
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12 text-white">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? `${service.accentColor} italic font-serif lowercase font-light` : ""}>
                   {word}{" "}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed mb-10 md:mb-12">
              {service.longDesc}
            </p>
            
            <div className="flex gap-6">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group px-6 py-4 md:px-8 md:py-4">
                Request Strategy Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-brand-border shadow-2xl group"
          >
             <img 
               src={service.image} 
               alt={service.title} 
               className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent"></div>
             <div className="absolute bottom-10 left-10 md:bottom-12 md:left-12 right-12">
                <div className={`text-3xl md:text-4xl font-black ${service.accentColor} mb-2 flex items-center gap-4`}>
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                    {service.metric}
                </div>
                <div className="text-white uppercase tracking-widest text-[10px] md:text-xs font-bold opacity-70 ml-10 md:ml-12">{service.metricLabel}</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 md:px-12 py-20 md:py-24 border-t border-brand-border">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
             <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />
             Core Benefits
          </h2>
          <p className="text-neutral-500 max-w-xl text-sm md:text-base">Strategic advantages built into every engagement to ensure market dominance.</p>
        </div>
        <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-white">
          {service.benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="benefit-card bg-brand-surface p-8 md:p-10 border border-brand-border rounded-[1.5rem] md:rounded-[2rem] hover:border-brand-accent/30 transition-all duration-500 group"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-accent/20 transition-all duration-300 transform group-hover:rotate-12`}>
                <CheckCircle2 className={`${service.accentColor} w-5 h-5 md:w-6 md:h-6`} />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter mb-4 group-hover:text-brand-accent transition-colors">{benefit}</h3>
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
                We focus on high-impact outcomes that directly influence your ROI and brand equity.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Unique Section Per Service */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white/[0.01] border-y border-brand-border relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
                <h2 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]`}>
                   {service.featureTitle}
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-light">
                    {service.featureDesc}
                </p>
                <Link to="/contact" className="flex items-center gap-4 text-brand-accent font-bold uppercase tracking-widest text-[10px] md:text-sm group">
                    Explore Advanced Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
            
            {service.platforms ? (
              <div className="w-full lg:w-full mt-12 lg:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
                {service.platforms.map((platform: any, pi: number) => (
                  <div key={pi} className="bg-brand-surface p-8 md:p-10 border border-brand-border rounded-[1.5rem] md:rounded-[2rem] relative group hover:border-brand-accent/50 transition-all duration-500">
                    <div className={`text-[10px] font-mono mb-4 uppercase tracking-[0.3em] ${platform.color}`}>{platform.name}</div>
                    <h4 className="text-xl md:text-2xl font-black text-white uppercase mb-4 md:mb-6">{platform.name} <span className="opacity-20 italic font-serif lowercase font-light">Intelligence</span></h4>
                    <p className="text-neutral-500 text-xs md:text-sm italic mb-6 md:mb-8 leading-relaxed">
                      " {platform.insight} "
                    </p>
                    <div className="space-y-3">
                      {platform.focus.map((f: string, fi: number) => (
                        <div key={fi} className="flex items-center gap-3 text-[10px] md:text-[10px] uppercase font-bold tracking-widest text-white/60">
                          <div className={`w-1 h-1 rounded-full ${platform.color}`}></div>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-brand-surface p-6 md:p-8 border border-brand-border rounded-2xl md:rounded-3xl">
                        <div className="text-2xl md:text-3xl font-black text-white mb-2">99.9%</div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Efficiency Rate</div>
                    </div>
                    <div className="bg-brand-accent p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-between">
                        <Zap className="text-brand-primary w-6 h-6 md:w-8 md:h-8 mb-4" />
                        <div className="text-brand-primary font-black uppercase text-lg md:text-xl leading-none">Instant Scale</div>
                    </div>
                    <div className="sm:col-span-2 bg-brand-surface p-6 md:p-8 border border-brand-border rounded-2xl md:rounded-3xl flex items-center justify-between">
                        <div>
                            <div className="text-xl md:text-2xl font-black text-white uppercase">Data Privacy</div>
                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Enterprise Secured</div>
                        </div>
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-brand-border flex items-center justify-center">
                            <CheckCircle2 className="text-brand-accent w-5 h-5 md:w-6 md:h-6" />
                        </div>
                    </div>
                </div>
              </div>
            )}
        </div>
      </section>

      {/* Special Knowledge Hub Sections */}
      <div className="px-6 md:px-12">
        {slug === "gbp-optimization" && <GBPKnowledge />}
        {slug === "ppc-advertising" && <PPCKnowledge />}
        {slug === "ai-receptionist" && <AIReceptionistKnowledge />}
        {slug === "seo-strategy" && <SEOKnowledge />}
        {slug === "social-media" && <SocialMediaKnowledge />}
        {slug === "content-marketing" && <ContentMarketingKnowledge />}
        {slug === "crm-integrations" && <CRMKnowledge />}
        {slug === "global-branding" && <GlobalBrandingKnowledge />}
      </div>

      {/* Process Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8 md:mb-10 leading-none italic">
            The <span className="text-brand-accent font-serif font-light">Best Pro</span> <br/> Logic.
          </h2>
          <p className="text-neutral-500 text-base md:text-lg mb-8 md:mb-12 font-light">
             We don't believe in templates. We believe in frameworks. Our {service.title} process is a battle-tested cycle of iteration.
          </p>
          <div className="space-y-8 md:space-y-12">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-8 group">
                <div className={`text-3xl md:text-4xl font-black opacity-20 group-hover:opacity-100 ${service.accentColor} transition-all duration-500`}>
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter mb-2">{step}</h4>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">Rigorous execution at the granular level to ensure macro-level success.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-square">
          <div className={`absolute inset-0 bg-brand-accent/5 rounded-full blur-3xl opacity-50`}></div>
          <div className="relative h-full w-full bg-brand-surface border border-brand-border rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-center overflow-hidden">
             <div className="relative z-10">
               <div className="text-[10px] md:text-sm font-mono text-brand-accent mb-4 uppercase tracking-widest">Growth Forecast</div>
               <div className={`text-7xl md:text-9xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter`}>{service.metric}</div>
               <div className="text-lg md:text-xl text-neutral-400 capitalize">{service.metricLabel} after engagement.</div>
               <div className="mt-8 md:mt-12 h-1 w-full bg-brand-border rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "85%" }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className={`h-full bg-brand-accent shadow-[0_0_20px_rgba(var(--brand-accent),0.5)]`}
                 />
               </div>
             </div>
             {/* Dynamic background element */}
             <div className={`absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-60 h-60 md:w-80 md:h-80 ${service.accentColor} opacity-[0.03] rotate-12 font-black text-[150px] md:text-[200px] select-none pointer-events-none`}>
                {service.num}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-accent/5 rounded-full blur-[120px]"></div>
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-8 md:mb-12 italic relative z-10">
          Ready to <span className="text-brand-accent font-serif font-light lowercase">dominate</span>?
        </h2>
        <Link to="/contact" className="btn-primary text-xl md:text-2xl px-10 py-5 md:px-16 md:py-6 inline-flex items-center gap-4 relative z-10 group">
          Lock in your Strategy <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};
