import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideHeader } from "@/components/layout/GuideHeader";

import { guideSectionNav } from "./_data/guide-nav";

export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <GuideHeader />
      <div className="flex flex-1 flex-col gap-4 px-4 pb-12 pt-2 md:flex-row md:gap-8 md:px-6 lg:px-8">
        <div className="md:hidden">
          <details className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] px-3 py-2 shadow-[--shadow-sm]">
            <summary className="cursor-pointer text-sm font-medium text-[--color-foreground]">
              이 페이지 목차
            </summary>
            <nav
              className="mt-2 border-t border-[--color-border] pt-2"
              aria-label="가이드 목차"
            >
              <ul className="max-h-[50vh] space-y-1 overflow-y-auto text-sm">
                {guideSectionNav.map(({ id, label }) => (
                  <li key={id}>
                    <Link
                      href={`#${id}`}
                      className="block rounded-sm py-1 text-[--text-secondary] hover:text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>

        <aside className="hidden shrink-0 md:block md:w-48 lg:w-52">
          <nav
            aria-label="가이드 목차"
            className="sticky top-20 space-y-1 border-l border-[--color-border] pl-4"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[--text-secondary]">
              섹션
            </p>
            {guideSectionNav.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="block rounded-sm py-1 text-sm text-[--text-secondary] hover:text-[--color-foreground] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 flex-1 outline-none"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
