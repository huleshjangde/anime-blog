/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "i0.wp.com"

            },
            {
                protocol:"https",
                hostname:"img.freepik.com"
            },
            {
                protocol:"https",
                hostname:"*.google.com"
            }
        ]}
    }



module.exports = nextConfig
