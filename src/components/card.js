import React from "react"
import "./card.css"

export default function Card({ title, body, footer }) {
  return (
    <div className="card">
      <div className="card-title title-font">{title}</div>
      <div className="card-body">{body}</div>
      <div>{footer}</div>
    </div>
  )
}
