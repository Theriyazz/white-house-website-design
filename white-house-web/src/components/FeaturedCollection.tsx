"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import SlotImage, { useSlot } from "@/components/ui/SlotImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { productTabs, products, type Product } from "@/data/content";
import { EXPO_OUT, VIEWPORT } from "@/lib/motion";
import { shareLink, whatsappLink } from "@/lib/site";

function ProductCard({ product, liked, onLike }: { product: Product; liked: boolean; onLike: () => void }) {
  const slot = `product-${product.id}`;
  const hasDetail = Boolean(useSlot(`${slot}-detail`));

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream transition-transform duration-500 ease-smooth group-hover:-translate-y-1">
        <SlotImage slot={slot} alt={product.name} sizes="(max-width: 768px) 50vw, 25vw" tone="#b7a482" quiet />
        {/* Alternate angle fades in on hover, when one has been supplied */}
        {hasDetail && (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-smooth group-hover:opacity-100">
            <SlotImage slot={`${slot}-detail`} alt={`${product.name}, detail`} sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        )}

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${
              product.badge === "Bestseller" ? "bg-brand-red text-white" : "bg-gold-light text-charcoal"
            }`}
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={onLike}
          aria-pressed={liked}
          aria-label={liked ? `Remove ${product.name} from shortlist` : `Add ${product.name} to shortlist`}
          className="absolute right-1.5 top-1.5 flex h-11 w-11 items-center justify-center"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm">
            <motion.span
              key={String(liked)}
              initial={{ scale: liked ? 0.5 : 1 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 14 }}
              className="flex"
            >
              <Heart size={17} strokeWidth={1.75} className={liked ? "fill-brand-red text-brand-red" : "text-charcoal"} />
            </motion.span>
          </span>
        </button>
      </div>

      <div className="pt-4">
        <h3 className="text-[14px] font-medium leading-snug text-charcoal">{product.name}</h3>
        <p className="mt-1 text-[12px] text-text-tertiary">
          Starting at <span className="text-[15px] font-semibold text-charcoal">{product.price}</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-border-subtle pt-2">
          <a
            href={whatsappLink(`I'm interested in the ${product.name} (starting at ${product.price}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-[12px] font-semibold text-[#1a7a43] transition-colors duration-300 ease-smooth hover:text-charcoal"
          >
            <MessageCircle size={15} strokeWidth={1.75} aria-hidden /> Enquire
          </a>
          <a
            href={shareLink(product.name, product.price)}
            aria-label={`Share ${product.name} with family on WhatsApp`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-[12px] font-semibold text-text-secondary transition-colors duration-300 ease-smooth hover:text-charcoal"
          >
            <Share2 size={14} strokeWidth={1.75} aria-hidden /> <span>Share<span className="hidden sm:inline"> with family</span></span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedCollection() {
  const [tab, setTab] = useState<(typeof productTabs)[number]>("All");
  const [liked, setLiked] = useState<string[]>([]);

  const visible = products.filter((p) => tab === "All" || p.category === tab);

  return (
    <section id="collection" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            gu="વાજબી ભાવ, પાકું કામ"
            title="See It Here. Feel It in the Shop."
            sub="Every price is where it starts. Cloth, work and fit are decided with you, across the counter."
            align="left"
          />

          <motion.div
            role="group"
            aria-label="Filter collection"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.15, ease: EXPO_OUT }}
            className="hide-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:px-0"
          >
            {productTabs.map((t) => {
              const active = t === tab;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTab(t)}
                  className={`relative min-h-11 shrink-0 whitespace-nowrap rounded-full px-5 text-[13px] font-medium tracking-wide transition-colors duration-300 ease-smooth ${
                    active ? "text-ivory" : "text-text-secondary hover:text-charcoal"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      transition={{ duration: 0.5, ease: EXPO_OUT }}
                      className="absolute inset-0 rounded-full bg-charcoal"
                    />
                  )}
                  <span className="relative">{t}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: EXPO_OUT }}
              >
                <ProductCard
                  product={p}
                  liked={liked.includes(p.id)}
                  onLike={() => setLiked((prev) => (prev.includes(p.id) ? prev.filter((x) => x !== p.id) : [...prev, p.id]))}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href={whatsappLink("Could you share your full catalogue and price range?")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 text-[14px] font-semibold tracking-wide text-charcoal transition-colors duration-300 ease-smooth hover:text-brand-red"
          >
            <span className="relative">
              Ask for the full catalogue on WhatsApp
              <span aria-hidden className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gold-muted" />
            </span>
            <span aria-hidden className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="text-[12px] text-text-tertiary">Prices shown are illustrative for this concept demo.</p>
        </div>
      </div>
    </section>
  );
}
