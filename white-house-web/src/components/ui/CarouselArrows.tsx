"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const btn =
  "flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 bg-ivory text-charcoal transition-[background-color,color,opacity,transform] duration-300 ease-smooth hover:border-charcoal hover:bg-charcoal hover:text-ivory active:scale-95 disabled:pointer-events-none disabled:opacity-30";

/** Previous / next buttons for a horizontal carousel. */
export default function CarouselArrows({
  label,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  className,
}: {
  label: string;
  onPrev: () => void;
  onNext: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  className?: string;
}) {
  return (
    <div role="group" aria-label={`${label} controls`} className={cn("flex items-center gap-2", className)}>
      <button type="button" onClick={onPrev} disabled={!canPrev} aria-label={`Previous ${label}`} className={btn}>
        <ArrowLeft size={18} strokeWidth={1.5} aria-hidden />
      </button>
      <button type="button" onClick={onNext} disabled={!canNext} aria-label={`Next ${label}`} className={btn}>
        <ArrowRight size={18} strokeWidth={1.5} aria-hidden />
      </button>
    </div>
  );
}
