/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const cdnCachedPage =
      "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400";
    const immutableAsset = "public, max-age=31536000, immutable";

    return [
      {
        source: "/",
        headers: [{ key: "Cache-Control", value: cdnCachedPage }],
      },
      {
        source: "/es",
        headers: [{ key: "Cache-Control", value: cdnCachedPage }],
      },
      {
        source: "/en",
        headers: [{ key: "Cache-Control", value: cdnCachedPage }],
      },
      {
        source: "/og",
        headers: [{ key: "Cache-Control", value: immutableAsset }],
      },
      {
        source: "/:path*.:ext(svg|png|jpg|jpeg|gif|webp|ico|pdf)",
        headers: [{ key: "Cache-Control", value: immutableAsset }],
      },
      // After catch-all: matching headers merge and last Cache-Control wins.
      // Preview filenames are stable across edits only when we bump the
      // `-rYYYYMMDD` suffix; still avoid year-immutable so soft refreshes work.
      {
        source: "/project-previews/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
