"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone, Search, X } from "lucide-react";
import { EXPO_OUT } from "@/lib/motion";
import { menu } from "@/data/nav";
import { site, whatsappLink } from "@/lib/site";
import { useScrollApi } from "@/components/SmoothScrollProvider";
import { MegaPanel, SearchPanel } from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const BAR_HEIGHT = 40;
const ANNOUNCEMENT_GU = "લગ્નસરાની તૈયારી શરૂ";
const ANNOUNCEMENT = "Wedding season fittings now open  •  Raopura & Alkapuri, Vadodara";

const announcement = (
  <>
    <span lang="gu" className="font-gujarati text-[16px] font-semibold normal-case tracking-normal">
      {ANNOUNCEMENT_GU}
    </span>
    <span aria-hidden className="mx-3.5 inline-block h-1.5 w-1.5 rotate-45 border border-gold-light align-middle" />
    {ANNOUNCEMENT}
  </>
);

// Announcement dismissal lives in localStorage; useSyncExternalStore keeps
// server and client renders consistent without a setState-in-effect.
const DISMISS_KEY = "wh-announcement-dismissed";
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};
const readDismissed = () => {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
};
const dismiss = () => {
  try {
    localStorage.setItem(DISMISS_KEY, "1");
  } catch {}
  listeners.forEach((l) => l());
};

