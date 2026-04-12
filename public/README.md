# public

빌드 결과에 그대로 복사되는 정적 파일입니다. (`/파일명`으로 접근)

- 파비콘: `src/app/favicon.ico` (App Router 메타 아이콘)
- OG 기본 이미지: `public/og/og-default.svg` (실서비스에서는 1200x630 PNG/JPG 교체 권장)
- `src/app/layout.tsx`의 `metadataBase`, `openGraph.images`, `twitter.images` 경로와 일치시키면 SEO에 유리합니다.
