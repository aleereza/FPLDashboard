// <AutoCompleteMulti options_values={[]} options_ids={[]} selected={[]} onUpdateSelected={...}/>

import React from "react"
import { css } from "@emotion/core"

class AutoCompleteMulti extends React.Component {
  state = { search_text: "", suggestions: [] }

  //   handleFocus = () => {

  //   }

  handleChange = e => {
    var text = e.target.value
    this.setState({
      suggestions: this.makeSuggestions(this.props.options, text),
      search_text: text,
    })
    if (text === "") {
      this.setState({ suggestions: [] })
    }
  }

  makeSuggestions(options, text) {
    var suggestions = []
    options.forEach(option => {
      if (option.toLowerCase().includes(text.toLowerCase()) && text != " ") {
        suggestions.push(option)
      }
    })
    return suggestions
  }

  //   handleBlur = e => {}

  handleOptionClick = selected_option => {
    let selected_options = this.props.selected
    selected_options.push(selected_option)
    console.log("option added!", selected_option)
    this.setState({ search_text: "", suggestions: [] })
    this.props.onUpdateSelected(selected_options)
  }

  handleOptionRemove = selected_option => {
    console.log("option removed!")
    let selected_options = this.props.selected
    const index = selected_options.indexOf(selected_option)
    if (index > -1) {
      selected_options.splice(index, 1)
    }
    this.props.onUpdateSelected(selected_options)
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

    return (
      <div css={containerStyle}>
        <label>Select Player</label>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.search_text}
        />
        <div>
          {this.state.suggestions.map((suggestion, index) => (
            <p key={index} onClick={() => this.handleOptionClick(suggestion)}>
              {suggestion}
            </p>
          ))}
        </div>
        <div>
          {this.props.selected.map((selected_option, index) => (
            <p key={index}>
              {selected_option}
              <span onClick={() => this.handleOptionRemove(selected_option)}>
                {" "}
                X
              </span>
            </p>
          ))}
        </div>
      </div>
    )
  }
}

export default AutoCompleteMulti
