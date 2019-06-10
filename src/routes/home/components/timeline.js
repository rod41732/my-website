import './timeline.css';
import React from 'react';

export default function ({items}) {
    return (
    <div class="timeline">
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
    <li class="message-container">
        <div class="message-box">
            <div class="bubble">
                <span class="message-time"> 2019 </span><span class="message-title">{title}</span>
                <p class="message-body">{body}</p>
            </div>
        </div>
    </li>)
}