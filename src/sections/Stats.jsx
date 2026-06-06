import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import { stats } from "../data/portfolio.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { useGitHubProfile } from "../hooks/useGitHubProfile.js";

function StatCard({ stat, value }) {
  const counter = useCountUp(value);

  return (
    <motion.div
      ref={counter.ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      className="premium-card p-5"
    >
      <p className="font-mono text-4xl font-black text-white">{counter.value}</p>
      <p className="mt-3 text-sm font-semibold text-slate-300">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const github = useGitHubProfile();
  const repositoryCount = github.user?.public_repos || 0;

  return (
    <section id="stats" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Stats" title="A quick snapshot of practical work." command="portfolio --stats" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} value={stat.source === "github" ? repositoryCount : stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
