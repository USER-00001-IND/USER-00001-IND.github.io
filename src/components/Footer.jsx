import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050812]/80 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center font-mono text-xs text-slate-500 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name}. Portfolio built with React, Vite, and Tailwind CSS.</p>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-300 transition hover:text-emerald-300">
          github.com/{profile.githubUsername}
        </a>
      </div>
    </footer>
  );
}
