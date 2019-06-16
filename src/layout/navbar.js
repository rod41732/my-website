import React from 'react';
import {BrowserRouter as Link, Router} from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='nav-bar clear-fix' id="navbar">
        <div className="nav-item logo">Rod41732</div>
        <div className="nav-item nav-button" onClick={() => {
          let navClass = document.querySelector("#navbar").classList;
          if (navClass.contains("expanded")) {
            navClass.remove("expanded");
          } else {
            navClass.add("expanded");
          }
        }}> = </div>
        <div className="nav-item"><Link to="/about">About</Link></div>
        <div className="nav-item"><Link to="/home">Home</Link></div>
        <div className="nav-item"><Link to="/math">Math</Link></div>
        <div className="nav-item"><Link to="/dev">Dev</Link></div>
      </div>
    </div>
  );
}