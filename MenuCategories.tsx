"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site, menuCategories } from "@/config/site";
import { fadeUp, stagger, viewportOnce, EASE } from "@/lib/motion";

export default function MenuCategories() {
  const reduce = useReducedMotion();

  return (
    <section id="menu" className="border-b border-ivory/5 bg-ink-lift pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-[72px]" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading row */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="eyebrow mb-4">Explore our menu</p>
            <h2 id="menu-heading" className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-ivory">
              Something for Everyone
            </h2>
          </div>
          <Link
            href={site.menuUrl}
            className="group inline-flex items-center gap-3 pb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:text-ivory"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Categories: horizontal swipe on mobile, evenly spaced row on desktop */}
        <motion.ul
          variants={stagger(0.1, 0.15)}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-6 lg:gap-8 lg:overflow-visible lg:px-0"
        >
          {menuCategories.map((cat) => (
            <motion.li
              key={cat.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="w-[42vw] flex-none snap-center sm:w-[30vw] lg:w-auto"
            >
              <Link href={cat.href} className="group flex flex-col items-center gap-5 outline-none" aria-label={`View ${cat.name} on the menu`}>
                <span className="relative aspect-square w-full max-w-[200px] rounded-full transition-transform duration-300 ease-out-expo motion-safe:group-hover:-translate-y-1.5 motion-safe:group-focus-visible:-translate-y-1.5">
                  {/* Warm glow on hover */}
                  <span className="absolute inset-0 rounded-full opacity-0 shadow-glow transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                  <span className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-ivory/[0.14] shadow-[0_24px_40px_-24px_rgba(0,0,0,.9)] transition-[box-shadow] duration-300 group-hover:ring-brand-gold/40">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 200px"
                      className="object-cover transition-transform duration-300 ease-out-expo motion-safe:group-hover:scale-[1.07]"
                    />
                  </span>
                </span>
                <span className="font-sans text-[15px] text-ivory/75 transition-colors duration-300 group-hover:text-ivory">{cat.name}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
