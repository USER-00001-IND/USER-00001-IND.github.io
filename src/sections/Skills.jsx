import { motion } from "framer-motion";
import { Brain, Braces, Code2, Database, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";
import { useCachedPortfolioData } from "../hooks/useCachedPortfolioData.js";

const icons = {
  Programming: Braces,
  Frontend: Code2,
  Backend: Database,
  "Machine Learning": Brain,
  Tools: Wrench,
};

export default function Skills() {
  const cachedSkillGroups = useCachedPortfolioData("portfolio_skills", skillGroups);

  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Tools for shipping ideas into working systems." command="ls ./skills --grouped" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cachedSkillGroups.map((group, index) => {
            const Icon = icons[group.title];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="premium-card group p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-glow"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-xs text-slate-300 transition group-hover:border-white/15">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
