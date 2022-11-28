/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	scope: '/',
	cacheOnFrontEndNav: true,
	skipWaiting: true,
})

const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
})

module.exports = nextConfig
