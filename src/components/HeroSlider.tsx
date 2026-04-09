import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 0,
    video: "/videos/moemate-bg.mp4",
    label: "Case Study — MoeMate",
    heading: "Scaling emotions",
    headingAccent: "at scale",
    description:
      "8M+ organic views. 3.2x user growth. 60 days. We turned an AI companion app into a cultural moment.",
    href: "/case-study/moemate",
    cta: "Read the case study",
  },
  {
    id: 1,
    video: "/videos/heyoz-bg.mp4",
    label: "Case Study — HeyOz",
    heading: "AI ads in minutes,",
    headingAccent: "not months",
    description:
      "340% lead growth. 60% lower CAC. We built an organic engine that made paid feel optional.",
    href: "/case-study/heyoz",
    cta: "Read the case study",
  },
];

const ease = [0.22, 1, 0.36, 1];
const INTERVAL = 7000;

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [active, next]);

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 pt-16 overflow-hidden">
      {/* Video backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: active === i ? 1 : 0 }}
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl"
          >
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-display">
              {slides[active].label}
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-foreground mb-4">
              {slides[active].heading}{" "}
              <span className="text-gradient">{slides[active].headingAccent}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              {slides[active].description}
            </p>
            <Link to={slides[active].href}>
              <Button variant="hero" size="lg" className="gap-2">
                {slides[active].cta} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-12">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Progress indicators */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: active === i ? 48 : 24 }}
              >
                <div className="absolute inset-0 bg-border/40 rounded-full" />
                {active === i && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={next} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
