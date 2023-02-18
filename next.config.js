/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.img.avito.st",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "img.m2.ru",
        port: "",
        pathname: "/m2-pht/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        source: "/banksApi/:path*",
        destination: "https://m2.ru/api/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://194.87.98.241/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
