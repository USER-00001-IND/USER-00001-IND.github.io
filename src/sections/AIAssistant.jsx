import { Brain, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { aiAssistantProfile } from "../data/portfolio.js";

function ListCard({ title, items }) {
  return (
    <div className="premium-card p-5">
      <h3 className="flex items-center gap-2 text-lg font-bold text-white">
        <Brain size={18} className="text-cyan-300" /> {title}
      </h3>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="AI Focus" title="Machine learning skills, research interests, and future goals." command="ai --profile" />
        <div className="grid gap-5 md:grid-cols-2">
          <ListCard title="Machine Learning Skills" items={aiAssistantProfile.skills} />
          <ListCard title="AI Projects" items={aiAssistantProfile.projects} />
          <ListCard title="Research Interests" items={aiAssistantProfile.researchInterests} />
          <div className="premium-card p-5">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <Target size={18} className="text-emerald-300" /> Future Goals
            </h3>
            <div className="mt-4 grid gap-2">
              {aiAssistantProfile.futureGoals.map((goal) => (
                <div key={goal} className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-slate-300">
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
