"use client";

import { motion } from "framer-motion";

const philosophyData = [
  {
    title: "My Philosophy",
    text:
      "I believe that the most powerful things are often invisible. With the right execution, your story—or your business—can resonate deeply with a broader audience.",
  },
  {
    title: "Work Policy",
    text:
      "I spend most of my time developing and learning. I love working remotely as it saves valuable time, but I’m always open to working from different locations when needed.",
  },
  {
    title: "Work Philosophy",
    text:
      "I strongly believe in focusing on a specific area and mastering it. Deep work and consistency are what create exceptional results.",
  },
  {
    title: "Entrepreneurial Spirit",
    text:
      "With an entrepreneurial mindset, I’m adaptable, driven, and focused on delivering outcomes that exceed expectations in competitive environments.",
  },
];

export default function Philosophy() {
  return (
    <section className="px-[10vw] md:px-[17.5vw] sm:pt-4 space-y-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Name&apos;s <span className="text-blue-500">Priyanshu Raj</span>, a
        passionate <span className="text-pink-500">Full-Stack Web Developer</span>{" "}
        currently based in Bangalore. I have 1.7+ years of experience building
        scalable, high-performance web applications. I strongly believe that the
        most impactful things are often invisible — and great products tell
        powerful stories.
      </motion.p>
      {philosophyData.map((item) => (
        <div key={item.title}>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl uppercase tracking-tight text-gray-400 mb-2"
          >
            {item.title}
          </motion.h2>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-300 leading-relaxed max-w-3xl"
          >
            {item.text}
          </motion.p>
        </div>
      ))}
    </section>
  );
}
