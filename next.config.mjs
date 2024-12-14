import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {ignoreDuringBuilds: true},
    transpilePackages: ['geist'],
};


export default withNextVideo(nextConfig);