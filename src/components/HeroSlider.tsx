import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Radial glows */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-400/[0.03] blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/[0.02] blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* SVG growth lines & particles */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Growth curves */}
          {[
            { d: "M0 700 Q150 680 300 600 T600 420 T900 280 T1200 180", stroke: "hsl(217 91% 50% / 0.07)", w: 2, dur: 3, delay: 0 },
            { d: "M0 720 Q200 670 400 540 T750 350 T1050 220 T1200 140", stroke: "hsl(217 91% 50% / 0.10)", w: 2.5, dur: 3.5, delay: 0.4 },
            { d: "M0 750 Q250 700 450 560 T800 320 T1100 180 T1200 80", stroke: "hsl(199 89% 48% / 0.08)", w: 2, dur: 4, delay: 0.8 },
            { d: "M0 680 Q180 640 350 530 T700 360 T1000 240 T1200 160", stroke: "hsl(210 80% 55% / 0.06)", w: 1.5, dur: 4.5, delay: 1.2 },
            { d: "M0 760 Q300 720 500 580 T850 380 T1150 200 T1200 60", stroke: "hsl(217 91% 50% / 0.05)", w: 1.5, dur: 5, delay: 1.5 },
          ].map((line, i) => (
            <motion.path
              key={`line-${i}`}
              d={line.d}
              fill="none"
              stroke={line.stroke}
              strokeWidth={line.w}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: line.dur, ease: "easeInOut", delay: line.delay, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
            />
          ))}

          {/* Traveling dots along paths */}
          {[
            { path: "M0 700 Q150 680 300 600 T600 420 T900 280 T1200 180", r: 4, dur: 3, delay: 0, color: "hsl(217 91% 50% / 0.30)" },
            { path: "M0 720 Q200 670 400 540 T750 350 T1050 220 T1200 140", r: 5, dur: 3.5, delay: 0.4, color: "hsl(217 91% 50% / 0.25)" },
            { path: "M0 750 Q250 700 450 560 T800 320 T1100 180 T1200 80", r: 3.5, dur: 4, delay: 0.8, color: "hsl(199 89% 48% / 0.25)" },
          ].map((dot, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx="0" cy="0" r={dot.r}
              fill={dot.color}
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: dot.dur, ease: "easeInOut", delay: dot.delay, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
              style={{ offsetPath: `path('${dot.path}')` }}
            />
          ))}

          {/* Pulsing data points scattered across */}
          {[
            { cx: 200, cy: 620, r: 3 }, { cx: 400, cy: 500, r: 4 }, { cx: 600, cy: 400, r: 3 },
            { cx: 800, cy: 300, r: 5 }, { cx: 1000, cy: 230, r: 3 }, { cx: 350, cy: 550, r: 2.5 },
            { cx: 700, cy: 350, r: 3.5 }, { cx: 950, cy: 260, r: 2.5 }, { cx: 150, cy: 660, r: 3 },
            { cx: 550, cy: 450, r: 4 }, { cx: 1100, cy: 170, r: 3 },
          ].map((pt, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={pt.cx} cy={pt.cy} r={pt.r}
              fill="hsl(217 91% 50% / 0.15)"
              animate={{ r: [pt.r, pt.r + 2, pt.r], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>

        {/* Floating bar charts — left */}
        <div className="absolute bottom-24 left-8 flex items-end gap-2 opacity-[0.06]">
          {[35, 55, 45, 70, 60, 85, 75, 100, 90, 110].map((h, i) => (
            <motion.div
              key={`bar-l-${i}`}
              className="w-5 bg-primary rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 0.8, delay: i * 0.12, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            />
          ))}
        </div>

        {/* Floating bar charts — right */}
        <div className="absolute top-28 right-12 flex items-end gap-2 opacity-[0.05]">
          {[25, 50, 40, 65, 55, 80, 70, 95].map((h, i) => (
            <motion.div
              key={`bar-r-${i}`}
              className="w-4 bg-primary rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 1, delay: i * 0.18 + 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 }}
            />
          ))}
        </div>

        {/* Floating bar charts — center bottom */}
        <div className="absolute bottom-32 right-1/3 flex items-end gap-1.5 opacity-[0.04]">
          {[20, 40, 35, 60, 50, 75, 65, 85, 80].map((h, i) => (
            <motion.div
              key={`bar-c-${i}`}
              className="w-3 bg-sky-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}px` }}
              transition={{ duration: 1.1, delay: i * 0.15 + 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            />
          ))}
        </div>

        {/* Floating circles / nodes */}
        {[
          { top: "15%", left: "10%", size: 60, delay: 0 },
          { top: "25%", right: "8%", size: 40, delay: 1 },
          { top: "60%", left: "5%", size: 50, delay: 2 },
          { top: "70%", right: "15%", size: 35, delay: 0.5 },
          { top: "40%", left: "80%", size: 45, delay: 1.5 },
          { top: "20%", left: "45%", size: 30, delay: 2.5 },
        ].map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full border border-primary/10"
            style={{ top: node.top, left: node.left, right: (node as any).right, width: node.size, height: node.size }}
            animate={{
              y: [0, -15, 0, 10, 0],
              x: [0, 8, 0, -8, 0],
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Connecting dashed lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.line x1="120" y1="120" x2="540" y2="160" stroke="hsl(217 91% 50%)" strokeWidth="1" strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line x1="540" y1="160" x2="960" y2="320" stroke="hsl(217 91% 50%)" strokeWidth="1" strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.3 }}
          />
          <motion.line x1="960" y1="320" x2="1100" y2="560" stroke="hsl(199 89% 48%)" strokeWidth="1" strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
          <motion.line x1="200" y1="600" x2="700" y2="400" stroke="hsl(217 91% 50%)" strokeWidth="1" strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.9 }}
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            AI Native Performance.
            <br />
            <span className="text-gradient">Scale Without Limits.</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12">
            We build growth engines that compound — powered by AI, driven by data, designed to scale.
          </p>
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
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
