const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const {createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    if (node.frontmatter.tags == null)  {
      console.log(`[INFO] ${node.fileAbsolutePath} has no tag, defaulted to "general"`)
      node.frontmatter.tags = ["general"]
    }
    createNodeField({
      node,
      name: "slug",
      value: slug.replace("/", "")
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
    // list of articles (`MarkdownRemark`s) 
    const articles = data.allMarkdownRemark.nodes;
    const numOfMarkdown = articles.length;
    console.log(`================= there're ${numOfMarkdown} markdowns!`)
    
    // Create listing page for each 5 articles
    const numOfPages = Math.ceil(numOfMarkdown/5);
    for (let i=1; i<=numOfPages; i++){
      createPage({
        path: "list/all/" + i,
        component : path.resolve("./src/templates/blog-list.js"),
        context: {
          skip: (i-1)*5,
          currentPage: i,
          numOfPages: numOfPages,
        },
      })
    }

    // Set of all tags in all articles
    const allTags = new Set();
    // Iterate through all atricles to ...
    articles.forEach((article) => {
      // collect their tags 
      (article.frontmatter.tags || ["general"]).forEach((tag) => {
        allTags.add(tag);
      })
      // create article page
      createPage({
        path: `/article/${article.fields.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: article.fields.slug,
        }
      })  
    })
    console.log("All tags are ", allTags);

    // create listing page for each tag
    allTags.forEach((tag) => {
      createPage({
          path: `/list/tag/${tag}`,
          component: path.resolve("./src/templates/blog-list-by-tag.js"),
          context: {
            tag: tag,
          }
      })
    })
  })
}