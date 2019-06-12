import React from 'react';
import './post.1.css';
export function PostInFeed2({tags, title, text, image, date}) {
    return (
        <div className="feed-post ">
            <div class="image-container clearfix">
                <img className="post-img" src={image || 'image.jpg'}/>
                <div className="post-info">
                    {
                        // TODO: format date
                        <div className="post-date">{date.toDateString()}</div>
                    }
                        <div className="tag-container">
                            {
                                (tags || ['general']).map(tagName => 
                                    <span className="post-tag">{tagName}</span>
                                )
                            }
                        </div> 
                    <div className="post-title">{title}</div>
                </div>
            </div>
            <p className="post-text">
                {text || `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ducimus quas, laboriosam beatae odio expedita itaque ab commodi
                  voluptatem suscipit officiis, accusantium quia minus numquam!
                   Dicta alias eligendi eos id doloremque.`
                }
            </p>
        </div>
    )
}