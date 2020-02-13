import React from "react"
import { Router } from "@reach/router"

import Login from "../components/PrivateRoutes/login"
import SignUp from "../components/PrivateRoutes/signup"
import Settings from "../components/PrivateRoutes/settings"
import Details from "../components/PrivateRoutes/details"
import Default from "../components/PrivateRoutes/default"

import PrivateRoute from "../components/PrivateRoutes/private_route" //to create

const MyDashboard = () => {
  return (
    <Router>
      <PrivateRoute path="/mydashboard/settings" component={Settings} />
      <PrivateRoute path="/mydashboard/details" component={Details} />
      <Login path="/mydashboard/login" />
      <SignUp path="/mydashboard/signup" />
      <Default path="/mydashboard" />
    </Router>
  )
}
export default MyDashboard

//continue: https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/
