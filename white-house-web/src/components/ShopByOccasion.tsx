"use client";

import { useRef, useState } from "react";
import SlotImage from "@/components/ui/SlotImage";
import CarouselArrows from "@/components/ui/CarouselArrows";
import SectionHeading from "@/components/ui/SectionHeading";
import { occasions } from "@/data/content";
import { MQ, ScrollTrigger, gsap, useGSAP } from "@/lib/gsap";

export default function ShopByOccasion() {
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: false, end: true });

  const updateEdges = () => {
    const el = list.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft > 4, end: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  };

  // Move one card (plus gap) per press; scroll-snap settles it.
  const step = (dir: 1 | -1) => {
    const el = list.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 16), behavior: "smooth" });
  };

  // Arches rise and unveil from the base, one after another.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const cards = gsap.utils.toArray<HTMLElement>(".arch");
        gsap.set(cards, { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" });
        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              stagger: 0.15,
              ease: "expo.out",
              clearProps: "clipPath",
            }),
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="occasions" ref={root} className="overflow-hidden bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          gu="શુભ પ્રસંગો"
          title="From the First Pithi to the Last Photo"
          sub="Tell us your functions. We will plan a look for each one, and keep every one inside your budget."
        />
      </div>

      {/* Phones and small tablets: the arches scroll sideways, so give them arrows. */}
      <div className="mx-auto mt-10 flex max-w-[1440px] justify-end px-6 md:hidden">
        <CarouselArrows
          label="occasion"
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          canPrev={edges.start}
          canNext={edges.end}
        />
      </div>

      <ul
        ref={list}
        onScroll={updateEdges}
        className="hide-scrollbar mx-auto mt-4 flex md:mt-14 max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:px-10">
        {occasions.map((o) => (
          <li key={o.slot} className="arch w-[62vw] shrink-0 snap-center sm:w-[38vw] md:w-auto">
            <a href="#collection" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-smooth group-hover:scale-105">
                  <SlotImage slot={o.slot} alt={`${o.name} outfit`} sizes="(max-width: 768px) 62vw, 20vw" tone={o.tone} quiet />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                {/* Gold arch outline fades in on hover */}
                <div className="absolute inset-2 rounded-t-full border border-gold-light opacity-0 transition-opacity duration-500 ease-smooth group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-center transition-transform duration-500 ease-smooth group-hover:-translate-y-1.5">
                  <p lang="gu" className="font-gujarati text-[21px] font-semibold leading-[1.4] text-gold-light [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]">
                    {o.gu}
                  </p>
                  <h3 className="font-serif text-[19px] font-semibold uppercase leading-tight tracking-[0.08em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
                    {o.name}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-center text-[13px] text-text-secondary">{o.note}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
