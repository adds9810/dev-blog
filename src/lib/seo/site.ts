export const siteConfig = {
  /** 공개 제품명. `.env`의 `NEXT_PUBLIC_APP_NAME`으로 덮어씁니다. */
  name: process.env.NEXT_PUBLIC_APP_NAME?.trim() || "seed-kit",
  description: "재사용 가능한 Next.js React Tailwind 프론트엔드 스타터",
  keywords: [
    "Next.js starter",
    "React starter",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
    "SEO",
  ],
  locale: "ko_KR",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "@seedkit",
  // 배포 환경에서는 NEXT_PUBLIC_SITE_URL 설정 권장
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  ogImagePath: "/og/og-default.svg",
};

export function getSiteUrl() {
  return new URL(siteConfig.url);
}
