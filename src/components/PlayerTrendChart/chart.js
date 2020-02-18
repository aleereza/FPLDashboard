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
          (data_point[player_fullnames[player_id]] =
            players_data[player_id].node[property][i])
      )
      data.push(data_point)
    }

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {player_ids.map((id, i) => (
            <Line
              key={i}
              type="monotone"
              dataKey={player_fullnames[id]}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
