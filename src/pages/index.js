import React from 'react';
import Post from '../components/post';
import Header from '../components/header';
import PageNav from '../components/pagenav';
import Layout from '../components/layout';

export default ({data}) => {
    console.log(data);
    return (
        <Layout>
          <div style={{
            paddingTop: "58px",
          }}>
            <Header title="Rod41732's blog" subtitle="beautiful stories, wow"/>
            {
                data.allMarkdownRemark.edges.map(({node}, index) => (
                    <Post
                        key={index}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        image="image.jpg"
                        tags={null}
                        text={node.excerpt}
                        link={`/blog/${node.fields.slug}`}
                    />
                ))
            }
            <PageNav maxPage={Math.ceil(data.allMarkdownRemark.totalCount/5)} currentPage={1}/>
          </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
              slug
          }
        }
      }
    }
  }
`
