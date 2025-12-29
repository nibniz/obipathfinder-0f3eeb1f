import { motion } from "framer-motion";
import globeDiscover from "@/assets/globe-discover.png";
import globeProfile from "@/assets/globe-profile.png";
import globeGuide from "@/assets/globe-guide.png";

const steps = [
  {
    globe: globeDiscover,
    number: "01",
    title: "Discover Through Play",
    subtitle: "I explore through stories and games",
    description: "Story-based, science-backed games reveal how your child thinks and feels — naturally, without pressure.",
  },
  {
    globe: globeProfile,
    number: "02",
    title: "Build A Living Profile",
    subtitle: "I grow, and so does my profile",
    description: "Obi creates an evolving picture of your child's strengths, learning style, and emotional patterns.",
  },
  {
    globe: globeGuide,
    number: "03",
    title: "Guide With Action",
    subtitle: "I learn by doing real things",
    description: "Insights become personalised learning sessions and hands-on projects tailored to your child.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-32 relative overflow-hidden cosmic-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium text-sm mb-6">
            The Obi Way
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            How Obi <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            A simple, thoughtful loop that grows with your child.
          </p>
        </motion.div>

        {/* Discovery Journey - Alternating Z-Pattern */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Globe Visual */}
              <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cosmic-purple/30 rounded-full blur-3xl scale-90" />
                  <motion.img
                    src={step.globe}
                    alt={step.title}
                    className="relative w-64 md:w-80 drop-shadow-2xl mix-blend-screen"
                    animate={{ y: [-12, 12, -12], rotate: [0, 3, 0, -3, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <span className="inline-block text-7xl font-display font-black text-primary/20 mb-4">
                  {step.number}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-xl text-accent font-medium italic mb-4">
                  "{step.subtitle}"
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
