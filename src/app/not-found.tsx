import { PublicSiteShell } from "@/components/layout/PublicSiteShell";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PublicSiteShell>
      <div className="section-gap">
        <div className="page-container max-w-2xl">
          <section
            aria-labelledby="not-found-title"
            className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8"
          >
            <p className="text-sm font-medium text-[--color-brand-600]">404</p>
            <h1
              id="not-found-title"
              className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl"
            >
              페이지를 찾을 수 없습니다
            </h1>
            <p className="mt-3 text-sm text-[--text-secondary] md:text-base">
              주소가 변경되었거나 존재하지 않는 경로입니다.
            </p>
            <div className="mt-6">
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
