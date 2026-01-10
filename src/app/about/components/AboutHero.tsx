"use client";

import AnimatedLetters from "@/components/AnimatedLetters";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="px-[10vw] md:px-[10vw] sm:pt-20 flex sm:gap-6  items-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:block"
      >
        <Image
          src="/blackeyelogo.png"
          alt="logo"
          width={90}
          height={90}
          className="rounded-full border-[8px] border-blue-500"
        />
      </motion.div>

      <AnimatedLetters text="From Passion to a Developer" className="text-3xl"  />
    </section>
  );
}
