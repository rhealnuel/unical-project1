// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'valiant-partridge-243.convex.cloud',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'oaidalleapiprodscus.blob.core.windows.net',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'valiant-goshawk-461.convex.cloud',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  