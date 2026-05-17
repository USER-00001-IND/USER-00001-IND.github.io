import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050812]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.055)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45" />
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
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050812] via-[#050812]/70 to-transparent" />
    </div>
  );
}
