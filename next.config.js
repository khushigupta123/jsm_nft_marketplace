/** @type {import('next').NextConfig} */
const dedicatedEndPoint = 'https://gola-nft-marketplace.infura-ipfs.io';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [dedicatedEndPoint, 'gola-nft-marketplace.infura-ipfs.io'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
