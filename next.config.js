/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"cdn.builder.io",
			"avatars.githubusercontent.com",
			"media.licdn.com",
			"hacktoberfest.com",
			"yt3.ggpht.com",
			"www.linkedin.com",
		],
		dangerouslyAllowSVG: true,
	},
};

module.exports = nextConfig;
