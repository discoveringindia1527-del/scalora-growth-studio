import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display font-bold text-xl text-foreground">SCALORA</div>
          <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Powered by HeyOz</div>
          <p className="text-muted-foreground text-sm mt-4 max-w-sm">
            Growth partners for ambitious brands. We turn strategy into measurable, compounding results.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="font-display font-semibold text-foreground mb-4">Case Studies</div>
          <div className="flex flex-col gap-2">
            <Link to="/case-study/moemate" className="text-sm text-muted-foreground hover:text-primary transition-colors">MoeMate</Link>
            <Link to="/case-study/heyoz" className="text-sm text-muted-foreground hover:text-primary transition-colors">HeyOz</Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="font-display font-semibold text-foreground mb-4">Services</div>
          <div className="flex flex-col gap-2">
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Organic Growth</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">UGC Campaigns</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Paid Ads</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO & GEO</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">© 2026 Scalora. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
