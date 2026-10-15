"use client";

import { motion } from "framer-motion";
import { EXPO_OUT, VIEWPORT, fadeUp, stagger } from "@/lib/motion";

/** Fade + rise once, when the element first enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, delay, ease: EXPO_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({
  children,
  gap = 0.12,
  className,
}: {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}) {
  return (
    <motion.div variants={stagger(gap)} initial="hidden" whileInView="show" viewport={VIEWPORT} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/** Thin gold divider that draws from the left when it scrolls into view. */
export function GoldRule({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.2, ease: EXPO_OUT }}
      className={`block h-px origin-left bg-gold-muted ${className ?? "w-16"}`}
    />
  );
}
