/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				hostname: '**.amazonaws.com',
				pathname: '/**',
				port: '',
				protocol: 'https',
			},
		],
		minimumCacheTTL: 30,
	},
};

module.exports = nextConfig;
