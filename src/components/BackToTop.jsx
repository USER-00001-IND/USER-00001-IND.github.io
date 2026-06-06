import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 700);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-[#050812]/90 text-white shadow-glow backdrop-blur transition hover:border-cyan-300/50">
      <ArrowUp size={18} />
    </a>
  );
}
