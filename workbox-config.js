module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,eot,svg,ttf,woff,woff2,jpeg,html,json,md,xml}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};