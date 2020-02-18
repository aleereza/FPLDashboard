import React from "react"
import { css } from "@emotion/core"
import DropDown from "./dropdown"
import AutoCompleteMulti from "./auto_complete_multi"
import Chart from "./chart"

//TODO: return the elemen id istead of names for player selection

class ChartTile extends React.Component {
  state = { selected_players: [], selected_property: null }

  onSelectedPropertyChange = selected_property => {
    this.setState({ selected_property: selected_property })
  }

  onSelectedPlayersChange = selected_players => {
    this.setState({ selected_players: selected_players })
  }

  //   createPropertyTrendArray(player_id, property) {
  //     arr = []
  //     return arr
  //   }

  render() {
    let player_ids = []
    for (let i = 0; i < this.props.player_id.length; i++) {
      player_ids[i] = i + 1
    }

    let player_fullnames = []
    for (let i = 0; i < this.props.player_id.length; i++) {
      player_fullnames[i] =
        this.props.player_id[i].node.first_name +
        " " +
        this.props.player_id[i].node.second_name
    }

    let game_weeks = []
    for (let i = 1; i <= 38; i++) {
      game_weeks[i - 1] = i
    }

    const propertySelectorStyle = css``
    const playerSelectorStyle = css``
    const chartStyle = css``
    return (
      <div>
        <div css={propertySelectorStyle}>
          <DropDown
            title={this.state.selected_property}
            options={[
              "GW",
              "assists",
              "bonus",
              "bps",
              "clean_sheets",
              "creativity",
              "element",
              "fixture",
              "goals_conceded",
              "goals_scored",
              "ict_index",
              "influence",
              "kickoff_time",
              "minutes",
              "name",
              "opponent_team",
              "own_goals",
              "penalties_missed",
              "penalties_saved",
              "red_cards",
              "round",
              "saves",
              "selected",
              "team_a_score",
              "team_h_score",
              "threat",
              "total_points",
              "transfers_balance",
              "transfers_in",
              "transfers_out",
              "value",
              "was_home",
              "yellow_cards",
            ]}
            onUpdateSelected={this.onSelectedPropertyChange}
          />
        </div>
        <div css={playerSelectorStyle}></div>
        <AutoCompleteMulti
          options={player_fullnames}
          selected={this.state.selected_players}
          onUpdateSelected={this.onSelectedPlayersChange}
        />
        <Chart
          player_ids={this.state.selected_players}
          property={this.state.selected_property}
        />
        <div css={chartStyle}>
          <p>selected propepty: {this.state.selected_property}</p>
          <p>selected players: {this.state.selected_players + ">"}</p>
        </div>
      </div>
    )
  }
}

export default ChartTile
