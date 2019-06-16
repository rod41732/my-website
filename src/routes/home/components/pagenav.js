import React from 'react';
import "./pagenav.css"

export default function PageNav({currentPage, maxPage}) {
    return (
        <div className="page-nav">
            {
                [
                    pageNavButton("<", false),
                    ...[...Array(maxPage).keys()].map((idx) => pageNavButton(idx, idx === currentPage)),
                    pageNavButton(">", false) ,
                ]
            }
        </div>
    )
}

function pageNavButton(content, active) {
    return <div className={`page-nav-button ${active ? "active" : ""}`}>{content}</div>;
}