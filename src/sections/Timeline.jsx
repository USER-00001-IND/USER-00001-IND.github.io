import SectionHeading from "../components/SectionHeading.jsx";
import { timeline } from "../data/portfolio.js";

export default function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Timeline" title="Professional journey and learning path." command="history --journey" />
        <div className="relative grid gap-5">
          {timeline.map((item) => (
            <article key={item.year} className="premium-card grid gap-4 p-5 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-3xl font-black text-cyan-300">{item.year}</p>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
