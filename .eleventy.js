module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/*.js": "/" });
    eleventyConfig.addPassthroughCopy({ "src/*.css": "/" });
    eleventyConfig.addPassthroughCopy({ "src/*.png": "/" });
    eleventyConfig.addPassthroughCopy({ "src/*.json": "/" });

    return {
        dir: { input: "src", output: "_site", data: "_data" },
    };
};  