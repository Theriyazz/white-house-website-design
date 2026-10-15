"use client";

import { useRef } from "react";
import SlotImage from "@/components/ui/SlotImage";
import Button, { Arrow } from "@/components/ui/Button";
import { GuLine } from "@/components/ui/SectionHeading";
import { heritageCopy } from "@/data/content";
import { MQ, gsap, useGSAP } from "@/lib/gsap";

const HEADING = "A Shop That Remembers Your Family";

export default function HeritageStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        gsap.from(".heritage-rule", {
          scaleX: 0,
          duration: 1.6,
          ease: "expo.inOut",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
        // Heading words rise out of their own baseline.
        gsap.from(".heritage-word", {
          yPercent: 110,
          duration: 1,
          stagger: 0.06,
          ease: "expo.out",
          scrollTrigger: { trigger: ".heritage-heading", start: "top 82%", once: true },
        });
        // The paragraph lights up word by word as you read down the page.
        gsap.fromTo(
          ".heritage-ink",
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: ".heritage-body", start: "top 80%", end: "bottom 55%", scrub: true },
          },
        );
      });

      mm.add(MQ.desktop, () => {
        const st = { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true };
        gsap.fromTo(".heritage-left", { yPercent: 14 }, { yPercent: -14, ease: "none", scrollTrigger: st });
        gsap.fromTo(".heritage-right", { yPercent: -10 }, { yPercent: 18, ease: "none", scrollTrigger: st });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="story"
      ref={root}
      className="relative overflow-hidden bg-gradient-to-b from-burgundy-deep to-charcoal py-24 text-ivory md:py-36"
    >
      <div aria-hidden className="bandhani absolute inset-0" />
      <span aria-hidden className="heritage-rule absolute inset-x-0 top-0 block h-px origin-center bg-gold-muted" />

      {/* Flanking photographs (desktop) */}
      <div className="heritage-left absolute left-[3%] top-[18%] hidden aspect-[3/4] w-[17%] max-w-[260px] overflow-hidden xl:block">
        <SlotImage slot="heritage-left" alt="A groom and his family choosing sherwani cloth with the tailor" sizes="18vw" tone="#5a1a22" quiet />
      </div>
      <div className="heritage-right absolute right-[3%] top-[30%] hidden aspect-[3/4] w-[17%] max-w-[260px] overflow-hidden xl:block">
        <SlotImage slot="heritage-right" alt="A tailor with brocades, sketches and swatches in the workshop" sizes="18vw" tone="#3b2a1c" quiet />
      </div>

      <div className="relative mx-auto max-w-[680px] px-6 text-center">
        <GuLine dark size="lg" className="mb-4">
          પેઢી દર પેઢી
        </GuLine>

        <h2 className="heritage-heading text-balance font-serif text-[clamp(2.25rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ivory">
          {HEADING.split(" ").map((w, i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <span className="heritage-word inline-block">{w}</span>
            </span>
          ))}
        </h2>

        <p className="heritage-body mt-10 font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.5] text-ivory">
          {heritageCopy.split(" ").map((w, i) => (
            <span key={i} className="heritage-ink">
              {w}{" "}
            </span>
          ))}
        </p>

        <div className="mt-12">
          <Button href="#visit" variant="ghostLight">
            Visit the Shop <Arrow />
          </Button>
        </div>
      </div>
    </section>
  );
}
