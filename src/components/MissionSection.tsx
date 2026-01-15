"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedWords from "./AnimatedWords";
import AnimatedLetters from "./AnimatedLetters";
import AnimatedLine from "./AnimatedLine";
import RevealButton from "./RevealButton";

export default function MissionSection() {
  return (
    <section className="w-full min-h-screen bg-white text-black">

      {/* TOP: 70vh */}
      <div className="relative h-[70vh] flex overflow-hidden">

        {/* LEFT: TEXT (30vw) */}
        <div className="w-[30vw] min-w-[320px] px-10 py-20 flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">
              <AnimatedLetters text="Our Mission" />
            </p>

            <h2 className="text-3xl leading-normal font-normal max-w-sm">
              <AnimatedLetters className="tracking-tighter text-xl" text="Bridging ideas to reality." />
              <AnimatedLine
                width="clamp(120px, 16vw, 260px)"
                className="bg-red-500/50 h-[2px] -mt-1 "
              />
              <div className="-mt-6">

                <br />
                <AnimatedLetters className="tracking-tighter text-xl" text="From sketch to investor pitch." />
                <br />
                <AnimatedLetters className="tracking-tighter text-xl" text="From the chaos of doing to delivering a vision." />
              </div>
            </h2>

            {/* <motion.button
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{ transformOrigin: "left" }}
              className="mt-4 px-4 py-2 border border-black/20 text-sm"
            >
              Read more
            </motion.button> */}
            <RevealButton />
          </div>
        </div>

        {/* RIGHT: IMAGE (70vw, animated) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "65vw", opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative h-full overflow-hidden mt-10 rounded-3xl"
        >
          <Image
            src="/missionsec.jpg"
            alt="Mission visual"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* BOTTOM: 30vh (placeholder info) */}
      <div className="h-[30vh] px-1 flex items-center justify-around">
        <div className="grid grid-cols-4 gap-12 w-full text-sm">
          <div>
            <p className="text-3xl font-medium text-center">2.5+</p>
            <p className="text-gray-500 text-center">Year of Exp</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-center">30+</p>
            <p className="text-gray-500 text-center">UI UX Design</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-center">--</p>
            <p className="text-gray-500 text-center">Projects delivered</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-center">8.5k</p>
            <p className="text-gray-500 text-center">Hours donated</p>
          </div>
        </div>
      </div>

    </section>
  );
}
