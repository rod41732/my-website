import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import ScrollMagic from "scrollmagic"
const debug = {
  addIndicators: require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
}
const animation = {
  gsap: require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
}

class ShowcaseApp extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.controller = new ScrollMagic.Controller()
    const pinnedImage = document.querySelectorAll(".pin-image")

    // pin boxes
    pinnedImage.forEach((elem, idx) => {
      // text-scenes
      new ScrollMagic.Scene({
        triggerElement: elem.parentNode,
        triggerHook: 0.2,
        duration: "100%",
      })
        .setPin(elem, {
          spacerClass: "sm-spacer", // set spacer class for easy reference
          pushFollowers: false,
        })
        .addIndicators({ name: `pin-box ${idx}` })
        .addTo(this.controller)

      new ScrollMagic.Scene({
        triggerElement: elem.parentNode,
        triggerHook: 0.0,
        duration: 0,
        offset: window.innerHeight,
      })
        .setClassToggle(elem, "down")
        .addIndicators({ name: `stay-down ${idx} ------------------------` })
        .addTo(this.controller)
    })

    const hiddenText = document.querySelectorAll(".content:not(.second)")
    hiddenText.forEach((elem, idx) => {
      // text-scenes
      console.log("parent = ", elem.parentNode)
      let pp =elem.parentNode.parentNode;
      console.log("parent-parent = ", pp)
      console.log("self = ", elem)
      new ScrollMagic.Scene({
        triggerElement: pp, // textbox -> spacer-block -> text-scene
        triggerHook: 0.4,
        duration: 0,
        reverse: true,
      })
        .setClassToggle(elem, "visible")
        .addIndicators(`text-reveal ${idx}`)
        .addTo(this.controller)
    })

    const hiddenTextSecond = document.querySelectorAll(".content.second")
    hiddenTextSecond.forEach((elem, idx) => {
      // text-scenes
      console.log("parent = ", elem.parentNode)
      let pp =elem.parentNode.parentNode;
      console.log("parent-parent = ", pp)
      console.log("self = ", elem)
      new ScrollMagic.Scene({
        triggerElement: pp, // textbox -> spacer-block -> text-scene
        triggerHook: 0.4,
        duration: 0,
        offset: window.innerHeight,
        reverse: true,
      })
        .setClassToggle(elem, "visible")
        .addIndicators(`text-reveal ${idx}`)
        .addTo(this.controller)
    })
    // second content box in, don't pin parent
    // const contentBoxes2 = document.querySelectorAll(".content.second-box")
    // contentBoxes2.forEach((elem, idx) => { // text-scenes
    //   new ScrollMagic.Scene({
    //     triggerElement: elem.previousSibling,
    //     triggerHook: 0.25,
    //     duration: 0,
    //     reverse: false,
    //   })
    //     .setClassToggle(elem, "visible")
    //     .addIndicators(`second text-reveal ${idx}`)
    //     .addTo(this.controller)
    // })
  }

  render() {
    return (
      <div
        className="wrapper"
        id="sm-container"
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
                <div className="pin-image">
                  <img src="/product-showcase/Doge.png" />
                </div>
                {/* <div className="pin-image" > DogeDoge</div> */}
                <div className="spacer-20">
                  <div className="content">
                    <h1 className="title-font" style={{ fontSize: "2em" }}>
                      Part {idx}-1 Est veniam
                    </h1>
                    <p>
                      Eu id sint est cupidatat incididunt do laboris voluptate
                      est exercitation. Sunt ex nulla sint ea veniam. Commodo
                      non aliqua nulla cupidatat excepteur nulla. Reprehenderit
                      dolore culpa culpa ex adipisicing nulla eu consequat
                      aliquip et ex. Adipisicing Lorem aute magna ullamco ipsum.
                      Fugiat reprehenderit officia eu excepteur laborum veniam
                      elit in reprehenderit irure qui ipsum anim. Sunt ad
                      cupidatat exercitation aute culpa. Nulla magna Lorem id
                      irure mollit. Ullamco Lorem non non proident elit sint
                      esse id amet sunt culpa cupidatat nisi nisi. Quis nulla
                      laboris quis velit anim ad qui occaecat duis nostrud
                      labore.
                    </p>
                  </div>
                </div>
                <div className="spacer-80">boring space</div>
                <div className="spacer-20">
                  <div className="second content">
                    <h1 className="title-font" style={{ fontSize: "2em" }}>
                      Part {idx}-2 sint ea veniam
                    </h1>
                    <p>
                      Eu id sint est cupidatat incididunt do laboris voluptate
                      est exercitation. Sunt ex nulla sint ea veniam. Commodo
                      non aliqua nulla cupidatat excepteur nulla. Reprehenderit
                      dolore culpa culpa ex adipisicing nulla eu consequat
                      aliquip et ex. Adipisicing Lorem aute magna ullamco ipsum.
                      Fugiat reprehenderit officia eu excepteur laborum veniam
                      elit in reprehenderit irure qui ipsum anim. Sunt ad
                      cupidatat exercitation aute culpa. Nulla magna Lorem id
                      irure mollit. Ullamco Lorem non non proident elit sint
                      esse id amet sunt culpa cupidatat nisi nisi. Quis nulla
                      laboris quis velit anim ad qui occaecat duis nostrud
                      labore.
                    </p>
                  </div>
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
