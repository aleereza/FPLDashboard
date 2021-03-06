import React, { PureComponent } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

class Chart extends PureComponent {
  render() {
    let players_data = this.props.players_data
    let properties = Object.keys(players_data[1].node)
    let player_ids = this.props.player_ids
    let property = this.props.property
    if (!properties.includes(property)) {
      property = properties[0]
    }
    let player_fullnames = this.props.player_fullnames
    let data = []
    let data_point = {}
    let n_gw = players_data[1].node[property].length //number of game weeks
    for (let i = 0; i < n_gw; i++) {
      data_point = {}
      data_point.name = "gw" + (i + 1)
      player_ids.forEach(
        player_id =>
          (data_point[player_fullnames[player_id]] = Number(
            players_data[player_id].node[property][i]
          ))
      )
      data.push(data_point)
    }

    return (
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={90} dy={20} />
          <YAxis domain={[0, "dataMax"]} />
          <Tooltip />
          {player_ids.map((id, i) => (
            <Line
              key={i}
              type="monotone"
              dataKey={player_fullnames[id]}
              stroke={this.props.color_palette[this.props.colors[i]]}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
