import SectionHeading from "./SectionHeading.jsx";

function SkeletonLine({ className = "" }) {
  return <div className={`skeleton-block ${className}`} />;
}

function ProjectCardSkeleton() {
  return (
    <div className="premium-card p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="w-full">
          <SkeletonLine className="h-7 w-32 rounded-full" />
          <SkeletonLine className="mt-4 h-7 w-3/4 rounded-md" />
        </div>
        <SkeletonLine className="h-8 w-8 shrink-0 rounded-lg" />
      </div>
      <SkeletonLine className="h-4 w-full rounded-md" />
      <SkeletonLine className="mt-3 h-4 w-11/12 rounded-md" />
      <SkeletonLine className="mt-3 h-4 w-2/3 rounded-md" />
      <SkeletonLine className="mt-5 h-12 w-full rounded-lg" />
      <div className="mt-5 flex flex-wrap gap-2">
        {[0, 1, 2, 3].map((item) => (
          <SkeletonLine key={item} className="h-7 w-24 rounded-full" />
        ))}
      </div>
    </div>
  );
}

function AchievementCardSkeleton() {
  return (
    <div className="premium-card p-5 sm:p-6">
      <SkeletonLine className="h-4 w-28 rounded-md" />
      <SkeletonLine className="mt-4 h-8 w-3/4 rounded-md" />
      <SkeletonLine className="mt-3 h-4 w-2/3 rounded-md" />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <SkeletonLine key={item} className="h-20 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

function InternshipCardSkeleton() {
  return (
    <div className="premium-card p-5 sm:p-6">
      <SkeletonLine className="h-11 w-11 rounded-lg" />
      <SkeletonLine className="mt-5 h-4 w-28 rounded-md" />
      <SkeletonLine className="mt-4 h-8 w-2/3 rounded-md" />
      <SkeletonLine className="mt-4 h-10 w-full rounded-lg" />
      <div className="mt-5 grid gap-3">
        {[0, 1, 2, 3].map((item) => (
          <SkeletonLine key={item} className="h-5 rounded-md" />
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {[0, 1, 2, 3, 4].map((item) => (
          <SkeletonLine key={item} className="h-7 w-24 rounded-full" />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Selected work presented as executable ideas." command="git log --oneline projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {[0, 1, 2, 3].map((item) => (
            <ProjectCardSkeleton key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AchievementsSkeleton() {
  return (
    <section id="achievements" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Hackathon work and research experience." command="cat achievements.md" />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AchievementCardSkeleton />
          <InternshipCardSkeleton />
        </div>
      </div>
    </section>
  );
}

export function ResumeSkeleton() {
  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Resume" title="A focused preview for recruiters." command="open /public/resume.pdf" />
        <div className="premium-card grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SkeletonLine className="h-14 w-14 rounded-2xl" />
            <SkeletonLine className="mt-5 h-8 w-72 max-w-full rounded-md" />
            <SkeletonLine className="mt-4 h-4 w-full rounded-md" />
            <SkeletonLine className="mt-3 h-4 w-3/4 rounded-md" />
            <SkeletonLine className="mt-6 h-12 w-44 rounded-xl" />
          </div>
          <div className="grid gap-4">
            {[0, 1].map((item) => (
              <SkeletonLine key={item} className="h-32 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
