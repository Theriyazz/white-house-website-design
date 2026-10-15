"use client";

import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type ScrollApi = {
  /** Freeze page scroll while an overlay (mobile menu) is open. */
  lock: (locked: boolean) => void;
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollApi>({ lock: () => {}, scrollToTop: () => {} });

export const useScrollApi = () => useContext(ScrollContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced motion: native scrolling, no smoothing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });
    lenisRef.current = lenis;

    // One clock for everything: GSAP's ticker drives Lenis, and Lenis tells
    // ScrollTrigger when the scroll position moved.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pin and trigger positions depend on final layout: refresh once fonts and
  // images have settled.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  const api = useMemo<ScrollApi>(
    () => ({
      lock: (locked) => {
        document.documentElement.style.overflow = locked ? "hidden" : "";
        if (locked) lenisRef.current?.stop();
        else lenisRef.current?.start();
      },
      scrollToTop: () => {
        if (lenisRef.current) lenisRef.current.scrollTo(0);
        else window.scrollTo({ top: 0 });
      },
    }),
    [],
  );

  return (
    <ScrollContext.Provider value={api}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ScrollContext.Provider>
  );
}
