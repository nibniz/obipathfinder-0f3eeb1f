import { motion } from "framer-motion";
import { Search, User, Compass } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover Through Play",
    subtitle: "I explore through stories and games",
    description: "Story-based, science-backed games reveal how your child thinks and feels — naturally, without pressure.",
    gradient: "from-cyan-400 via-blue-500 to-cyan-400",
    glowColor: "shadow-[0_0_80px_30px_rgba(34,211,238,0.4)]",
    iconColor: "text-cyan-300",
  },
  {
    icon: User,
    number: "02",
    title: "Build A Living Profile",
    subtitle: "I grow, and so does my profile",
    description: "Obi creates an evolving picture of your child's strengths, learning style, and emotional patterns.",
    gradient: "from-fuchsia-400 via-purple-500 to-fuchsia-400",
    glowColor: "shadow-[0_0_80px_30px_rgba(232,121,249,0.4)]",
    iconColor: "text-fuchsia-300",
  },
  {
    icon: Compass,
    number: "03",
    title: "Guide With Action",
    subtitle: "I learn by doing real things",
    description: "Insights become personalised learning sessions and hands-on projects tailored to your child.",
    gradient: "from-orange-400 via-amber-500 to-teal-400",
    glowColor: "shadow-[0_0_80px_30px_rgba(251,146,60,0.4)]",
    iconColor: "text-orange-300",
  },
];

const GlowingOrb = ({ 
  icon: Icon, 
  gradient, 
  glowColor, 
  iconColor 
}: { 
  icon: React.ElementType; 
  gradient: string; 
  glowColor: string; 
  iconColor: string;
}) => (
  <div className="relative w-48 h-48 md:w-64 md:h-64">
    {/* Outer glow rings */}
    <motion.div 
      className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-20 blur-3xl`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Middle glow */}
    <motion.div 
      className={`absolute inset-4 rounded-full bg-gradient-to-r ${gradient} opacity-30 blur-2xl`}
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    
    {/* Core orb */}
    <motion.div 
      className={`absolute inset-8 rounded-full bg-gradient-to-br ${gradient} ${glowColor} flex items-center justify-center`}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Inner highlight */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
      
      {/* Icon */}
      <Icon className={`w-12 h-12 md:w-16 md:h-16 ${iconColor} drop-shadow-lg relative z-10`} strokeWidth={1.5} />
    </motion.div>
    
    {/* Light rays */}
    <motion.div 
      className={`absolute inset-0 rounded-full`}
      style={{
        background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1) 10%, transparent 20%, transparent 100%)`,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

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
              {/* Glowing Orb Visual */}
              <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <GlowingOrb 
                  icon={step.icon} 
                  gradient={step.gradient} 
                  glowColor={step.glowColor}
                  iconColor={step.iconColor}
                />
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
