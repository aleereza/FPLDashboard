import React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import { css } from "@emotion/core"
import { containerInStyle, containerOutStyle } from "../../../data/styles"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSidebarOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ isSidebarOn: !this.state.isSidebarOn })
  }

  render() {
    const headerStyle = css`
      background-color: pink;
    `

    const overlay = css`
      position: fixed;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      display: none;
      transition: 1s;
      ${this.state.isSidebarOn &&
        `display: block;
         z-index: 4;
      `}
    `

    return (
      <header css={[containerOutStyle, headerStyle]}>
        <div css={overlay} onClick={this.handleClick}></div>
        <div css={containerInStyle}>
          <Navbar status={this.state.isSidebarOn} toggle={this.handleClick} />
          <Sidebar status={this.state.isSidebarOn} toggle={this.handleClick} />
        </div>
      </header>
    )
  }
}

export default Header
