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
    ],
  },
};

module.exports = nextConfig;
