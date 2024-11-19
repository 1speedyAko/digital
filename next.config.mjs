import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plus.unsplash.com'], // Add any external domains from which you are loading images
  },
};

export default withNextVideo(nextConfig);
