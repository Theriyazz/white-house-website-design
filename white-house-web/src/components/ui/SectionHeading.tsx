import { cn } from "@/lib/cn";
import { GoldRule, Reveal } from "./Reveal";

/**
 * A Gujarati display line. Used as the emotional lead-in above an English
 * headline: Gujarati readers get the feeling first, everyone gets the meaning
 * from the English directly below.
 */
export function GuLine({
  children,
  dark,
  align = "center",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  size?: "md" | "lg";
  className?: string;
}) {
  const ornament = (
    <span aria-hidden className={cn("block h-1.5 w-1.5 shrink-0 rotate-45 border", dark ? "border-gold-light" : "border-gold-muted")} />
  );
  return (
    <p
      lang="gu"
      className={cn(
        "flex items-center gap-3.5 font-gujarati font-bold tracking-normal",
        // Line-height goes after the size: tailwind-merge drops a leading that precedes a text size.
        size === "lg" ? "text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.45]" : "text-[clamp(1.375rem,2.2vw,2rem)] leading-[1.45]",
        align === "center" && "justify-center",
        dark ? "text-gold-light" : "text-brand-red",
        className,
      )}
    >
      {align === "center" && ornament}
      <span>{children}</span>
      {align === "center" ? ornament : <span aria-hidden className={cn("h-px w-10 shrink-0", dark ? "bg-gold-light/60" : "bg-gold-muted")} />}
    </p>
  );
}

type Props = {
  /** Gujarati lead-in line. */
  gu: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({ gu, title, sub, align = "center", dark, className }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <GuLine dark={dark} align={align} className="mb-3">
        {gu}
      </GuLine>
      <h2
        className={cn(
          "text-balance font-serif text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]",
          dark ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      <GoldRule className={cn("mt-6 w-16", centered && "mx-auto origin-center")} />
      {sub && (
        <p
          className={cn(
            "mt-6 max-w-xl text-[16px] leading-relaxed md:text-[17px]",
            centered && "mx-auto",
            dark ? "text-ivory/75" : "text-text-secondary",
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
