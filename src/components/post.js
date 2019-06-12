import React from 'react';
import './post.css';
export function PostInFeed({tags, title, text, image, date}) {
    return (
        <div className="feed-post clearfix">
            <img className="post-img" src={image || 'image.jpg'}/>
            <div className="post-title">{title}</div>
            <div className="post-info">
                {
                    // TODO: format date
                    <div className="post-date">{date.toDateString()}</div>
                }
                {
                    (tags || ['general']).map(tagName => 
                        <span className="post-tag">{tagName}</span>
                    )
                }
            </div>
            <div className="post-text">
                {text || `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ducimus quas, laboriosam beatae odio expedita itaque ab commodi
                  voluptatem suscipit officiis, accusantium quia minus numquam!
                   Dicta alias eligendi eos id doloremque.`
                }
            </div>
        </div>
    )
}