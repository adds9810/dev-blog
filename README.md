# 김지혜 개발 블로그

`Next.js`(App Router) + `React` + `TypeScript` + `Tailwind CSS v4` 기반 개발 블로그입니다.

**`/guide`는 개발 전용입니다.** `npm run dev`로만 쓰는 것을 전제로 하고, 프로덕션(`next start` 등)에서는 `src/middleware.ts`가 `/guide` 요청을 404로 돌립니다. 가이드 레이아웃에서도 `NODE_ENV === "production"`이면 `notFound()`를 호출합니다. 진행 상황·스택·폴더·컴포넌트·개발 노트는 `src/app/guide/_data`에서 다룹니다.

**일반 화면**은 `src/app/(site)/page.tsx`, `src/app/(site)/about/page.tsx`에 두었습니다. URL은 그대로 `/`, `/about`이며, 헤더·푸터는 공개 사이트용(`PublicSiteShell`)만 씁니다. 표시 이름은 `.env`의 `NEXT_PUBLIC_APP_NAME`으로 바꿀 수 있습니다.

## 사전 요구 사항

- Node.js 20+
- npm

## 설치

```bash
npm install
```

환경변수:

```bash
cp .env.example .env.local
```

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## 실행

개발 서버:

```bash
npm run dev
```

프로덕션 빌드·실행:

```bash
npm run build
npm run start
```

품질 검사:

```bash
npm run lint
npm run format:check
```

## CI (GitHub Actions)

- 워크플로: `.github/workflows/ci.yml`
- 트리거: `pull_request`, `push` to `main` / `master`
- 단계: `npm ci` → `lint` → `format:check` → `build` (Ubuntu, Node 20)

## 환경변수

파일: `.env.example`

- `NEXT_PUBLIC_SITE_URL`: canonical, OG, sitemap 기준 URL
- `NEXT_PUBLIC_APP_NAME`: 헤더·푸터 등에 쓰는 표시 이름(선택)
- `NEXT_PUBLIC_TWITTER_HANDLE`: Twitter metadata creator
- `NOTION_API_KEY`: Notion API 키 (서버 전용)
- `NOTION_DATABASE_ID`: Notion 데이터베이스 ID (서버 전용)

- `NEXT_PUBLIC_` 값은 브라우저에 노출됩니다.
- 비밀값은 `NEXT_PUBLIC_` 없이 서버 전용으로 관리하세요.

## 문서를 어디에 둘지

| 구분 | 위치 |
| --- | --- |
| 진행·스택·폴더·개발 메모 | 개발 시에만 `/guide` + `src/app/guide/_data` |
| 설치·실행·CI·환경변수 | 이 README |
| 라우트별 예시 | `/examples/query` 등 |

## 참고 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
