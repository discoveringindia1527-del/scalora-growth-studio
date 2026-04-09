import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Contact</div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
              Book a free <span className="text-gradient">strategy call</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {submitted ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center card-shadow">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">You're booked!</h2>
                <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your strategy call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 card-shadow space-y-6">
                <div>
                  <label className="text-sm font-display font-medium text-foreground mb-2 block">Name</label>
                  <Input required placeholder="Your name" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm font-display font-medium text-foreground mb-2 block">Email</label>
                  <Input required type="email" placeholder="you@company.com" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm font-display font-medium text-foreground mb-2 block">Company</label>
                  <Input placeholder="Your company" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm font-display font-medium text-foreground mb-2 block">What can we help with?</label>
                  <Textarea required placeholder="Tell us about your growth goals..." rows={4} className="bg-secondary border-border" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                  Submit & Book Your Call <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
