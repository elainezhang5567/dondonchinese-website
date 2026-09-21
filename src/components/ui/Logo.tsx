import Link from "next/link";
import Seal from "./Seal";
import { site } from "@/config/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="#top" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.fullName} — home`}>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.55rem] uppercase tracking-[0.14em] text-ivory">{site.name}</span>
        <span className="mt-1 font-sans text-[8.5px] uppercase tracking-[0.34em] text-ivory-muted">{site.tagline}</span>
      </span>
      <Seal className="text-[13px]" />
    </Link>
  );
}
