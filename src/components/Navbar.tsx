import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const caseStudies = [
  { name: "MoeMate", subtitle: "8M+ Organic Views", href: "/case-study/moemate" },
  { name: "HeyOz", subtitle: "340% Lead Growth", href: "/case-study/heyoz" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [csOpen, setCsOpen] = useState(false);
  const [mobileCsOpen, setMobileCsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setCsOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display font-bold text-lg tracking-tight text-foreground">SCALORA</span>
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase -mt-1">Powered by HeyOz</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCsOpen(!csOpen)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Case Studies <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {csOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full right-0 mt-2 w-[420px] bg-card border border-border rounded-lg p-4 card-shadow"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {caseStudies.map((cs) => (
                      <Link
                        key={cs.name}
                        to={cs.href}
                        className="p-3 rounded-md hover:bg-secondary transition-colors"
                      >
                        <div className="font-display font-semibold text-foreground">{cs.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{cs.subtitle}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/contact">
            <Button variant="hero" size="sm">Book a Free Call</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <Link to="/" className="text-foreground font-display">Home</Link>
              <Link to="/services" className="text-foreground font-display">Services</Link>
              <div>
                <button
                  onClick={() => setMobileCsOpen(!mobileCsOpen)}
                  className="text-foreground font-display flex items-center gap-1"
                >
                  Case Studies <ChevronDown className={`w-4 h-4 transition-transform ${mobileCsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {caseStudies.map((cs) => (
                      <Link key={cs.name} to={cs.href} className="text-muted-foreground text-sm">
                        {cs.name} — {cs.subtitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/contact">
                <Button variant="hero" className="w-full">Book a Free Call</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
