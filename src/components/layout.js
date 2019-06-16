import React from 'react';
import Navbar from './navbar';
import {Helmet} from 'react-helmet';
import './style.css';
export default function Layout({children}) {
    return (
        <>
            <Helmet>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                <link href={"https://fonts.googleapis.com/css?family=Kanit:400,700&display=swap"} rel="stylesheet"/>
            </Helmet>
            <div>
                <Navbar/>
                {children}
            </div>
        </>
    )
}