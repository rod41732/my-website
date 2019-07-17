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
    const contentBoxes = document.querySelectorAll(".content")

    contentBoxes.forEach((elem, idx) => {
      new ScrollMagic.Scene({
        triggerElement: elem.parentNode,
        triggerHook: 0,
        duration: "100%",
      })
        .setPin(elem.parentNode, {
          spacerClass: "sm-spacer", // set spacer class for easy reference
        })
        .addIndicators({ name: `pin-box ${idx}` })
        .addTo(this.controller)

      new ScrollMagic.Scene({
        triggerElement: elem.parentNode,
        triggerHook: 0.25,
        duration: 0,
        reverse: false,
      }).setClassToggle(elem, "visible")
      .addIndicators(`text-reveal ${idx}`)
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
              src="/product-showcase/laptop.png"
              width="500px"
              height="500px"
            />
          </div>
          {[1, 2, 3, 4, 5].map((idx, _) => {
            console.log(idx)
            return (
              <div className="text-scene">
                <div className="content">
                  <div className="content-text">
                    <div className="title title-font">
                      {idx}. Hello this is item {idx}
                    </div>
                    <div className="description secondary-font">
                      Magna tempor id in nisi irure cupidatat. Ad non proident
                      exercitation dolore tempor veniam aliqua excepteur
                      cupidatat in culpa eiusmod. Lorem deserunt ullamco qui in
                      eu ea deserunt eu reprehenderit elit. Est aute non eu
                      minim id amet deserunt minim irure cillum.
                    </div>
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
