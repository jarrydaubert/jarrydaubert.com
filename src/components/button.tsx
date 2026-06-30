import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

const BASE =
  "focus-ring inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-accent px-5 py-3 text-bg shadow-cta hover:bg-fg hover:text-bg sm:font-semibold",
  secondary:
    "border border-border px-3 py-2 text-fg hover:border-border-hover hover:text-accent",
};

export function buttonClassName(
  variant: ButtonVariant = "secondary",
  className?: string,
) {
  return cn(BASE, VARIANTS[variant], className);
}

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "secondary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}
