"use client";

import { easeInOut, motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { Poster } from "@/components/Poster";

export default function TechStack() {
  return (
    <section className="px-[6vw] mt-20">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: easeInOut }}
        className="text-6xl font-semibold"
      >
        Tech Stack
      </motion.h1>

      {/* Example */}
      <div className="mt-8 flex flex-wrap gap-6">
        <SkillCard title="JavaScript" subtitle="Dynamic" icon="/js.png" />
        <SkillCard title="TypeScript" subtitle="Static" icon="/typescript.png" />
        <SkillCard title="React" subtitle="Library" icon="/reactjs.png" />
        <SkillCard title="Next.js" subtitle="Framework" icon="/next.png" />
      </div>

      <div className="mt-16">
        <Poster />
      </div>
    </section>
  );
}
