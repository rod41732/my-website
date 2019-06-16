import React from 'react';
import './header.css';

export default function Header({catergoryName}) {
    return (
        <div className="header title-font">
            <h1 className="title">Blog : {catergoryName || 'All'}</h1>
            <div className="sub-title"> many blog such story much wow lorem ipsum</div>
        </div>
    )
}