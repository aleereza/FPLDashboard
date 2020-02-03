import React from "react"
import { css } from "@emotion/core"
import { containerInStyle, containerOutStyle } from "../../data/styles"

const footerStyle = css`
  position: fixed;
  bottom: 0;
  background-color: lightgray;
`

const Footer = () => (
  <footer css={[containerOutStyle, footerStyle]}>
    <div css={containerInStyle}>footer</div>
  </footer>
)

export default Footer
