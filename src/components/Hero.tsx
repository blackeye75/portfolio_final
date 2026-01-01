"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 flex items-center bg-black px-6 md:px-16 text-red-700">
      <div className="grid md:grid-cols-2 gap-12 w-full items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Building modern<br />web experiences
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-gray-400 max-w-md"
          >
            I design and develop clean, scalable, and performant web applications.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex gap-4"
          >
            <button className="px-6 py-3 bg-white text-black rounded-md">
              View Projects
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-md">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE / VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
