import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, ArrowRight } from "lucide-react";

export const ClosingCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-1/4 text-primary"
        animate={{ y: [-15, 15, -15], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-8 h-8 fill-current opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-1/4 text-accent"
        animate={{ y: [15, -15, 15], rotate: [360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-10 h-10 opacity-60" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Education should <span className="text-gradient">adapt to the child</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-6"
          >
            When learning adapts to who a child is,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-foreground font-medium mb-10"
          >
            <span className="text-accent">confidence replaces anxiety</span> and{" "}
            <span className="text-primary">curiosity replaces pressure</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-foreground mb-10"
          >
            Help your child grow with clarity, confidence, and self-belief.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="glow" size="xl" className="font-display group">
              <Sparkles className="w-5 h-5" />
              Invest in Their Future
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
