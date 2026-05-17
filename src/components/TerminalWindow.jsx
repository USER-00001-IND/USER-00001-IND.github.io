export default function TerminalWindow({ title = "terminal", children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/[0.86] shadow-glow backdrop-blur ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <p className="font-mono text-xs text-slate-500">{title}</p>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
