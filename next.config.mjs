/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.serenevita.asia',
      },
      {
        protocol: 'https',
        hostname: 'serenevita.asia',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/storage/:path*',
          destination: 'https://admin.serenevita.asia/laravel/public/storage/:path*',
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/serene-private-pool-villa',
        destination: '/accommodation/serene-pool-suite',
        permanent: true,
      },
      {
        source: '/serene-deluxe-room',
        destination: '/accommodation/serene-mount-view',
        permanent: true,
      },
      {
        source: '/accommodation/serene-private-pool-villa',
        destination: '/accommodation/serene-pool-suite',
        permanent: true,
      },
      {
        source: '/accommodation/serene-deluxe-room',
        destination: '/accommodation/serene-mount-view',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
