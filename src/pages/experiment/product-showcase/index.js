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

    document.querySelectorAll(".c-scene").forEach((elem) => {
      new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.5,
        duration: "100%",
      })
        .setPin(elem)
        .addIndicators()
        .addTo(this.controller)
      }
    )
  }

  render() {
    return (
      <div className="flex-wrapper">
        <section id="scene1" className="c-scene">
          <div className="c-scene__content">
            <h1 className="c-scene__quote">
              Our greatest glory is not in never falling, but in rising every
              time we fall.
            </h1>
            <h2 className="c-scene__author">Confucious</h2>
          </div>
        </section>

        <section id="scene2" className="c-scene">
          <div className="c-scene__content">
            <h1 className="c-scene__quote">
              Life is a great surprise, I don't see why death should not be an
              even greater one.
            </h1>
            <h2 className="c-scene__author">Vladimir Nabokov</h2>
          </div>
        </section>

        <section id="scene3" className="c-scene">
          <div className="c-scene__content">
            <h1 className="c-scene__quote">
              You didn't come in to this world, you came out of it.
            </h1>
            <h2 className="c-scene__author">Alan Watts</h2>
          </div>
        </section>

        <section id="scene4" className="c-scene">
          <div className="c-scene__content">
            <h1 className="c-scene__quote">
              If opportunity doesn't knock, build a door.
            </h1>
            <h2 className="c-scene__author">Milton Berle</h2>
          </div>
        </section>
      </div>
    )
  }
}

export default ShowcaseApp
