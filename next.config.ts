import type { NextConfig } from "next";

/**
 * 경로 별칭 `@/*` → `src/*` 는 `tsconfig.json` 의 `baseUrl` + `paths` 로 해석됩니다.
 * (Next.js가 빌드·번들 시 동일 규칙을 사용합니다.)
 */
const nextConfig: NextConfig = {};

export default nextConfig;
