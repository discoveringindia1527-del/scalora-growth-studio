import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import HeroSlider from "@/components/HeroSlider";
import AboutVideo from "@/components/AboutVideo";
import serviceGrowth from "@/assets/service-growth-engine.png";
import servicePerformance from "@/assets/service-performance.png";
import servicePartnership from "@/assets/service-partnership.png";

const serviceCards = [
  {
    image: serviceGrowth,
    title: "Growth Engine",
    description: "We build organic content engines and UGC campaigns that compound — platform-native strategies across Instagram, TikTok, X, Reddit & LinkedIn.",
  },
  {
    image: servicePerformance,
    title: "Performance & Precision",
    description: "Full-funnel paid media, SEO & GEO strategies that deliver measurable ROAS — from creative strategy to audience architecture.",
  },
  {
    image: servicePartnership,
    title: "The Power of Partnership",
    description: "Strategic influencer partnerships and end-to-end growth strategy. We combine organic, paid, community, and product loops into a unified engine.",
  },
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
    <HeroSlider />

    <Marquee />

    {/* Who We Are */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Who We Are</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            A growth agency that <span className="text-gradient">actually grows things</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-5xl mx-auto">
          <AboutVideo />
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            What we <span className="text-gradient">do best.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From organic content engines to paid media optimization — we cover the full spectrum of digital growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 card-shadow hover:border-primary/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors">
                <Plus className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-center h-56 mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
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
