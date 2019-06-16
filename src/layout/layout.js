import React from 'react';
import Home from '../routes/home/home';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
// import './navbar.css'
import AboutMe from '../routes/about/about';
export default function Layout() {
    return (
        <Router>
            <Navbar2 />
            {/* <Link to="/about">about</Link> */}
            <Route path="/about" component={AboutMe} />
            <Route path="/" exact component={Home} />
        </Router>
    )
}

function Navbar2() {
    return (
        <div>
            <div className='nav-bar clear-fix' id="navbar">
                <Link to="/"><div className="nav-item logo">Rod41732</div></Link>
                <div className="nav-item nav-button" onClick={() => {
                    let navClass = document.querySelector("#navbar").classList;
                    if (navClass.contains("expanded")) {
                        navClass.remove("expanded");
                    } else {
                        navClass.add("expanded");
                    }
                }}> = </div>
                <Link to="/about"><div className="nav-item">About</div></Link>
                {/* <Link to="/home"><div className="nav-item">Home</div></Link> */}
                <Link to="/math"><div className="nav-item">Math</div></Link>
                <Link to="/dev"><div className="nav-item">Dev</div></Link>
            </div>
        </div>
    );
}