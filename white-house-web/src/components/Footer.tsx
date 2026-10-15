import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Collections",
    links: [
      { label: "The Groom's Edit", href: "#groom" },
      { label: "Wedding Party", href: "#party" },
      { label: "Shop by Occasion", href: "#occasions" },
      { label: "Featured Collection", href: "#collection" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Suits & Tailoring", href: "#tailoring" },
      { label: "Real Weddings", href: "#stories" },
      { label: "Visit Us", href: "#visit" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Book a Fitting", href: "#visit" },
      { label: "Alterations", href: "#tailoring" },
      { label: "Exchange Policy", href: "#visit" },
      { label: "Ask on WhatsApp", href: whatsappLink() },
    ],
  },
];

const social = [
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
  { label: "WhatsApp", href: whatsappLink() },
];

const linkCls =
  "inline-flex min-h-9 items-center text-[14px] text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold-light";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal pb-28 pt-16 text-ivory md:pb-12 md:pt-20">
      <div aria-hidden className="bandhani absolute inset-0 opacity-50" />
      {/* Ornamental top border */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-muted/60" />
        <span className="mx-3 -mt-px block h-2 w-2 rotate-45 border border-gold-muted" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-muted/60" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr_1.2fr]">
          <div>
            <Image
              src="/brand/white-house-logo.png"
              alt="White House વ્હાઈટ હાઉસ"
              width={1433}
              height={1098}
              sizes="120px"
              className="h-20 w-auto"
            />
            <p className="mt-5 max-w-xs font-serif text-[22px] leading-snug text-ivory">{site.tagline}</p>
            <p className="mt-2 text-[13px] text-ivory/60">
              Dressing Vadodara&apos;s grooms, fathers and sons since {site.founded}.
            </p>
            <ul className="mt-6 flex gap-5">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory/80 transition-[color,transform] duration-300 ease-smooth hover:scale-105 hover:text-gold-light"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-light">{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={linkCls}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-light">Contact</h2>
            <address className="space-y-1 text-[14px] not-italic leading-relaxed text-ivory/70">
              <p className="font-semibold text-ivory">{site.outlets[0].landmark}</p>
              <p>{site.outlets[0].address}</p>
              <p>
                <a href={site.phoneHref} className={linkCls}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p>{site.hours}</p>
            </address>
            <a
              href={whatsappLink("Please add me to your wedding season updates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-11 items-center gap-2 border-b border-gold-muted pb-1 text-[14px] font-semibold text-ivory transition-colors duration-300 ease-smooth hover:text-gold-light"
            >
              Join wedding season updates on WhatsApp
              <span aria-hidden className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* The shop's name, oversized and faint, as the last thing on the page */}
        <p
          aria-hidden
          className="pointer-events-none mt-12 select-none whitespace-nowrap text-center font-logo text-[clamp(2.75rem,12.5vw,14rem)] leading-[1.1] tracking-[-0.01em] text-ivory/[0.07]"
        >
          white house
        </p>

        <div className="flex flex-col gap-3 border-t border-ivory/10 pt-6 text-[12px] text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-baseline gap-x-3">
            <span lang="gu" className="font-gujarati text-[22px] font-semibold leading-[1.4] text-gold-light">
              આવજો.
            </span>
            <span>Come again soon. © 2026 White House, Raopura, Vadodara.</span>
          </p>
          <p>Concept demo by RDzinStudio. Imagery, prices and reviews are placeholders.</p>
        </div>
      </div>
    </footer>
  );
}
