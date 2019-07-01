import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import './navbar.css'

export default class Navbar extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      prevScrollpos: 0,
      visible: true,
    }
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const cls = `nav-height ${this.state.visible ? "": "small"}`
    return (
      <>
        <div className={`nav-bar clearfix title-font ${cls}`}  id="navbar">
          <Link to="/"><div className={`nav-item logo ${cls}`}>Rod41732</div></Link>
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
          <Link className={`nav-item ${cls}`} to="/about"><div>About</div></Link>
          <Link className={`nav-item ${cls}`} to="/home"><div>Home</div></Link>
          <Link className={`nav-item ${cls}`} to="/math"><div>Math</div></Link>
          <Link className={`nav-item ${cls}`} to="/dev"><div>Dev</div></Link>
        </div>
        <div className="nav-height"/>
      </>
    );
  }
}