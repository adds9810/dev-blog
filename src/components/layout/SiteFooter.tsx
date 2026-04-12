import Link from "next/link";

import { siteConfig } from "@/lib/seo/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[--color-border]/70 bg-[--color-muted]/25 py-5 text-sm backdrop-blur-sm">
      <div className="page-container flex flex-col items-center gap-4 text-[--text-secondary] md:flex-row md:justify-between md:gap-6">
        <p className="text-center md:text-left">
          <span className="text-[--color-foreground]">{siteConfig.name}</span>
          <span className="mx-1.5 text-[--color-border]">·</span>
          <span>© {year}</span>
        </p>
        <nav aria-label="푸터 링크">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
              >
                소개
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
