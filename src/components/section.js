import React from 'react';
import PropTypes from 'prop-types';
import './section.css';

export default function Section({child, title, icon, fullwidth}) {
    return (
        <div className={
            `section-card ${fullwidth ? "full-width":""}`
        }>
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

Section.propTypes = {
    fullwidth: PropTypes.bool,
}