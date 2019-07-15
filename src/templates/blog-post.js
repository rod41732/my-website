import React from 'react';
import Layout from '../layouts';
import Header from '../components/header';
import Section from '../components/section';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Transition from '../components/transition';

export default ({ data }) => {
  // can't use static query whyyyy
  const post = data.markdownRemark;
  console.log(data);
  return (
      <>
        <div>
          <Header title={post.frontmatter.title}></Header>
          <Image fluid={data.file.childImageSharp.fluid} />
          <Section>
            <div dangerouslySetInnerHTML={{
              __html: post.html,
            }} />
          </Section>
        </div>
      </>
  );
}

export const query = graphql`
query($slug: String!, $imgSrc: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html 
    frontmatter {
      title
    }
  },
  file(relativePath: {eq: $imgSrc}){
    childImageSharp{
      fluid(maxWidth:1920, maxHeight: 540) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`