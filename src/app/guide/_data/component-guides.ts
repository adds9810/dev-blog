import type { GuideComponentTopic } from "./types";

/** 공용·레이아웃·프로바이더·예제 컴포넌트 사용 가이드(확장 시 항목 추가). */
export const guideComponentTopics: GuideComponentTopic[] = [
  {
    id: "button",
    title: "Button / ButtonLink",
    path: "src/components/ui/Button.tsx",
    summary:
      "버튼 액션은 `Button`, 페이지 이동은 `ButtonLink`로 시각 스타일을 맞춥니다.",
    bullets: [
      "`variant`: primary, outline, ghost",
      "`size`: sm, md",
      "링크는 Next `LinkProps`를 그대로 넘길 수 있습니다.",
    ],
  },
  {
    id: "text-link",
    title: "TextLink",
    path: "src/components/ui/TextLink.tsx",
    summary: "본문·내비에서 쓰는 텍스트 링크 스타일을 통일합니다.",
    bullets: [
      "클라이언트 컴포넌트(`\"use client\"`).",
      "`onNavigate`: 모바일 메뉴 닫기 등 라우트 직후 콜백에 사용합니다.",
      "외부 URL은 `<a>`를 쓰거나 별도 컴포넌트로 분리하는 편이 안전합니다.",
    ],
  },
  {
    id: "site-header-footer",
    title: "SiteHeader / SiteFooter",
    path: "src/components/layout/",
    summary: "전역 헤더·푸터. 내비 항목은 헤더의 `navItems`에서 관리합니다.",
    bullets: [
      "헤더: 테마 선택, 모바일 메뉴, 주요 내비게이션.",
      "푸터: 사이트 메타·저작 표시 등 레이아웃만 담당합니다.",
    ],
  },
  {
    id: "query-theme-providers",
    title: "QueryProvider / ThemeAttributeSync",
    path: "src/components/providers/",
    summary: "루트 `layout.tsx`에서 감싸는 전역 프로바이더입니다.",
    bullets: [
      "QueryProvider: TanStack Query `QueryClient` 공급.",
      "ThemeAttributeSync: UI 스토어의 테마를 문서에 반영합니다.",
    ],
  },
  {
    id: "json-placeholder-sample",
    title: "JsonPlaceholderPostSample",
    path: "src/components/examples/JsonPlaceholderPostSample.tsx",
    summary: "Query + `src/lib/api/json-placeholder` 사용 예시입니다.",
    bullets: [
      "실제 API로 바꿀 때는 `src/lib/api` 모듈을 교체하면 됩니다.",
      "라이브 데모: `/examples/query`",
      "로딩·에러 UI 패턴을 참고용으로 복사해 쓸 수 있습니다.",
    ],
  },
];
