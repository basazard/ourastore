/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ourastore-bucket.s3.ap-southeast-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "d2vpoym06djd5u.cloudfront.net",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
