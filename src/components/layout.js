import React from 'react';
import Navbar from './navbar';
import {Helmet} from 'react-helmet';
import {useStaticQuery, Link, grpahql, graphql} from 'gatsby';
export default function Layout({children}) {
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
    return (
        <>
            <Helmet>
                <title>{ data.site.siteMetadata.title }</title>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                <link href={"https://fonts.googleapis.com/css?family=Kanit:400,500&display=swap"} rel="stylesheet"/>
            </Helmet>
            <div style={{
                paddingBottom: "32px",
            }}>
                <Navbar/>
                {children}
            </div>
        </>
    )
}