import React from "react"
import AuthContext from "../auth_context"
import { Link } from "gatsby"
import { logout } from "../../../utils/auth"
import { Auth } from "aws-amplify"
import { navigate } from "@reach/router"

class User extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {value =>
          value.is_loggedin ? (
            <div>
              <p>{value.user.username}</p>
              <p>{value.user.email}</p>
              <p
                onClick={() =>
                  Auth.signOut()
                    .then(
                      logout(() => {
                        value.onLogOut()
                        navigate("/")
                      })
                    )
                    .catch(err => console.log("eror:", err))
                }
              >
                Sign Out
              </p>
            </div>
          ) : (
            <div>
              <Link to="/mydashboard/signin">Sign In</Link>
              <Link to="/mydashboard/signup">Sign Up</Link>
            </div>
          )
        }
      </AuthContext.Consumer>
    )
  }
}

export default User
