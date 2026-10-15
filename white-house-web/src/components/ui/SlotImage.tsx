"use client";

import { createContext, useContext } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

const ManifestContext = createContext<Record<string, string>>({});

export function ImageManifestProvider({
  manifest,
  children,
}: {
  manifest: Record<string, string>;
  children: React.ReactNode;
}) {
  return <ManifestContext.Provider value={manifest}>{children}</ManifestContext.Provider>;
}

/** Path of a supplied image for this slot, or undefined if none was dropped in. */
export const useSlot = (slot: string) => useContext(ManifestContext)[slot];

type Props = {
  slot: string;
  alt: string;
  sizes: string;
  /** Base colour of the placeholder shown until a real image is supplied. */
  tone?: string;
  priority?: boolean;
  className?: string;
  /** Hide the slot-name caption on very small or decorative placeholders. */
  quiet?: boolean;
};

/**
 * Fills its (relative, sized) parent with the image for `slot` from
 * public/images. With no file present it renders a branded placeholder so the
 * layout stays reviewable. See public/images/IMAGE-PROMPTS.md.
 */
export default function SlotImage({ slot, alt, sizes, tone = "#8a6a3c", priority, className, quiet }: Props) {
  const src = useSlot(slot);

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} (placeholder)`}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundColor: tone,
        backgroundImage:
          "radial-gradient(120% 90% at 70% 15%, rgba(255,236,200,0.38), transparent 60%), linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45)), repeating-linear-gradient(45deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 6px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 6px)",
      }}
    >
      {!quiet && (
        <span className="absolute right-4 top-4 whitespace-nowrap border border-gold-light/40 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/70">
          {slot}
        </span>
      )}
    </div>
  );
}
