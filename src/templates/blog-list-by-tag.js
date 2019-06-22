import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Post from '../components/post';
import {graphql} from 'gatsby';
import Pagenav from '../components/pagenav';
export default ({data , pageContext}) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);
  return (
    <Layout>
      <div style={{
        paddingTop: "58px",
      }}>
        <Header title={`Blogs in Category "${pageContext.tag}"`}></Header>
        {
          posts.map((post) => {
            console.log(post.frontmatter.image)
            return <Post
              date={post.frontmatter.date}
              image={post.frontmatter.image}
              key={post.id}
              link={`/article/${post.fields.slug}`}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              text={post.excerpt}
            />
          })
        }
        <Pagenav currentPage={pageContext.currentPage} numOfPages={pageContext.numOfPages}/>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query getMarkdownByTag($tag: [String]) {
    allMarkdownRemark(
       sort: {fields: [frontmatter___title], order: [DESC]},
      filter: {
        frontmatter :{
          tags:{
            in: $tag
          }
        }
      }) { 
      nodes {
        id
        fileAbsolutePath
        frontmatter{
          title
          date
          image
          tags
        }
        excerpt
        fields{
          slug
        }
      }
    }
  }
`