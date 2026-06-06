import SectionHeading from "../components/SectionHeading.jsx";

const auditItems = [
  ["Dead code", "No obvious dead components after the current pass; keep checking generated lazy chunks after future sections are added."],
  ["Unused assets", "profile-photo.jpg and resume.pdf are used. Certificate preview files are not present yet and should be added only when real certificates are available."],
  ["Unused dependencies", "framer-motion and lucide-react are actively used. No new dependency was added for analytics, PWA, or modals."],
  ["Performance", "Heavy sections are lazy loaded, Google Fonts import was removed, profile image has dimensions, and static skeletons are lightweight."],
  ["Accessibility", "Focus states, ARIA labels, modals, form errors, and keyboard-friendly buttons were improved. A manual screen reader pass is still recommended."],
  ["SEO", "Meta tags, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt, and PWA manifest were added for better discoverability."],
  ["Future upgrades", "Add real certificate PDFs, real project screenshots, analytics IDs, and deployment-level HTTP headers on a host that supports custom headers."],
];

export default function FinalAudit() {
  return (
    <section id="audit" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Audit" title="Final improvement report and future upgrade path." command="lighthouse --audit" />
        <div className="grid gap-4 md:grid-cols-2">
          {auditItems.map(([title, detail]) => (
            <article key={title} className="premium-card p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
