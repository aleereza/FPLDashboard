// <DropDown title="select a feature" option=[] onUpdateSelected = {...}/>
// single selected

import React from "react"
import { css } from "@emotion/core"

class DropDown extends React.Component {
  state = { show: false }

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  handleBlur = e => {
    console.log("Blured!")
    this.setState({ show: false })
  }

  handleOptionClick = e => {
    this.props.onUpdateSelected(e.target.value)
    this.setState({ show: false })
  }

  render() {
    // const containerStyle = css``
    const selectStyle = css`
      /* background-color: white; */
      width: 100%;
      border-radius: 3px;
      /* height: 2rem; */
      appearance: none;
    `
    const optionStyle = css``

    return (
      <>
        <label htmlFor="Select Property">Select Property</label>
        <select
          css={selectStyle}
          onBlur={this.handleBlur}
          value={this.props.title}
          onChange={this.handleOptionClick}
        >
          {this.props.options.map((option, index) => (
            <option css={optionStyle} key={index} value={option}>
              {option}
            </option>
          ))}
          >
        </select>
      </>
    )
  }
}

export default DropDown
