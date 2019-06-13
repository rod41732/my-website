import React from 'react';
import './card.css'

export default function Card({title, body, extra}) {
    return (
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-body">
                {body}  
            </div>
            {extra}
        </div>
    )
}