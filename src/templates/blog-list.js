import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Post from '../components/post';
import {graphql} from 'gatsby';
export default ({data}) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);
  return (
    <Layout>
        <Header title={`Blogs page `}></Header>
        {
          posts.map((post) => {
            console.log(post.frontmatter.image)
            return <Post
              date={post.frontmatter.date}
              image={post.frontmatter.image}
              key={post.id}
              link={`/blog/${post.fields.slug}`}
              tags={null} // general
              title={post.frontmatter.title}
              text={post.excerpt}
            />
          })
        }
    </Layout>
  );
}

export const query = graphql`
  query getSliceOfMarkdown($skip: Int!) {
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: [DESC]}, skip: $skip, limit: 5) {
      nodes {
        id
        fileAbsolutePath
        frontmatter{
          title
          date
          image
        }
        excerpt
        fields{
          slug
        }
      }
    }
  }
`