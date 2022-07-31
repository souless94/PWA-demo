module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{css,js,eot,svg,ttf,woff,woff2,jpeg,html,json,xml}'
	],
	swDest: 'docs/assets/js/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};