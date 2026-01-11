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
        <SkillCard title="TypeScript" subtitle="Static" icon="/typescript.svg" />
        <SkillCard title="React" subtitle="Library" icon="/reactjs.png" />
        <SkillCard title="git" subtitle="version Control" icon="/git.png" classname="bg-white"  />
        <SkillCard title="HTML" subtitle="Framework" icon="/html5.png" classname="bg-white"  />
        <SkillCard title="mongo" subtitle="DB" icon="/mongodb.png" classname="bg-white"  />
        <SkillCard title="MySql" subtitle="DB" icon="/mysql.png" classname="bg-white"  />
        <SkillCard title="Node" subtitle="Framework" icon="/Nodejs.png" classname="bg-white"  />
        <SkillCard title="postman" subtitle="API Testing" icon="/postman.png" classname="bg-white"  />
        <SkillCard title="vs" subtitle="Code Editor" icon="/vs.png" classname="bg-white"  />
        <SkillCard title="Next.js" subtitle="Framework" icon="/next.js.png" classname="bg-white"  />
        <SkillCard title="Next.js" subtitle="Framework" icon="/next.js.png" classname="bg-white"  />
      </div>

      <div className="mt-16">
        <Poster />
      </div>
    </section>
  );
}
