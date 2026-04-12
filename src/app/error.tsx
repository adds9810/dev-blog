"use client";

import { useEffect } from "react";

import { PublicSiteShell } from "@/components/layout/PublicSiteShell";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <PublicSiteShell>
      <div className="section-gap">
        <div className="page-container max-w-2xl">
          <section
            aria-labelledby="error-title"
            className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8"
          >
            <p className="text-sm font-medium text-[--color-brand-600]">Error</p>
            <h1 id="error-title" className="mt-2 text-2xl font-semibold md:text-3xl">
              문제가 발생했습니다
            </h1>
            <p className="mt-3 text-sm text-[--text-secondary] md:text-base">
              일시적인 문제일 수 있습니다. 다시 시도하거나 홈으로 이동해 주세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="primary" onClick={reset}>
                다시 시도
              </Button>
              <ButtonLink href="/" variant="outline">
                홈으로 이동
              </ButtonLink>
            </div>
          </section>
        </div>
      </div>
    </PublicSiteShell>
  );
}
