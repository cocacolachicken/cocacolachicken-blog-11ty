

module.exports = (config) => {
    config.addPassthroughCopy('./src/static/')
    config.addCollection("posts", (collection) => {
        return collection.getFilteredByGlob("./src/posts/*.md").sort((a, b) => {
            return (new Date(b.date) - new Date(a.date))
        })
    })
    config.addCollection("media", (collection) => {
        return collection.getFilteredByGlob("./src/media/*/*.md")
    })
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    }
}