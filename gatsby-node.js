const { createFilePath } = require("gatsby-source-filesystem")


const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.fileAbsolutePath.toLowerCase() === "readme.md") // skip readme file
      return; 
    if (node.frontmatter.tags == null) {
      console.log(
        `[INFO] ${node.fileAbsolutePath} has no tag, defaulted to "general"`
      )
      node.frontmatter.tags = ["general"]
    }
    createNodeField({
      node,
      name: "slug",
      value: slug.replace("/", ""),
    })
  }
}

// logic for generating all static pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark (
        filter: {
          frontmatter: {
            image:{
              ne: null
            }
          }
        }
      ){
        nodes {
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            tags
            image
          }
        }
      }
    }
  `).then(({ data }) => {
    // list of articles (`MarkdownRemark`s)
    console.log(data.allMarkdownRemark.nodes.map((node) => node.fileAbsolutePath))
    const articles = data.allMarkdownRemark.nodes
    console.log("articles = ",articles.map((node) => node.fileAbsolutePath))
    const numOfMarkdown = articles.length
    console.log(`================= there're ${numOfMarkdown} markdowns!`)

    // Create listing page for each 5 articles
    const numOfPages = Math.ceil(numOfMarkdown / 5)
    for (let i = 1; i <= numOfPages; i++) {
      createPage({
        path: "list/all/" + i,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          skip: (i - 1) * 5,
          currentPage: i,
          numOfPages: numOfPages,
        },
      })
    }

    // Set of all tags in all articles
    const allTags = new Set()
    // Iterate through all atricles to ...
    articles.forEach(article => {
      // collect their tags
      ;(article.frontmatter.tags || ["general"]).forEach(tag => {
        allTags.add(tag)
      })
      // create article page
      createPage({
        path: `/article/${article.fields.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: article.fields.slug,
          imgSrc: article.frontmatter.image,
        },
      })
    })
    console.log("All tags are ", allTags)

    // create listing page for each tag
    allTags.forEach(tag => {
      createPage({
        path: `/list/tag/${tag}`,
        component: path.resolve("./src/templates/blog-list-by-tag.js"),
        context: {
          tag: tag,
        },
      })
    })
  })
}


const Path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: stage === 'build-html'
        ? [
            {
              test: /ScrollMagic/,
              use: loaders.null(),
            },
            {
              test: /debug.addIndicators/,
              use: loaders.null(),
            },
            {
              test: /animation.gsap/,
              use: loaders.null(),
            },
            {
              test: /TweenMax/,
              use: loaders.null(),
            }
          ]
        : []
    },
    resolve: {
      alias: {
        TweenLite: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenLite.js'
        ),
        TweenMax: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenMax.js'
        ),
        TimelineLite: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineLite.js'
        ),
        TimelineMax: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineMax.js'
        ),
        ScrollMagic: Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'animation.gsap': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
        ),
        'debug.addIndicators': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        ),
      },
    },
  })
}