"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import SlotImage from "@/components/ui/SlotImage";
import CarouselArrows from "@/components/ui/CarouselArrows";
import SectionHeading from "@/components/ui/SectionHeading";
import { stories } from "@/data/content";
import { EXPO_OUT, VIEWPORT } from "@/lib/motion";

const TONES = ["#6a4a2a", "#4a2a1c", "#5b4630", "#3d3226"];

export default function WeddingStories() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [limit, setLimit] = useState(0);
  const x = useMotionValue(0);
  const [pos, setPos] = useState(0);
  useMotionValueEvent(x, "change", setPos);

  // Arrows move the track one card at a time, clamped to the drag limits.
  const step = (dir: 1 | -1) => {
    const card = track.current?.querySelector("li");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track.current!).columnGap) || 0;
    const target = Math.min(0, Math.max(-limit, x.get() - dir * (card.offsetWidth + gap)));
    animate(x, target, { duration: 0.7, ease: EXPO_OUT });
  };

  // How far the track may be dragged left before its last card meets the edge.
  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      setLimit(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewport.current) ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="stories" className="overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            gu="તમારી વાતો, અમારું ગૌરવ"
            title="The Grooms We Have Dressed"
            align="left"
          />
          <CarouselArrows
            label="story"
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            canPrev={pos < -4}
            canNext={pos > -limit + 4}
            className="self-end"
          />
        </div>
      </div>

      <div ref={viewport} className="mx-auto mt-12 max-w-[1440px] px-6 md:px-10">
        <motion.ul
          ref={track}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.3, timeConstant: 260 }}
          className="flex w-max cursor-grab gap-5 active:cursor-grabbing md:gap-7"
        >
          {stories.map((s, i) => (
            <motion.li
              key={s.slot}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EXPO_OUT }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[3/4] w-[72vw] shrink-0 overflow-hidden rounded-sm sm:w-[44vw] lg:w-[360px]"
            >
              <div className="pointer-events-none absolute inset-0 transition-transform duration-[900ms] ease-smooth group-hover:scale-105">
                <SlotImage slot={s.slot} alt={`${s.names}, ${s.detail}`} sizes="(max-width: 1024px) 72vw, 360px" tone={TONES[i]} quiet />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <span className="absolute left-3 top-3 bg-ivory/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-charcoal">
                Sample story
              </span>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-[24px] font-semibold leading-tight text-white">{s.names}</h3>
                <p className="mt-1 text-[13px] text-ivory/80">{s.detail}</p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold-light">Wore: {s.wore}</p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold-muted transition-transform duration-700 ease-smooth group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
