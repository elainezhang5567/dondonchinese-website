"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { ratingPlatforms } from "@/config/site";
import { EASE } from "@/lib/motion";

/** Slim strip under the hero: platform logos + scores. Data comes from `ratingPlatforms`. */
export default function TrustBar() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 1.5 }}
      className="border-y border-ivory/[0.06] bg-ink"
      aria-label="Ratings"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3.5 px-5 py-5 sm:px-8 md:flex-row md:justify-center md:gap-10 lg:px-12">
        <span className="font-sans text-[10px] uppercase tracking-eyebrow text-ivory">Rated by the neighborhood</span>
        <ul className="flex flex-col items-center gap-1.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-y-2.5">
          {ratingPlatforms.map((p, i) => (
            <li key={p.name} className="flex items-center">
              {i > 0 && <span aria-hidden="true" className="hidden h-[18px] w-px bg-ivory/[0.12] sm:mx-6 sm:block" />}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.rating} out of 5 on ${p.name} (opens in a new tab)`}
                className="inline-flex items-center gap-3 py-1.5 transition-opacity hover:opacity-75 sm:gap-3.5 sm:py-1"
              >
                <span className="inline-flex items-center gap-2">
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element -- small brand image
                    <img src={p.logo} alt={p.showName ? "" : p.name} className="h-4 w-auto" />
                  ) : null}
                  {(p.showName || !p.logo) && (
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/85">{p.name}</span>
                  )}
                </span>
                <span className="inline-flex items-center gap-1.5 font-serif text-[1.3rem] leading-none text-ivory">
                  {p.rating}
                  <Star className="h-[13px] w-[13px]" strokeWidth={1.25} fill="#B8975E" stroke="#B8975E" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
