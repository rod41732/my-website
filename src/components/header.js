import React from 'react';
import './header.css';

export default function Header({title, subtitle}) {
    return (
        <div className="center-text title-font">
            <h1 className="header title"> {title || "No title, so sad"}</h1>
            <div className="sub-title"> {subtitle || "such empty subtitle, much update needed"}</div>
        </div>
    )
}