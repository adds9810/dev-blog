import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";

import { guideComponentTopics } from "./_data/component-guides";
import { guideDeveloperTopics } from "./_data/developer-topics";
import { guideProgressPhases } from "./_data/progress";
import {
  guideCurrentSetup,
  guideFolderStructureTree,
  guideTechStack,
} from "./_data/reference";
import type { GuideProgressStatus } from "./_data/types";

function statusLabel(status: GuideProgressStatus): string {
  switch (status) {
    case "done":
      return "완료";
    case "in_progress":
      return "진행 중";
    case "planned":
      return "예정";
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "가이드";
  const description =
    "진행 상황, 스택·구성, 컴포넌트·폴더, 개발 노트(Zustand, Query, SEO 등).";

  return {
    title,
    description,
    alternates: {
      canonical: "/guide",
    },
    openGraph: {
      title,
      description,
      url: "/guide",
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function GuidePage() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-12">
        <header className="space-y-3">
          <p className="text-sm font-medium text-[--color-brand-600]">Guide</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            가이드 및 진행 상황
          </h1>
          <p className="max-w-2xl text-sm text-[--text-secondary] md:text-base">
            스타터 구성·진행·기술 메모는 이 페이지와 `src/app/guide/_data`에만
            둡니다. 프로덕션에서는 `/guide`가 열리지 않습니다. 목차는 넓은 화면에서
            왼쪽, 모바일에서는 상단 접기 블록으로 보이며, `_data/guide-nav.ts`와
            본문 `h2` id를 맞춰 주세요.
          </p>
        </header>

        <section aria-labelledby="guide-progress-title">
          <h2
            id="guide-progress-title"
            className="text-lg font-semibold md:text-xl"
          >
            진행 상황
          </h2>
          <div className="mt-4 space-y-8">
            {guideProgressPhases.map((phase) => (
              <div
                key={phase.id}
                className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-4 shadow-[--shadow-sm] md:p-5"
              >
                <h3 className="text-base font-semibold">{phase.title}</h3>
                {phase.summary ? (
                  <p className="mt-1 text-sm text-[--text-secondary]">
                    {phase.summary}
                  </p>
                ) : null}
                <ul className="mt-3 space-y-2 text-sm text-[--text-secondary] md:text-base">
                  {phase.items.map((item) => (
                    <li key={item.id} className="flex flex-wrap gap-x-2 gap-y-1">
                      <span
                        className="shrink-0 rounded-[--radius-md] border border-[--color-border] bg-[--color-muted]/40 px-2 py-0.5 text-xs font-medium text-[--color-foreground]"
                        title="상태"
                      >
                        {statusLabel(item.status)}
                      </span>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="guide-stack-title">
          <h2
            id="guide-stack-title"
            className="text-lg font-semibold md:text-xl"
          >
            기술 스택
          </h2>
          <div className="mt-4 overflow-x-auto rounded-[--radius-md] border border-[--color-border]">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <thead className="border-b border-[--color-border] bg-[--color-muted]/30">
                <tr>
                  <th className="px-3 py-2 font-semibold md:px-4">구분</th>
                  <th className="px-3 py-2 font-semibold md:px-4">내용</th>
                </tr>
              </thead>
              <tbody>
                {guideTechStack.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-[--color-border] last:border-0"
                  >
                    <td className="px-3 py-2 align-top text-[--text-secondary] md:px-4">
                      {row.category}
                    </td>
                    <td className="px-3 py-2 md:px-4">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="guide-setup-title">
          <h2
            id="guide-setup-title"
            className="text-lg font-semibold md:text-xl"
          >
            현재 구성 요약
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[--text-secondary] md:text-base">
            {guideCurrentSetup.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="guide-components-title">
          <h2
            id="guide-components-title"
            className="text-lg font-semibold md:text-xl"
          >
            컴포넌트 가이드
          </h2>
          <div className="mt-4 space-y-6">
            {guideComponentTopics.map((topic) => (
              <article
                key={topic.id}
                className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-4 shadow-[--shadow-sm] md:p-5"
              >
                <h3 className="text-base font-semibold">{topic.title}</h3>
                <p className="mt-1 font-mono text-xs text-[--text-secondary] md:text-sm">
                  {topic.path}
                </p>
                <p className="mt-2 text-sm text-[--text-secondary] md:text-base">
                  {topic.summary}
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[--text-secondary] md:text-base">
                  {topic.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="guide-tree-title">
          <h2
            id="guide-tree-title"
            className="text-lg font-semibold md:text-xl"
          >
            폴더 구조(참고)
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-[--radius-md] border border-[--color-border] bg-[--color-muted]/20 p-4 text-xs leading-relaxed md:text-sm">
            <code>{guideFolderStructureTree}</code>
          </pre>
        </section>

        <section aria-labelledby="guide-dev-title">
          <h2
            id="guide-dev-title"
            className="text-lg font-semibold md:text-xl"
          >
            개발 노트
          </h2>
          <div className="mt-4 space-y-6">
            {guideDeveloperTopics.map((topic) => (
              <article
                key={topic.id}
                className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-4 shadow-[--shadow-sm] md:p-5"
              >
                <h3 className="text-base font-semibold">{topic.title}</h3>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[--text-secondary] md:text-base">
                  {topic.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div>
          <ButtonLink href="/" variant="outline">
            홈으로
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
