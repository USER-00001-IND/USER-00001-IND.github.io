import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clipboard, Download, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";
import { trackEvent } from "../utils/analytics.js";

const inputClass =
  "rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/55 focus:bg-black/35";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [formValues, setFormValues] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState("");
  const errors = validateForm(formValues);

  async function copyValue(label, value) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    if (status === "error" || status === "success" || status === "invalid") {
      setStatus("idle");
    }
  }

  function handleBlur(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateForm(formValues);

    if (Object.keys(nextErrors).length > 0) {
      setTouched({ name: true, email: true, message: true });
      setStatus("invalid");
      return;
    }

    const formData = new FormData(form);
    setStatus("sending");
    trackEvent("contact_submit", { status: "started" });

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

      setFormValues(initialForm);
      setTouched({});
      setStatus("success");
      trackEvent("contact_submit", { status: "success" });
      window.setTimeout(() => setStatus("idle"), 4500);
    } catch {
      setStatus("error");
      trackEvent("contact_submit", { status: "error" });
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
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">
                <Mail className="text-cyan-300" size={20} />
                <a href={`mailto:${profile.email}`} className="min-w-0 flex-1 truncate transition hover:text-cyan-200">{profile.email}</a>
                <button type="button" onClick={() => copyValue("email", profile.email)} aria-label="Copy email" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Clipboard size={15} />
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">
                <Phone className="text-emerald-300" size={20} />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex-1 transition hover:text-emerald-200">{profile.phone}</a>
                <button type="button" onClick={() => copyValue("phone", profile.phone)} aria-label="Copy phone number" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <Clipboard size={15} />
                </button>
              </div>
              <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">
                <MapPin className="text-violet-300" size={20} /> {profile.location}
              </p>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/[0.08]">
                <Github className="text-violet-300" size={20} /> Open GitHub: github.com/{profile.githubUsername}
              </a>
              {profile.linkedInUrl ? (
                <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.08]">
                  <Linkedin className="text-cyan-300" size={20} /> LinkedIn
                </a>
              ) : (
                <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-slate-500">
                  <Linkedin size={20} /> LinkedIn placeholder
                </p>
              )}
              <a href="/resume.pdf" download onClick={() => trackEvent("resume_download", { source: "contact_section" })} className="flex items-center gap-3 rounded-xl border border-emerald-300/30 bg-emerald-300/[0.08] p-4 font-semibold text-emerald-100 transition hover:bg-emerald-300/[0.14]">
                <Download size={20} /> Download Resume
              </a>
              {copied && <p className="font-mono text-xs text-emerald-300">{copied} copied to clipboard</p>}
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

              {status === "sending" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-5 flex items-center gap-3 rounded-xl border border-cyan-300/30 bg-cyan-300/[0.08] p-4 text-sm font-semibold text-cyan-100"
                >
                  <Loader2 size={18} className="animate-spin text-cyan-300" />
                  Sending your message...
                </motion.div>
              )}

              {status === "invalid" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-5 rounded-xl border border-amber-300/30 bg-amber-300/[0.08] p-4 text-sm font-semibold text-amber-100"
                >
                  Please fix the highlighted fields before sending.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Name
                <input
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass}
                  placeholder="Your name"
                  required
                  disabled={status === "sending"}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby="contact-name-error"
                />
                {touched.name && errors.name && <span id="contact-name-error" className="text-xs text-amber-200">{errors.name}</span>}
              </label>
              <label className="grid gap-2 font-mono text-xs text-slate-400">
                Email
                <input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  required
                  disabled={status === "sending"}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby="contact-email-error"
                />
                {touched.email && errors.email && <span id="contact-email-error" className="text-xs text-amber-200">{errors.email}</span>}
              </label>
            </div>
            <label className="mt-4 grid gap-2 font-mono text-xs text-slate-400">
              Message
              <textarea
                name="message"
                rows="6"
                value={formValues.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass} resize-none`}
                placeholder="Write a short message..."
                required
                disabled={status === "sending"}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby="contact-message-error"
              />
              {touched.message && errors.message && <span id="contact-message-error" className="text-xs text-amber-200">{errors.message}</span>}
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
