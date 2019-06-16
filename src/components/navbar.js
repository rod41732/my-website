import React from 'react';
import {Link} from 'gatsby';
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
        <Link to="/about"><div className="nav-item">About</div></Link>
        <Link to="/home"><div className="nav-item">Home</div></Link>
        <Link to="/math"><div className="nav-item">Math</div></Link>
        <Link to="/dev"><div className="nav-item">Dev</div></Link>
      </div>
    </div>
  );
}