"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site, images } from "@/config/site";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function StoryPhoto({ photo, sizes }: { photo: (typeof images.story)[number]; sizes: string }) {
  return (
    <motion.figure variants={fadeUp} className="relative m-0 min-h-0 overflow-hidden border border-brand-gold/50 bg-ink p-1.5 shadow-[0_20px_40px_-24px_rgba(0,0,0,.9)]">
      <span className="relative block h-full w-full overflow-hidden outline outline-1 outline-ivory/[0.08]">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover saturate-[.82] contrast-[1.03]" />
      </span>
    </motion.figure>
  );
}

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The background glyph fades in as the section scrolls into view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glyphOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  return (
    <section ref={ref} id="story" className="relative overflow-hidden bg-ink-soft" aria-labelledby="story-heading">
      <div className="grid lg:grid-cols-2">
        {/* ---- Family photo mosaic: two landscapes stacked left, tall photo right ---- */}
        <motion.div
          variants={stagger(0.15)}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="grid aspect-square grid-cols-[1.05fr_1fr] gap-3 bg-ink-soft p-3 sm:gap-4 sm:p-4 lg:aspect-auto lg:min-h-[680px] lg:gap-[18px] lg:p-[18px]"
          aria-label="Photos of the family behind Don Don"
        >
          <div className="grid min-h-0 grid-rows-2 gap-3 sm:gap-4 lg:gap-[18px]">
            {[images.story[0], images.story[2]].map((photo) => (
              <StoryPhoto key={photo.src} photo={photo} sizes="(max-width: 1024px) 50vw, 26vw" />
            ))}
          </div>
          <StoryPhoto photo={images.story[1]} sizes="(max-width: 1024px) 50vw, 24vw" />
        </motion.div>

        {/* ---- Copy ---- */}
        <div className="relative flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
          {/* Huge, near-invisible brush character used as texture */}
          <motion.span
            style={{ opacity: glyphOpacity }}
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-serif text-[22rem] leading-none text-ivory/[0.035] lg:text-[28rem]"
          >
            食
          </motion.span>

          <motion.div
            variants={stagger(0.12)}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
            className="relative max-w-lg"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-5">
              Our story
            </motion.p>
            <motion.h2 variants={fadeUp} id="story-heading" className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] text-ivory">
              More Than
              <br />
              Just a Meal
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 font-serif text-[clamp(1.35rem,2vw,1.6rem)] italic leading-[1.3] text-brand-gold">
              {site.story.lead}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-[18px] max-w-[34rem] font-sans text-[15px] leading-relaxed text-ivory/70 sm:text-base">
              {site.story.body}
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-[22px] sm:gap-y-2">
              {site.story.facts.map((f, i) => (
                <li key={f} className="flex items-center gap-[22px] whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/75">
                  {i > 0 && <span aria-hidden="true" className="hidden h-3.5 w-px bg-ivory/10 sm:block" />}
                  {f}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
