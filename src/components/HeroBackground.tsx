import { motion } from "framer-motion";

const HeroBackground = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 2 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(280 60% 50%), transparent)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(190 60% 50%), transparent)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(35 60% 50%), transparent)" }}
      />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(45 30% 88%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating metric cards */}
      {[
        { text: "6M+ Users", top: "15%", left: "10%", delay: 0 },
        { text: "40x ROAS", top: "25%", right: "15%", delay: 1 },
        { text: "150+ Campaigns", bottom: "35%", left: "8%", delay: 2 },
        { text: "3.2x Growth", top: "40%", right: "10%", delay: 3 },
        { text: "12+ Platforms", bottom: "20%", right: "25%", delay: 4 },
        { text: "8M+ Views", top: "60%", left: "20%", delay: 5 },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, delay: card.delay }}
          className="absolute px-3 py-1.5 rounded-md border border-border/30 text-xs text-muted-foreground/30 font-display"
          style={{ top: card.top, left: card.left, right: (card as any).right, bottom: (card as any).bottom }}
        >
          {card.text}
        </motion.div>
      ))}

      {/* Rising particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.3, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
          className="absolute rounded-full bg-primary/30"
          style={{ left: `${p.x}%`, width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
