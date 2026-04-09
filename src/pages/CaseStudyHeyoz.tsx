import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Leaf, MessageSquare, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

const strategies = [
  { icon: Globe, title: "SEO-First Content Strategy", desc: "We built a comprehensive content strategy targeting high-intent keywords across the entire buyer journey — from awareness to decision. Every piece of content was designed to rank, convert, and compound." },
  { icon: Leaf, title: "Organic Social for B2B", desc: "We developed a LinkedIn and X content strategy that positioned HeyOz as a thought leader. Founder-led content, tactical threads, and platform-native formats drove consistent pipeline contribution." },
  { icon: MessageSquare, title: "Community-Led Growth", desc: "We launched and nurtured communities on Reddit, Slack, and LinkedIn Groups — creating spaces where prospects could discover HeyOz organically through peer recommendations." },
  { icon: BarChart3, title: "Conversion Optimization", desc: "We redesigned key conversion touchpoints — landing pages, CTAs, demo booking flows — to maximize the percentage of organic traffic that converted to qualified leads." },
];

const timeline = [
  { months: "Month 1-2", milestone: "Foundation — SEO audit, content calendar, social profiles optimized. Published 30+ pieces of SEO content." },
  { months: "Month 3-4", milestone: "Traction — First organic leads coming in. LinkedIn content averaging 15K+ impressions/week. Reddit community at 2K members." },
  { months: "Month 5-6", milestone: "Acceleration — 78% of pipeline now organic. CAC dropped 60% from baseline. SEO content ranking on page 1 for 40+ keywords." },
  { months: "Month 7-8", milestone: "Compounding — 340% total lead growth. 5x SQL increase. Organic channel now the primary revenue driver." },
];

const CaseStudyHeyoz = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative hero-gradient pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(55 60% 50%), transparent)" }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Case Study</div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">HeyOz</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            How we built a high-converting organic lead generation engine that delivered 340% lead growth for a B2B SaaS platform.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Metrics */}
    <section className="border-y border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={340} suffix="%" label="Lead Growth" />
          <AnimatedCounter end={78} suffix="%" label="Organic Pipeline" />
          <AnimatedCounter end={5} suffix="x" label="SQLs Increase" />
          <AnimatedCounter end={60} suffix="%" label="Lower CAC" />
        </div>
      </div>
    </section>

    {/* Challenge & Outcome */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              HeyOz had a great product but an invisible pipeline. Growth was entirely dependent on outbound sales and paid acquisition — an unsustainable model with rising CAC and unpredictable revenue. They needed an organic growth engine that could generate qualified leads consistently.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">The Outcome</h2>
            <p className="text-muted-foreground leading-relaxed">
              In 8 months, we transformed HeyOz's growth model. 78% of their pipeline now comes from organic channels. CAC dropped by 60%. And the organic engine continues to compound — generating more leads every month with decreasing marginal cost.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Strategy */}
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Strategy</div>
          <h2 className="font-display font-bold text-3xl text-foreground">
            Organic <span className="text-gradient">by design</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 card-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Timeline</div>
          <h2 className="font-display font-bold text-3xl text-foreground">Results <span className="text-gradient">over time</span></h2>
        </motion.div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {timeline.map((t, i) => (
            <motion.div key={t.months} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start bg-card border border-border rounded-xl p-6 card-shadow"
            >
              <div className="text-gradient font-display font-bold text-sm whitespace-nowrap min-w-[100px]">{t.months}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.milestone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudyHeyoz;
