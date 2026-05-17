import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const accentClass = {
  acid: "text-emerald-200 border-emerald-300/30 bg-emerald-300/[0.08]",
  aqua: "text-cyan-200 border-cyan-300/30 bg-cyan-300/[0.08]",
  violet: "text-violet-200 border-violet-300/30 bg-violet-300/[0.08]",
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Selected work presented as executable ideas." command="git log --oneline projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="h-full"
            >
              <div className="premium-card group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-glow">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className={`mb-3 inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${accentClass[project.accent]}`}>
                      <Code2 size={14} className="mr-2" /> {project.status}
                    </p>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-cyan-300" />
                </div>
                <p className="leading-7 text-slate-300">{project.description}</p>
                <p className="mt-5 rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-xs text-slate-400">
                  <span className="text-emerald-300">$</span> {project.command}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <Github size={15} /> GitHub
                    </a>
                  ) : (
                    <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs font-semibold text-slate-500">
                      <Github size={15} /> GitHub
                    </button>
                  )}
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-violet-300/40 hover:bg-violet-300/10">
                      <ExternalLink size={15} /> Demo
                    </a>
                  ) : (
                    <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs font-semibold text-slate-500">
                      <ExternalLink size={15} /> Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
