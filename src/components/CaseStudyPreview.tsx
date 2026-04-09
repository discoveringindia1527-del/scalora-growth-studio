import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyPreviewProps {
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  href: string;
  index: number;
}

const CaseStudyPreview = ({ title, subtitle, metric, metricLabel, href, index }: CaseStudyPreviewProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
  >
    <Link
      to={href}
      className="block bg-card border border-border rounded-xl p-8 card-shadow group hover:border-primary/30 transition-all"
    >
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Case Study</div>
      <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-lg">{subtitle}</p>
      <div className="text-gradient text-4xl md:text-5xl font-display font-bold mb-1">{metric}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{metricLabel}</div>
      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <ArrowUpRight className="w-4 h-4 text-primary" />
      </div>
    </Link>
  </motion.div>
);

export default CaseStudyPreview;
