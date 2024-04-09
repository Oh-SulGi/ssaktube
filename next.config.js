/** @type {import('next').NextConfig} */
const nextConfig = {
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
