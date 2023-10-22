/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dummyimage.com",
      },
    ],
  },
  nextConfig,
};
