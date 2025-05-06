/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations you might have ...

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/**', // Allow any path under this hostname
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**', // Allow Cloudflare Images URLs
      },
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
        port: '',
        pathname: '/**',
      },
      // Add other hostnames if you use images from other sources
      // Example: { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig; 