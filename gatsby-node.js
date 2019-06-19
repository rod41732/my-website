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
  graphql(` 
  query countAllMarkdown {
    allMarkdownRemark {
      nodes {
        id
      }
    }
  }`).then(({data}) => {
    console.log(`================= there're ${data.allMarkdownRemark.nodes.length} markdowns!`)
    const numOfmarkdown = data.allMarkdownRemark.nodes.length;
    const numOfPages = Math.ceil(numOfmarkdown/5);
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
  })
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: '/blog' + node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}