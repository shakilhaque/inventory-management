/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "https://s3-inventorymanagement-01.s3.ap-southeast-1.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};



export default nextConfig;
