/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'futureworld.com.vn', 'picsum.photos', 'images.pexels.com', 'media.licdn.com', 'encrypted-tbn0.gstatic.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
