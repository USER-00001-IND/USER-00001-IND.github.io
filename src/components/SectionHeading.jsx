import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, command }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className="mb-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {command && <p className="mt-3 font-mono text-sm text-slate-400"><span className="text-emerald-300">$</span> {command}</p>}
    </motion.div>
  );
}
