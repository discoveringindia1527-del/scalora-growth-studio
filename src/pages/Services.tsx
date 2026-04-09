import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Video, Users, Target, Search, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: TrendingUp,
    title: "Organic Growth",
    tagline: "Content engines that compound",
    description: "We build platform-native content strategies that drive sustainable organic growth. From hook engineering to algorithm optimization, every piece of content is designed to compound.",
    bullets: ["Platform-native content strategy", "Hook engineering & trend-jacking", "Algorithm optimization", "Community seeding & engagement", "Performance analytics & iteration"],
    platforms: ["Instagram", "TikTok", "X", "Reddit", "LinkedIn"],
  },
  {
    icon: Video,
    title: "UGC Campaigns",
    tagline: "Creator content that converts",
    description: "Authentic user-generated content at scale. We source, brief, manage, and optimize UGC creators to produce content that feels native and drives action.",
    bullets: ["Creator sourcing & vetting", "Brief development & creative direction", "Content production management", "Performance optimization", "Rights management & scaling"],
    platforms: ["Instagram", "TikTok"],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    tagline: "Partnerships that move culture",
    description: "Data-driven influencer partnerships that go beyond vanity metrics. We identify, negotiate, and manage creator relationships that deliver measurable impact.",
    bullets: ["Data-driven creator identification", "Negotiation & contract management", "Campaign strategy & creative alignment", "Performance tracking & attribution", "Long-term relationship development"],
    platforms: ["Instagram", "TikTok"],
  },
  {
    icon: Target,
    title: "Paid Ads — B2B & B2C",
    tagline: "Full-funnel media that delivers ROAS",
    description: "Performance marketing across Meta, Google, and programmatic channels. We build campaign architectures designed for scale, with creative testing frameworks that compound learnings.",
    bullets: ["Campaign architecture design", "Audience research & lookalike modeling", "Creative testing frameworks", "Dynamic budget allocation", "Cross-channel attribution"],
    platforms: ["Meta Ads", "Google Ads", "B2B", "B2C"],
  },
  {
    icon: Search,
    title: "SEO & GEO",
    tagline: "Own the search landscape",
    description: "Technical SEO, content strategy, and geo-targeted campaigns that build compounding organic traffic. We focus on high-intent keywords that drive pipeline, not just pageviews.",
    bullets: ["Technical SEO audits & fixes", "Content strategy & keyword mapping", "Link building & digital PR", "Local SEO & geo-targeting", "Performance monitoring & iteration"],
    platforms: [],
  },
  {
    icon: Megaphone,
    title: "Full-Stack Growth",
    tagline: "The complete growth engine",
    description: "End-to-end growth strategy that combines organic, paid, community, and product-led loops into a unified engine. For brands that want everything working together.",
    bullets: ["Integrated growth strategy", "Cross-channel orchestration", "Growth loop engineering", "Metrics architecture & dashboards", "Weekly performance reviews"],
    platforms: [],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="hero-gradient pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Services</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
            Services that turn strategy into <span className="text-gradient">results</span>
          </h1>
        </motion.div>
      </div>
    </section>

    {/* Services Detail */}
    <section className="py-24">
      <div className="container mx-auto px-6 space-y-24">
        {services.map((s, i) => {
          const Icon = s.icon;
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:direction-rtl" : ""}`}
            >
              <div className={`bg-card border border-border rounded-xl aspect-[4/3] flex items-center justify-center card-shadow ${reversed ? "lg:order-2" : ""}`}>
                <Icon className="w-24 h-24 text-primary/20" />
              </div>
              <div className={reversed ? "lg:order-1" : ""}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">{s.title}</h2>
                <p className="text-primary font-display text-sm mb-4">{s.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                {s.platforms.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.platforms.map((p) => (
                      <span key={p} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md">{p}</span>
                    ))}
                  </div>
                )}
                <Link to="/contact">
                  <Button variant="hero" size="sm">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* CTA */}
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <div className="hero-gradient rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                Ready to <span className="text-gradient">grow?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">Let's build your growth engine.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button variant="hero" size="lg">Book a Strategy Call</Button></Link>
                <Link to="/"><Button variant="heroOutline" size="lg">Back to Home</Button></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
