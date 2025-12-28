import { motion } from "framer-motion";
import stepDiscover from "@/assets/step-discover.png";
import stepProfile from "@/assets/step-profile.png";
import stepGuide from "@/assets/step-guide.png";

const steps = [
  {
    image: stepDiscover,
    number: "01",
    title: "Discover through play",
    description: "Story-based, science-backed games reveal how your child thinks and feels.",
    color: "from-primary to-cosmic-orange",
  },
  {
    image: stepProfile,
    number: "02",
    title: "Build a living profile",
    description: "Obi creates an evolving picture of your child's strengths, learning style, and emotional patterns.",
    color: "from-cosmic-pink to-cosmic-purple",
  },
  {
    image: stepGuide,
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm mb-6">
            How It Works
          </span>
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
              className="relative group"
            >
              <div className="glass-card rounded-3xl p-6 h-full hover:border-primary/40 transition-all duration-300 overflow-hidden">
                {/* Step Number Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </div>

                {/* Image */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 rounded-2xl blur-xl`} />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="relative w-full h-48 object-cover rounded-2xl"
                  />
                </div>

                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Connecting Line on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
