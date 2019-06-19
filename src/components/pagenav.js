import React from 'react';
import "./pagenav.css"
import _ from 'lodash';
import {Link} from 'gatsby';

export default function PageNav({currentPage, numOfPages}) {
    console.log("Page nav is with ", numOfPages, "Pages")
    return (
        <div className="page-nav">
            {
                (() => {
                    return [
                        pageNavButton("<", false, currentPage - 1 > 0 ? currentPage - 1 : -1),
                        ...(_.range(numOfPages).map((num) => pageNavButton(num+1, num+1 === currentPage, num+1))),
                        pageNavButton(">", false, currentPage + 1 <= numOfPages ? currentPage + 1 : -1) ,
                    ]
                }) ()
                
            }
        </div>
    )
}

function pageNavButton(content, active, toPage) {
    const child = <div className={`page-nav-button ${active ? "active" : ""}`}>{content}</div>;
    if (toPage !== -1) 
        return <Link to={`blog/page/${toPage}`} key={content}>{child}</Link>
    return null;
}