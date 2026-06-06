import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { navItems } from "../data/portfolio.js";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return navItems;
    }
    return navItems.filter((item) => item.label.toLowerCase().includes(normalizedQuery));
  }, [query]);

  useEffect(() => {
    function openPalette() {
      setOpen(true);
    }

    function handleKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", openPalette);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", openPalette);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Command palette" className="fixed inset-0 z-[75] bg-black/70 p-4 pt-24">
      <div className="premium-card mx-auto max-w-xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-white/10 p-4">
          <Search size={18} className="text-cyan-300" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
            placeholder="Search sections..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close command palette" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white">
            <X size={16} />
          </button>
        </div>
        <div className="max-h-80 overflow-auto p-2">
          {filteredItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-cyan-300/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
