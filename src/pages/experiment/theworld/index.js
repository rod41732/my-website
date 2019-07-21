import React from "react"
import "./index.css"

import ScrollMagic from "scrollmagic"
import { TweenMax } from "gsap"
const debug = {
  addIndicators: require("scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"),
}
const animation = {
  gsap: require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"),
}

export default class TheWorld extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.controller = new ScrollMagic.Controller()
    // const effect = TweenMax.to()

    document.querySelectorAll(".wave").forEach(elem => {
      console.log("wave", elem)
      new ScrollMagic.Scene({
        triggerElement: "#root",
        triggerHook: 0,
        duration: "200%",
      })
        .setTween(elem, {
          height: "3840px",
          width: "3840px",
          top: "-1758px",
          left: "-768px",
          color: "#00ff00",
        })
        .addIndicators()
        .addTo(this.controller)
    })

    document.querySelectorAll(".image").forEach(elem => {
      console.log("image", elem)
      new ScrollMagic.Scene({
        triggerElement: "#root",
        triggerHook: 0,
        duration: "200%",
      })
        .setPin(elem)
        .addIndicators()
        .addTo(this.controller)

      const tw = TweenMax.to(elem, 1, {
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.266,0.412 0.128,0.803 0.224,1.056 0.239,1.095 0.318,0.979 0.372,0.962 0.408,0.95 0.437,1.031 0.488,1.034 0.532,1.036 0.541,0.977 0.584,0.964 0.614,0.955 0.675,1.031 0.71,1.036 0.731,1.038 0.786,0.974 0.808,0.972 0.838,0.968 0.983,1 1,1"
        ),
        scaleX: 1.15,
        scaleY: 1.15,
        yoyo: true,
      })

      new ScrollMagic.Scene({
        triggerElement: "#root",
        triggerHook: 0,
        duration: "200%",
      })
        .setTween(tw)
        .addIndicators()
        .addTo(this.controller)
    })
  }

  render() {
    return (
      <div id="root">
        <div className="container">
          <div id="trigger"></div>
          <div className="image">
            <img src="/theworld/zawarudo.png" />
          </div>
          <div className="wave"></div>
          <div className="wave smaller"></div>
          {/* <img className="image" src="/theworld/zawarudo.png" /> */}
        </div>
      </div>
    )
  }
}
