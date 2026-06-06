import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BadgeCheck, BriefcaseBusiness, Download, Eye, Trophy, Users, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { achievements, certifications, internships } from "../data/portfolio.js";
import { useCachedPortfolioData } from "../hooks/useCachedPortfolioData.js";

const tabs = ["Hackathons", "Internships", "Certifications"];

const accents = {
  Hackathons: {
    label: "text-cyan-200",
    border: "border-cyan-300/30",
    bg: "bg-cyan-300/[0.08]",
    icon: "text-cyan-300",
  },
  Internships: {
    label: "text-emerald-200",
    border: "border-emerald-300/30",
    bg: "bg-emerald-300/[0.08]",
    icon: "text-emerald-300",
  },
  Certifications: {
    label: "text-violet-200",
    border: "border-violet-300/30",
    bg: "bg-violet-300/[0.08]",
    icon: "text-violet-300",
  },
};

function CategoryLabel({ category, children }) {
  const accent = accents[category];

  return (
    <span className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs font-semibold ${accent.border} ${accent.bg} ${accent.label}`}>
      {children}
    </span>
  );
}

export default function Achievements() {
  const cachedHackathons = useCachedPortfolioData("portfolio_achievements", achievements);
  const cachedInternships = useCachedPortfolioData("portfolio_internships", internships);
  const cachedCertifications = useCachedPortfolioData("portfolio_certifications", certifications);
  const [activeTab, setActiveTab] = useState("Hackathons");
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="achievements" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Hackathons, internships, and certifications with clear ownership." command="portfolio --achievements" />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Achievement categories">
          {tabs.map((tab) => {
            const accent = accents[tab];
            const selected = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg border px-4 py-2 font-mono text-xs font-semibold transition ${
                  selected
                    ? `${accent.border} ${accent.bg} ${accent.label}`
                    : "border-white/10 bg-white/[0.045] text-slate-300 hover:border-cyan-300/40"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {activeTab === "Hackathons" && (
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Hackathons</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {cachedHackathons.map((hackathon, index) => (
                <motion.article
                  key={hackathon.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04 }}
                  className="premium-card p-5 sm:p-6"
                >
                  <CategoryLabel category="Hackathons">
                    <Trophy size={15} /> Hackathon
                  </CategoryLabel>
                  <h4 className="mt-5 text-2xl font-bold text-white">{hackathon.title}</h4>
                  <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                    <p><span className="font-semibold text-cyan-200">Organizer:</span> {hackathon.organizer}</p>
                    <p><span className="font-semibold text-cyan-200">Team:</span> {hackathon.team}</p>
                    <p><span className="font-semibold text-cyan-200">Role:</span> {hackathon.role}</p>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {hackathon.details.map((detail) => (
                      <div key={detail} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300">
                        <BadgeCheck className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Internships" && (
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Internships</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {cachedInternships.map((internship, index) => (
                <motion.article
                  key={internship.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04 }}
                  className="premium-card p-5 sm:p-6"
                >
                  <CategoryLabel category="Internships">
                    <BriefcaseBusiness size={15} /> Internship
                  </CategoryLabel>
                  <h4 className="mt-5 text-2xl font-bold text-white">{internship.title}</h4>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <Users className="mt-1 shrink-0 text-emerald-300" size={17} />
                    {internship.organization}
                  </p>
                  <p className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-2 font-mono text-xs font-semibold text-emerald-100">
                    Domain: {internship.domain}
                  </p>
                  <div className="mt-5 grid gap-3">
                    {internship.details.map((detail) => (
                      <div key={detail} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <BadgeCheck className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Certifications" && (
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Certifications</h3>
            <div className="grid gap-5 md:grid-cols-3">
              {cachedCertifications.map((certificate, index) => (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04 }}
                  className="premium-card flex h-full flex-col p-5"
                >
                  <CategoryLabel category="Certifications">
                    <Award size={15} /> Certification
                  </CategoryLabel>
                  <h4 className="mt-5 text-xl font-bold text-white">{certificate.title}</h4>
                  <p className="mt-2 text-sm font-semibold text-violet-200">{certificate.issuer}</p>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{certificate.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveCertificate(certificate)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2 font-mono text-xs font-semibold text-white transition hover:border-violet-300/40"
                    >
                      <Eye size={15} /> View Certificate
                    </button>
                    {certificate.available ? (
                      <a href={certificate.fileUrl} download className="inline-flex items-center justify-center gap-2 rounded-lg border border-violet-300/30 bg-violet-300/[0.08] px-4 py-2 font-mono text-xs font-semibold text-violet-100 transition hover:bg-violet-300/[0.14]">
                        <Download size={15} /> Download Certificate
                      </a>
                    ) : (
                      <button type="button" disabled className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-xs font-semibold text-slate-500">
                        <Download size={15} /> Download Certificate
                      </button>
                    )}
                  </div>
                  {!certificate.available && (
                    <p className="mt-3 font-mono text-xs text-slate-500">Add PDF: public{certificate.fileUrl}</p>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeCertificate && (
        <div role="dialog" aria-modal="true" aria-label={`${activeCertificate.title} preview`} className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4">
          <div className="premium-card max-h-[88vh] w-full max-w-2xl overflow-auto p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">Certificate Preview</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{activeCertificate.title}</h3>
              </div>
              <button type="button" onClick={() => setActiveCertificate(null)} aria-label="Close certificate preview" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white">
                <X size={18} />
              </button>
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-6 text-center">
              {activeCertificate.available ? (
                <iframe title={activeCertificate.title} src={activeCertificate.fileUrl} className="h-96 w-full rounded-lg border border-white/10" />
              ) : (
                <div>
                  <Award className="mx-auto text-violet-300" size={42} />
                  <p className="mt-4 font-semibold text-white">{activeCertificate.issuer}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{activeCertificate.description}</p>
                  <p className="mt-5 font-mono text-xs text-slate-500">Place the certificate at public{activeCertificate.fileUrl} and set available to true.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
