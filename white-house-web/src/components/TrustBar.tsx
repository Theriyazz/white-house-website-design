"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Landmark, MapPin, Scissors, Star } from "lucide-react";
import { EXPO_OUT, VIEWPORT, fadeUp, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.8, ease: EXPO_OUT, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

export default function TrustBar() {
  const items = [
    {
      icon: Landmark,
      label: (
        <>
          Since {site.founded} · <CountUp to={site.years} /> years, two generations
        </>
      ),
    },
    { icon: Star, label: `${site.rating.toFixed(1)}★ from ${site.reviews}+ families` },
    { icon: Scissors, label: "Our own tailors, in the shop daily" },
    { icon: MapPin, label: "Raopura & Alkapuri" },
  ];

  return (
    <section aria-label="Why families trust White House" className="border-b border-border-subtle bg-cream">
      <motion.ul
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-5 px-6 py-6 md:grid-cols-4 md:px-10 md:py-0"
      >
        {items.map(({ icon: Icon, label }, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            className="flex items-center gap-3 text-[11px] font-medium uppercase leading-snug tracking-[0.06em] text-charcoal md:h-20 md:justify-center md:text-[13px]"
          >
            <Icon size={22} strokeWidth={1.25} className="shrink-0 text-gold-muted" aria-hidden />
            <span>{label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
