import { motion } from "framer-motion";
import { HelpCircle, Brain, Lightbulb, Heart } from "lucide-react";
import parentInsight from "@/assets/parent-insight.png";

const questions = [
  { icon: Brain, text: "What is my child naturally good at?" },
  { icon: HelpCircle, text: "Why do they struggle in some environments?" },
  { icon: Lightbulb, text: "How do they actually learn best?" },
  { icon: Heart, text: "How can I support them without forcing or comparing?" },
];

export const ParentProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Floating Image - Large Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-cosmic-purple/40 rounded-full blur-3xl scale-75" />
            <motion.img 
              src={parentInsight} 
              alt="Parents understanding their child" 
              className="relative w-72 md:w-96 rounded-3xl shadow-2xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Centered Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            The Parent <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Most systems tell you how your child performed.
          </p>
          <p className="text-2xl text-accent font-semibold">
            Very few help you understand <span className="italic">why</span>.
          </p>
        </motion.div>

        {/* Question Cards - Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-muted/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <question.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{question.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-2xl font-display font-bold"
        >
          <span className="text-primary">Obi</span> exists to answer these questions clearly and early.
        </motion.p>
      </div>
    </section>
  );
};
