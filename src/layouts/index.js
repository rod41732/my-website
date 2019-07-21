import React, { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import "./layout.css"
import Transition from "../components/transition"
import * as _ from "lodash"
const Layout = ({ children, location }) => {
  const [loc, setLoc] = useState("")
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  // hacky way to workaround `location` is undefined
  if (!location) {
  } else if (location.pathname != loc.pathname) {
    setLoc(location)
  }
  const notHome = !!location && !_.some(
    ["^/$", "^/terminal/$", "^/experiment/"],
    o => {
      let patt = new RegExp(o);
      return patt.test(location.pathname)
    }
  )
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href={
            "https://fonts.googleapis.com/css?family=Kanit:400,500&display=swap"
          }
          rel="stylesheet"
        />
      </Helmet>
      {notHome ? (
        <>
          <Navbar />
          <Transition location={loc}>
            <div
              style={{
                paddingBottom: notHome ? "32px" : "0px",
              }}
            >
              {children}
            </div>
          </Transition>
          <Footer extraClass="footer" />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Layout
