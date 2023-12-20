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
      {
        protocol: "https",
        hostname: "cdn-p.cian.site",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.dmclk.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.sob.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "40.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "00.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "60.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "90.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "70.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "10.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "20.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "30.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "80.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "50.img.avito.st",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media1.moyareklama.ru",
        port: "",
        pathname: "/**",
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
        destination: "https://gamhome.ru/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
