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
};

export default nextConfig;
