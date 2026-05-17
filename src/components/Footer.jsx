import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050812]/80 px-4 py-8 text-center font-mono text-xs text-slate-500">
      <p>built for {profile.name} - {new Date().getFullYear()}</p>
    </footer>
  );
}
