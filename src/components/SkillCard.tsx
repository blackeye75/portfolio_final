"use client";

import Image from "next/image";

type SkillCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  classname?: string;
};

export default function SkillCard({
  title,
  subtitle,
  icon,
  classname
}: SkillCardProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className={`object-contain ${classname}`}
      />

      <div>
        <h4 className="text-white font-semibold leading-tight">{title}</h4>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
