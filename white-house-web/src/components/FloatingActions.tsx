"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { EXPO_OUT } from "@/lib/motion";
import { site, whatsappLink } from "@/lib/site";
import { useScrollApi } from "@/components/SmoothScrollProvider";

/**
 * Always-available contact actions:
 *  - desktop: WhatsApp bubble + scroll-to-top
 *  - mobile: a Call / WhatsApp bar pinned to the bottom edge
 */
export default function FloatingActions() {
  const { scrollY } = useScroll();
  const { scrollToTop } = useScrollApi();
  const [past, setPast] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setPast(v > window.innerHeight * 0.8));

  return (
    <>
      {/* Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {past && (
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.4, ease: EXPO_OUT }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-muted bg-ivory text-charcoal shadow-lg transition-colors duration-300 ease-smooth hover:bg-gold-light"
            >
              <ArrowUp size={20} strokeWidth={1.5} />
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href={whatsappLink("I'm interested in wedding wear from White House.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with White House on WhatsApp"
          className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-xl transition-transform duration-500 ease-smooth hover:scale-105"
        >
          <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1f8f4e]" />
          <MessageCircle size={28} strokeWidth={1.5} className="relative" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-charcoal px-3 py-2 text-[12px] font-medium text-ivory opacity-0 transition-opacity duration-300 ease-smooth group-hover:opacity-100 group-focus-visible:opacity-100">
            <span lang="gu" className="font-gujarati text-[15px]">કેમ છો?</span> Ask us anything
          </span>
        </a>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {past && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: EXPO_OUT }}
            className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border-subtle bg-ivory pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(26,26,26,0.25)] md:hidden"
          >
            <a href={site.phoneHref} className="flex min-h-14 items-center justify-center gap-2 text-[14px] font-semibold text-charcoal">
              <Phone size={18} strokeWidth={1.75} aria-hidden /> Call Now
            </a>
            <a
              href={whatsappLink("I'm interested in wedding wear from White House.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 bg-[#1f8f4e] text-[14px] font-semibold text-white"
            >
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden /> WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
