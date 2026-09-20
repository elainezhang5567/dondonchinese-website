"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ORDER_URL, ORDER_OPENS_IN_NEW_TAB } from "@/config/site";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold uppercase tracking-[0.18em] " +
  "transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-out-expo " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink " +
  "motion-safe:hover:scale-[1.02] active:scale-[0.99]";

const variants: Record<Variant, string> = {
  // Cream-filled, dark text. The dominant CTA.
  primary: "bg-ivory text-ink hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(244,240,232,0.45)]",
  // Transparent with cream outline; fills on hover.
  secondary: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-ink hover:border-ivory",
  // Thin outline used in the navbar.
  outline: "border border-ivory/35 text-ivory hover:bg-ivory hover:text-ink hover:border-ivory",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[11px]",
  lg: "px-8 py-4 text-xs",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

/**
 * Every "Order Online" CTA on the site goes through this component so they all
 * share ORDER_URL from src/config/site.ts.
 */
export function OrderButton({
  children = "Order Online",
  variant = "primary",
  size = "md",
  className = "",
}: Partial<Pick<ButtonProps, "children" | "variant" | "size" | "className">>) {
  return (
    <Button
      href={ORDER_URL}
      external={ORDER_OPENS_IN_NEW_TAB}
      variant={variant}
      size={size}
      arrow
      className={className}
      ariaLabel="Order online from Don Don"
    >
      {children}
    </Button>
  );
}
