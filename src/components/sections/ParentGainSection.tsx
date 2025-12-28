import { motion } from "framer-motion";
import { Trophy, Brain, Zap, Compass, Check } from "lucide-react";

const insights = [
  { icon: Trophy, text: "What their child is naturally good at" },
  { icon: Brain, text: "How they think and respond emotionally" },
  { icon: Zap, text: "How they learn fastest and with least friction" },
  { icon: Compass, text: "What kinds of future paths may suit them" },
];

export const ParentGainSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      <div className="absolute top-1/3 right-0 w-1/3 h-64 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            What you'll finally <span className="text-gradient">understand</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Obi gives parents clarity on what matters most
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <insight.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium flex-1">{insight.text}</p>
                <Check className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center glass-card rounded-2xl p-8 border-accent/30"
          >
            <p className="text-xl font-display font-bold text-foreground mb-2">
              Not labels. Not predictions.
            </p>
            <p className="text-accent font-semibold text-lg">
              Just meaningful understanding.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
