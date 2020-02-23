import React from "react"
import AuthContext from "../auth_context"

class User extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {value =>
          value.is_loggedin ? (
            <div>
              <p>{value.user.username}</p>
              <p>{value.user.email}</p>
            </div>
          ) : (
            <p>Sign In</p>
          )
        }
      </AuthContext.Consumer>
    )
  }
}

export default User
