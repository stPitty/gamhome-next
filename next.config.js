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
};

module.exports = nextConfig;
