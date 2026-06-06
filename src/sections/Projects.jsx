import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Github, Image, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { projectFilters, projects } from "../data/portfolio.js";
import { useCachedPortfolioData } from "../hooks/useCachedPortfolioData.js";
import { trackEvent } from "../utils/analytics.js";

const accentClass = {
  acid: "text-emerald-200 border-emerald-300/30 bg-emerald-300/[0.08]",
  aqua: "text-cyan-200 border-cyan-300/30 bg-cyan-300/[0.08]",
  violet: "text-violet-200 border-violet-300/30 bg-violet-300/[0.08]",
};

export default function Projects() {
  const cachedProjects = useCachedPortfolioData("portfolio_projects", projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return cachedProjects;
    }
    return cachedProjects.filter((project) => project.categories?.includes(activeFilter));
  }, [activeFilter, cachedProjects]);

  function handleFilter(filter) {
    setActiveFilter(filter);
    trackEvent("project_filter", { filter });
  }

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Selected work presented as executable ideas." command="git log --oneline projects" />
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilter(filter)}
              className={`rounded-lg border px-3 py-2 font-mono text-xs font-semibold transition ${
                activeFilter === filter
                  ? "border-cyan-300/50 bg-cyan-300 text-slate-950"
                  : "border-white/10 bg-white/[0.045] text-slate-300 hover:border-cyan-300/40"
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
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
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(project);
                      trackEvent("project_details_open", { project: project.title });
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    <ExternalLink size={15} /> Details
                  </button>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackEvent("project_click", { project: project.title, source: "project_card" })}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-violet-300/40 hover:bg-violet-300/10"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div role="dialog" aria-modal="true" aria-label={`${activeProject.title} details`} className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4">
          <div className="premium-card max-h-[88vh] w-full max-w-3xl overflow-auto p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Project Details</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{activeProject.title}</h3>
              </div>
              <button type="button" onClick={() => setActiveProject(null)} aria-label="Close project details" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white">
                <X size={18} />
              </button>
            </div>
            <p className="mt-5 leading-7 text-slate-300">{activeProject.description}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h4 className="font-bold text-white">Features</h4>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                  {activeProject.features.map((feature) => <li key={feature}>- {feature}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white">Learning Outcomes</h4>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                  {activeProject.outcomes.map((outcome) => <li key={outcome}>- {outcome}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-white">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-white">Screenshots</h4>
              <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.035] p-6 text-center text-sm text-slate-400">
                <Image className="mx-auto mb-3 text-cyan-300" size={28} />
                Screenshots can be added when project images are available.
              </div>
            </div>
            {activeProject.repoUrl && (
              <a href={activeProject.repoUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-cyan-300/40">
                <Github size={15} /> Open GitHub Repository
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
