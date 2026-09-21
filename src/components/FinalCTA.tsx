"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { OrderButton } from "./ui/Button";
import Seal from "./ui/Seal";
import { images } from "@/config/site";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Slow zoom-out as the section scrolls into view (transform only).
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.12, 1]);

  return (
    <section ref={ref} id="contact" className="relative isolate overflow-hidden bg-ink" aria-labelledby="cta-heading">
      {/* ---- Wide dumpling photograph ---- */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <Image
          src={images.cta.src}
          alt={images.cta.alt}
          fill
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </motion.div>
      {/* Dark gradient from the left keeps copy readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-transparent to-ink/50" />

      <div className="mx-auto flex min-h-[70vh] max-w-[1400px] items-center px-5 py-24 sm:px-8 lg:min-h-[600px] lg:px-12">
        <motion.div
          variants={stagger(0.12)}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-lg"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5 text-ivory/70">
            Good food awaits
          </motion.p>
          <motion.h2 variants={fadeUp} id="cta-heading" className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.98] text-ivory">
            Hungry Yet?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-sm font-sans text-[15px] leading-relaxed text-ivory/80 sm:text-base">
            Order online for pickup and enjoy your Don Don favorites from the comfort of home.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <OrderButton size="lg">Order Online Now</OrderButton>
          </motion.div>
        </motion.div>
      </div>

      {/* ---- Decorative round seal (desktop) ---- */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
        className="absolute right-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      >
        <Seal variant="round" className="h-24 w-24 text-[64px]" />
        <p className="text-center font-sans text-[10px] uppercase leading-[1.9] tracking-eyebrow text-ivory/60">
          Good
          <br />
          Food
          <br />
          Brighter
          <br />
          Days
        </p>
      </motion.div>
    </section>
  );
}
