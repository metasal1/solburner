/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.helius-rpc.com',
            'stablebonds.s3.us-west-2.amazonaws.com',
            'i.postimg.cc',
            'ipfs.nftstorage.link',
            'digitaloceanspaces.com',
            'arweave.net',
            'solburner.fun'
        ],
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store',
                    },
                ],
            },
        ]
    }
};

export default nextConfig;

