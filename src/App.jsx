import { Suspense, lazy, useEffect, useState } from "react";
import BackToTop from "./components/BackToTop.jsx";
import Background from "./components/Background.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { AchievementsSkeleton, ProjectsSkeleton, ResumeSkeleton } from "./components/Skeletons.jsx";
import Hero from "./sections/Hero.jsx";
import FeaturedAchievement from "./sections/FeaturedAchievement.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { initAnalytics } from "./utils/analytics.js";

const Stats = lazy(() => import("./sections/Stats.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const GitHubActivity = lazy(() => import("./sections/GitHubActivity.jsx"));
const Timeline = lazy(() => import("./sections/Timeline.jsx"));
const Achievements = lazy(() => import("./sections/Achievements.jsx"));
const AIAssistant = lazy(() => import("./sections/AIAssistant.jsx"));
const Resume = lazy(() => import("./sections/Resume.jsx"));
const CoreTechnologies = lazy(() => import("./sections/CoreTechnologies.jsx"));

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    initAnalytics();
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("theme-dark", darkMode);
    document.documentElement.classList.toggle("theme-light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-shell min-h-screen overflow-hidden text-white transition-colors duration-500">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ScrollProgress />
        <Background />
        <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((value) => !value)} />
        <CommandPalette />
        <main id="main-content" className="relative z-10">
          <Hero />
          <FeaturedAchievement />
          <About />
          <Skills />
          <ErrorBoundary>
            <Suspense fallback={<ProjectsSkeleton />}>
              <Stats />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ProjectsSkeleton />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ProjectsSkeleton />}>
              <GitHubActivity />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<AchievementsSkeleton />}>
              <Timeline />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<AchievementsSkeleton />}>
              <Achievements />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<AchievementsSkeleton />}>
              <AIAssistant />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ResumeSkeleton />}>
              <Resume />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<ResumeSkeleton />}>
              <CoreTechnologies />
            </Suspense>
          </ErrorBoundary>
          <Contact />
        </main>
        <BackToTop />
        <Footer />
    </div>
  );
}
