import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { trackEvent } from "../utils/analytics.js";

const resumeHighlights = [
  ["Projects", "4+"],
  ["Internships", "2"],
  ["Hackathon", "DevFusion 2.0"],
  ["Core Focus", "ML, Computer Vision, Full Stack"],
];

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Resume" title="A focused preview for recruiters." command="open /public/resume.pdf" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
              <FileText size={28} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">Resume ready for recruiters</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Download a focused resume covering projects, internships, hackathon experience, and technical skills.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="/resume.pdf" download onClick={() => trackEvent("resume_download", { source: "resume_section" })} className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-400 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-green transition hover:-translate-y-1 hover:bg-emerald-300">
                <Download size={18} /> Download Resume
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => trackEvent("resume_view", { source: "resume_section" })} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-5 py-3 font-mono text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                <Eye size={18} /> View Resume
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resumeHighlights.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-xs uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-3 text-xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
