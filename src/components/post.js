import React from 'react'
import './post.css'
import { Link } from 'gatsby'

export default ({ tags, title, text, image, date, link }) => {
  return (
    <div className="feed-post  clearfix">
      <div className="image-container">
        <Link to={link}>
          <img alt={title} className="post-img" src={image || 'image.jpg'} />
        </Link>
      </div>
      <div className="post-info">
        <div className="post-title title-font">{title}</div>
        {
          // TODO: format date
          <div className="post-date secondary-font">{date}</div>
        }
        <span className="tag-desc title-font">tags:</span>
        <div className="tag-container secondary-font">
          {tags.map(tagName => (
            <span key={tagName} className="post-tag">
              <Link to={`/list/tag/${tagName}`}>{tagName}</Link>
            </span>
          ))}
        </div>
      </div>
      <div className="post-divider" />
      <p className="post-text">
        {text ||
          `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus quas, laboriosam beatae odio expedita itaque ab commodi
                    voluptatem suscipit officiis, accusantium quia minus numquam!
                    Dicta alias eligendi eos id doloremque.`}
      </p>
    </div>
  )
}
