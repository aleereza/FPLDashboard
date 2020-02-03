import React from "react"
import { containerInStyle, containerOutStyle } from "../../data/styles"

const Main = ({ children }) => (
  <main css={containerOutStyle}>
    <div css={containerInStyle}>{children}</div>
  </main>
)

export default Main
