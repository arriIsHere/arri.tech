const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/.well-known');

	const markdownOptions = markdownIt({
		html: true, 
		typographer: true
	}).use(markdownItAnchor, {
		level: 2, 
		permalink: true,
		permalinkClass: 'permalink',
		permalinkSymbol: '<span role="img" aria-hidden="true" aria-label="permalink">🖇</span>',

	});

	eleventyConfig.setLibrary('md', markdownOptions);

	eleventyConfig.addPassthroughCopy('src/_headers');

	return {
		dir: {
			input: 'src',
			output: '_site'
		},
		templateFormats: [
			"md",
			"html",
			"css",
			"jpg",
			"png",
			"gif",
			"webp",
			"avif",
			"ico",
			"svg",
			"njk",
			"ttf",
			"otf",
			"woff",
			"woff2",
		],
		passthroughFileCopy: true,
	}
}