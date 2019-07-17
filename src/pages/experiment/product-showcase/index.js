import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import ScrollMagic from "./lib/ScrollMagic"
class ShowcaseApp extends React.Component {
  constructor(props) {
    super(props)
    this.controller = new ScrollMagic.Controller()
  }

  componentDidMount() {
    // new ScrollMagic.Scene({
    //   triggerElement: "#slide1-product",
    //   triggerHook: 0.5,
    //   duration: 0,
    //   // offset: 50,
    //   // reverse: false,
    //   // offset: 50 // move trigger to center of element
    // })
    //   .setClassToggle("#slide1-product", "visible") // add class to reveal
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(this.controller)

    // new ScrollMagic.Scene({
    //   triggerElement: "#product-wrapper",
    //   triggerHook: 0.5,
    //   duration: 0,
    //   // reverse: false,
    //   // offset: 50 // move trigger to center of element
    // })
    //   .setPin("#slide1-product")
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(this.controller)

    // new ScrollMagic.Scene({
    //   triggerElement: "#text-box-1",
    //   triggerHook: 0.5,
    //   duration: 0,
    //   // reverse: false,
    //   // offset: 50 // move trigger to center of element
    // })
    //   .setPin("#text-box-1")
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(this.controller)

    document.querySelectorAll(".scene").forEach(elem => {
      new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.5,
        duration: "100%",
      })
        .setPin(elem)
        .addIndicators()
        .addTo(this.controller)
    })
  }

  render() {
    return (
      <div
        style={{
          transform: "none",
          transition: "all 0s",
        }}
      >
        <div className="wrapper clearfix">
          {[1, 2, 3, 4, 5].map((idx, _) => {
            console.log(idx)
            return (
              <div className="scene">
                <div>
                  <div className="content">
                    {idx}. Hello this is item {idx}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ShowcaseApp
