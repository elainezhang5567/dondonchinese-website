"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Soup, Users, ShoppingBag, type LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  { icon: Leaf, title: "Fresh Ingredients", text: "Quality ingredients in every dish." },
  { icon: Soup, title: "Made to Order", text: "Cooked fresh, every time." },
  { icon: Users, title: "A Local Favorite", text: `Proudly serving the ${site.address.city} community.` },
  { icon: ShoppingBag, title: "Easy Online Ordering", text: "Your favorites, just a click away." },
];

export default function Features() {
  const reduce = useReducedMotion();

  return (
    <section id="catering" className="bg-ink py-20 sm:py-24 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="eyebrow mb-4">Why Don Don</p>
          <h2 id="why-heading" className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-ivory">
            Fresh. Fast. Always Satisfying.
          </h2>
        </motion.div>

        <motion.ul
          variants={stagger(0.12, 0.1)}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-y-0"
        >
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              // Subtle vertical dividers: between columns on mobile (2-col) and desktop (4-col)
              className={`flex flex-col items-center px-4 text-center lg:px-8 ${
                i % 2 === 1 ? "border-l border-ivory/10" : ""
              } ${i === 2 ? "lg:border-l lg:border-ivory/10" : ""}`}
            >
              <Icon className="h-9 w-9 text-ivory/85" strokeWidth={1} aria-hidden="true" />
              <h3 className="mt-6 font-sans text-[15px] font-semibold text-ivory">{title}</h3>
              <p className="mt-2 max-w-[200px] font-sans text-[13.5px] leading-relaxed text-ivory-muted">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
