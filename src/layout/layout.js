import React from 'react';
import Navbar from './navbar';
import Home from '../routes/home/home';
import './style.css';
export default function Layout() {
    return (
        <div> 
            <Navbar/>
            <Home/> 
        </div>
    )
}