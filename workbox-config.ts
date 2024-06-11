module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,tsx,json,ts,png,jpg,jpeg,gif,svg,webp,woff,woff2}',
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	
};