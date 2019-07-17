import React from "react"
import PropTypes from "prop-types"
import "./section.css"

export default function Section({ children, title, icon, fullwidth }) {
  return (
    <div className={`section-card ${fullwidth ? "full-width" : ""}`}>
      <div className="section-header">
        <div className="section-icon">{icon}</div>
        <div className="section-title title-font">{title}</div>
      </div>
      <div className="section-content">{children}</div>
    </div>
  )
}

Section.propTypes = {
  fullwidth: PropTypes.bool,
}
