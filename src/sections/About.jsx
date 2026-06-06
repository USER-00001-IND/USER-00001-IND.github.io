import { motion } from "framer-motion";
import { Cpu, GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { education, interests, profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="A student developer building with code, models, and research." command="cat about.md" />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-6">
            <p className="text-lg leading-8 text-slate-200">{profile.summary}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Focus", profile.focus, Cpu],
                ["Location", profile.location, MapPin],
                ["Status", "B.Sc Computer Science", GraduationCap],
              ].map(([label, value, Icon]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <Icon className="mb-3 text-cyan-300" size={20} />
                  <p className="font-mono text-xs uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-5">
            <h3 className="font-mono text-sm text-emerald-300">$ education --timeline</h3>
            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <div key={item.program} className="relative rounded-xl border border-white/10 bg-white/[0.035] p-4 pl-5">
                  <span className="absolute left-0 top-5 h-8 w-1 rounded-r-full bg-gradient-to-b from-cyan-300 to-violet-400" />
                  <p className="font-semibold text-white">{item.program}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.school}</p>
                  <p className="mt-2 font-mono text-xs text-violet-300">{item.years} - {item.status}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-7 flex items-center gap-2 font-mono text-sm text-emerald-300"><Sparkles size={15} /> interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-slate-300">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
