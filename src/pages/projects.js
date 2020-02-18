import React from "react"
import SEO from "../components/seo"
import App from "../components/Test/test"
import { Storage } from "aws-amplify"
import ChartTile from "../components/PlayerTrendChart/chart_tile"
import { graphql } from "gatsby"

class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="Projects" />
        <h1>Projects page</h1>
        <ChartTile
          player_data={this.props.data.allplayersdata.edges}
          player_id={this.props.data.allplayersiddata.edges}
        />
        <p>{this.props.data.allplayers_json.edges[1].node.assists + "<"}</p>
      </>
    )
  }
}

export default ProjectsPage

export const PlayersDataQuery = graphql`
  query playersdata {
    allplayersdata: allPlayersCsv {
      edges {
        node {
          GW
          assists
          bonus
          bps
          clean_sheets
          creativity
          element
          fixture
          goals_conceded
          goals_scored
          ict_index
          influence
          kickoff_time
          minutes
          name
          opponent_team
          own_goals
          penalties_missed
          penalties_saved
          red_cards
          round
          saves
          selected
          team_a_score
          team_h_score
          threat
          total_points
          transfers_balance
          transfers_in
          transfers_out
          value
          was_home
          yellow_cards
        }
      }
    }

    allplayersiddata: allPlayersIdCsv {
      edges {
        node {
          first_name
          second_name
          id_code
        }
      }
    }

    allplayers_json: allPlayersJson {
      edges {
        node {
          assists
        }
      }
    }
  }
`
