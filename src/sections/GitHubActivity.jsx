import { ExternalLink, GitFork, Star, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile, projects } from "../data/portfolio.js";
import { useGitHubProfile } from "../hooks/useGitHubProfile.js";
import { trackEvent } from "../utils/analytics.js";

export default function GitHubActivity() {
  const { loading, error, user, repos, events } = useGitHubProfile();
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  return (
    <section id="github" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="GitHub" title="Latest public repositories and activity." command="gh repo list --public" />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="premium-card p-5">
            <h3 className="text-xl font-bold text-white">Public GitHub profile</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Live data from GitHub public APIs. Contribution counts are represented through recent public activity events.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-2xl font-bold text-white">{loading ? "..." : user?.public_repos ?? 0}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Public repositories</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-2xl font-bold text-white">{loading ? "..." : user?.followers ?? 0}</p>
                <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400"><Users size={14} /> Followers</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-2xl font-bold text-white">{loading ? "..." : totalStars}</p>
                <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400"><Star size={14} /> Stars in latest repos</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-2xl font-bold text-white">{loading ? "..." : events.length}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">Recent public activity events</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {error && <p className="premium-card p-5 text-sm text-amber-100">{error}</p>}
            {!error &&
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("project_click", { project: repo.name, source: "github_section" })}
                  className="premium-card group p-5 transition hover:-translate-y-1 hover:border-cyan-300/35"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-white">{repo.name}</h3>
                    <ExternalLink className="shrink-0 text-slate-500 group-hover:text-cyan-300" size={18} />
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{repo.description || "Public repository from GitHub."}</p>
                  <div className="mt-5 flex items-center gap-4 font-mono text-xs text-slate-300">
                    <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                    <span>{repo.language || "Code"}</span>
                  </div>
                </a>
              ))}
            {loading &&
              [0, 1, 2, 3].map((item) => (
                <div key={item} className="premium-card p-5">
                  <div className="skeleton-block h-6 w-2/3 rounded-md" />
                  <div className="skeleton-block mt-4 h-16 rounded-md" />
                  <div className="skeleton-block mt-5 h-5 w-32 rounded-md" />
                </div>
              ))}
          </div>
        </div>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-cyan-300/40">
          View full GitHub profile
        </a>
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-bold text-white">Featured project repositories</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.filter((project) => project.repoUrl).map((project) => (
              <a
                key={project.title}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("project_click", { project: project.title, source: "featured_repo_links" })}
                className="premium-card p-5 transition hover:-translate-y-1 hover:border-cyan-300/35"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-bold text-white">{project.title}</h4>
                  <ExternalLink className="shrink-0 text-slate-500" size={18} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
