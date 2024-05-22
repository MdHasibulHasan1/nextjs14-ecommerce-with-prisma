

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "mern-smart-srote.onrender.com" },
      { hostname: "localhost" },
 
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
