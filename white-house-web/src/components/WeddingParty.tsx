"use client";

import { MessageCircle } from "lucide-react";
import SlotImage from "@/components/ui/SlotImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { partyRoles, partySteps } from "@/data/content";
import { whatsappLink } from "@/lib/site";

export default function WeddingParty() {
  return (
    <section id="party" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          gu="આખી જાન, એક જ ઠાઠમાં"
          title="The Whole Jaan, Dressed as One"
          sub="Varraja, pappa, bhai and the little ones. Chosen together, measured together, ready together."
        />

        <RevealGroup gap={0.12} className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {partyRoles.map((r, i) => (
            <RevealItem key={r.slot} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ivory">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-smooth group-hover:scale-105">
                    <SlotImage slot={r.slot} alt={`${r.role}: ${r.piece}`} sizes="(max-width: 1024px) 50vw, 25vw" tone="#a58f66" quiet />
                  </div>
                </div>
                <div className="mt-4">
                  <p lang="gu" className="font-gujarati text-[22px] font-semibold leading-[1.4] text-brand-red">
                    {r.gu}
                  </p>
                  <h3 className="font-serif text-[20px] font-semibold leading-tight text-charcoal">{r.role}</h3>
                  <p className="mt-1 text-[13px] text-text-secondary">
                    {r.piece} · from <span className="font-semibold text-charcoal">{r.price}</span>
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 grid gap-10 border-t border-charcoal/10 pt-12 lg:mt-28 lg:grid-cols-[2fr_1fr] lg:items-center">
          <RevealGroup gap={0.1} className="grid gap-8 sm:grid-cols-3">
            {partySteps.map((s) => (
              <RevealItem key={s.n}>
                <p className="font-serif text-[40px] font-semibold leading-none text-gold-muted">{s.n}</p>
                <h3 className="mt-3 text-[15px] font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="lg:justify-self-end">
            <Button
              href={whatsappLink("We have a wedding coming up and would like to plan outfits for the whole jaan. Date: ___  People: ___")}
              variant="whatsapp"
              external
              className="w-full sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
              Plan the Jaan on WhatsApp
            </Button>
            <p className="mt-3 text-[12px] text-text-tertiary">We reply during shop hours. No obligation.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
