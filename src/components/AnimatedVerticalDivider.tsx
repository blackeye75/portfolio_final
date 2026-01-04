"use client";

import { motion } from "framer-motion";

export default function AnimatedVerticalDivider() {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      className="w-px h-32 bg-red-500/30"
    />
  );
}
