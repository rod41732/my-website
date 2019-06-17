import React from 'react';
import './cover.css'

export default function Cover() {
    return (
        <div className="cover clearfix">
            <img className="cover-img" style={{
                backgroundImage: `url(${"image.jpg"})`
            }}
                alt="Cover picture"
            />
            <img className="avatar-img" src="doge.png" alt="Profile picture"/>
            <div className="profile">
                <div className="profile-line name">Rodchananat K.</div>
                <div className="profile-line">Such developer much wow</div>
            </div>
            <div className="profile-links">
                <span className="post-tag">link 1</span>
                <span className="post-tag">link 2</span>
                <span className="post-tag">link 3</span>
            </div>
        </div>
    )
}