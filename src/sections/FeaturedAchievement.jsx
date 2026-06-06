import { CreditCard, Trophy, Users } from "lucide-react";
import { achievements } from "../data/portfolio.js";

export default function FeaturedAchievement() {
  const devFusion = achievements[0];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="featured-achievement-title">
      <div className="mx-auto max-w-7xl">
        <article className="premium-card p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/[0.08] px-3 py-2 font-mono text-xs font-semibold text-cyan-200">
                <Trophy size={15} /> Featured Achievement
              </p>
              <h2 id="featured-achievement-title" className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                {devFusion.title}
              </h2>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                <p><span className="font-semibold text-cyan-200">Organizer:</span> {devFusion.organizer}</p>
                <p className="flex items-center gap-2"><Users size={16} className="text-cyan-300" /> Team: {devFusion.team}</p>
                <p className="flex items-center gap-2"><CreditCard size={16} className="text-emerald-300" /> Role: {devFusion.role}</p>
              </div>
            </div>
            <p className="text-base leading-8 text-slate-300">
              Participated in DevFusion 2.0 Developers Hackathon and contributed to secure payment workflow, responsive UI design, and production ready user experience improvements.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
