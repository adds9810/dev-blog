export const siteConfig = {
  /** 공개 제품명. `.env`의 `NEXT_PUBLIC_APP_NAME`으로 덮어씁니다. */
  name: process.env.NEXT_PUBLIC_APP_NAME?.trim() || "김지혜 개발 블로그",
  description: "프론트엔드 개발자 김지혜의 개발 기록 블로그",
  keywords: [
    "프론트엔드",
    "React",
    "Next.js",
    "개발 블로그",
    "TypeScript",
  ],
  locale: "ko_KR",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
  // 배포 환경에서는 NEXT_PUBLIC_SITE_URL 설정 권장
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  ogImagePath: "/og/og-default.svg",
};

export function getSiteUrl() {
  return new URL(siteConfig.url);
}
