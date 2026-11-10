import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  async redirects() {
    const home = ['/pricing', '/our-work', '/our-process', '/partners', '/press', '/press/:slug*'];
    return [
      ...home.map((source) => ({ source, destination: '/', permanent: true })),
      { source: '/testimonials', destination: '/results', permanent: true },
      { source: '/trades-we-serve', destination: '/trades', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});
