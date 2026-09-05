import { motion } from "framer-motion";
import logoSrc from "../assets/logo.webp";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-surface-warm)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={logoSrc}
          alt="M&F"
          className="h-24 w-auto object-contain md:h-28"
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />

        <div className="relative mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-[rgba(23,23,23,.12)] md:w-56">
          <motion.span
            className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,rgba(242,195,0,0)_0%,var(--color-brand-yellow)_35%,var(--color-brand-yellow)_70%,rgba(242,195,0,0)_100%)]"
            animate={{ x: ["-110%", "220%"] }}
            transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-6 overflow-hidden">
          <motion.p
            className="font-display text-4xl font-bold tracking-[-.04em] text-[var(--color-brand-black)] md:text-6xl"
            initial={{ clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            M&F Builders
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
