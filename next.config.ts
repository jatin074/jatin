import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/jatin', // Required for GitHub Pages
  assetPrefix: '/jatin/', // Ensures correct asset loading
};

export default nextConfig;

