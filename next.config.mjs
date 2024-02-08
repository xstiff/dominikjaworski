// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180, 
  images: {
    unoptimized: true,
  },
  // distDir: 'build',
  output: "export"
};

export default nextConfig;
