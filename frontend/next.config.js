/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.tebi.io"]
  },
};

module.exports = nextConfig
