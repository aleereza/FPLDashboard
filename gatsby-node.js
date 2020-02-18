//create a more efficient data structures from csv files in data

// input: data/players.csv (https://github.com/vaastav/Fantasy-Premier-League/blob/master/data/2019-20/gws/merged_gw.csv )
// output: data/players.json (tree datastructures: player_ids > properties > array of property value in each game-week)

exports.onPreBootstrap = () => {
  var fs = require("fs")
  const neatCsv = require("neat-csv")

  var arr = []
  var result = []
  var player_id = null
  var gw = null
  var player_ids = []
  var n_players = null
  var min_players = null
  var keys = null
  var n_keys = null

  //read file
  fs.readFile("src/data/players.csv", async (err, data) => {
    if (err) {
      throw err
    }

    arr = await neatCsv(data)
    // keys = Object.keys(arr[0])
    // in below list constant properites like name have been removed
    keys = [
      "assists",
      "bonus",
      "bps",
      "clean_sheets",
      "creativity",
      "fixture",
      "goals_conceded",
      "goals_scored",
      "ict_index",
      "influence",
      "kickoff_time",
      "minutes",
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
    ]
    n_keys = keys.length

    for (let i = 0; i < arr.length; i++) {
      player_ids.push(Number(arr[i].element))
    }

    n_players = Math.max(...player_ids)
    min_players = Math.min(...player_ids)

    console.log("max player id: ", n_players)
    console.log("min player id: ", min_players)

    //create empty object for all players
    for (let i = 0; i <= n_players; i++) {
      result[i] = {}
    }
    //create empty array in result[player_id][property]
    for (let i = 1; i <= n_players; i++) {
      for (let j = 0; j < n_keys; j++) {
        result[i][keys[j]] = []
      }
    }

    for (let i = 0; i < arr.length; i++) {
      player_id = Number(arr[i].element)
      for (let j = 0; j < n_keys; j++) {
        gw = Number(arr[i].GW)
        result[player_id][keys[j]][gw - 1] = arr[i][keys[j]]
      }
    }
    fs.writeFileSync("src/data/players.json", JSON.stringify(result), "utf-8")
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/mydashboard/)) {
    page.matchPath = `/mydashboard/*`

    // Update the page.
    createPage(page)
  }
}
