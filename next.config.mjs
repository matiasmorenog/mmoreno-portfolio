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
    ];
  },
};

export default nextConfig;
