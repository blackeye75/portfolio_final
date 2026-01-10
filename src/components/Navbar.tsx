"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              rotate: 360,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            className="rounded-full overflow-hidden"
          >
            <Image
              src="/blackeyelogo.png"
              alt="Priyanshu logo"
              width={26}
              height={26}
            />
          </motion.div>

          <span className="text-white font-semibold text-sm tracking-wide">
            Priyanshu
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-white transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 border-t border-white/10 px-6 py-6 space-y-4"
        >
          <Link href="/about" className="block text-gray-300">About</Link>
          <Link href="#projects" className="block text-gray-300">Projects</Link>
          <Link href="#skills" className="block text-gray-300">Skills</Link>
          <Link href="#contact" className="block text-gray-300">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
