"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { EXPO_OUT } from "@/lib/motion";
import { menu } from "@/data/nav";
import { site, whatsappLink } from "@/lib/site";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO_OUT } },
};

export default function MobileMenu({ headerHeight, onNavigate }: { headerHeight: number; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("men");

  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.35, ease: EXPO_OUT } }}
      transition={{ duration: 0.6, ease: EXPO_OUT }}
      style={{ height: `calc(100dvh - ${headerHeight}px)` }}
      className="absolute inset-x-0 top-full flex flex-col bg-ivory lg:hidden"
    >
      <motion.nav
        aria-label="Mobile"
        variants={list}
        initial="hidden"
        animate="show"
        data-lenis-prevent
        className="flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-4"
      >
        {menu.map((item) => {
          const isOpen = expanded === item.id;
          return (
            <motion.div key={item.id} variants={row} className="border-b border-border-subtle">
              {item.columns ? (
                <>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`m-${item.id}`}
                    onClick={() => setExpanded(isOpen ? null : item.id)}
                    className="flex min-h-14 w-full items-center justify-between py-3 text-left font-serif text-[26px] font-semibold text-charcoal"
                  >
                    {item.label}
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden
                      className={`text-gold-muted transition-transform duration-500 ease-smooth ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`m-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EXPO_OUT }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6 pb-6 pt-1">
                          {item.columns.map((col) => (
                            <div key={col.title}>
                              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8a6a2f]">
                                {col.title}
                              </p>
                              <ul>
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <a
                                      href={link.href ?? "#collection"}
                                      onClick={onNavigate}
                                      className="block py-2 text-[15px] text-text-secondary"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={onNavigate}
                  className="flex min-h-14 items-center py-3 font-serif text-[26px] font-semibold text-charcoal"
                >
                  {item.label}
                </a>
              )}
            </motion.div>
          );
        })}

        <motion.div variants={row} className="pt-6 text-[14px] leading-relaxed text-text-secondary">
          <p className="font-semibold text-charcoal">{site.outlets[0].landmark}, Vadodara</p>
          <p>{site.hours}</p>
        </motion.div>
      </motion.nav>

      <div className="grid grid-cols-2 gap-3 border-t border-border-subtle bg-cream px-6 py-4">
        <a
          href={site.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-sm border border-charcoal/20 text-[14px] font-semibold text-charcoal"
        >
          <Phone size={17} strokeWidth={1.75} aria-hidden /> Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#1f8f4e] text-[14px] font-semibold text-white"
        >
          <MessageCircle size={17} strokeWidth={1.75} aria-hidden /> WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
