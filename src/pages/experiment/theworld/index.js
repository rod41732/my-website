import React from "react"
import "./index.css"

import ScrollMagic from "scrollmagic"
import { TweenMax, TweenLite, Ease, Power4, Power2, TimelineMax } from "gsap"

const debug = {
  addIndicators: require("scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"),
}
const animation = {
  gsap: require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"),
}

const plugins = [TweenMax, animation, debug]

export default class TheWorld extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.controller = new ScrollMagic.Controller()
    
    const tl = new TimelineMax()
    
    // wave
    tl.to(
      ".wave",
      0.1,
      {
        height: "3840px",
        width: "3840px",
        top: "-1758px",
        left: "-768px",
      },
      0
    )
    
    // image zoom out
    tl.fromTo(
      ".image",
      0.1,
      {
        scaleX: 2,
        scaleY: 2,
      },
      {
        scaleX: 1.2,
        scaleY: 1.2,
      },
      0
    )

    // image jitter
    tl.to(
      ".image",
      0.4,
      {
        scaleX: 1.12,
        scaleY: 1.12,
        repeat: 4,
        yoyo: true,
        ease: Power2.easeInOut,
      },
      0.1
    )

    // Scale Back
    tl.to(
      ".image",
      0.4,
      {
        scaleX: 1.00,
        scaleY: 1.00,
        repeat: 4,
        yoyo: true,
        ease: Power2.easeInOut,
      },
      0.5
    )

    // no wave
    tl.to(
      ".wave",
      0.1,
      {
        height: "0px",
        width: "0px",
        top: "217px",
        left: "1020px",
      },
      // 0.9
    )




    // change Inverted-ness  of wave
    const colors = [
      /*"violet", "indigo", "blue", "green", "yellow", "orange", "red",*/ "white",
    ]

    // the timeline animation
    const DURATION = "800%";
    new ScrollMagic.Scene({
      triggerElement: "#root",
      triggerHook: 0,
      duration: DURATION,
    })
      .setTween(tl)
      .addIndicators()
      .addTo(this.controller)
    
    // pin image 
    document.querySelectorAll(".image").forEach((elem) => {
      new ScrollMagic.Scene({
        triggerElement: "#root",
        triggerHook: 0,
        duration: DURATION,
      })
        .setPin(elem)
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
          {/* <img className="image" src="/theworld/zawarudo.png" /> */}
        </div>
      </div>
    )
  }
}
