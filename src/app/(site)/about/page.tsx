import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";

export async function generateMetadata(): Promise<Metadata> {
  const title = "소개";
  const description = "프로젝트·서비스 소개 페이지입니다.";

  return {
    title,
    description,
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title,
      description,
      url: "/about",
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium text-[--color-brand-600]">About</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            프로젝트 소개
          </h1>
          <p className="max-w-2xl text-sm text-[--text-secondary] md:text-base">
            팀 비전, 제공 기능, 타깃 사용자 등 실제 서비스에 맞는 문구로 이
            페이지 전체를 바꿔 쓰면 됩니다.
          </p>
        </header>

        <section aria-labelledby="about-story-title">
          <h2
            id="about-story-title"
            className="text-lg font-semibold md:text-xl"
          >
            우리가 하는 일
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[--text-secondary] md:text-base">
            <li>문제 정의와 해결 방향을 한두 문단으로 적습니다.</li>
            <li>주요 기능·차별점은 목록으로 정리합니다.</li>
            <li>필요하면 타임라인·팀 소개 섹션을 아래에 이어 붙입니다.</li>
          </ul>
        </section>

        <section aria-labelledby="about-contact-title">
          <h2
            id="about-contact-title"
            className="text-lg font-semibold md:text-xl"
          >
            문의
          </h2>
          <p className="mt-3 text-sm text-[--text-secondary] md:text-base">
            이메일, 폼 링크, SNS 등 연락 채널을 여기에 두면 됩니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/" variant="outline">
              홈으로
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
