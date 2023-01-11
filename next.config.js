/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "munchiesprod.s3.ap-southeast-1.amazonaws.com",
  //       port: "",
  //       pathname: "/image/upload/**",
  //     },
  //   ],
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["munchiesprod.s3.ap-southeast-1.amazonaws.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
