"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SlotImage from "@/components/ui/SlotImage";
import { EXPO_OUT } from "@/lib/motion";
import { popularSearches, type MenuItem } from "@/data/nav";

const column = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO_OUT } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: EXPO_OUT } },
};

export function MegaPanel({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) {
  const tiles = item.tiles ?? [];
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid grid-cols-12 gap-x-8"
    >
      <div className="col-span-7 grid grid-cols-3 gap-x-8 xl:col-span-7">
        {item.columns?.map((col) => (
          <motion.div key={col.title} variants={column}>
            <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-charcoal">
              {col.title}
            </h3>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href ?? "#collection"}
                    onClick={onNavigate}
                    className="group/link inline-flex items-center gap-2 py-1.5 text-[15px] text-text-secondary transition-colors duration-300 ease-smooth hover:text-charcoal"
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-muted transition-transform duration-500 ease-smooth group-hover/link:scale-x-100"
                      />
                    </span>
                    {link.tag && (
                      <span className="rounded-full bg-brand-red px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                        {link.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className={`col-span-5 grid gap-4 ${tiles.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {tiles.map((tile) => (
          <motion.a
            key={tile.slot + tile.title}
            href={tile.href}
            onClick={onNavigate}
            variants={column}
            className="group/tile relative block h-[300px] overflow-hidden rounded-sm"
          >
            <motion.div
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: EXPO_OUT }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-smooth group-hover/tile:scale-105">
                <SlotImage slot={tile.slot} alt={`${tile.kicker} ${tile.title}`} sizes="320px" tone={tile.tone} quiet />
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">{tile.kicker}</p>
              <p className="font-serif text-[28px] font-semibold leading-none text-ivory">{tile.title}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-ivory">
                Explore
                <span aria-hidden className="transition-transform duration-500 ease-smooth group-hover/tile:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export function SearchPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="mx-auto max-w-3xl">
      <motion.form
        variants={column}
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          onNavigate();
          document.getElementById("collection")?.scrollIntoView();
        }}
        className="flex items-center gap-4 border-b border-charcoal/30 pb-3 focus-within:border-gold-muted"
      >
        <Search size={22} strokeWidth={1.5} className="text-text-tertiary" aria-hidden />
        <label htmlFor="site-search" className="sr-only">
          Search the collection
        </label>
        <input
          id="site-search"
          type="search"
          autoFocus
          placeholder="Search sherwani, Jodhpuri, kurta set…"
          className="w-full bg-transparent font-serif text-[26px] text-charcoal placeholder:text-text-tertiary focus:outline-none"
        />
        <button type="submit" className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal hover:text-brand-red">
          Search
        </button>
      </motion.form>
      <motion.div variants={column} className="mt-8">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-text-tertiary">Popular right now</p>
        <ul className="flex flex-wrap gap-2.5">
          {popularSearches.map((term) => (
            <li key={term}>
              <a
                href="#collection"
                onClick={onNavigate}
                className="inline-block rounded-full border border-charcoal/15 px-4 py-2 text-[14px] text-charcoal transition-colors duration-300 ease-smooth hover:border-gold-muted hover:bg-cream"
              >
                {term}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
