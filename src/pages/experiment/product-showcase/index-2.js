import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import ScrollMagic from "scrollmagic"
class ShowcaseApp extends React.Component {
  constructor(props) {
    super(props)
    this.controller = new ScrollMagic.Controller()
  }

  componentDidMount() {
    const pinnedImage = document.querySelectorAll(".pin-image")

    // pin boxes
    pinnedImage.forEach((elem, idx) => {
      // text-scenes
      new ScrollMagic.Scene({
        triggerElement: elem.parentNode,
        triggerHook: 0.4,
        duration: "100%",
      })
        .setPin(elem, {
          spacerClass: "sm-spacer", // set spacer class for easy reference
        })
        .addIndicators({ name: `pin-box ${idx}` })
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
          <div
            className="presenter"
            style={{
              // placeholder
              height: "100vh",
            }}
          >
            <h1 className="title-font"> Lorem ipsum 2019</h1>
            <img
              src="/product-showcase/Doge.png"
              width="500px"
              height="500px"
            />
          </div>
          {[1, 2, 3, 4, 5].map((idx, _) => {
            console.log(idx)
            return (
              <div className="text-scene">
                <div className="spacer-40"></div>
                <div className="spacer-20">
                  {" "}
                  {/* 20  */}
                  <img
                    className="pin-image"
                    src="/product-showcase/Doge.png"
                  />{" "}
                  <div style={{
                    float: "right",
                  }}>Hello world 00000000000000000000</div>
                </div>
                <div className="spacer-80">
                  --------------------------------------------------
                  ----------------------------------------------------------Another
                  spacing
                </div>
                <div className="spacer-20">
                  {" "}
                  {/* 20  */}
                  ----------------------------------------------- ------
                  ---------------------------------------------------------------Antoher
                  00000000000000000000
                </div>
                <div className="spacer-40"></div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ShowcaseApp
