import React from 'react';
import './header.css';
import {useStaticQuery, graphql} from 'gatsby';

export default function Header({catergoryName}) {
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
            <h1 className="title"> {data.site.siteMetadata.title} : {catergoryName || 'All'}</h1>
            <div className="sub-title"> many blog such story much wow lorem ipsum</div>
        </div>
    )
}