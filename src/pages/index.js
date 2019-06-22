import React from 'react';
import Post from '../components/post';
import Header from '../components/header';
import PageNav from '../components/pagenav';
import Layout from '../components/layout';
import {graphql} from 'gatsby';

export default ({data}) => {
    console.log(data);
    return (
        <Layout>
          <div style={{
            paddingTop: "58px",
          }}>
            <Header title="Rod41732's blog" subtitle="beautiful stories, wow"/>
            {
                  data.allMarkdownRemark.nodes.slice(0, 5).map((post, index) => (
                      <Post
                          key={index}
                          title={post.frontmatter.title}
                          date={post.frontmatter.date}
                          image={post.frontmatter.image}
                          tags={post.frontmatter.tags}
                          text={post.excerpt}
                          link={`/blog/${post.fields.slug}`}
                      />
                  ))
            }
            <PageNav numOfPages={Math.ceil(data.allMarkdownRemark.nodes.length/5)} currentPage={1}/>
          </div>
        </Layout>
    )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: [DESC]}, skip: 0) {
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
