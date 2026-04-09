import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const frames = 120;
    const step = end / frames;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / frames);
    return () => clearInterval(interval);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
