// "use client";

// import { motion } from "framer-motion";

// export default function AboutContent() {
//   return (
//     <section className="px-[10vw] md:px-[17.5vw] pt-10 space-y-8 text-gray-300">
//       <motion.p
//         initial={{ y: 100 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Name&apos;s <span className="text-blue-500">Priyanshu Raj</span>, a
//         passionate <span className="text-pink-500">Full-Stack Web Developer</span>{" "}
//         currently based in Bangalore. I have 1.7+ years of experience building
//         scalable, high-performance web applications. I strongly believe that the
//         most impactful things are often invisible — and great products tell
//         powerful stories.
//       </motion.p>

//       {[
//         ["My Philosophy", "I believe that the most powerful things are often invisible..."],
//         ["Work Policy", "I spend most of my time developing and learning..."],
//         ["Work Philosophy", "I focus deeply on mastering specific areas..."],
//         ["Entrepreneurial Spirit", "I possess an entrepreneurial mindset..."],
//       ].map(([title, text]) => (
//         <div key={title}>
//           <motion.h2
//             initial={{ y: 100 }}
//             whileInView={{ y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-3xl uppercase tracking-tight text-gray-400 mt-8"
//           >
//             {title}
//           </motion.h2>

//           <motion.p
//             initial={{ y: 100 }}
//             whileInView={{ y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-lg mt-2"
//           >
//             {text}
//           </motion.p>
//         </div>
//       ))}
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="px-[10vw] md:px-[17.5vw] sm:pt-3 space-y-1 text-gray-300">
      {/* Intro Paragraph */}
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

      {/* Philosophy Sections */}
      {[
        ["My Philosophy", "I believe that the most powerful things are often invisible..."],
        ["Work Policy", "I spend most of my time developing and learning..."],
        ["Work Philosophy", "I focus deeply on mastering specific areas..."],
        ["Entrepreneurial Spirit", "I possess an entrepreneurial mindset..."],
      ].map(([title, text], index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <h2 className="text-3xl uppercase tracking-tight text-gray-400 mt-8">
            {title}
          </h2>

          <p className="text-lg mt-2">{text}</p>
        </motion.div>
      ))}
    </section>
  );
}
