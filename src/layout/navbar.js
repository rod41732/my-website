import React from 'react';
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
        <div className="nav-item">Etc</div>
        <div className="nav-item">Home</div>
        <div className="nav-item">Math</div>
        <div className="nav-item">Dev</div>
      </div>
    </div>
  );


}