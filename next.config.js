/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)\\.(png|jpg|webp|svg)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400', // Cache for 1 day
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
