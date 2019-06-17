import React from 'react';
import './header.css';
import {useStaticQuery, graphql} from 'gatsby';

export default function Header({title, subtitle}) {
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
    );
    return (
        <div className="header title-font">
            <h1 className="title"> {title || "No title, so sad"}</h1>
            <div className="sub-title"> {subtitle || "such empty subtitle, much update needed"}</div>
        </div>
    )
}