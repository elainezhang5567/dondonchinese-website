/**
 * Shared Framer Motion presets so every section animates with the same feel.
 * Only transform/opacity are animated (GPU-friendly, no layout thrash).
 */
import type { Variants, Transition } from "framer-motion";

/** Smooth "expensive" easing — no bounce. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.2, ease: EASE, delay },
  }),
};

/** Parent container that staggers its children. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Standard once-only viewport trigger for scroll reveals. */
export const viewportOnce = { once: true, margin: "0px 0px -40px 0px" } as const;
