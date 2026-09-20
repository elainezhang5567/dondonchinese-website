"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { reviews, ratingPlatforms } from "@/config/site";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Continuous review marquee. The track is rendered twice and translated by
 * exactly one copy's width (see `marquee` keyframes in globals.css) so the loop
 * is seamless. Pauses on hover/focus; reduced-motion users get a static,
 * horizontally scrollable row instead.
 */

function Stars({ count, className = "" }: { count: number; className?: string }) {
  return (
    <span className={`flex gap-1 ${className}`} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" fill={i < count ? "#B8975E" : "none"} stroke="#B8975E" />
      ))}
    </span>
  );
}

const cardBase = "flex w-[min(380px,80vw)] flex-none flex-col justify-between rounded-2xl border bg-ink p-7";

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <li className={`${cardBase} border-ivory/10`}>
      <blockquote>
        <Stars count={r.rating} className="mb-[18px]" />
        <p className="font-serif text-[1.2rem] leading-[1.4] text-ivory/90">&ldquo;{r.text}&rdquo;</p>
      </blockquote>
      <footer className="mt-6 flex items-center gap-3 font-sans text-[12.5px]">
        <span className="font-semibold text-ivory">{r.name}</span>
        <span className="text-ivory/30" aria-hidden="true">·</span>
        <span className="text-ivory-muted">{r.when}</span>
      </footer>
    </li>
  );
}

function PlatformLabel({ p }: { p: (typeof ratingPlatforms)[number] }) {
  const name = <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/80">{p.name}</span>;
  if (!p.logo) return name;
  return (
    <span className="inline-flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element -- small brand image, no optimisation needed */}
      <img src={p.logo} alt={p.showName ? "" : p.name} className="h-4 w-auto" />
      {p.showName && name}
    </span>
  );
}

function RatingsCard({ clone = false }: { clone?: boolean }) {
  return (
    <li className={`${cardBase} justify-center gap-2 border-dashed border-brand-gold/35`}>
      {ratingPlatforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={clone ? -1 : 0}
          className="group flex items-center justify-between gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-ivory/[0.04]"
        >
          <span className="flex items-center gap-4">
            <span className="font-serif text-[2.2rem] leading-none text-ivory">{p.rating}</span>
            <Stars count={5} />
          </span>
          <span className="flex items-center gap-2">
            <PlatformLabel p={p} />
            <ArrowRight className="h-4 w-4 text-ivory/60 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="sr-only">{`${p.rating} out of 5 on ${p.name} (opens in a new tab)`}</span>
        </a>
      ))}
    </li>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  // Google card sits in the middle of the run so it surfaces regularly.
  const mid = Math.ceil(reviews.length / 2);
  const run = (clone: boolean) => (
    <>
      {reviews.slice(0, mid).map((r) => <ReviewCard key={r.name} r={r} />)}
      <RatingsCard clone={clone} />
      {reviews.slice(mid).map((r) => <ReviewCard key={r.name} r={r} />)}
    </>
  );

  return (
    <section id="reviews" className="overflow-hidden border-t border-ivory/[0.06] bg-ink-soft py-20 sm:py-24 lg:py-28" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <motion.div variants={fadeUp} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={viewportOnce}>
          <p className="eyebrow mb-4">What Carnegie says</p>
          <h2 id="reviews-heading" className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-ivory">
            Loved by the Neighborhood
          </h2>
          {/* Rating pills: logo + score. One row that wraps cleanly on narrow screens. */}
          <div className="mt-7 flex flex-wrap gap-3">
            {ratingPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.rating} out of 5 on ${p.name} (opens in a new tab)`}
                className="inline-flex items-center gap-3.5 rounded-full border border-ivory/10 py-2.5 pl-4 pr-[18px] transition-colors hover:border-brand-gold/60 hover:bg-[#101110]"
              >
                <PlatformLabel p={p} />
                <span className="inline-flex items-center gap-1.5 font-serif text-[1.35rem] leading-none text-ivory">
                  {p.rating}
                  <Star className="h-3.5 w-3.5" strokeWidth={1.25} fill="#B8975E" stroke="#B8975E" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={viewportOnce}
        className={`marquee mt-12 lg:mt-16 ${reduce ? "" : "[mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]"}`}
      >
        <ul
          className={
            reduce
              ? "no-scrollbar flex gap-5 overflow-x-auto px-5 pb-3 sm:px-8"
              : "marquee-track flex w-max gap-5 will-change-transform hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          }
        >
          {run(false)}
          {/* Second copy makes the loop seamless; hidden from assistive tech. */}
          {!reduce && <div aria-hidden="true" className="contents">{run(true)}</div>}
        </ul>
      </motion.div>
    </section>
  );
}
