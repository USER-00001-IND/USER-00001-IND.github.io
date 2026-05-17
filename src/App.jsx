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
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <AnimatePresence>
      <div className="min-h-screen overflow-hidden bg-[#050812] text-white transition-colors duration-300 dark:bg-[#050812]">
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
