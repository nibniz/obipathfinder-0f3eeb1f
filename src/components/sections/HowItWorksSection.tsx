import { motion } from "framer-motion";
import { Gamepad2, UserCircle, Compass, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Gamepad2,
    number: "01",
    title: "Discover through play",
    description: "Story-based, science-backed games reveal how your child thinks and feels.",
    color: "from-primary to-cosmic-orange",
  },
  {
    icon: UserCircle,
    number: "02",
    title: "Build a living profile",
    description: "Obi creates an evolving picture of your child's strengths, learning style, and emotional patterns.",
    color: "from-cosmic-pink to-cosmic-purple",
  },
  {
    icon: Compass,
    number: "03",
    title: "Guide with action",
    description: "Insights become personalised learning sessions and hands-on projects.",
    color: "from-accent to-cosmic-cyan",
  },
];

export const HowItWorksSection = () => {
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
            How Obi supports your <span className="text-gradient">child's growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Obi follows a simple, thoughtful loop:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 h-full group hover:border-primary/40 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <div className="text-5xl font-display font-black text-muted/30 mb-4">
                  {step.number}
                </div>

                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
