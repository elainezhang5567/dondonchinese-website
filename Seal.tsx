/**
 * Small red Chinese-inspired seal used as a brand mark.
 * "東" (dōng) is used as a neutral placeholder character — replace with the
 * restaurant's own characters or an SVG logo if one exists.
 */
interface SealProps {
  variant?: "vertical" | "round";
  className?: string;
}

export default function Seal({ variant = "vertical", className = "" }: SealProps) {
  if (variant === "round") {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-full border-[3px] border-brand-red text-brand-red font-serif leading-none ${className}`}
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(165,42,29,0.35)" }}
      >
        <span className="flex flex-col items-center text-[0.42em] leading-[1.05] tracking-tight">
          <span>東</span>
          <span>東</span>
        </span>
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-col items-center justify-center rounded-[3px] border-[1.5px] border-brand-red bg-brand-red/10 px-[0.32em] py-[0.25em] font-serif leading-[1.05] text-brand-red ${className}`}
    >
      <span>東</span>
      <span>東</span>
    </span>
  );
}
