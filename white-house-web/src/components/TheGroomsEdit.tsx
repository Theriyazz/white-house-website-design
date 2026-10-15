"use client";

import { useRef } from "react";
import SlotImage from "@/components/ui/SlotImage";
import Button, { Arrow } from "@/components/ui/Button";
import { GuLine } from "@/components/ui/SectionHeading";
import { groomMinis } from "@/data/content";
import { MQ, gsap, useGSAP } from "@/lib/gsap";

export default function TheGroomsEdit() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        // Gold line draws across the top, then the copy arrives from the right.
        const tl = gsap.timeline({
          defaults: { ease: "expo.inOut" },
          scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
        });
        tl.from(".groom-rule", { scaleX: 0, duration: 1.4 })
          .from(".groom-in", { x: 60, opacity: 0, duration: 1.1, stagger: 0.12 }, "-=1")
          .from(".groom-mini", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "expo.out" }, "-=0.6");
      });

      mm.add(MQ.desktop, () => {
        // The portrait moves slower than the page: depth.
        gsap.fromTo(
          ".groom-photo",
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section id="groom" ref={root} className="relative overflow-hidden bg-burgundy-deep text-ivory">
      <span aria-hidden className="groom-rule absolute inset-x-0 top-0 block h-px origin-left bg-gold-muted" />

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[3fr_2fr]">
        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[820px]">
          <div className="groom-photo absolute -inset-y-[10%] inset-x-0">
            <SlotImage
              slot="groom-feature"
              alt="A groom looking at himself in the fitting mirror while a tailor pins the hem"
              sizes="(max-width: 1024px) 100vw, 60vw"
              tone="#2e0a10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-burgundy-deep" />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:py-24 lg:pl-8 lg:pr-16">
          <GuLine dark align="left" size="lg" className="groom-in mb-3">
            વરરાજાનો વટ
          </GuLine>
          <h2 className="groom-in text-balance font-serif text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-gold-light">
            Your Turn at the Mirror
          </h2>
          <p className="groom-in mt-6 max-w-md text-[16px] leading-relaxed text-ivory/80 md:text-[17px]">
            For thirty years, grooms have stood at this mirror while a tailor pinned the last fold. Bring a photo, a
            budget and your date. We will handle the nerves.
          </p>

          <ul className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {groomMinis.map((m) => (
              <li key={m.slot} className="groom-mini">
                <a
                  href="#collection"
                  className="group relative block overflow-hidden bg-charcoal/30 transition-transform duration-500 ease-smooth hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <SlotImage slot={m.slot} alt={m.name} sizes="(max-width: 1024px) 30vw, 12vw" tone="#3a1118" quiet />
                  </div>
                  <div className="px-3 py-3">
                    <h3 className="font-serif text-[17px] font-semibold leading-tight text-ivory">{m.name}</h3>
                    <p className="mt-0.5 text-[11px] text-ivory/70">
                      Starting at <span className="font-semibold text-gold-light">{m.price}</span>
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-[0.3] bg-gold-muted transition-transform duration-700 ease-smooth group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="groom-in mt-10">
            <Button href="#collection" variant="ghostLight">
              See the Groom Collection <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