export default function Header() {
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => false);
  const barHeight = dismissed ? 0 : BAR_HEIGHT;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null); // menu id or "search"
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lock } = useScrollApi();

  const headerRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The announcement bar scrolls away; the nav then sticks to the top.
  const { scrollY } = useScroll();
  const y = useMotionValue(0);
  const sync = useCallback(
    (v: number) => y.set(-(mobileOpen ? barHeight : Math.min(Math.max(v, 0), barHeight))),
    [barHeight, mobileOpen, y],
  );
  useMotionValueEvent(scrollY, "change", (v) => {
    sync(v);
    setScrolled(v > 60);
  });
  useEffect(() => sync(scrollY.get()), [sync, scrollY]);

  useEffect(() => {
    lock(mobileOpen);
    return () => lock(false);
  }, [mobileOpen, lock]);

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
  };
  // Hover intent: a short delay stops the panel flashing as the pointer crosses the nav.
  const openSoon = (id: string) => {
    clearTimer();
    timer.current = setTimeout(() => setOpen(id), open ? 0 : 120);
  };
  const closeSoon = () => {
    clearTimer();
    timer.current = setTimeout(() => setOpen(null), 180);
  };
  const closeNow = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(null);
  }, []);
  useEffect(() => clearTimer, []);

  const focusTrigger = (id: string) =>
    headerRef.current?.querySelector<HTMLElement>(`[data-trigger="${id}"]`)?.focus();

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && (open || mobileOpen)) {
      const last = open;
      closeNow();
      setMobileOpen(false);
      if (last) focusTrigger(last);
      return;
    }
    const trigger = (e.target as HTMLElement).closest<HTMLElement>("[data-trigger]");
    if (!trigger || trigger.dataset.trigger === "search") return;
    const ids = menu.map((m) => m.id);
    const i = ids.indexOf(trigger.dataset.trigger!);
    if (e.key === "ArrowRight") focusTrigger(ids[(i + 1) % ids.length]);
    if (e.key === "ArrowLeft") focusTrigger(ids[(i - 1 + ids.length) % ids.length]);
    if (e.key === "ArrowDown" && menu[i].columns) {
      e.preventDefault();
      setOpen(menu[i].id);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => headerRef.current?.querySelector<HTMLElement>("#mega-panel a")?.focus()),
      );
    }
  };

  const activeItem = menu.find((m) => m.id === open && m.columns);
  const panelOpen = Boolean(activeItem) || open === "search";
  const headerHeight = scrolled ? 56 : 72;

  return (
    <>
      {/* Reserves the space the fixed header occupies. */}
      <div aria-hidden style={{ height: barHeight + 72 }} />

      <motion.div style={{ y }} className="fixed inset-x-0 top-0 z-50">
        {!dismissed && (
          <div
            style={{ height: BAR_HEIGHT }}
            className="relative flex items-center overflow-hidden bg-burgundy-deep text-gold-light"
          >
            <p className="hidden w-full px-12 text-center text-[12px] font-medium uppercase tracking-[0.1em] sm:block">
              {announcement}
            </p>
            {/* Mobile: the same line as a slow ticker (duplicated for a seamless loop). */}
            <div className="flex w-max animate-marquee whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.1em] sm:hidden">
              <span className="px-6">{announcement}</span>
              <span className="px-6" aria-hidden>
                {announcement}
              </span>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-0 top-0 flex h-10 w-11 items-center justify-center bg-burgundy-deep text-gold-light transition-colors duration-300 ease-smooth hover:text-white"
            >
              <X size={16} strokeWidth={1.75} />
            </button>
          </div>
        )}

        <header
          ref={headerRef}
          onKeyDown={onKeyDown}
          onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeNow();
          }}
          className={`relative transition-[background-color,box-shadow] duration-300 ease-smooth ${
            scrolled || panelOpen || mobileOpen
              ? "bg-ivory/[0.98] shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
              : "bg-ivory/90 backdrop-blur-sm"
          }`}
        >
          <div
            style={{ height: headerHeight }}
            className="mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-300 ease-smooth md:px-10"
          >
            {/* Logo */}
            <motion.a
              href="#top"
              aria-label="White House, home"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EXPO_OUT }}
              className="relative z-10 flex shrink-0 origin-left items-center"
              onPointerEnter={(e) => e.pointerType === "mouse" && closeSoon()}
            >
              <Image
                src="/brand/white-house-logo.png"
                alt="White House વ્હાઈટ હાઉસ"
                width={1433}
                height={1098}
                priority
                sizes="80px"
                className={`w-auto transition-[height] duration-300 ease-smooth ${scrolled ? "h-10" : "h-[52px]"}`}
              />
            </motion.a>

            {/* Desktop navigation */}
            <nav aria-label="Primary" className="hidden h-full lg:block">
              <ul className="flex h-full items-center gap-1">
                {menu.map((item, i) => {
                  const isOpen = open === item.id;
                  const cls =
                    "relative flex h-full items-center px-4 text-[14px] font-medium tracking-[0.04em] text-charcoal transition-colors duration-300 ease-smooth hover:text-brand-red";
                  const underline = isOpen && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ duration: 0.5, ease: EXPO_OUT }}
                      className="absolute inset-x-4 bottom-0 h-[2px] bg-gold-muted"
                    />
                  );
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.07, ease: EXPO_OUT }}
                      className="h-full"
                    >
                      {item.columns ? (
                        <button
                          type="button"
                          data-trigger={item.id}
                          aria-expanded={isOpen}
                          aria-controls="mega-panel"
                          onPointerEnter={(e) => e.pointerType === "mouse" && openSoon(item.id)}
                          onClick={() => {
                            clearTimer();
                            setOpen(isOpen ? null : item.id);
                          }}
                          className={`${cls} ${isOpen ? "text-brand-red" : ""}`}
                        >
                          {item.label}
                          {underline}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          data-trigger={item.id}
                          onPointerEnter={(e) => e.pointerType === "mouse" && closeSoon()}
                          onClick={closeNow}
                          className={cls}
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EXPO_OUT }}
              className="flex items-center gap-1 md:gap-2"
              onPointerEnter={(e) => e.pointerType === "mouse" && open !== "search" && closeSoon()}
            >
              <button
                type="button"
                data-trigger="search"
                aria-label="Search"
                aria-expanded={open === "search"}
                aria-controls="mega-panel"
                onClick={() => {
                  clearTimer();
                  setMobileOpen(false);
                  setOpen(open === "search" ? null : "search");
                }}
                className="hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors duration-300 ease-smooth hover:bg-cream hover:text-brand-red lg:flex"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.phoneDisplay}`}
                className="flex h-11 items-center justify-center gap-2 rounded-full px-3 text-charcoal transition-colors duration-300 ease-smooth hover:bg-cream hover:text-brand-red"
              >
                <Phone size={19} strokeWidth={1.5} />
                <span className="hidden text-[13px] font-medium tracking-wide xl:inline">{site.phoneDisplay}</span>
              </a>
              <a
                href={whatsappLink("I'd like to book a fitting.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-5 text-[13px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-500 ease-smooth hover:scale-[1.02] hover:bg-[#a81923] sm:flex"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-300 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-green-400" />
                </span>
                Book a Fitting
              </a>
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => {
                  closeNow();
                  setMobileOpen((v) => !v);
                }}
                className="flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
              >
                {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </motion.div>
          </div>

          {/* Mega panel (desktop) */}
          <AnimatePresence>
            {panelOpen && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EXPO_OUT }}
                  onClick={closeNow}
                  onPointerEnter={(e) => e.pointerType === "mouse" && open !== "search" && closeSoon()}
                  className="absolute inset-x-0 top-full hidden h-screen bg-charcoal/35 lg:block"
                />
                <motion.div
                  key="panel"
                  id="mega-panel"
                  initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.3, ease: EXPO_OUT } }}
                  transition={{ duration: 0.55, ease: EXPO_OUT }}
                  onPointerEnter={clearTimer}
                  className="absolute inset-x-0 top-full hidden border-t border-border-subtle bg-ivory lg:block"
                >
                  <div className="mx-auto min-h-[380px] max-w-[1440px] px-10 py-10">
                    <AnimatePresence mode="wait" initial={false}>
                      {open === "search" ? (
                        <SearchPanel key="search" onNavigate={closeNow} />
                      ) : (
                        activeItem && <MegaPanel key={activeItem.id} item={activeItem} onNavigate={closeNow} />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Mobile drawer */}
          <AnimatePresence>
            {mobileOpen && <MobileMenu headerHeight={headerHeight} onNavigate={() => setMobileOpen(false)} />}
          </AnimatePresence>
        </header>
      </motion.div>
    </>
  );
}
