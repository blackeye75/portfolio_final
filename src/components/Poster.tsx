"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CurvedLoop from "./CurvedLoop";

export function Poster() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[300px] md:h-screen rounded-2xl overflow-hidden "
    >
      <Image
        src="/hero.png"   // put image in /public/poster.jpg
        alt="Poster"
        fill
        className="object-cover -z-50"
        priority
      />

      <CurvedLoop
        marqueeText="Think ✦ Create ✦ Iterate ✦ Perfect ✦"
        speed={3}
        curveAmount={500}
        direction="left"
        interactive={true}
        className="custom-text-style z-50 absolute w-full h-2/6 md:h-20"
      />

      {/* <div className="absolute inset-0 bg-black/40" /> */}
    </motion.div>
  );
}
