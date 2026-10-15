"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { VIEWPORT, fadeUp, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading
          gu="ગ્રાહક નહીં, પરિવાર"
          title="They Came as Customers. They Come Back as Family."
          sub={`${site.rating.toFixed(1)}★ across ${site.reviews}+ reviews on Google and JustDial.`}
        />

        <motion.ul
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="hide-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        >
          {testimonials.map((t, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="relative flex w-[84vw] shrink-0 snap-center flex-col rounded-sm bg-cream p-8 pt-[72px] sm:w-[60vw] md:w-auto md:p-10 md:pt-[84px]"
            >
              <motion.span
                aria-hidden
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 220, damping: 12, delay: 0.25 } },
                }}
                className="absolute left-7 top-6 origin-bottom-left font-serif text-[80px] font-semibold leading-[0.8] text-gold-muted md:left-9 md:top-8"
              >
                “
              </motion.span>
              <div className="mb-4 flex gap-1 text-gold-muted" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="flex-1 font-serif text-[21px] leading-[1.4] text-charcoal">{t.quote}</blockquote>
              <footer className="mt-8 flex items-end justify-between gap-4 border-t border-charcoal/10 pt-5">
                <div>
                  <p className="text-[14px] font-semibold text-charcoal">{t.name}</p>
                  <p className="text-[12px] text-text-secondary">{t.occasion}</p>
                </div>
                <span className="shrink-0 rounded-full border border-charcoal/15 px-3 py-1 text-[11px] font-medium text-text-secondary">
                  via {t.source}
                </span>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-6 text-center text-[12px] text-text-tertiary">
          Sample reviews for this concept demo. Real customer quotes will replace them.
        </p>
      </div>
    </section>
  );
}
