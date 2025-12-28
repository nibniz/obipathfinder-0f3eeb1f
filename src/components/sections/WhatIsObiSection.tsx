import { motion } from "framer-motion";
import { Bot, Shield, Sparkles, XCircle } from "lucide-react";

const features = [
  { icon: XCircle, text: "No exams", color: "text-cosmic-pink" },
  { icon: Shield, text: "No pressure", color: "text-accent" },
  { icon: Sparkles, text: "No one-size-fits-all approach", color: "text-primary" },
];

export const WhatIsObiSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6">
              <Bot className="w-4 h-4" />
              Meet Obi
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Your child's <span className="text-gradient">learning companion</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Obi is an empathetic, AI-powered learning companion designed to understand your child as they are.
            </p>

            <p className="text-foreground mb-8">
              It does not test, rank, or label children.
              <br />
              <span className="text-accent font-medium">
                Instead, it observes how your child thinks, feels, and learns — and turns that understanding into guidance.
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 nebula-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
              
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-cosmic-pink to-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Bot className="w-12 h-12 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl font-bold text-center mb-4">
                  Empathetic AI
                </h3>

                <p className="text-center text-muted-foreground">
                  Obi adapts to your child's unique way of thinking and learning, creating a personalized experience that grows with them.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                  {[1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
