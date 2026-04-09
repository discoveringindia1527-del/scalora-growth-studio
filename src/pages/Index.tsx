import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Video, Users, Target, Search, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import HeroSlider from "@/components/HeroSlider";
import teamMeeting from "@/assets/team-meeting.jpg";

const ease = [0.22, 1, 0.36, 1];

const services = [
  { icon: TrendingUp, title: "Organic Growth", description: "We build content engines that compound. Platform-native strategies for sustainable, scalable growth across every channel.", platforms: ["Instagram", "TikTok", "X", "Reddit", "LinkedIn"] },
  { icon: Video, title: "UGC Campaigns", description: "Authentic creator content that converts. We source, brief, and manage UGC at scale — from concept to performance.", platforms: ["Instagram", "TikTok"] },
  { icon: Users, title: "Influencer Marketing", description: "Strategic partnerships with creators who move culture. Data-driven selection, negotiation, and campaign management.", platforms: ["Instagram", "TikTok"] },
  { icon: Target, title: "Paid Ads — B2B & B2C", description: "Full-funnel paid media that delivers measurable ROAS. From creative strategy to audience architecture.", platforms: ["Meta Ads", "B2B", "B2C"] },
  { icon: Search, title: "SEO & GEO", description: "Own the search landscape. Technical SEO, content strategy, and geo-targeted campaigns that compound over time.", platforms: [] },
  { icon: Megaphone, title: "Full-Stack Growth", description: "End-to-end growth strategy. We combine organic, paid, community, and product loops into a unified engine.", platforms: [] },
];

const principles = [
  "Data-driven execution",
  "Full-funnel thinking",
  "Platform-native strategy",
  "Speed to results",
];

const whyUs = [
  { num: "01", title: "Execution over theory", desc: "We don't deliver decks. We deliver results. Every strategy comes with a clear execution plan and weekly performance reviews." },
  { num: "02", title: "Platform mastery", desc: "Each platform has its own language. We speak all of them natively — from TikTok's algorithm to LinkedIn's B2B dynamics." },
  { num: "03", title: "Compounding results", desc: "We build systems, not campaigns. Every action feeds the next, creating exponential growth loops that sustain long after launch." },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-screen hero-gradient flex items-end pb-20 md:pb-32 pt-16 overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-4xl"
        >
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-foreground mb-8">
            Growth partners for{" "}
            <span className="text-gradient">ambitious brands</span>
          </h1>
          <Link to="/services">
            <Button variant="hero" size="lg" className="gap-2">
              Explore our services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <Marquee />

    {/* Who We Are */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Who We Are</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              A growth agency that <span className="text-gradient">actually grows things</span>
            </h2>
            <img src={teamMeeting} alt="Scalora team meeting" width={1200} height={800} className="rounded-xl w-full mt-6" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Scalora is a full-stack growth agency built for brands that refuse to plateau. We combine deep platform expertise with rigorous data analysis to engineer growth systems that compound over time. No fluff. No vanity metrics. Just measurable, sustainable scale.
            </p>
            <ul className="space-y-4">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-display font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={6} suffix="M+" label="Users Scaled" />
          <AnimatedCounter end={150} suffix="+" label="Campaigns Run" />
          <AnimatedCounter end={40} suffix="x" label="Average ROAS" />
          <AnimatedCounter end={12} suffix="+" label="Platforms" />
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Services</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              What we <span className="text-gradient">do best</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            From organic content engines to paid media optimization — we cover the full spectrum of digital growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Why Us</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Built <span className="text-gradient">different</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <motion.div key={w.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-shadow"
            >
              <div className="text-gradient font-display font-bold text-4xl mb-4">{w.num}</div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Case Studies</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Proof in the <span className="text-gradient">numbers</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CaseStudyPreview
            title="MoeMate"
            subtitle="Scaled an AI companion platform to 8M+ organic views and 3.2x user growth in 60 days."
            metric="8M+"
            metricLabel="Organic Views"
            href="/case-study/moemate"
            index={0}
          />
          <CaseStudyPreview
            title="HeyOz"
            subtitle="Built a high-converting organic lead generation engine for a B2B SaaS business."
            metric="340%"
            metricLabel="Lead Growth"
            href="/case-study/heyoz"
            index={1}
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="hero-gradient rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                Ready to <span className="text-gradient">grow?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Let's build your growth engine. Book a free strategy call and see what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">Book a Strategy Call</Button>
                </Link>
                <Link to="/services">
                  <Button variant="heroOutline" size="lg">View Services</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
