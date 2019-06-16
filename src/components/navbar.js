import React from 'react';
import {Link} from 'gatsby';
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='nav-bar clearfix title-font' id="navbar">
        <Link to="/"><div className="nav-item logo">Rod41732</div></Link>
        <div className="nav-item nav-button" 
          onClick={() => {
            let navClass = document.querySelector("#navbar").classList;
            if (navClass.contains("expanded")) {
              navClass.remove("expanded");
              document.querySelector(".nav-button").innerHTML = "≡";
            } else {
              navClass.add("expanded");
              document.querySelector(".nav-button").innerHTML = "X";
            }
          }}> 
          ≡ 
        </div>
        <Link to="/about"><div className="nav-item">About</div></Link>
        <Link to="/home"><div className="nav-item">Home</div></Link>
        <Link to="/math"><div className="nav-item">Math</div></Link>
        <Link to="/dev"><div className="nav-item">Dev</div></Link>
      </div>
    </div>
  );
}