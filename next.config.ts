/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export mode
  images: {
    unoptimized: true, // disables Next.js image optimization
  },
};

export default nextConfig;
