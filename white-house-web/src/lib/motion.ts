import type { Variants } from "framer-motion";

// The only two curves used on the site. `ease`, `ease-in`, `ease-out` and
// `linear` are banned by the design system (timers are the one exception).
export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const EXPO_IN_OUT = [0.87, 0, 0.13, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO_OUT } },
};

export const stagger = (gap = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const VIEWPORT = { once: true, amount: 0.15 } as const;
