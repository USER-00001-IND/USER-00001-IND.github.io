export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="theme-bg absolute inset-0" />
      <div className="theme-grid absolute inset-0 opacity-40" />
      <div className="theme-fade absolute inset-x-0 bottom-0 h-1/2" />
    </div>
  );
}
