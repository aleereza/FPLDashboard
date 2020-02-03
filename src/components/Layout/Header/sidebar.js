import React from "react"
import NavbarLinks from "./navbar_links"
import { css } from "@emotion/core"

const Sidebar = ({ status, toggle }) => {
  const wrapperStyle = css`
    position: fixed;
    z-index: 4;
    overflow: auto;
    top: 0px;
    right: -275px;
    width: 0;
    opacity: 0;
    height: 100%;
    background-color: #fff;
    transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

    ${status &&
      `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
  `
  return (
    <nav css={wrapperStyle}>
      <NavbarLinks toggle={toggle} />
    </nav>
  )
}

export default Sidebar
