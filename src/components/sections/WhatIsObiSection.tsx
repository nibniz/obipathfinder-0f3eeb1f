import { motion } from "framer-motion";
import { Bot, Shield, Sparkles, XCircle } from "lucide-react";
import astronaut from "@/assets/astronaut.webp";

const features = [
  { icon: XCircle, text: "No exams" },
  { icon: Shield, text: "No pressure" },
  { icon: Sparkles, text: "No one-size-fits-all" },
];

export const WhatIsObiSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout with Z-pattern */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-8">
              <Bot className="w-4 h-4" />
              Meet Obi
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 uppercase tracking-tight leading-tight">
              Your Child's <br />
              <span className="text-gradient">Learning Companion</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Obi is an empathetic, AI-powered companion designed to understand your child as they are.
            </p>

            <p className="text-lg text-foreground mb-10">
              It does not test, rank, or label children. <br />
              <span className="text-accent font-medium">
                Instead, it observes how your child thinks, feels, and learns.
              </span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-muted border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl scale-75" />
              <motion.div
                className="relative glass-card rounded-3xl p-10 nebula-glow"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-cosmic-pink to-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Bot className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-center mb-3">
                  Empathetic AI
                </h3>
                <p className="text-center text-muted-foreground text-sm max-w-xs">
                  Obi adapts to your child's unique way of thinking and learning.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
