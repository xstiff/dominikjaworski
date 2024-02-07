// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180, 
  distDir: 'build',
  output: "export"
};

export default nextConfig;
