import React from "react"
import { css } from "@emotion/core"
import DropDown from "./dropdown"
import AutoCompleteMulti from "./auto_complete_multi"
import Chart from "./chart"

class ChartTile extends React.Component {
  state = {
    selected_players: [],
    selected_players_id: [],
    selected_property: "",
  }
  player_ids = []
  player_fullnames = []
  game_weeks = []

  onSelectedPropertyChange = selected_property => {
    this.setState({ selected_property: selected_property })
  }

  onSelectedPlayersChange = selected_players => {
    this.setState({
      selected_players: selected_players,
      selected_players_id: selected_players.map(name =>
        this.player_fullnames.indexOf(name)
      ),
    })
  }

  componentDidMount = () => {
    for (let i = 0; i < this.props.players_id.length; i++) {
      this.player_ids[i] = i + 1
    }

    let player_id = null
    for (let i = 0; i < this.props.players_id.length; i++) {
      player_id = Number(this.props.players_id[i].node.id_code)
      this.player_fullnames[player_id] =
        this.props.players_id[i].node.first_name +
        " " +
        this.props.players_id[i].node.second_name
    }

    for (let i = 1; i <= 38; i++) {
      this.game_weeks[i - 1] = i
    }
  }

  render() {
    const propertySelectorStyle = css``
    const playerSelectorStyle = css``
    const chartStyle = css``

    return (
      <div>
        <div css={propertySelectorStyle}>
          <DropDown
            title={this.state.selected_property}
            options={Object.keys(this.props.players_data[1].node)}
            onUpdateSelected={this.onSelectedPropertyChange}
          />
        </div>
        <div css={playerSelectorStyle}></div>
        <AutoCompleteMulti
          options={this.player_fullnames}
          selected={this.state.selected_players}
          onUpdateSelected={this.onSelectedPlayersChange}
        />
        <Chart
          player_ids={this.state.selected_players_id}
          property={this.state.selected_property}
          players_data={this.props.players_data}
          player_fullnames={this.player_fullnames}
        />
        <div css={chartStyle}>
          <p>selected propepty: {this.state.selected_property}</p>
          <p>selected player: {this.state.selected_players + ">"}</p>
          <p>selected player ids: {this.state.selected_players_id + ">"}</p>
          {/* <p>selected players: {this.state.selected_players.map(player_id => player_fullnames[player_id]) + ">"}</p> */}
        </div>
      </div>
    )
  }
}

export default ChartTile
