import { useEffect, useState } from "react";
import { Github, Menu, Moon, Search, Sun, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Navbar({ darkMode, onToggleDark }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function updateActiveSection() {
      const sections = navItems
        .map((item) => ({ ...item, element: document.querySelector(item.href) }))
        .filter((item) => item.element);

      let current = sections[0];

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        if (sections[index].element.getBoundingClientRect().top <= 120) {
          current = sections[index];
          break;
        }
      }

      if (current) {
        setActiveSection(current.href);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050812]/88 shadow-[0_8px_34px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="rajmohan.dev home" className="min-w-0">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "page" : undefined} className={`rounded-lg px-3 py-2 font-mono text-xs transition hover:bg-white/[0.08] hover:text-white ${activeSection === item.href ? "bg-cyan-300/10 text-cyan-200" : "text-slate-300"}`}>
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200">
            <Github size={18} />
          </a>
          <button type="button" onClick={onToggleDark} aria-label="Toggle dark mode" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-200">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" onClick={() => window.dispatchEvent(new Event("open-command-palette"))} aria-label="Open command palette with Control K" className="hidden h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 font-mono text-xs text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200 lg:inline-flex">
            <Search size={15} /> Ctrl K
          </button>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 md:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050812]/96 px-4 py-4 backdrop-blur md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={activeSection === item.href ? "page" : undefined} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-slate-200">
                ./ {item.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
