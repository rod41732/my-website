import React from 'react';
import './section.css';

export default function Section({child, title, icon}) {
    return (
        <div className="section-card">
            <div className="section-header">
                <div className="section-icon">{icon}</div>
                <div className="section-title">{title}</div>
            </div>
            <div className="section-content">
                {
                    child
                }
            </div>
        </div>
    )
}