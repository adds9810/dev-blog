import type { Metadata } from "next";

import { JsonPlaceholderPostSample } from "@/components/examples/JsonPlaceholderPostSample";
import { ButtonLink } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

const isDev = process.env.NODE_ENV === "development";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Query 예제";
  const description =
    "TanStack Query와 JSONPlaceholder를 쓰는 샘플 화면입니다.";

  return {
    title,
    description,
    alternates: {
      canonical: "/examples/query",
    },
    openGraph: {
      title,
      description,
      url: "/examples/query",
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function QueryExamplePage() {
  return (
    <div className="section-gap">
      <div className="page-container space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-[--color-brand-600]">Examples</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            서버 상태 (Query)
          </h1>
          <p className="max-w-2xl text-sm text-[--text-secondary] md:text-base">
            `QueryProvider`와 `src/lib/api` 패턴을 그대로 따라가는 데모입니다.
            {isDev ? (
              <>
                {" "}
                구성 설명은{" "}
                <TextLink href="/guide" className="inline">
                  가이드
                </TextLink>
                에서 확인할 수 있습니다.
              </>
            ) : (
              " 로컬 개발 시에만 앱 내 가이드(`/guide`)로 상세 문서를 둡니다."
            )}
          </p>
        </header>

        <section aria-labelledby="example-query-title">
          <h2
            id="example-query-title"
            className="text-lg font-semibold md:text-xl"
          >
            JSONPlaceholder 게시물
          </h2>
          <div className="mt-4">
            <JsonPlaceholderPostSample />
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          {isDev ? (
            <ButtonLink href="/guide" variant="outline">
              가이드로
            </ButtonLink>
          ) : null}
          <ButtonLink href="/" variant={isDev ? "ghost" : "outline"}>
            홈으로
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
