import React from "react"
import { Link } from "gatsby"
// import { Container } from "components/common"
import NavbarLinks from "./navbar_links"
import Hamburger from "./hamburger"
import { css } from "@emotion/core"
import { title } from "../../../data/info"

const wrapper = css`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`

const linksWrapperStyle = css`
  display: none;
  @media (min-width: 480px) {
    display: block;
  }
`

const Navbar = ({ status, toggle }) => (
  <nav css={wrapper}>
    <Link to="/">{title}</Link>
    <div css={linksWrapperStyle}>
      <NavbarLinks />
    </div>

    <Hamburger status={status} toggle={toggle} />
  </nav>
)

export default Navbar
