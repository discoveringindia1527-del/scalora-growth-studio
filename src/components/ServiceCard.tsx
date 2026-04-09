import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  platforms: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, platforms, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className="bg-card border border-border rounded-xl p-6 card-shadow hover:border-primary/30 transition-colors"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <span key={p} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md">{p}</span>
      ))}
    </div>
  </motion.div>
);

export default ServiceCard;
