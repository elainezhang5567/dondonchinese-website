"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import Button, { OrderButton } from "./ui/Button";
import Seal from "./ui/Seal";
import { site, images } from "@/config/site";
import { EASE } from "@/lib/motion";

/** Entrance timing (seconds). Staggered so nothing animates all at once. */
const T = {
  eyebrow: 0.35,
  headline: 0.5, // each line adds +0.14
  copy: 0.95,
  buttons: 1.1,
  meta: 1.25,
  decor: 1.5,
};

const headlineLines = ["Chinese food,", "made better."];

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-ink lg:min-h-[84svh]" aria-labelledby="hero-heading">
      {/* ---- Food photograph (right side on desktop, top on mobile) ---- */}
      <motion.div
        initial={reduce ? false : { scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 -z-10 lg:left-[38%]"
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover object-[70%_center] lg:object-center"
        />
        {/* Gradients keep the typography readable; the food still dominates. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:from-ink lg:via-ink/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0B0D0C_0%,rgba(11,13,12,.85)_30%,rgba(11,13,12,.35)_60%,rgba(11,13,12,.6)_100%)] lg:bg-[linear-gradient(0deg,#0B0D0C_0%,transparent_28%,rgba(11,13,12,.6)_100%)]" />
      </motion.div>

      {/* ---- Content ---- */}
      <div className="mx-auto flex min-h-[92svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:min-h-[84svh] lg:justify-center lg:px-12 lg:pb-14 lg:pt-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p {...up(T.eyebrow)} className="eyebrow mb-6 text-ivory/70">
            Fresh flavors. Good company.
          </motion.p>

          <h1
            id="hero-heading"
            className="font-serif text-[clamp(3.25rem,9.5vw,7.25rem)] leading-[0.98] tracking-[-0.01em] text-ivory"
          >
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: EASE, delay: T.headline + i * 0.14 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...up(T.copy)} className="mt-7 max-w-md font-sans text-[15px] leading-relaxed text-ivory/80 sm:text-base">
            Fresh ingredients, made-to-order favorites, and the dishes you love — right here in Carnegie.
          </motion.p>

          <motion.div {...up(T.buttons)} className="mt-9 flex flex-wrap gap-3">
            <OrderButton size="lg" />
            <Button href={site.menuUrl} variant="secondary" size="lg">
              Explore Menu
            </Button>
          </motion.div>

          <motion.ul {...up(T.meta)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-ivory/60">
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ivory">
                <MapPin className="h-4 w-4 text-ivory/50" strokeWidth={1.5} aria-hidden="true" />
                {site.address.display}
              </a>
            </li>
            <li className="hidden h-4 w-px bg-ivory/15 sm:block" aria-hidden="true" />
            <li>
              <a href={site.phone.href} className="inline-flex items-center gap-2 transition-colors hover:text-ivory">
                <Phone className="h-4 w-4 text-ivory/50" strokeWidth={1.5} aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
          </motion.ul>
        </div>
      </div>

      {/* ---- Decorative handwritten note + seal (desktop only) ---- */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: T.decor }}
        className="absolute right-12 top-[17%] hidden flex-col items-center gap-5 xl:flex"
        aria-hidden="true"
      >
        <p className="rotate-[-6deg] text-center font-hand text-[27px] leading-[1.15] text-brand-gold [text-shadow:0_2px_18px_rgba(0,0,0,.85),0_0_4px_rgba(0,0,0,.6)]">
          Good Food.
          <br />
          Brighter Days.
        </p>
        <Seal className="text-[15px]" />
      </motion.div>

    </section>
  );
}
