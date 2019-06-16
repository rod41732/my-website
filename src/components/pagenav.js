import React from 'react';
import "./pagenav.css"
import _ from 'lodash';

export default function PageNav({currentPage, maxPage}) {
    console.log("Page nav is with ", currentPage, "Pages")
    return (
        <div className="page-nav">
            {
                (() => {
                    return [
                        pageNavButton("<", false),
                        ...(_.range(maxPage).map((num) => pageNavButton(num, num === currentPage))),
                        pageNavButton(">", false) ,
                    ]
                }) ()
                
            }
        </div>
    )
}

function pageNavButton(content, active) {
    return <div className={`page-nav-button ${active ? "active" : ""}`}>{content}</div>;
}