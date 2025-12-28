import { motion } from "framer-motion";
import { Clock, Mic, Eye, Hammer, Sparkles } from "lucide-react";

const features = [
  { icon: Clock, text: "5–15 minute light sessions", duration: "Quick & Fun" },
  { icon: Sparkles, text: "20–30 minute deeper learning blocks", duration: "Immersive" },
  { icon: Mic, text: "Voice interaction", type: "Audio" },
  { icon: Eye, text: "Visual engagement", type: "Visual" },
  { icon: Hammer, text: "Hands-on projects", type: "Tactile" },
];

export const LearningExperienceSection = () => {
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
            Designed for <span className="text-gradient">real life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Not rigid schedules. Obi fits into everyday family life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`glass-card rounded-3xl p-8 ${index === 0 ? 'lg:col-span-1' : 'lg:col-span-2'} group hover:border-primary/40 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cosmic-orange flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{feature.duration}</span>
                  <p className="text-lg font-semibold text-foreground mt-1">{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {features.slice(2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">{feature.type}</span>
              <p className="text-sm font-medium text-foreground mt-1">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl font-display font-bold text-accent"
        >
          Learning feels natural — not forced.
        </motion.p>
      </div>
    </section>
  );
};
