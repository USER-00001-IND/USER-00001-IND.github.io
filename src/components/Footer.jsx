import { Download, Github, Mail } from "lucide-react";
import { navItems, profile } from "../data/portfolio.js";
import { trackEvent } from "../utils/analytics.js";

const footerLinks = navItems.filter((item) => ["Home", "Projects", "GitHub", "Resume", "Contact"].includes(item.label));

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050812]/80 px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <a href="#home" className="font-mono text-sm font-semibold tracking-wide text-white">
            <span className="text-cyan-300">rajmohan</span><span className="text-emerald-300">.dev</span>
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Computer Science student focused on machine learning, full stack development, AI research, and practical software projects.
          </p>
          <p className="mt-5 font-mono text-xs text-slate-500">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Actions</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-white transition hover:border-cyan-300/40">
              <Github size={16} /> GitHub
            </a>
            <a href="/resume.pdf" download onClick={() => trackEvent("resume_download", { source: "footer" })} className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-300/[0.08] px-4 py-2 text-sm text-emerald-100 transition hover:bg-emerald-300/[0.14]">
              <Download size={16} /> Resume
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-white transition hover:border-violet-300/40">
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
