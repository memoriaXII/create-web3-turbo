/** @type {import('next').NextConfig} */

console.log(process.env, 'test');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chainlist.org']
  }
};

module.exports = nextConfig;
