import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Flame, Zap, Heart, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

const objectives = [
  "Reduce CAC",
  "Increase activation rate",
  "Improve retention (Day 1 → Day 7)",
  "Build organic content engine",
  "Establish community-driven growth",
];

const strategies = [
  {
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    title: "Hook-Based Content Engine",
    desc: "We engineered a content production system optimized for platform-native hooks — designed to stop the scroll and drive click-through.",
    bullets: ["Data-mined top-performing hooks in the AI companion niche", "Created a library of 50+ reusable hook templates", "A/B tested thumbnails, captions, and CTAs at scale"],
    result: "3x CTR increase",
  },
  {
    icon: Flame,
    gradient: "from-rose-500 to-pink-500",
    title: "Short-Form Content Dominance",
    desc: "We built a short-form content flywheel across TikTok and Instagram Reels, prioritizing virality mechanics and trend-jacking.",
    bullets: ["Published 120+ pieces of short-form content in 60 days", "Leveraged trending audio and visual formats", "Optimized posting cadence by platform algorithm windows"],
    result: "5M+ organic views in 30 days",
  },
  {
    icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
    title: "Activation Funnel Optimization",
    desc: "We redesigned the onboarding experience to reduce friction and increase the percentage of users who completed key activation events.",
    bullets: ["Mapped the full user journey from ad click to activation", "Reduced onboarding steps from 7 to 3", "Implemented personalized onboarding flows based on traffic source"],
    result: "42% activation rate increase",
  },
  {
    icon: Heart,
    gradient: "from-violet-500 to-purple-500",
    title: "Retention Loop Design",
    desc: "We engineered re-engagement loops using push notifications, email sequences, and in-app nudges to bring users back.",
    bullets: ["Built automated Day 1, Day 3, Day 7 re-engagement sequences", "Created personalized content recommendations", "Implemented streak mechanics and social proof triggers"],
    result: "28% Day 7 retention increase",
  },
  {
    icon: Target,
    gradient: "from-emerald-500 to-teal-500",
    title: "Paid Ads Optimization",
    desc: "We restructured the paid media strategy to focus on high-intent audiences and creative testing at scale.",
    bullets: ["Rebuilt campaign architecture around lookalike audiences", "Launched a systematic creative testing framework", "Implemented dynamic budget allocation based on real-time performance"],
    result: "35% CAC reduction · 2.4x ROAS",
  },
];

const results = [
  { value: "3.2x", label: "User Growth" },
  { value: "8M+", label: "Organic Views" },
  { value: "2.4x", label: "ROAS" },
  { value: "28%", label: "Day 7 Retention ↑" },
  { value: "42%", label: "Activation Rate ↑" },
  { value: "35%", label: "CAC Reduction" },
  { value: "20K", label: "TikTok Community" },
  { value: "17K", label: "Reddit Community" },
];

const CaseStudyMoemate = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative hero-gradient pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(280 60% 50%), transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(220 60% 50%), transparent)" }} />
        {/* Floating MoeMate logos */}
        {[
          { size: 200, top: "10%", left: "5%", opacity: 0.03, duration: 12 },
          { size: 300, top: "30%", right: "8%", opacity: 0.04, duration: 16 },
          { size: 150, bottom: "15%", left: "60%", opacity: 0.06, duration: 20 },
        ].map((logo, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], y: [0, -20, 0] }}
            transition={{ duration: logo.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute font-display font-bold text-foreground"
            style={{
              fontSize: logo.size * 0.3,
              top: (logo as any).top,
              left: (logo as any).left,
              right: (logo as any).right,
              bottom: (logo as any).bottom,
              opacity: logo.opacity,
            }}
          >
            M
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Case Study</div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">MoeMate</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            How we scaled an AI companion platform to millions of views and high retention — in just 60 days.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Metrics Bar */}
    <section className="border-y border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={3.2} suffix="x" label="Active User Growth" prefix="" />
          <AnimatedCounter end={8} suffix="M+" label="Organic Views" />
          <AnimatedCounter end={2.4} suffix="x" label="ROAS Improvement" />
          <AnimatedCounter end={42} suffix="%" label="Activation Rate ↑" />
        </div>
      </div>
    </section>

    {/* Client & Problem */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">The Client</h2>
            <p className="text-muted-foreground leading-relaxed">
              MoeMate is an AI virtual companion platform that allows users to create and interact with personalized AI characters. With a growing user base but stagnating engagement, they needed a growth partner who understood both the technology and the culture.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">The Problem</h2>
            <ul className="space-y-3">
              {[
                "High traffic but low-intent users",
                "Users dropping off after first interaction",
                "No content funnel driving organic discovery",
                "Inconsistent ROAS on paid campaigns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Objectives</div>
          <h2 className="font-display font-bold text-3xl text-foreground">What we set out to achieve</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {objectives.map((obj, i) => (
            <motion.div key={obj} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-4 text-center card-shadow"
            >
              <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-sm text-foreground font-display">{obj}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Strategy */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Strategy</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Five pillars of <span className="text-gradient">explosive growth</span>
          </h2>
        </motion.div>
        <div className="space-y-6">
          {strategies.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 card-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-block px-3 py-1 text-xs font-display font-medium bg-primary/10 text-primary rounded-full">
                      Result: {s.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Community */}
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Community Growth</div>
          <h2 className="font-display font-bold text-3xl text-foreground">Building the tribe</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "TikTok", value: "20K+", desc: "Active community members creating and sharing MoeMate content" },
            { title: "Reddit", value: "17K+", desc: "Engaged subreddit community driving organic discussions" },
            { title: "Cultural Brand", value: "✓", desc: "Positioned MoeMate as a cultural phenomenon, not just a product" },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-shadow"
            >
              <div className="text-gradient text-3xl font-display font-bold mb-2">{c.value}</div>
              <div className="font-display font-semibold text-foreground mb-1">{c.title}</div>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Results */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Results</div>
          <h2 className="font-display font-bold text-3xl text-foreground">60 Days of <span className="text-gradient">impact</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-shadow"
            >
              <div className="text-gradient text-2xl md:text-3xl font-display font-bold mb-1">{r.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{r.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed"
        >
          "We didn't scale an AI product.{" "}
          <span className="text-primary font-medium">We scaled emotions at scale.</span>"
        </motion.p>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudyMoemate;
