import { motion } from "framer-motion";
import { Github, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const inputClass =
  "rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55 focus:bg-black/35";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Start a conversation or review the code trail." command="send --message portfolio" />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, ease: "easeOut" }} className="premium-card p-5">
            <h3 className="text-xl font-bold text-white">Contact details</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Open to internships, learning opportunities, and practical project collaboration.</p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.08]">
                <Mail className="text-cyan-300" size={20} /> {profile.email}
              </a>
              <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">
                <MapPin className="text-violet-300" size={20} /> {profile.location}
              </p>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/[0.08]">
                <Github className="text-violet-300" size={20} /> github.com/{profile.githubUsername}
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="premium-card p-5 sm:p-6"
            action={profile.contactFormAction}
            method="POST"
          >
            <input type="hidden" name="_subject" value={`Portfolio message for ${profile.name}`} />

            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Send a message</h3>
                <p className="mt-1 font-mono text-xs text-slate-500">$ submit --secure-form</p>
              </div>
              <div className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 font-mono text-xs text-emerald-200 sm:block">ready</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Name
                <input name="name" className={inputClass} placeholder="Your name" required />
              </label>
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Email
                <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" required />
              </label>
            </div>
            <label className="mt-4 grid gap-2 font-mono text-xs text-slate-400">
              Message
              <textarea name="message" rows="6" className={`${inputClass} resize-none`} placeholder="Write a short message..." required />
            </label>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200 sm:w-auto">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
