import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const duration = 200

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: "scale3d(0.5, 0.5, 1)",
  opacity: 1,
}

const transitionStyles = {
  entering: {
    opacity: 0.7,
    transform: "scale3d(1.05, 1.05, 1)",
  },
  entered: {
    opacity: 1,
    transition: `transform ${duration / 2}ms ease-in-out`,
    transform: "none",
  },
  exiting: {
    opacity: 0.0,
    transform: "scale3d(1.05, 1.05, 1)",
  },
  exited: {
    opacity: 0.0,
    transform: "scale3d(0.9, 0.9, 1)",
  },
  //   exited:  { opacity: 0 },
}

class Transition extends React.Component {
  render() {
    const { children, location } = this.props
    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: duration,
            exit: duration,
          }}
        >
          {state => {
            return (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {/* <div>{loc}</div> */}
                {children}
              </div>
            )
          }}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}
export default Transition
