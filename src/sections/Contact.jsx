import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, Loader2, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const inputClass =
  "rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55 focus:bg-black/35";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(profile.contactFormAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 4500);
    } catch {
      setStatus("error");
    }
  }

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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value={`Portfolio message for ${profile.name}`} />

            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Send a message</h3>
                <p className="mt-1 font-mono text-xs text-slate-500">$ submit --secure-form</p>
              </div>
              <div className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 font-mono text-xs text-emerald-200 sm:block">
                {status === "sending" ? "sending" : status === "success" ? "sent" : "ready"}
              </div>
            </div>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-300/30 bg-emerald-300/[0.08] p-4 text-sm font-semibold text-emerald-100"
                >
                  <CheckCircle2 size={20} className="text-emerald-300" />
                  Message sent successfully. Thank you!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-5 rounded-xl border border-red-300/30 bg-red-400/[0.08] p-4 text-sm font-semibold text-red-100"
                >
                  Message could not be sent. Please try again or email directly.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Name
                <input name="name" className={inputClass} placeholder="Your name" required disabled={status === "sending"} />
              </label>
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Email
                <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" required disabled={status === "sending"} />
              </label>
            </div>
            <label className="mt-4 grid gap-2 font-mono text-xs text-slate-400">
              Message
              <textarea name="message" rows="6" className={`${inputClass} resize-none`} placeholder="Write a short message..." required disabled={status === "sending"} />
            </label>
            <button type="submit" disabled={status === "sending"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300 px-5 py-3 font-mono text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
              {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
