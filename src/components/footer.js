import React from "react"
import "./footer.css"

// extraClass is for css styleing, and fixing in consitent animation
export default function({ extraClass }) {
  return (
    <div className={`footer-container clearfix ${extraClass}`}>
      <div className={`footer-text ${extraClass}`}>
        Copyright Rod41732 2019 - infinity
      </div>
      <div className={`footer-text`}>
        <a
          className={`footer-link ${extraClass}`}
          href="https://github.com/rod41732"
        >
          Github
        </a>
        <a className={`footer-link ${extraClass}`} href="">
          Twitter
        </a>
        <a className={`footer-link ${extraClass}`} href="">
          Youtube
        </a>
      </div>
    </div>
  )
}
