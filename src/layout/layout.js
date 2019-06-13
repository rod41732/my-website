import React from 'react';
import Navbar from './navbar';
import Home from '../routes/home/home';
import './style.css';
import AboutMe from '../routes/about/about';
export default function Layout() {
    return (
        <div> 
            <Navbar/>
            {/* <Home/>  */}
            <AboutMe></AboutMe>
        </div>
    )
}