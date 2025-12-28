import { motion } from "framer-motion";
import { HelpCircle, Brain, Lightbulb, Heart } from "lucide-react";

const questions = [
  { icon: Brain, text: "What is my child naturally good at?" },
  { icon: HelpCircle, text: "Why do they struggle in some environments?" },
  { icon: Lightbulb, text: "How do they actually learn best?" },
  { icon: Heart, text: "How can I support them without forcing or comparing?" },
];

export const ParentProblemSection = () => {
  return (
    <section className="py-24 relative cosmic-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Parents deserve <span className="text-gradient">clearer answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most systems tell you how your child performed.
            <br />
            <span className="text-accent font-medium">Very few help you understand why.</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xl text-foreground font-medium mb-10"
        >
          Parents are left asking:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <question.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{question.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg text-accent font-semibold"
        >
          Obi exists to answer these questions clearly and early.
        </motion.p>
      </div>
    </section>
  );
};
