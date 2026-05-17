import { motion } from "framer-motion";
import { Download, FileText, GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/portfolio.js";

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Resume" title="A focused preview for recruiters." command="open /public/resume.pdf" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-emerald-300/10 blur-2xl" />
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
              <FileText size={28} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">Resume ready for download</h3>
            <p className="mt-3 leading-7 text-slate-300">
              The download button links to <span className="font-mono text-violet-300">public/resume.pdf</span>, ready to replace with the final resume file.
            </p>
            <a href="/resume.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-400 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-green transition hover:-translate-y-1 hover:bg-emerald-300">
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="grid gap-4">
            {education.map((item) => (
              <div key={item.program} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet-300/20 bg-violet-300/[0.08] text-violet-300">
                    <GraduationCap size={19} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-emerald-300">{item.years}</p>
                    <h4 className="mt-2 font-semibold text-white">{item.program}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.school}</p>
                    <p className="mt-2 font-mono text-xs text-violet-300">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
