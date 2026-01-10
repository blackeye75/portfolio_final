"use client";

import AnimatedWords from "@/components/AnimatedWords";
import AnimatedLetters from "@/components/AnimatedLetters";
import AnimatedDivider from "@/components/AnimatedDivider";
import AnimatedVerticalDivider from "@/components/AnimatedVerticalDivider";
import Image from "next/image";
import { motion } from "framer-motion";
import { Underline } from "./Underline";
import AnimatedLine from "./AnimatedLine";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-w-screen min-h-[100svh]">

      {/* MAIN HERO CONTENT */}
      <div className="
        max-w-screen mx-28
        px-6 md:px-12
        min-h-[75svh]
        flex items-center
      ">
        <div className="grid md:grid-cols-2 gap-[3vw] w-full items-center">

          {/* TEXT SIDE */}
          <div className="pt-10 space-y-6">
            {/* MAIN HEADING */}
            <div className="space-y-0.5">

              {/* LINE 1 */}
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  <AnimatedLetters text="Building modern" />
                </div>

                <AnimatedLine
                  width="29.5vw"
                  className="bg-red-500/60 h-[0.5px]"
                />
              </div>

              {/* LINE 2 */}
              <div className="space-y-1">
                <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  <AnimatedLetters text="web experiences" />
                </div>

                <AnimatedLine
                  width="28vw"
                  className="bg-red-500/30 h-[0.5px] delay-75 duration-100"
                />
              </div>

            </div>

            {/* SUB HEADING */}
            <div className="space-y-1 max-w-md">
              <div className="text-gray-400 text-base leading-tight">
                <AnimatedWords text="I design and develop clean scalable and high performance " />
              </div>
              <AnimatedLine
                width="27vw"
                className="bg-red-500/20 h-[0.5px]"
              />
              <div className="text-gray-400 text-base leading-tight">
                <AnimatedWords text=" applications for the modern web." />
              </div>

              <AnimatedLine
                width="15vw"
                className="bg-red-500/20 h-[0.5px]"
              />
            </div>
          </div>


          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              h-[420px]
              md:h-[520px]
              lg:h-[560px]
              overflow-hidden
            "
          >
            <Image
              src="/hero.png"
              alt="Developer"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

        </div>
      </div>

      {/* DIVIDER (aligned to grid, not viewport) */}
      <div className="absolute left-0 right-0 top-[75svh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedDivider />
        </div>
      </div>

      {/* BOTTOM INFO STRIP */}
      <div className="flex justify-between md:justify-start absolute left-0 right-0 bottom-12">
        <div className="max-w-7xl mx-[21vw] px-6 md:px-12">

          <div
            className="
        grid
        grid-cols-1
        md:grid-cols-[22%_1px_70%]
        gap-28
        items-start
        h-[19.5vh]
      "
          >
            {/* LEFT (POSITION) */}
            {/* <div className="pt-[5px] sm:-ml-52">
              <div className="text-xs text-gray-400 uppercase tracking-[0.25em] leading-none">
                <AnimatedLetters text="Position" className="text-3xl" />
              </div>
            </div> */}

            {/* VERTICAL DIVIDER */}
            {/* <div className="hidden md:flex  pt-[0px]">
              <AnimatedVerticalDivider className="h-36" />
            </div> */}

            {/* RIGHT CONTENT */}
            {/* <div className="pt-[7px]">
              <p className="text-gray-300 max-w-xl leading-relaxed">
                <AnimatedWords text="Providing direct, discreet support to build high quality digital products that create long lasting impact." />
              </p>

              <div className="mt-5">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="
              px-5 py-2
              border border-white/30
              rounded-md
              text-sm
              hover:border-white
              transition
            "
                >
                  View services
                </motion.button>
              </div>
            </div> */}
          </div>

        </div>
      </div>


    </section>
  );
}








