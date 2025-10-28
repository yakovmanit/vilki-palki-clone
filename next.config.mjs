import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [new URL('https://vilki-palki.od.ua/**')],
	},
};

const withNextIntl = createNextIntlPlugin(
	'./src/shared/lib/i18n/request.ts'
);
export default withNextIntl(nextConfig);
