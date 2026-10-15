import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "ghostLight" | "whatsapp";

const base =
  "group/btn relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-sm px-7 py-3 font-sans text-[14px] font-semibold tracking-[0.04em] transition-[transform,background-color,color] duration-500 ease-smooth active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:scale-[1.02] hover:bg-[#a81923]",
  // Ghost buttons: a gold panel slides in from the left and the label turns dark.
  ghost: "border border-gold-muted text-charcoal hover:text-charcoal",
  ghostLight: "border border-gold-muted text-ivory hover:text-charcoal",
  whatsapp: "bg-[#1f8f4e] text-white hover:scale-[1.02] hover:bg-[#19793f]",
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Button({ href, variant = "primary", external, className, children }: Props) {
  const isGhost = variant === "ghost" || variant === "ghostLight";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      {isGhost && (
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-gold-light transition-transform duration-500 ease-smooth group-hover/btn:scale-x-100"
        />
      )}
      <span className="relative inline-flex items-center gap-2.5">{children}</span>
    </a>
  );
}

export function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform duration-500 ease-smooth group-hover/btn:translate-x-1">
      →
    </span>
  );
}
