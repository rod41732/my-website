import React from "react"
import Layout from "../layouts"
import Header from "../components/header"
import Post from "../components/post"
import { graphql } from "gatsby"
import Pagenav from "../components/pagenav"
import Transition from "../components/transition"
export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes
  const tag = data.allTagDescJson.nodes[0]
  const tagDesc = tag !== undefined ? tag.desc : undefined
  console.log(posts)
  return (
    <>
      <div>
        <Header
          title={`Blogs in Category "${pageContext.tag}"`}
          subtitle={tagDesc}
        ></Header>
        {posts.map(post => {
          console.log(post.frontmatter.image)
          return (
            <Post
              date={post.frontmatter.date}
              image={"/" + post.frontmatter.image}
              key={post.id}
              link={`/article/${post.fields.slug}`}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              text={post.excerpt}
            />
          )
        })}
        <Pagenav
          currentPage={pageContext.currentPage}
          numOfPages={pageContext.numOfPages}
        />
      </div>
    </>
  )
}

export const query = graphql`
    query getMarkdownByTag($tag: String) {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: [DESC] }
        filter: { 
          frontmatter: { 
            tags: {
              in: [$tag] 
            },
            image:{
              ne: null
            }
          }
        }
      ) {
        nodes {
          id
          fileAbsolutePath
          frontmatter {
            title
            date
            image
            tags
          }
          excerpt
          fields {
            slug
          }
        }
      }
      allTagDescJson(filter: { name: { eq: $tag } }) {
        nodes {
          name
          desc
        }
      }
    }
`
