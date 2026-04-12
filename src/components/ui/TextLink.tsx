"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

export type TextLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const baseClass =
  "font-medium text-[--color-brand-600] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2 rounded-sm";

/**
 * 앱 내 링크 스타일을 통일합니다. 외부 링크는 `<a>`를 직접 쓰거나 별도 컴포넌트로 분리하세요.
 */
export function TextLink({
  children,
  className = "",
  onNavigate,
  onClick,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={`${baseClass} ${className}`}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) onNavigate?.();
      }}
    >
      {children}
    </Link>
  );
}
