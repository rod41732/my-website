import React from 'react'
import Footer from '../components/footer'
import { graphql, Link } from 'gatsby'
import './index.css'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <div className="home-image clearfix">
        {/* <div className="home-container secondary-font"> */}
        <div className="home-title  secondary-font">Rod41732</div>
        <div className="home-subtitle secondary-font">
          Dev, tech and my thoughts
        </div>
        {/* </div> */}
        <div className="home-link-container">
          <Link to="/list/all/1" className="home-link">
            <div>Blog</div>
          </Link>
          <Link to="/list/all/1" className="home-link">
            <div>Dev</div>
          </Link>
          <Link to="/list/all/1" className="home-link">
            <div>Math</div>
          </Link>
        </div>
      </div>
      <div
        className="title-font"
        style={{
          border: '0px',
          margin: '0px',
        }}
      ></div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: [DESC] }
      skip: 0
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
  }
`
