import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../components/footer';
import './layout.css';
import Transition from '../components/transition';

const Layout = ({ children, location }) => {
    const [loc, setLoc] = useState("");
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
    if (!location){
    } else if (location.pathname != loc.pathname) {
        setLoc(location)
    }
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link href={"https://fonts.googleapis.com/css?family=Kanit:400,500&display=swap"} rel="stylesheet" />
            </Helmet>

            <div style={{
                paddingBottom: "32px",
            }}>
                <Navbar />
                <Transition location={loc}>
                    {children}
                </Transition>
                <Footer extraClass="footer" />
            </div>
        </>
    )
}

export default Layout