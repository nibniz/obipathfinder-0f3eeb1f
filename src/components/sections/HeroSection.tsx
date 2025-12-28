import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import cosmicBg from "@/assets/cosmic-hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 left-20 text-accent"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-primary"
        animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-cosmic-pink"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-1/4 text-cosmic-cyan"
        animate={{ y: [15, -15, 15], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning Companion
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-foreground">The world your child will</span>
          <br />
          <span className="text-foreground">grow into is </span>
          <span className="text-gradient">different</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Future success depends on how children think, adapt, and understand themselves — not just on marks.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-md sm:text-lg text-accent font-medium max-w-xl mx-auto mb-10"
        >
          Obi helps children discover who they are early and grow with confidence, not pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button variant="glow" size="xl" className="font-display">
            <Sparkles className="w-5 h-5" />
            Invest in Their Future
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
