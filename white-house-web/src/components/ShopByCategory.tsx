"use client";

import { motion } from "framer-motion";
import SlotImage from "@/components/ui/SlotImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/data/content";
import { EXPO_OUT, VIEWPORT, stagger } from "@/lib/motion";

const TONES = ["#a08a63", "#39445a", "#8fa08a", "#8a3a3a", "#5a1a22"];

export default function ShopByCategory() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeading gu="શું શોધો છો?" title="Know What You Came For?" />

        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10"
        >
          {categories.map((c, i) => (
            <motion.li
              key={c.slot}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EXPO_OUT } },
              }}
              className="w-[40%] sm:w-[28%] md:w-[16%]"
            >
              <a href={c.href} className="group block text-center">
                <div className="relative mx-auto aspect-square w-full">
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute inset-0 transition-transform duration-[900ms] ease-smooth group-hover:scale-105">
                      <SlotImage slot={c.slot} alt={c.name} sizes="(max-width: 768px) 40vw, 16vw" tone={TONES[i]} quiet />
                    </div>
                  </div>
                  {/* Gold ring appears on hover */}
                  <span
                    aria-hidden
                    className="absolute -inset-2 scale-95 rounded-full border border-gold-muted opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-5 text-[14px] font-medium text-charcoal transition-colors duration-300 ease-smooth group-hover:text-brand-red">
                  {c.name}
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
