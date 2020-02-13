import React from "react"
import SEO from "../components/seo"
import TilesParent from "../components/Tiles/tilesParent"
import { Link } from "gatsby"

import Amplify from "aws-amplify"
import config from "../aws-exports"
Amplify.configure(config)

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi, this is the home page</h1>

    <Link to="/mydashboard/signup">Sign Up</Link>
    <br />
    <Link to="/mydashboard/login">Sign In</Link>
    <br />
    <Link to="/mydashboard">My Dashboard</Link>
    <br />
    <Link to="/mydashboard/settings">Settings</Link>

    <TilesParent />
  </>
)

export default IndexPage
