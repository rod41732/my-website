import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Section from '../components/section';
import {graphql} from 'gatsby';
export default ({data}) => {
  // can't use static query whyyyy
  const post = data.markdownRemark;
  console.log(post);
  return (
    <Layout>
      <div style={{
        paddingTop: "58px",
      }}>
        <Header title={post.frontmatter.title}></Header>
        <Section>
          <div dangerouslySetInnerHTML={{
            __html: post.html,
          }}/>
        </Section>
      </div>
    </Layout>
  );
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html 
    frontmatter {
      title
    }
  }
}
`