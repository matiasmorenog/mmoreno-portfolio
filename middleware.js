import { NextResponse } from "next/server";

const LOCALES = new Set(["en", "es"]);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Serve English at `/` via internal rewrite to `/en` (URL stays `/`).
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/en", request.url));
  }

  // Canonicalize `/en` → `/` for a single English URL.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
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
