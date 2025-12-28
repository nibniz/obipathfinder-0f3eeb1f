import { motion } from "framer-motion";
import { HelpCircle, Brain, Lightbulb, Heart } from "lucide-react";
import parentInsight from "@/assets/parent-insight.png";

const questions = [
  { icon: Brain, text: "What is my child naturally good at?", color: "from-primary to-cosmic-orange" },
  { icon: HelpCircle, text: "Why do they struggle in some environments?", color: "from-cosmic-pink to-cosmic-purple" },
  { icon: Lightbulb, text: "How do they actually learn best?", color: "from-accent to-cosmic-cyan" },
  { icon: Heart, text: "How can I support them without forcing or comparing?", color: "from-cosmic-purple to-primary" },
];

export const ParentProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-cosmic-purple/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cosmic-purple/30 rounded-3xl blur-2xl transform scale-95" />
              <img 
                src={parentInsight} 
                alt="Parents understanding their child" 
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </motion.div>

          {/* Right Content - Text & Questions */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm mb-6">
                The Parent Problem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Parents deserve <br/>
                <span className="text-gradient">clearer answers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Most systems tell you how your child performed.
              </p>
              <p className="text-xl text-accent font-semibold">
                Very few help you understand why.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground font-medium mb-6"
            >
              Parents are left asking:
            </motion.p>

            <div className="space-y-4">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${question.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-shadow duration-300`}>
                    <question.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{question.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-cosmic-purple/20 border border-primary/30"
            >
              <p className="text-xl text-foreground font-semibold text-center">
                <span className="text-primary">Obi</span> exists to answer these questions clearly and early.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
