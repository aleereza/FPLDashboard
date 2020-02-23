import React from "react"
import SEO from "../components/seo"
import App from "../components/Test/test"
import { Storage } from "aws-amplify"
import ChartTile from "../components/PlayerTrendChart/chart_tile"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

class GeneralPage extends React.Component {
  render() {
    const tileContainerStyle = css`
      margin-top: 1rem;
    `

    return (
      <>
        <SEO title="Projects" />
        <div css={tileContainerStyle}>
          <ChartTile
            players_data={this.props.data.allplayersdata.edges}
            players_id={this.props.data.allplayersiddata.edges}
          />
        </div>
      </>
    )
  }
}

export default GeneralPage

export const PlayersDataQuery = graphql`
  query playersdata {
    allplayersdata: allPlayersJson {
      edges {
        node {
          assists
          bonus
          bps
          clean_sheets
          creativity
          fixture
          goals_conceded
          goals_scored
          ict_index
          influence
          kickoff_time
          minutes
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
  }
`
