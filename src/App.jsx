import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Resume from "./sections/Resume.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("theme-dark", darkMode);
    document.documentElement.classList.toggle("theme-light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <AnimatePresence>
      <div className="app-shell min-h-screen overflow-hidden text-white transition-colors duration-500">
        <Background />
        <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((value) => !value)} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
