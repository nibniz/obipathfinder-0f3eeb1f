import { motion } from "framer-motion";
import { Bot, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 relative cosmic-bg border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cosmic-pink flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Obi</span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for curious minds
          </p>

          <p className="text-muted-foreground text-sm">
            © 2024 Obi Learning. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
