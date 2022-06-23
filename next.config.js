
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
	// reactStrictMode: true,
		nextConfig,
		webpack(config) {
			config.module.rules.push({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				loader: '@svgr/webpack',
				options: {
					prettier: false,
					svgo: true,
					svgoConfig: {
						plugins: [
							{
								name: 'preset-default',
								params: {
									overrides: {
										removeViewBox: false,
									},
								},
							},
						],
					},
					titleProp: true,
				},
			});
			return config;
		},
};