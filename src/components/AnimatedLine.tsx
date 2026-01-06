"use client";

import { motion } from "framer-motion";
// import { cn } from "@/lib/utils"; // optional helper (explained below)

type AnimatedLineProps = {
  className?: string;
  width?: string | number;
  delay?: number;
  duration?: number;
};

export default function AnimatedLine({
  className = "",
  width = "120px",
  delay = 0.3,
  duration = 0.6,
}: AnimatedLineProps) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width, opacity: 1 }}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
      className={`h-[2px]  mt-4 ${className}`}
    />
  );
}
