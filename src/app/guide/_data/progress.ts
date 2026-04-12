import type { GuideProgressPhase } from "./types";

export const guideProgressPhases: GuideProgressPhase[] = [
  {
    id: "foundation",
    title: "기반·레이아웃",
    summary:
      "모바일 퍼스트 기준과 App Router, 공통 레이아웃·접근성 기본값.",
    items: [
      {
        id: "responsive",
        title: "모바일 퍼스트 반응형(767px 이하 모바일 기준)",
        status: "done",
      },
      {
        id: "app-router",
        title: "App Router 기반 라우팅",
        status: "done",
      },
      {
        id: "layout-a11y",
        title: "헤더·메인·푸터, 스킵 링크(#main-content)",
        status: "done",
      },
      {
        id: "path-alias",
        title: "경로 별칭 `@/*` → `src/*`",
        status: "done",
      },
    ],
  },
  {
    id: "stack-ui",
    title: "스택·UI",
    summary: "기술 스택과 공용 UI·클라이언트 상태.",
    items: [
      {
        id: "typescript",
        title: "TypeScript",
        status: "done",
      },
      {
        id: "tailwind",
        title: "Tailwind CSS v4",
        status: "done",
      },
      {
        id: "ui-primitives",
        title: "공용 UI: Button, ButtonLink, TextLink",
        status: "done",
      },
      {
        id: "zustand",
        title: "Zustand UI 스토어(모바일 메뉴, 테마 light/dark/system, theme persist)",
        status: "done",
      },
    ],
  },
  {
    id: "data-query",
    title: "서버 상태·예제 API",
    summary: "TanStack Query와 교체 가능한 API 레이어.",
    items: [
      {
        id: "query-provider",
        title: "QueryProvider, 기본 QueryClient 옵션",
        status: "done",
      },
      {
        id: "json-placeholder",
        title: "외부 API 예제(JSONPlaceholder, `src/lib/api`)",
        status: "done",
      },
    ],
  },
  {
    id: "seo-meta",
    title: "SEO·메타데이터",
    summary: "Metadata API와 크롤링 관련 라우트.",
    items: [
      {
        id: "root-metadata",
        title: "루트 metadata(metadataBase, title template, OG, Twitter)",
        status: "done",
      },
      {
        id: "page-metadata",
        title: "페이지별 확장 예시(`generateMetadata`, about)",
        status: "done",
      },
      {
        id: "robots-sitemap",
        title: "`robots.ts`, `sitemap.ts`, `src/lib/seo/site.ts`",
        status: "done",
      },
      {
        id: "og-assets",
        title: "favicon, 기본 OG 이미지(`public/og`)",
        status: "done",
      },
    ],
  },
  {
    id: "ux-ci",
    title: "에러·로딩 UX·CI",
    summary: "전역 UX 패턴과 자동 검증.",
    items: [
      {
        id: "error-loading",
        title: "`error.tsx`, `loading.tsx`, `not-found.tsx`",
        status: "done",
      },
      {
        id: "github-actions",
        title: "GitHub Actions: lint, format:check, build(Node 20)",
        status: "done",
      },
      {
        id: "env-docs",
        title: "환경변수 예시·규칙(`.env.example`, README)",
        status: "done",
      },
    ],
  },
  {
    id: "in-app-guide",
    title: "앱 내 가이드·예제 분리",
    summary: "홈을 가볍게 두고 `/guide`, `/examples/query`로 나눔.",
    items: [
      {
        id: "guide-route",
        title: "`src/app/guide` 라우트 및 `_data` 정적 참조",
        status: "done",
      },
      {
        id: "home-slim-query-example",
        title: "홈에서 구성·Query 데모 제거, `/examples/query`로 이동",
        status: "done",
      },
      {
        id: "readme-into-guide",
        title: "README 기술 가이드 본문을 가이드 `개발 노트`로 이전, 홈·소개는 서비스용",
        status: "done",
      },
      {
        id: "split-headers-prod-guide",
        title: "공개 헤더(`SiteHeader`)와 가이드 헤더(`GuideHeader`) 분리, 프로덕션에서 `/guide` 404",
        status: "done",
      },
      {
        id: "guide-toc",
        title: "가이드 섹션 목차(모바일 접기·데스크톱 사이드바, `_data/guide-nav`)",
        status: "done",
      },
    ],
  },
  {
    id: "next",
    title: "이후 확장(계획)",
    summary: "README 추후 확장 포인트를 옮긴 계획 항목.",
    items: [
      {
        id: "api-client",
        title: "`src/lib/api`를 실제 API 클라이언트로 교체",
        status: "planned",
      },
      {
        id: "supabase",
        title: "Supabase 연동 후보(`src/lib/supabase`, `src/features/auth`)",
        status: "planned",
      },
      {
        id: "shadcn",
        title: "shadcn/ui 점진 도입(`src/components/ui`)",
        status: "planned",
      },
      {
        id: "auth-middleware",
        title: "인증·권한(route group + middleware)",
        status: "planned",
      },
      {
        id: "blog-content",
        title: "블로그·콘텐츠 기능(`src/features/blog` 등)",
        status: "planned",
      },
    ],
  },
];
