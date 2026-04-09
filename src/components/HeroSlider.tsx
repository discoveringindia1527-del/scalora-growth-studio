import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated growth lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          {/* Growth line 1 */}
          <motion.path
            d="M0 600 Q200 580 400 500 T800 300 T1200 200"
            fill="none"
            stroke="hsl(217 91% 50% / 0.08)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
          {/* Growth line 2 */}
          <motion.path
            d="M0 650 Q300 600 500 480 T900 250 T1200 150"
            fill="none"
            stroke="hsl(217 91% 50% / 0.12)"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
          {/* Growth line 3 */}
          <motion.path
            d="M0 700 Q250 650 450 520 T850 280 T1200 100"
            fill="none"
            stroke="hsl(199 89% 48% / 0.10)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />
          {/* Animated dots along the growth path */}
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill="hsl(217 91% 50% / 0.3)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
            style={{ offsetPath: "path('M0 600 Q200 580 400 500 T800 300 T1200 200')" }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="5"
            fill="hsl(217 91% 50% / 0.25)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
            style={{ offsetPath: "path('M0 650 Q300 600 500 480 T900 250 T1200 150')" }}
          />
        </svg>

        {/* Floating growth bars */}
        <div className="absolute bottom-20 left-10 flex items-end gap-2 opacity-[0.06]">
          {[40, 65, 50, 80, 70, 95, 85, 100].map((h, i) => (
            <motion.div
              key={i}
              className="w-6 bg-primary rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 1, delay: i * 0.15, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            />
          ))}
        </div>

        {/* Floating growth bars right side */}
        <div className="absolute top-32 right-16 flex items-end gap-2 opacity-[0.05]">
          {[30, 55, 45, 75, 60, 90].map((h, i) => (
            <motion.div
              key={i}
              className="w-5 bg-primary rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 1.2, delay: i * 0.2 + 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 }}
            />
          ))}
        </div>

        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6">
            AI Native Performance.
            <br />
            <span className="text-gradient">Scale Without Limits.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            We build growth engines that compound — powered by AI, driven by data, designed to scale.
          </p>
        </motion.div>
      </div>

      {/* Bottom bar with two tabs */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/70 backdrop-blur-xl border-t border-border/30">
        <div className="container mx-auto px-6 py-5 flex items-center justify-center gap-4 sm:gap-6">
          <Link to="/services">
            <Button variant="hero" size="lg" className="text-sm md:text-base">
              Explore Our Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="heroOutline" size="lg" className="text-sm md:text-base">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
