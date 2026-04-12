/** README에 있던 개발·구조 가이드(앱 가이드에서만 유지). */
export type GuideDeveloperTopic = {
  id: string;
  title: string;
  bullets: string[];
};

export const guideDeveloperTopics: GuideDeveloperTopic[] = [
  {
    id: "zustand",
    title: "상태 관리 (Zustand)",
    bullets: [
      "위치: `src/store/ui-store.ts`",
      "상태: `mobileMenuOpen`, `theme` (`light` / `dark` / `system`)",
      "persist: `theme`만 localStorage (`seed-kit-ui`)",
      "확장: 커지면 슬라이스 분리 (`ui`, `auth`, `toast` 등)",
    ],
  },
  {
    id: "query",
    title: "TanStack Query",
    bullets: [
      "Provider: `src/components/providers/QueryProvider.tsx`",
      "기본 옵션: `src/lib/query/query-client.ts` (`staleTime`, `gcTime`, `retry`, `refetchOnWindowFocus`)",
      "API: `src/lib/api/*` — 현재 `json-placeholder.ts`를 실제 클라이언트로 교체",
    ],
  },
  {
    id: "seo",
    title: "SEO·메타데이터",
    bullets: [
      "공통: `src/lib/seo/site.ts`, 루트: `src/app/layout.tsx`",
      "페이지별: `generateMetadata` (about, guide, examples/query 등)",
      "크롤링: `src/app/robots.ts`, `src/app/sitemap.ts`",
      "favicon: `src/app/favicon.ico` · OG: `public/og/og-default.svg` (실서비스는 1200×630 PNG/JPG 권장)",
    ],
  },
  {
    id: "ux-boundaries",
    title: "에러·로딩·404",
    bullets: [
      "`src/app/loading.tsx` — 라우트 전환·초기 로딩 스켈레톤",
      "`src/app/error.tsx` — 런타임 에러, `reset`",
      "`src/app/not-found.tsx` — 404 안내·홈 이동",
    ],
  },
  {
    id: "where-to-put-code",
    title: "코드 넣는 위치",
    bullets: [
      "URL·페이지: `src/app`",
      "도메인 기능: `src/features/<name>`",
      "전역 UI: `src/components/ui` · 기능 전용 UI: `src/features/<name>/components`",
      "공통 훅: `src/hooks` · 유틸: `src/utils`",
      "도메인 종속 컴포넌트는 `features` 안에, 2곳 이상 재사용 시 `components/ui`로 승격",
      "접근성·토큰: `src/styles/tokens.css`, `globals.css` 우선",
    ],
  },
  {
    id: "features-examples",
    title: "features 폴더 예시",
    bullets: [
      "`src/features/auth`",
      "`src/features/post`",
      "기능 단위로 경계를 나눕니다.",
    ],
  },
  {
    id: "deploy-checklist",
    title: "배포 전 확인",
    bullets: [
      "`NEXT_PUBLIC_SITE_URL` 실제 도메인",
      "`public/og/og-default.svg` 교체 검토",
      "`npm run lint`, `npm run format:check`, `npm run build` 통과",
    ],
  },
  {
    id: "future",
    title: "추후 확장 아이디어",
    bullets: [
      "Supabase (`src/lib/supabase`, `src/features/auth`)",
      "shadcn/ui (`src/components/ui` 점진 교체)",
      "인증·권한 (route group + middleware)",
      "블로그·콘텐츠 (`src/features/blog` 등)",
    ],
  },
];
