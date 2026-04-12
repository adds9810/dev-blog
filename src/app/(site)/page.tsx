import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo/site";

export default function Home() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-10">
        <section
          aria-labelledby="home-hero-title"
          className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-8"
        >
          <p className="mb-3 block text-sm font-medium leading-snug text-[--color-brand-600]">
            {siteConfig.name}
          </p>
          <h1
            id="home-hero-title"
            className="mt-0 text-2xl font-semibold leading-tight tracking-tight md:text-3xl"
          >
            메인 헤드라인을 여기에
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[--text-secondary] md:text-base">
            서비스나 제품의 한 줄 설명, 핵심 가치를 적는 자리입니다. 레이아웃과
            타이포는 그대로 두고 문구만 교체해 쓰면 됩니다.
          </p>
          <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/about" variant="primary">
              소개 보기
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
