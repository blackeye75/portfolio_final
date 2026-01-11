import { motion } from "framer-motion";

export default function RevealButton() {
  return (
    <button
      className="
        mt-4
        relative
        border border-white/30
        text-white/90
        text-sm
        rounded-md
        overflow-hidden
        px-6 py-2
      "
    >
      {/* ANIMATED INNER LAYER */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
        className="
          absolute
          inset-0
          bg-white/5
          z-0
        "
      />

      {/* TEXT (MOVES WITH LAYER) */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="relative z-10 block text-center text-black"
      >
        Read more
      </motion.span>
    </button>
  );
}
