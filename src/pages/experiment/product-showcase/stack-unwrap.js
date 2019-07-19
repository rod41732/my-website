import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import "./stack-unwrap.css"
import ScrollMagic from "scrollmagic"
const _ = require('lodash')

class ShowcaseApp extends React.Component {
  constructor(props) {
    super(props)
    this.NUM_OF_SECTIONS = 5;
  }

  componentDidMount() {
    this.controller = new ScrollMagic.Controller()
    const trigger = document.getElementById("container")
    const stackedItems = document.querySelectorAll(".stacked")
    console.log(trigger)
    stackedItems.forEach((elem, idx) => {
      // the pop-stack part
      console.log(this.NUM_OF_SECTIONS - idx, "=>", `${this.NUM_OF_SECTIONS - idx}00%`)
      new ScrollMagic.Scene({
        duration: 0,
        // calculated scroll offset
        offset: (this.NUM_OF_SECTIONS - idx-0.5)*window.innerHeight,
        triggerElement: trigger,
        triggerHook: 0,
      })
        .setClassToggle(elem, "go-away")
        .addIndicators()
        .addTo(this.controller)
      // pin item so it doesn't go off-screen
      new ScrollMagic.Scene({
        duration: 0,
        triggerElement: trigger,
        triggerHook: 0,
      })
        .setPin(elem, {pushFollowers: false})
        .addIndicators()
        .addTo(this.controller)
    })

  }

  render() {
    // note that "image"'s index will be reversed because of stacking
    return (
      <div className="wrapper">
        <div
          className="presenter"
          style={{
            // placeholder
            height: "100vh",
            backgroundColor: "orange",
          }}
        >
          <h1 className="title-font"> Stack + Unwrap</h1>
          <img
            src="/product-showcase/Doge.png"
            width="500px"
            height="500px"
          />
        </div>
        <div className="stacked-container clearfix" id="container">
          {/* stacked images */}
          {_.range(this.NUM_OF_SECTIONS).map((idx, _) => {
            return (
              // mod 5 because only have 5 styles
              <div className={`stacked item-${idx%5}`}>
                <div className="image">{idx}-th image</div>
              </div>
            )
          })}
          {/* background contents */}
          {_.range(this.NUM_OF_SECTIONS).map((idx, _) => {
            return (
              <div className={`full-height item-${idx%5}`}>
                <div> {idx}-th content</div>
                <div>
                  Sit elit adipisicing et culpa quis. Pariatur eu fugiat magna sit est qui amet enim dolor officia ad aliqua. Ut magna ut consequat amet consequat. Irure deserunt do ut mollit enim sit anim occaecat irure incididunt ea velit. Pariatur laborum est sit veniam anim sint do dolore. Sunt cupidatat magna non aliquip nisi voluptate sint aliqua irure excepteur.
                </div>
              </div>
            )
          })}
        </div>
        <div className={`full-height item-0`}>
          <div> Additional contents </div>
          <div>
            Sit elit adipisicing et culpa quis. Pariatur eu fugiat magna sit est qui amet enim dolor officia ad aliqua. Ut magna ut consequat amet consequat. Irure deserunt do ut mollit enim sit anim occaecat irure incididunt ea velit. Pariatur laborum est sit veniam anim sint do dolore. Sunt cupidatat magna non aliquip nisi voluptate sint aliqua irure excepteur.
          </div>
        </div>
        <div className={`full-height item-1`}>
          <div> Additional contents - 2</div>
          <div>
            Sit elit adipisicing et culpa quis. Pariatur eu fugiat magna sit est qui amet enim dolor officia ad aliqua. Ut magna ut consequat amet consequat. Irure deserunt do ut mollit enim sit anim occaecat irure incididunt ea velit. Pariatur laborum est sit veniam anim sint do dolore. Sunt cupidatat magna non aliquip nisi voluptate sint aliqua irure excepteur.
          </div>
        </div>
      </div>
    )
  }
}

export default ShowcaseApp
