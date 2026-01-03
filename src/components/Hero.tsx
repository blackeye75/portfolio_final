"use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="min-h-screen sm:pt-1 pt-0 flex items-center bg-black px-6 md:px-16 ">
//       <div className="grid md:grid-cols-2 gap-12 w-full items-center">

//         {/* LEFT TEXT */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.15 },
//             },
//           }}
//         >
//           <motion.h1
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="text-4xl md:text-5xl font-semibold leading-tight"
//           >
//             Building modern<br />web experiences
//           </motion.h1>

//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="mt-6 text-gray-400 max-w-md"
//           >
//             I design and develop clean, scalable, and performant web applications.
//           </motion.p>

//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="mt-8 flex gap-4"
//           >
//             <button className="px-6 py-3 bg-white text-black rounded-md">
//               View Projects
//             </button>
//             <button className="px-6 py-3 border border-white/30 rounded-md">
//               Contact Me
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT IMAGE / VIDEO */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden"
//         >
//           {/* image */}
//           <Image
//             src="/hero.png"
//             alt="Developer working"
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* dark gradient overlay (optional but recommended) */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
//         </motion.div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import Reveal from "./Reveal";
// import RevealGroup from "./RevealGroup";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="min-h-screen sm:pt-28 pt-6 flex items-center bg-black px-6 md:px-16">
//       <div className="grid md:grid-cols-2 gap-12 w-full items-center">

//         {/* TEXT */}
//         <RevealGroup>
//           <Reveal>
//             <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
//               Building modern
//             </h1>
//           </Reveal>

//           <Reveal>
//             <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
//               web experiences
//             </h1>
//           </Reveal>

//           <Reveal>
//             <p className="mt-6 text-gray-400 max-w-md">
//               I design and develop clean, scalable, and performant applications
//               that feel fast and intuitive.
//             </p>
//           </Reveal>

//           <Reveal>
//             <div className="mt-8 flex gap-4">
//               <button className="px-6 py-3 bg-white text-black rounded-md">
//                 View Projects
//               </button>
//               <button className="px-6 py-3 border border-white/30 rounded-md">
//                 Contact Me
//               </button>
//             </div>
//           </Reveal>
//         </RevealGroup>

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden"
//         >
//           <Image
//             src="/hero.png"
//             alt="Developer working"
//             fill
//             priority
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import AnimatedWords from "@/components/AnimatedWords";
import AnimatedLetters from "@/components/AnimatedLetters";
import AnimatedDivider from "@/components/AnimatedDivider";
import AnimatedVerticalDivider from "@/components/AnimatedVerticalDivider";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[100svh]">

      {/* MAIN HERO CONTENT */}
      <div className="
        max-w-7xl mx-auto
        px-6 md:px-12
        min-h-[85svh]
        flex items-center
      ">
        <div className="grid md:grid-cols-2 gap-16 w-full items-center">

          {/* TEXT SIDE */}
          <div className="pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <AnimatedLetters text="Building modern" />
              <br />
              <AnimatedLetters text="web experiences" />
            </h1>

            <div className="mt-8 text-gray-400 max-w-md text-base leading-relaxed">
              <AnimatedWords text="I design and develop clean scalable and high performance applications for the modern web." />
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
      <div className="absolute left-0 right-0 bottom-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT LABEL */}
            <div className="text-xs text-gray-400 uppercase tracking-[0.25em] pt-1">
              <AnimatedLetters text="Position" className="text-3xl" />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-gray-300 max-w-xl leading-relaxed">
                <AnimatedWords text="Providing direct, discreet support to build high quality digital products that create long lasting impact." />
              </p>

              <div className="mt-6">
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
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}








