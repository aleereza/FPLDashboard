import React, { PureComponent } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

// [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]

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
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
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
    )
  }
}

export default Chart
