import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const CaseStudies = () => {
  const cases = [
    { 
      name: "Verdia Energy", 
      result: "412% Increase in Qualified Leads", 
      desc: "How we redefined a legacy energy brand for a digital-first audience, resulting in record-breaking lead generation.",
      tags: ["SEO", "Performance Marketing", "Branding"],
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
    },
    { 
      name: "Apex FinTech", 
      result: "+$12M Attributed Revenue", 
      desc: "Precision PPC and content loops for a high-growth fintech startup on its way to series B.",
      tags: ["Paid Media", "Content", "CRO"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070" 
    },
    { 
      name: "Lumina SaaS", 
      result: "32% Reduction in Customer Acquisition Cost", 
      desc: "Optimizing the full-funnel experience and implementing advanced marketing automation for a silicon valley SaaS.",
      tags: ["Automation", "Product", "Growth"],
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
    },
    {
      name: "Nexus Retail",
      result: "2.5M Monthly Organic Sessions",
      desc: "Scaling an e-commerce giant's organic footprint through aggressive technical SEO and editorial excellence.",
      tags: ["Technical SEO", "Content Scale"],
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <div className="lg:pl-16 pt-36 md:pt-44 pb-20 md:pb-24">
      <Helmet>
        <title>Case Studies | Best Pro Digital Success Portfolio</title>
        <meta name="description" content="Witness the transformation. Explore our collection of high-impact case studies showing significant ROAS, lead generation, and brand growth." />
        <link rel="canonical" href="https://bestprodigital.com/case-studies" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Digital Marketing Case Studies",
              "description": "Documented digital marketing transformations and success stories.",
              "url": "https://bestprodigital.com/case-studies"
            }
          `}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24">
          <p className="text-brand-accent text-xs uppercase tracking-[0.4em] mb-8 font-mono">Proof of work</p>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Elite <br/> <span className="text-brand-accent">Outcomes.</span>
          </h1>
          <p className="text-neutral-500 text-xl max-w-2xl font-light">
            We don't publish fluff. These are documented transformations where precision marketing met ambitious goals.
          </p>
        </div>

        <div className="grid gap-px bg-brand-border border border-brand-border overflow-hidden rounded-[2rem]">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-brand-primary group grid md:grid-cols-2 overflow-hidden"
            >
              <div className="relative aspect-video md:aspect-auto overflow-hidden order-last md:order-first">
                <img 
                  src={c.img} 
                  alt={`Case Study: ${c.name} - ${c.result} Growth Transformation`} 
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-brand-primary/20"></div>
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex gap-2 mb-8">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-brand-accent border border-brand-accent/30 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-none">{c.name}</h2>
                <div className="text-2xl font-black text-white/90 italic mb-6 leading-tight">
                  {c.result}
                </div>
                <p className="text-neutral-500 mb-12 leading-relaxed">
                  {c.desc}
                </p>
                <Link 
                  to="/contact" 
                  aria-label={`Get a transformation strategy session similar to ${c.name}`}
                  className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all duration-300"
                >
                  Read Full Transformation <ArrowRight className="text-brand-accent" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
