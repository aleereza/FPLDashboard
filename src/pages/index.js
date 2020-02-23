import React from "react"
import SEO from "../components/seo"
import TilesParent from "../components/Tiles/tilesParent"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

import { isLoggedIn, logout } from "../utils/auth"

import Amplify, { Auth } from "aws-amplify"
import config from "../aws-exports"
Amplify.configure(config)

const IndexPage = () => {
  let user_status = null
  if (isLoggedIn()) {
    user_status = (
      <p>
        You are Signed in <span onClick={() => Auth.signOut()}>sign out</span>
      </p>
    )
  } else {
    user_status = <p>You are Not Signed in</p>
  }

  return (
    <>
      <SEO title="Home" />
      <h1>Hi, this is the home page</h1>

      <Link to="/mydashboard/signup">Sign Up</Link>
      <br />
      <Link to="/mydashboard/signin">Sign In</Link>
      <br />
      <Link to="/mydashboard">My Dashboard</Link>
      <br />
      <Link to="/mydashboard/settings">Settings</Link>

      <TilesParent />
      {isLoggedIn() && (
        <p
          onClick={() =>
            Auth.signOut()
              .then(logout(() => navigate("/mydashboard/signin")))
              .catch(err => console.log("eror:", err))
          }
        >
          Sign Out
        </p>
      )}
      {!isLoggedIn() && <Link to="/mydashboard/signin">Sign In</Link>}
    </>
  )
}

export default IndexPage
