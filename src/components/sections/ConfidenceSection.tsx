import { motion } from "framer-motion";
import { Palette, FlaskConical, MessageSquare, Puzzle } from "lucide-react";

const activities = [
  { icon: Palette, label: "Creating", color: "from-primary to-cosmic-orange" },
  { icon: FlaskConical, label: "Experimenting", color: "from-cosmic-pink to-cosmic-purple" },
  { icon: MessageSquare, label: "Expressing ideas", color: "from-accent to-cosmic-cyan" },
  { icon: Puzzle, label: "Solving real problems", color: "from-cosmic-purple to-primary" },
];

export const ConfidenceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Learning that builds <span className="text-gradient">real confidence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every concept turns into a hands-on project.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xl text-foreground font-semibold mb-10"
        >
          Children learn by:
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-3xl p-6 text-center group cursor-pointer"
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mx-auto mb-4 shadow-glow`}
                whileHover={{ rotate: 5 }}
              >
                <activity.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <p className="font-display font-bold text-lg text-foreground">{activity.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center glass-card rounded-2xl p-8 max-w-2xl mx-auto border-primary/30"
        >
          <p className="text-xl font-display font-bold text-primary">
            Confidence grows from capability, not comparison.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
