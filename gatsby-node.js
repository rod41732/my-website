const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const {createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(` 
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `
  )
  .then(({data}) => {
    const articles = data.allMarkdownRemark.nodes;
    const numOfMarkdown = articles.length;
    console.log(`================= there're ${numOfMarkdown} markdowns!`)
    const numOfPages = Math.ceil(numOfMarkdown/5);
    for (let i=1; i<=numOfPages; i++){
      createPage({
        path: "blog/page/" + i,
        component : path.resolve("./src/templates/blog-list.js"),
        context: {
          skip: (i-1)*5,
          currentPage: i,
          numOfPages: numOfPages,
        },
      })
    }
    const allTags = new Set();
    articles.forEach((article) => {
      (article.frontmatter.tags || ["general"]).forEach((tag) => {
        allTags.add(tag);
      })
      createPage({
        path: `/blog/${article.fields.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: article.fields.slug,
        }
      })  
    })
    console.log("All tags are ", allTags);
  })
}