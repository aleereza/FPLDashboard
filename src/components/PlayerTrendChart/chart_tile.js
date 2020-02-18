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
  color_palette = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
    "#000000",
  ]

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
    const tileContainerStyle = css`
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: 25% auto;
      grid-gap: 0.5rem;

      label {
        font-size: 1.2rem;
        line-height: 1.3;
      }
    `
    const generalLayoutStyle = css`
      border: 1px solid red;
      /* text-align: center; */
      padding: 1rem;
    `

    const propertySelectorStyle = css`
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    `
    const playerSelectorStyle = css`
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    `
    const chartStyle = css`
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    `

    return (
      <div css={tileContainerStyle}>
        <div css={[propertySelectorStyle, generalLayoutStyle]}>
          <DropDown
            title={this.state.selected_property}
            options={Object.keys(this.props.players_data[1].node)}
            onUpdateSelected={this.onSelectedPropertyChange}
          />
        </div>
        <div css={[playerSelectorStyle, generalLayoutStyle]}>
          <AutoCompleteMulti
            options={this.player_fullnames}
            selected={this.state.selected_players}
            onUpdateSelected={this.onSelectedPlayersChange}
            color_palette={this.color_palette}
          />
        </div>
        <div css={[chartStyle, generalLayoutStyle]}>
          <Chart
            player_ids={this.state.selected_players_id}
            property={this.state.selected_property}
            players_data={this.props.players_data}
            player_fullnames={this.player_fullnames}
            color_palette={this.color_palette}
          />
        </div>
      </div>
    )
  }
}

export default ChartTile
