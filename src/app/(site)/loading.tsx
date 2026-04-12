export default function SiteLoading() {
  return (
    <div className="section-gap">
      <div className="page-container max-w-2xl">
        <section
          aria-label="페이지 로딩 중"
          className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8"
        >
          <p className="text-sm font-medium text-[--color-brand-600]">Loading</p>
          <div className="mt-4 space-y-3" aria-hidden>
            <div className="h-7 w-2/3 animate-pulse rounded bg-[--color-muted]" />
            <div className="h-4 w-full animate-pulse rounded bg-[--color-muted]" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-[--color-muted]" />
          </div>
          <p className="sr-only">콘텐츠를 불러오는 중입니다.</p>
        </section>
      </div>
    </div>
  );
}
