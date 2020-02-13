import React from "react"
import { css } from "@emotion/core"

class TilesParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { teamID: "", datareturn: {} }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(event) {
    this.setState({ teamID: event.target.value })
  }
  //   "https://randomuser.me/api/?results=10"

  handleClick() {
    fetch(
      `https://cors-escape.herokuapp.com/https://fantasy.premierleague.com/api/entry/${this.state.teamID}/event/1/picks/`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        this.setState({ datareturn: resultData })
        console.log(resultData)
      })
  }

  render() {
    return (
      <div>
        <fieldset>
          <input
            type="text"
            name="teamID"
            value={this.state.teamID}
            onChange={this.handleInput}
          />
          <input type="button" value="Submit" onClick={this.handleClick} />
        </fieldset>
        <p>{this.state.teamID}</p>
        <p>{this.state.datareturn.player_first_name}</p>
      </div>
    )
  }
}

export default TilesParent
