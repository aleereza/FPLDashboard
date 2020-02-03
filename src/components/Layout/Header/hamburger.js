import React from "react"
import { css } from "@emotion/core"
import gsap from "gsap"

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.line1 = null
    this.line2 = null
    this.line3 = null
    this.tl = null //timeline
  }

  componentDidMount() {
    this.tl = gsap.timeline({ paused: true })
    this.tl.to(
      this.line1,
      0.2,
      { rotate: 45, transformOrigin: "center", y: 13 },
      0
    )
    this.tl.to(this.line2, 0.1, { opacity: 0 }, 0)
    this.tl.to(
      this.line3,
      0.2,
      { rotate: -45, transformOrigin: "center", y: -13 },
      0
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.status) {
      this.tl.play()
    } else {
      this.tl.reverse()
    }
  }

  render() {
    const hamburgerWrapperStyle = css`
      width: 2rem;
      height: 2rem;
      z-index: 10;
      @media (min-width: 480px) {
        display: none;
      }
    `

    const hamburgerSVGStyle = css`
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      fill: none;
      stroke: black;
      stroke-width: 6;
      stroke-linecap: round;
      stroke-linejoin: round;
      cursor: pointer;
      path {
        transition: all 0.1s ease-in;
        /* transform-origin: 50% 50%; */
      }
    `

    const line1Style = css``

    const line2Style = css`
      ${this.props.status && `display: none;`}
    `

    const line3Style = css``

    return (
      <div css={hamburgerWrapperStyle} onClick={this.props.toggle}>
        <svg id="i1" css={hamburgerSVGStyle} viewBox="0 0 100 100">
          <path d="M30,37 L70,37 Z" ref={path => (this.line1 = path)}></path>
          <path d="M30,50 L70,50 Z" ref={path => (this.line2 = path)}></path>
          <path d="M30,63 L70,63 Z" ref={path => (this.line3 = path)}></path>
        </svg>
      </div>
    )
  }
}

export default Hamburger
