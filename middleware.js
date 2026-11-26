import { NextResponse } from "next/server";

const LOCALES = new Set(["en", "es"]);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Serve English at `/` via internal rewrite to `/en` (URL stays `/`).
  // Do NOT also redirect `/en` → `/`: Next can re-run middleware on the
  // rewritten `/en` path, which would loop (`/` → rewrite `/en` → redirect `/`).
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.rewrite(url);
  }

  const first = pathname.split("/").filter(Boolean)[0];
  if (first && !LOCALES.has(first)) {
    // Leave non-locale routes (api, og, robots, sitemap, static files) alone.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and static files with extensions.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
