import './timeline.css';
import React from 'react';

export default function Timeline({items}) {
    return (
    <div className="timeline clearfix">
        <ul>
            {
                items.map((data) => TimelineBubble(data))
            }
            <li></li> {/* extra <li> for line that past end node*/}
        </ul>
    </div>)
} 

function TimelineBubble({title, body}) {
    return (
    <li className="message-container">
        <div className="message-box">
            <div className="bubble">
                <span className="message-time secondary-font"> 2019 </span>
                <span className="message-title title-font">{title}</span>
                <p className="message-body">{body}</p>
            </div>
        </div>
    </li>)
}