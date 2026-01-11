// "use client";

// import AnimatedWords from "@/components/AnimatedWords";
// import AnimatedLetters from "@/components/AnimatedLetters";
// import AnimatedDivider from "@/components/AnimatedDivider";
// import AnimatedVerticalDivider from "@/components/AnimatedVerticalDivider";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Underline } from "./Underline";
// import AnimatedLine from "./AnimatedLine";

// export default function Hero() {
//   return (
//     <section className="relative bg-black text-white min-w-screen min-h-[100svh]">

//       {/* MAIN HERO CONTENT */}
//       <div className="
//         max-w-screen mx-28
//         px-6 md:px-12
//         min-h-[75svh]
//         flex items-center
//       ">
//         <div className="grid md:grid-cols-2 gap-[3vw] w-full items-center">

//           {/* TEXT SIDE */}
//           <div className="pt-10 space-y-6">
//             {/* MAIN HEADING */}
//             <div className="space-y-0.5">

//               {/* LINE 1 */}
//               <div className="space-y-1">
//                 <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
//                   <AnimatedLetters text="Building modern" />
//                 </div>

//                 <AnimatedLine
//                   width="29.5vw"
//                   className="bg-red-500/60 h-[0.5px]"
//                 />
//               </div>

//               {/* LINE 2 */}
//               <div className="space-y-1">
//                 <div className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
//                   <AnimatedLetters text="web experiences" />
//                 </div>

//                 <AnimatedLine
//                   width="28vw"
//                   className="bg-red-500/30 h-[0.5px] delay-75 duration-100"
//                 />
//               </div>

//             </div>

//             {/* SUB HEADING */}
//             <div className="space-y-1 max-w-md">
//               <div className="text-gray-400 text-base leading-tight">
//                 <AnimatedWords text="I design and develop clean scalable and high performance " />
//               </div>
//               <AnimatedLine
//                 width="27vw"
//                 className="bg-red-500/20 h-[0.5px]"
//               />
//               <div className="text-gray-400 text-base leading-tight">
//                 <AnimatedWords text=" applications for the modern web." />
//               </div>

//               <AnimatedLine
//                 width="15vw"
//                 className="bg-red-500/20 h-[0.5px]"
//               />
//             </div>
//           </div>


//           {/* IMAGE SIDE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="
//               relative
//               h-[420px]
//               md:h-[520px]
//               lg:h-[560px]
//               overflow-hidden
//             "
//           >
//             <Image
//               src="/hero.png"
//               alt="Developer"
//               fill
//               className="object-contain"
//               priority
//             />
//           </motion.div>

//         </div>
//       </div>

//       {/* DIVIDER (aligned to grid, not viewport) */}
//       <div className="absolute left-0 right-0 top-[75svh]">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <AnimatedDivider />
//         </div>
//       </div>

//       {/* BOTTOM INFO STRIP */}
//       <div className="flex justify-between md:justify-start w-screen ">
//         <div className="max-w-full h-[20vh]">

//           <div
//          /*   className="
//         grid
//         grid-cols-3
//         md:grid-cols-[22%_1px_70%]   
//         gap-28
//         items-start
//         h-[19.5vh]

//       "*/
//       className="w-screen flex justify-around"
//           >
//             {/* LEFT (POSITION) */}
//             <div className="pt-[30px] ">
//               <div className="text-xs text-gray-400 uppercase tracking-[0.25em] ml-[1.5vw]  leading-none">
//                 <AnimatedLetters text="Position" className="text-3xl" />
//               </div>
//             </div>

//             {/* VERTICAL DIVIDER */}
//             <div className="hidden md:flex  pt-[10px]">
//               <AnimatedVerticalDivider className="h-36" />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="pt-[7px]">
//               <p className="text-gray-300 max-w-xl leading-relaxed">
//                 <AnimatedWords text="Providing direct, discreet support to build high quality digital products that create long lasting impact." />
//               </p>

//               <div className="mt-5">
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="
//               px-5 py-2
//               border border-white/30
//               rounded-md
//               text-sm
//               hover:border-white
//               transition
//             "
//                 >
//                   View services
//                 </motion.button>
//               </div>
//             </div>
//           </div>

//         </div>
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
import AnimatedLine from "./AnimatedLine";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[100svh]">

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[75svh] flex items-center">
        <div className="grid md:grid-cols-2 gap-[4vw] w-full items-center">

          {/* TEXT */}
          <div className="pt-10 space-y-5">

            {/* HEADINGS */}
            <div className="space-y-1">

              {/* LINE 1 */}
              <div className="space-y-0.5">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1]">
                  <AnimatedLetters text="Building modern" />
                </h1>

                <AnimatedLine
                  width="clamp(180px, 26vw, 420px)"
                  className="bg-red-500/50 h-[1px]"
                />
              </div>

              {/* LINE 2 */}
              <div className="space-y-0.5">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1]">
                  <AnimatedLetters text="web experiences" />
                </h1>

                <AnimatedLine
                  width="clamp(160px, 24vw, 380px)"
                  className="bg-red-500/25 h-[1px]"
                />
              </div>

            </div>

            {/* SUBTEXT */}
            <div className="-space-y-0.5 max-w-lg">
              <p className="text-gray-400 text-[15px] leading-relaxed">
                <AnimatedWords text="I design and develop clean, scalable, and high-performance applications for " />
                
              </p>

              <AnimatedLine
                width="clamp(120px, 18vw, 260px)"
                className="bg-red-500/20 h-[1px]"
              />
              <p className="text-gray-400 text-[15px] leading-relaxed">
                <AnimatedWords text="the modern web." />
              </p>
              <AnimatedLine
                width="clamp(80px, 12vw, 180px)"
                className="bg-red-500/20 h-[1px]"
              />
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[420px] md:h-[520px] lg:h-[560px]"
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

      {/* DIVIDER */}
      <div className="absolute left-0 right-0 top-[75svh]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <AnimatedDivider />
        </div>
      </div>

      {/* BOTTOM INFO STRIP */}
      {/* BOTTOM INFO STRIP */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 h-[22vh] overflow-hidden">

        {/* VERTICAL DIVIDER — CONTINUOUS */}
        <div className="absolute left-[30%] top-0 bottom-0 flex items-start justify-center">
          <AnimatedVerticalDivider className="h-full opacity-70" />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[0.3fr_0.7fr] h-full pt-8">

          {/* LEFT — POSITION */}
          <div className="flex items-start">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
              <AnimatedLetters text="Position" className="text-3xl" />
            </p>
          </div>

          {/* RIGHT — INFO */}
          <div className="pl-[15vw] space-y-5">
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              <AnimatedWords text="Providing direct, discreet support to build high-quality digital products that create long-lasting impact." />
            </p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex px-6 py-2.5 border border-white/30 rounded-md text-sm hover:border-white transition"
            >
              View services
            </motion.button>
          </div>

        </div>
      </div>

    </section>
  );
}


