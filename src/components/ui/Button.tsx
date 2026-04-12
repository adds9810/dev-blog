import Link, { type LinkProps } from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[--color-brand-600] text-white hover:opacity-90 focus-visible:ring-[--color-brand-600]",
  outline:
    "border-[--color-border] bg-transparent text-[--color-foreground] hover:bg-[--color-muted]/60 focus-visible:ring-[--color-brand-600]",
  ghost:
    "border-transparent bg-transparent text-[--color-foreground] hover:bg-[--color-muted]/60 focus-visible:ring-[--color-brand-600]",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-10 px-4 text-sm",
};

const buttonLayoutClass =
  "inline-flex items-center justify-center rounded-[--radius-md] border font-medium transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${buttonLayoutClass} disabled:pointer-events-none disabled:opacity-50 ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

/** 페이지 이동이 필요할 때 `Button`과 동일한 시각 스타일로 `Link`를 씁니다. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${buttonLayoutClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
