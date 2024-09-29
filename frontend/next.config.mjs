/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ourastore-bucket.s3.ap-southeast-1.amazonaws.com",
        pathname: "**", // Allow all paths
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
