"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SlotImage, { useSlot } from "@/components/ui/SlotImage";
import Button, { Arrow } from "@/components/ui/Button";
import { heroSlides } from "@/data/content";
import { EXPO_IN_OUT, EXPO_OUT } from "@/lib/motion";
import { MQ, gsap, useGSAP } from "@/lib/gsap";
import { whatsappLink } from "@/lib/site";

const SLIDE_MS = 7000;

function SlideMedia({ slide, priority }: { slide: (typeof heroSlides)[number]; priority: boolean }) {
  const mobileSlot = `${slide.slot}-mobile`;
  const hasMobile = Boolean(useSlot(mobileSlot));
  return (
    <>
      <div className={hasMobile ? "absolute inset-0 hidden md:block" : "absolute inset-0"}>
        <SlotImage slot={slide.slot} alt={slide.alt} sizes="100vw" tone={slide.tone} priority={priority} />
      </div>
      {hasMobile && (
        <div className="absolute inset-0 md:hidden">
          <SlotImage slot={mobileSlot} alt={slide.alt} sizes="100vw" tone={slide.tone} priority={priority} />
        </div>
      )}
    </>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const slide = heroSlides[index];
  const autoplay = !paused && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, autoplay]);

  // As the hero scrolls away the photograph pushes in and the copy lifts off.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(".hero-media", { scale: 1.12, yPercent: 6, ease: "none", scrollTrigger: st });
        gsap.to(".hero-copy", { yPercent: -18, opacity: 0, ease: "none", scrollTrigger: st });
      });
    },
    { scope: root },
  );

  // Word index runs across both headline lines so the stagger reads as one phrase.
  const lineOffsets = slide.lines.map((_, li) =>
    slide.lines.slice(0, li).reduce((n, l) => n + l.split(" ").length, 0),
  );

  return (
    <section
      id="top"
      ref={root}
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-[85svh] min-h-[600px] w-full overflow-hidden bg-charcoal md:h-[calc(100svh-72px)] md:min-h-[640px]"
    >
      {/* Photograph */}
      <div className="hero-media absolute inset-0 will-change-transform">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: EXPO_IN_OUT }}
            className="absolute inset-0"
          >
            {/* Ken Burns: a slow push for as long as the slide is on screen. */}
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: EXPO_OUT }}
              className="absolute inset-0"
            >
              <SlideMedia slide={slide} priority={index === 0} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />
      </div>

      {/* Ornamental gold frame, drawn in from the corner on load */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-5 z-10 hidden h-[calc(100%-40px)] w-[calc(100%-40px)] overflow-visible md:block"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="none"
          stroke="var(--color-gold-muted)"
          strokeOpacity="0.45"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.2, ease: EXPO_IN_OUT }}
        />
      </svg>

      {/* Copy + role selector */}
      <div className="hero-copy relative z-20 mx-auto flex h-full max-w-[1440px] flex-col justify-end gap-8 px-6 pb-14 md:px-16 md:pb-20 xl:flex-row xl:items-end xl:justify-between xl:gap-10">
        <div className="max-w-[980px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{ hidden: {}, show: {}, exit: { opacity: 0, y: 24, transition: { duration: 0.4, ease: EXPO_OUT } } }}
            >
              {/* Gujarati lead-in: the feeling, before the English says the meaning */}
              <motion.p
                lang="gu"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: EXPO_OUT } },
                }}
                className="mb-2 flex items-center gap-4 font-gujarati text-[clamp(1.5rem,2.6vw,2.5rem)] font-bold leading-[1.45] text-gold-light md:mb-3"
              >
                {slide.gu}
                <span aria-hidden className="h-px w-12 bg-gold-light/60" />
              </motion.p>

              <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ivory">
                {slide.lines.map((line, li) => (
                  <span key={li} className="md:block">
                    {line.split(" ").map((word, wi) => {
                      const i = lineOffsets[li] + wi;
                      return (
                        <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                          <motion.span
                            variants={{
                              hidden: { y: "105%" },
                              show: { y: 0, transition: { duration: 0.9, delay: 0.45 + i * 0.07, ease: EXPO_OUT } },
                            }}
                            className="inline-block"
                          >
                            {word}
                          </motion.span>
                        </span>
                      );
                    })}
                  </span>
                ))}
              </h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.05, ease: EXPO_OUT } },
                }}
                className="mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/85 md:mt-5 md:text-[18px]"
              >
                {slide.sub}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.2, ease: EXPO_OUT } },
                }}
                className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8"
              >
                <Button href={whatsappLink("I'd like to book a fitting.")} external>
                  Book a Fitting <Arrow />
                </Button>
                <Button href={slide.href} variant="ghostLight">
                  {slide.cta}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Role selector doubles as the slide control */}
        <motion.div
          role="group"
          aria-label="Choose who you are shopping for"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: EXPO_OUT }}
          // Hidden on phones: the main CTAs already sit right above, and a third row of buttons is noise.
          className="hide-scrollbar hidden w-full shrink-0 gap-2 overflow-x-auto md:flex xl:w-[300px] xl:flex-col xl:gap-1"
        >
          {heroSlides.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={active}
                onClick={() => setIndex(i)}
                className={`relative min-h-12 shrink-0 overflow-hidden whitespace-nowrap px-5 py-3 text-left text-[14px] font-semibold tracking-wide transition-colors duration-500 ease-smooth xl:px-6 xl:py-4 ${
                  active ? "text-white" : "text-ivory/65 hover:text-ivory"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="hero-role"
                    transition={{ duration: 0.7, ease: EXPO_IN_OUT }}
                    className="absolute inset-0 bg-brand-red"
                  />
                )}
                <span className="relative flex items-center justify-between gap-6">
                  {s.role}
                  <span aria-hidden className={`transition-opacity duration-500 ease-smooth ${active ? "opacity-100" : "opacity-0"}`}>
                    →
                  </span>
                </span>
                {/* Timer: the one place a linear curve is correct. */}
                {active && autoplay && (
                  <motion.span
                    key={`timer-${index}`}
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gold-light"
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
