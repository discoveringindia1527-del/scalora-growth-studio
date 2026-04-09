import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 0,
    video: "/videos/moemate-bg.mp4",
    label: "MoeMate",
    tagline: "Scaling Emotions at Scale",
  },
  {
    id: 1,
    video: "/videos/heyoz-bg.mp4",
    label: "HeyOz",
    tagline: "Ads in minutes, not months",
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
    <section className="relative min-h-screen flex items-end pb-0 pt-16 overflow-hidden">
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
          {/* Subtle bottom gradient only */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Bottom bar */}
      <div className="relative z-10 w-full bg-background/70 backdrop-blur-xl border-t border-border/30">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          {/* Slide labels */}
          <div className="flex items-center gap-8 md:gap-12">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setActive(i)}
                className="text-left transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active === i ? "active" : "inactive"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`font-display font-semibold text-sm md:text-base transition-colors duration-300 ${active === i ? "text-primary" : "text-muted-foreground"}`}>
                      {slide.label}
                    </div>
                    <div className={`font-display text-xs md:text-sm mt-0.5 transition-colors duration-300 ${active === i ? "text-foreground" : "text-muted-foreground/60"}`}>
                      {slide.tagline}
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Progress bar under active */}
                <div className="relative h-0.5 mt-2 rounded-full overflow-hidden bg-border/30" style={{ width: 120 }}>
                  {active === i && (
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
