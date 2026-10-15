"use client";

import { useRef } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import SlotImage from "@/components/ui/SlotImage";
import Button from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { GuLine } from "@/components/ui/SectionHeading";
import { MQ, gsap, useGSAP } from "@/lib/gsap";
import { site, whatsappLink } from "@/lib/site";

export default function VisitStore() {
  const root = useRef<HTMLElement>(null);

  // Slow push-in on the store photograph while the section is in view.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          ".visit-photo",
          { scale: 1 },
          {
            scale: 1.15,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section id="visit" ref={root} className="relative overflow-hidden bg-charcoal py-24 text-ivory md:py-32">
      {/* Toran over the doorway: you are welcome here */}
      <div aria-hidden className="toran absolute inset-x-0 top-0 z-10" />
      <div className="visit-photo absolute inset-0 will-change-transform">
        <SlotImage slot="store-visit" alt="A tailor showing a groom an ivory sherwani across the counter" sizes="100vw" tone="#3a2a1c" quiet />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/55 via-[#1a1410]/70 to-[#1a1410]/90" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GuLine dark size="lg" className="mb-3">
            આવો, બેસો, ચા પીઓ
          </GuLine>
          <h2 className="text-balance font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Come, Sit, Have Chai. Then We Talk Clothes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ivory/80 md:text-[17px]">
            Touch the cloth, try the fit, bring the whole family. Nobody here will hurry you.
          </p>
        </Reveal>

        <RevealGroup gap={0.14} className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {site.outlets.map((o) => (
            <RevealItem key={o.id}>
              <article className="flex h-full flex-col border border-ivory/15 bg-charcoal/55 p-7 backdrop-blur-sm md:p-8">
                <p lang="gu" className="font-gujarati text-[21px] font-semibold leading-[1.4] text-gold-light">
                  {o.nameGu}
                </p>
                <h3 className="font-serif text-[30px] font-semibold leading-tight">{o.name}</h3>
                <p className="mt-3 flex items-start gap-2.5 text-[15px] font-semibold text-ivory">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-light" aria-hidden />
                  {o.landmark}
                </p>
                <p className="mt-1 pl-[28px] text-[14px] text-ivory/75">{o.address}</p>
                <p className="mt-3 flex-1 pl-[28px] text-[13px] leading-relaxed text-ivory/65">{o.note}</p>
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 self-start text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-light transition-colors duration-300 ease-smooth hover:text-white"
                >
                  Get directions
                  <span aria-hidden className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-6">
          <p className="flex items-center gap-2.5 text-[14px] font-medium text-ivory/90">
            <Clock size={17} strokeWidth={1.5} className="text-gold-light" aria-hidden />
            {site.hours}
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button href={whatsappLink("I'd like to visit the store. Could you confirm a good time?")} variant="whatsapp" external>
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden /> WhatsApp Us
            </Button>
            <Button href={site.phoneHref} variant="primary">
              <Phone size={17} strokeWidth={1.75} aria-hidden /> Call {site.phoneDisplay}
            </Button>
            <Button href={site.outlets[0].mapUrl} variant="ghostLight" external>
              <MapPin size={17} strokeWidth={1.75} aria-hidden /> Get Directions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
