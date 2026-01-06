"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

export default function AnimatedLetters({ text, className }: Props) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15, // smooth stagger
          },
        },
      }}
      // variants={{
      //   hidden: { opacity: 0, filter: "blur(4px)" },
      //   visible: { opacity: 1, filter: "blur(0px)" },
      // }}
      className={`inline-block ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="inline-block uppercase"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
