"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { audiences } from "@/data/content";
import { EXPO_OUT } from "@/lib/motion";
import { site, whatsappLink } from "@/lib/site";

/**
 * "A word from us to you." The visitor says who they are in the wedding and
 * gets a short note written for them, with the one action that person is most
 * likely to take (grooms message, parents call).
 */
export default function ForYou() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = audiences.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`for-you-tab-${audiences[next].id}`)?.focus();
  };

  return (
    <section id="for-you" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          gu="તમારા માટે બે શબ્દ"
          title="From Our Family to Yours"
          sub="Tell us who you are in this wedding. Here is what we would say to you across the counter."
        />

        <Reveal
          delay={0.1}
          className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-14"
        >
          {/* Who are you? */}
          <div
            role="tablist"
            aria-label="Who are you in this wedding?"
            onKeyDown={onKeyDown}
            className="hide-scrollbar -mx-6 flex gap-2.5 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-charcoal/10 lg:px-0"
          >
            {audiences.map((a, i) => {
              const selected = i === active;
              return (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  id={`for-you-tab-${a.id}`}
                  aria-selected={selected}
                  aria-controls="for-you-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group relative shrink-0 rounded-sm border px-4 py-2.5 text-left transition-colors duration-300 ease-smooth lg:rounded-none lg:border-0 lg:border-b lg:border-charcoal/10 lg:py-4 lg:pl-7 lg:pr-4 ${
                    selected ? "border-brand-red bg-ivory lg:bg-transparent" : "border-charcoal/15"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="for-you-marker"
                      transition={{ duration: 0.5, ease: EXPO_OUT }}
                      className="absolute inset-y-0 left-0 hidden w-[3px] bg-brand-red lg:block"
                    />
                  )}
                  <span
                    lang="gu"
                    className={`block whitespace-nowrap font-gujarati text-[21px] font-semibold leading-[1.45] transition-colors duration-300 ease-smooth lg:text-[28px] ${
                      selected ? "text-brand-red" : "text-charcoal/60 group-hover:text-charcoal"
                    }`}
                  >
                    {a.gu}
                  </span>
                  <span className="block whitespace-nowrap text-[13px] text-text-secondary">{a.label}</span>
                </button>
              );
            })}
          </div>

          {/* The note, framed like a kankotri card */}
          <div
            id="for-you-panel"
            role="tabpanel"
            aria-labelledby={`for-you-tab-${current.id}`}
            tabIndex={0}
            className="relative min-h-[430px] bg-ivory px-8 py-12 shadow-[0_30px_60px_-40px_rgba(74,14,23,0.35)] sm:px-12 md:min-h-[400px] md:px-14 md:py-14"
          >
            <span aria-hidden className="pointer-events-none absolute inset-3 border border-gold-muted/50" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: EXPO_OUT } }}
                transition={{ duration: 0.6, ease: EXPO_OUT }}
                className="relative"
              >
                <p lang="gu" className="font-gujarati text-[clamp(1.5rem,2.4vw,2.125rem)] font-semibold leading-[1.5] text-brand-red">
                  {current.guLine}
                </p>
                <p className="mt-5 font-serif text-[clamp(1.25rem,1.9vw,1.625rem)] leading-[1.45] text-charcoal">
                  {current.note}
                </p>
                <p className="mt-6 flex items-center gap-3 text-[13px] font-medium text-text-secondary">
                  <span aria-hidden className="h-px w-8 bg-gold-muted" />
                  White House, near Raopura Tower
                </p>
                <div className="mt-8">
                  {current.action === "call" ? (
                    <Button href={site.phoneHref} variant="primary" className="w-full sm:w-auto">
                      <Phone size={17} strokeWidth={1.75} aria-hidden /> {current.cta}
                    </Button>
                  ) : (
                    <Button href={whatsappLink(current.message)} variant="whatsapp" external className="w-full sm:w-auto">
                      <MessageCircle size={18} strokeWidth={1.75} aria-hidden /> {current.cta}
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
