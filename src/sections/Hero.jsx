import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { useTypingEffect } from "../utils/useTypingEffect.js";

const typingLines = [
  "training ML models",
  "building responsive web apps",
  "researching practical AI ideas",
];

export default function Hero() {
  const typedText = useTypingEffect(typingLines);

  return (
    <section id="home" className="px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 font-mono text-xs text-emerald-200 shadow-green">
            <Sparkles size={15} />
            available for internships and collaboration
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-cyan-100">
            {profile.role} building practical systems across machine learning and the web.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Focused on <span className="text-violet-300">{profile.focus}</span>, with a strong interest in turning technical learning into useful real-world projects.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-400 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-green transition hover:-translate-y-1 hover:bg-emerald-300">
              <Download size={18} /> Download Resume
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.07] px-5 py-3 font-mono text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <Github size={18} /> GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.58, ease: "easeOut", delay: 0.12 }}>
          <div className="premium-card relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <p className="font-mono text-xs text-slate-500">profile.card</p>
            </div>
            <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-cyan-300/25 bg-slate-950 shadow-glow sm:mx-0">
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} profile photo`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">profile</p>
                <h2 className="mt-2 text-2xl font-bold text-white">{profile.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{profile.role}</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm">
              <p className="text-slate-500"><span className="text-emerald-300">$</span> rajmohan.focus</p>
              <p className="mt-3 text-cyan-100">
                currently <span className="text-emerald-300">{typedText}</span>
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-emerald-300 animate-blink" />
              </p>
            </div>
            <div className="mt-5 grid gap-3">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.08]">
                <Github size={18} className="text-cyan-300" /> github.com/{profile.githubUsername}
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/[0.08]">
                <Mail size={18} className="text-emerald-300" /> {profile.email}
              </a>
              <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                <MapPin size={18} className="text-violet-300" /> {profile.location}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-violet-300/20 bg-violet-400/[0.08] p-4 text-sm text-violet-100">
              <Terminal size={18} /> B.Sc Computer Science, 2024-2027
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-300 sm:block">
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
