// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // <– IMPORTANT for static hosting
};

module.exports = nextConfig;
