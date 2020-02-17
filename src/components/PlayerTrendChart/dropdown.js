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
    const containerStyle = css`
      width: 300px;
      text-align: center;
      padding: 0.5rem;
      border: 1px solid black;
      label {
        font-size: 1.5rem;
        line-height: 1.3;
      }
    `
    const selectStyle = css`
      background-color: white;
      width: 80%;
      border-radius: 0.5rem;
      height: 2rem;
      appearance: none;
    `
    const optionStyle = css``

    return (
      <div css={containerStyle}>
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
      </div>
    )
  }
}

export default DropDown
