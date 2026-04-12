import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** 프로덕션에서 `/guide` 정적 산출물이 있어도 요청 단에서 막습니다. */
export function middleware(request: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    request.nextUrl.pathname.startsWith("/guide")
  ) {
    return NextResponse.rewrite(
      new URL("/__dev_guide_disabled__", request.url),
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/guide", "/guide/:path*"],
};
