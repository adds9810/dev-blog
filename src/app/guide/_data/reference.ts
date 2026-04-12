import type { GuideTechStackRow } from "./types";

export const guideTechStack: GuideTechStackRow[] = [
  { category: "프레임워크", value: "Next.js (App Router)" },
  { category: "언어", value: "TypeScript" },
  { category: "스타일", value: "Tailwind CSS v4" },
  { category: "상태 관리", value: "Zustand" },
  { category: "서버 상태", value: "TanStack Query (React Query)" },
  { category: "SEO", value: "Metadata API, `robots.ts`, `sitemap.ts`" },
  { category: "린트/포맷", value: "ESLint, Prettier" },
];

export const guideCurrentSetup: string[] = [
  "경로 별칭: `@/*` → `src/*`",
  "공통 레이아웃: header / main / footer, skip link",
  "UI 상태: 모바일 메뉴 열림/닫힘, 테마(light/dark/system)",
  "Query: QueryProvider, 기본 QueryClient, 외부 API 예제(JSONPlaceholder)",
  "에러/로딩 UX: error.tsx, loading.tsx, not-found.tsx",
  "SEO: metadataBase, title default/template, description, keywords, openGraph, twitter, alternates.canonical, robots.ts, sitemap.ts, 페이지별 generateMetadata 예시",
];

export const guideFolderStructureTree = `seed-kit/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .env.example
├── public/
│   ├── og/
│   │   └── og-default.svg
│   └── README.md
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── examples/
│   │   │   │   └── query/
│   │   │   │       └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── guide/
│   │   │   ├── _data/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── examples/
│   │   │   └── JsonPlaceholderPostSample.tsx
│   │   ├── layout/
│   │   │   ├── GuideHeader.tsx
│   │   │   ├── PublicSiteShell.tsx
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   ├── providers/
│   │   │   ├── QueryProvider.tsx
│   │   │   └── ThemeAttributeSync.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── TextLink.tsx
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   │   ├── api/
│   │   ├── query/
│   │   └── seo/
│   ├── store/
│   │   ├── index.ts
│   │   └── ui-store.ts
│   ├── styles/
│   │   └── tokens.css
│   └── utils/
└── README.md`;
