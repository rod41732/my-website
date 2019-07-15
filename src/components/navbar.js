import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import './navbar.css'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: 0,
      visible: true,
    }
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const cls = `nav-height ${this.state.visible ? '' : 'small'}`
    return (
      <>
        <div className={`nav-bar clearfix title-font ${cls}`} id="navbar">
          <Link to="/">
            <div className={`nav-item logo ${cls}`}>Rod41732</div>
          </Link>
          <div
            className={`nav-item nav-button ${cls}`}
            onClick={() => {
              let navClass = document.querySelector('#navbar').classList
              if (navClass.contains('expanded')) {
                navClass.remove('expanded')
                document.querySelector('.nav-button').innerHTML = '≡'
              } else {
                navClass.add('expanded')
                document.querySelector('.nav-button').innerHTML = 'X'
              }
            }}
          >
            ≡
          </div>
          <div>
            <div
              className={`nav-item ${cls}`}
              onClick={() => {
                let body = document.querySelector('body')
                let oldTheme = body.getAttribute('data-theme')
                body.setAttribute(
                  'data-theme',
                  oldTheme !== 'dark' ? 'dark' : 'light'
                )
              }}
            >
              Mode
            </div>
            <Link to="/about">
              <div className={`nav-item ${cls}`}>About</div>
            </Link>
            <Link to="/list/all/1">
              <div className={`nav-item ${cls}`}>Home</div>
            </Link>
            <Link to="/math">
              <div className={`nav-item ${cls}`}>----</div>
            </Link>
            <Link to="/dev">
              <div className={`nav-item ${cls}`}>----</div>
            </Link>
          </div>
        </div>
        <div className="nav-height" />
      </>
    )
  }
}
