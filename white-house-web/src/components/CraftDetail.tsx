"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import SlotImage from "@/components/ui/SlotImage";
import Button, { Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GuLine } from "@/components/ui/SectionHeading";
import { craft } from "@/data/content";
import { MQ, ScrollTrigger, gsap, useGSAP } from "@/lib/gsap";
import { whatsappLink } from "@/lib/site";

const TONES = ["#6b5a3c", "#5a1a22", "#2f2a26"];

export default function CraftDetail() {
  const root = useRef<HTMLElement>(null);

  // Desktop: the photograph column pins while the three chapters scroll past.
  // Each chapter crossfades its photograph in and fills the progress rail.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.desktop, () => {
        const photos = gsap.utils.toArray<HTMLElement>(".craft-photo");
        const steps = gsap.utils.toArray<HTMLElement>(".craft-step");
        const counter = root.current!.querySelector<HTMLElement>(".craft-count");

        gsap.set(photos, { opacity: 0, scale: 1.08 });
        gsap.set(photos[0], { opacity: 1, scale: 1 });

        ScrollTrigger.create({
          trigger: ".craft-grid",
          start: "top top",
          end: "bottom bottom",
          pin: ".craft-pin",
          pinSpacing: false,
        });

        gsap.fromTo(
          ".craft-rail",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".craft-grid", start: "top top", end: "bottom bottom", scrub: true },
          },
        );

        const show = (i: number) => {
          photos.forEach((p, j) =>
            gsap.to(p, {
              opacity: j === i ? 1 : 0,
              scale: j === i ? 1 : 1.08,
              duration: 1.1,
              ease: "expo.out",
              overwrite: true,
            }),
          );
          if (counter) counter.textContent = craft[i].n;
        };

        steps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && show(i),
          });
          gsap.from(step.querySelectorAll(".craft-line"), {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: { trigger: step, start: "top 70%", once: true },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="tailoring" ref={root} className="bg-charcoal text-ivory">
      <div className="craft-grid mx-auto max-w-[1440px] lg:grid lg:grid-cols-2">
        {/* Pinned photograph column (desktop only) */}
        <div className="craft-pin relative hidden h-screen overflow-hidden lg:block">
          {craft.map((c, i) => (
            <div key={c.slot} className="craft-photo absolute inset-0 will-change-transform">
              <SlotImage slot={c.slot} alt={c.title} sizes="50vw" tone={TONES[i]} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/60" />
          <div className="absolute bottom-10 left-10 flex items-end gap-4">
            <span className="craft-count font-serif text-[88px] font-semibold leading-none text-gold-light">01</span>
            <span className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory/70">/ 03</span>
          </div>
          <div className="absolute right-0 top-[22%] h-[56%] w-px bg-ivory/15">
            <span className="craft-rail block h-full w-px origin-top bg-gold-muted" />
          </div>
        </div>

        {/* Chapters */}
        <div className="px-6 py-20 md:px-12 lg:px-16 lg:py-0">
          <Reveal className="lg:flex lg:h-[60vh] lg:flex-col lg:justify-end lg:pb-16">
            <GuLine dark align="left" size="lg" className="mb-3">
              દરેક રૂપિયાનો હિસાબ
            </GuLine>
            <h2 className="text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Where Every Rupee Goes
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ivory/75">
              A sherwani is cloth, hand-work and fit. See what goes into each, before you pay for it.
            </p>
          </Reveal>

          {craft.map((c, i) => (
            <article key={c.slot} className="craft-step mt-14 lg:mt-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
              {/* Mobile and tablet: each chapter carries its own photograph */}
              <div className="relative mb-7 aspect-[4/5] overflow-hidden rounded-sm lg:hidden">
                <SlotImage slot={c.slot} alt={c.title} sizes="100vw" tone={TONES[i]} quiet />
              </div>
              <p className="craft-line flex items-baseline gap-3 text-gold-light">
                <span className="font-serif text-[22px] font-semibold">{c.n}</span>
                <span lang="gu" className="font-gujarati text-[21px] font-semibold leading-[1.4]">
                  {c.gu}
                </span>
              </p>
              <h3 className="craft-line mt-2 font-serif text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-tight">
                {c.title}
              </h3>
              <p className="craft-line mt-4 max-w-md text-[16px] leading-relaxed text-ivory/75 md:text-[17px]">{c.body}</p>
              <p className="craft-line mt-6 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-muted text-gold-light">
                  <Check size={13} strokeWidth={2} aria-hidden />
                </span>
                {c.point}
              </p>
              {i === craft.length - 1 && (
                <div className="craft-line mt-10">
                  <p lang="gu" className="mb-5 font-gujarati text-[22px] font-semibold leading-[1.45] text-gold-light">
                    માપ અમારું, મોભો તમારો.
                  </p>
                  <Button href={whatsappLink("I'd like to book a fitting and see the cloth in the shop.")} external>
                    Book a Fitting <Arrow />
                  </Button>
                </div>
              )}
            </article>
          ))}
          <div className="hidden lg:block lg:h-[20vh]" />
        </div>
      </div>
    </section>
  );
}
