/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["chainlist.org"],
    },
};

module.exports = nextConfig;
