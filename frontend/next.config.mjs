/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_BUCKET_ORIGIN,
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_CLOUDFRONT_ORIGIN,
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
