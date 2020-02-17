import React from "react"
import { Auth } from "aws-amplify"

class Default extends React.Component {
  handleSignOut = () => {
    Auth.signOut()
  }

  render() {
    return (
      <>
        <button onClick={this.handleSignOut}>Sign Out</button>
        <h1>Default Priavate Route</h1>
      </>
    )
  }
}

export default Default
