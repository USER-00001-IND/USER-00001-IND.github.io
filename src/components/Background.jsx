import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="theme-bg absolute inset-0" />
      <div className="theme-grid absolute inset-0 opacity-45" />
      <motion.div
        className="absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/14 blur-3xl"
        animate={{ x: [0, 42, 0], y: [0, 26, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/14 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, 30, 0], opacity: [0.12, 0.21, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="theme-fade absolute inset-x-0 bottom-0 h-1/2" />
    </div>
  );
}
