"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
      style={{ transformOrigin: "left" }}
      className="
        absolute 
        left-0 
        right-0 
        h-[0.1px] 
        bg-white/30
        shadow-[0_0_10px_rgba(255,255,255,0.3)]
        z-50
      "
    />
  );
}
