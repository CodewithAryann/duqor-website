// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  images: {
    unoptimized: true, // Disable Next.js image optimization (required for export)
  },
  reactStrictMode: true, // Helps catch potential issues in development
  swcMinify: true, // Enables faster builds and smaller JS bundles
};

export default nextConfig;
