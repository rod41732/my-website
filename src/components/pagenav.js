import React from 'react';
import "./pagenav.css"
import _ from 'lodash';
import {Link} from 'gatsby';

export default function PageNav({currentPage, maxPage}) {
    console.log("Page nav is with ", maxPage, "Pages")
    return (
        <div className="page-nav">
            {
                (() => {
                    return [
                        pageNavButton("<", false),
                        ...(_.range(maxPage).map((num) => pageNavButton(num+1, num+1 === currentPage))),
                        pageNavButton(">", false) ,
                    ]
                }) ()
                
            }
        </div>
    )
}

// TODO: fix this shitty implementation of link
function pageNavButton(content, active) {    
    return <Link key={content} to={`/blog/page/${content}`} ><div className={`page-nav-button ${active ? "active" : ""}`}>{content}</div></Link>;
}