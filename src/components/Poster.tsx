"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Poster() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden"
    >
      <Image
        src="/hero.png"   // put image in /public/poster.jpg
        alt="Poster"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
}
