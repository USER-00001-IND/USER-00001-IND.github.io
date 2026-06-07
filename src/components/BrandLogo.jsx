export default function BrandLogo({ compact = false }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2 text-white">
      <span className="grid h-8 w-8 shrink-0 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 64 64" className="h-8 w-8" focusable="false">
          <path fill="#000" d="M32 2 62 32 32 62 2 32z" />
          <path fill="none" stroke="currentColor" strokeWidth="4" d="M32 5 59 32 32 59 5 32z" />
          <path fill="currentColor" d="M17 19h5v26h-5zM22 19h10v5H22zM29 24h5v8h-5zM22 31h10v5H22zM23 36h6l8 9h-7zM38 19h5v26h-5zM47 19h5v26h-5zM43 30h4v5h-4z" />
        </svg>
      </span>
      {!compact && <span className="truncate font-mono text-sm font-semibold">rajmohan.dev</span>}
    </span>
  );
}
