import { Download, FileCheck2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { coreResumeKeywords } from "../data/portfolio.js";
import { trackEvent } from "../utils/analytics.js";

export default function CoreTechnologies() {
  return (
    <section id="core-technologies" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Resume Keywords" title="Core technologies recruiters can scan quickly." command="resume --keywords" />
        <div className="premium-card grid gap-6 p-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
              <FileCheck2 size={26} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">{coreResumeKeywords.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">
              A compact recruiter-facing keyword set covering programming, web development, machine learning, computer vision, and developer tooling.
            </p>
            <a
              href="/resume.pdf"
              download
              onClick={() => trackEvent("resume_download", { source: "core_technologies" })}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-400 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-green transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {coreResumeKeywords.items.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
