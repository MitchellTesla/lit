const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();
const syntaxHighlight = require ("@11ty/eleventy-plugin-syntaxhighlight");
const rootPrefix = "";

module.exports = function(eleventyConfig) {
  eleventyConfig.templateFormats = ["liquid", "md", "png"];
  
  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str);
  })
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addShortcode("root", () => {
    return rootPrefix;
  });

  eleventyConfig.addPassthroughCopy("src/assets/");
};