import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { setUser, isLoggedIn } from "../../utils/auth"
import Error from "./error"
import { Auth } from "aws-amplify"
import AuthContext from "../Layout/auth_context"

class Signin extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  login = async onLogIn => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      onLogIn()
      navigate("/mydashboard/")
    } catch (err) {
      this.setState({ error: err })
      console.log("error...: ", err)
    }
  }

  render() {
    if (isLoggedIn()) navigate("/mydashboard/")
    return (
      <AuthContext.Consumer>
        {value => (
          <div>
            <h1>Sign In</h1>
            {this.state.error && <Error errorMessage={this.state.error} />}
            <div style={styles.formContainer}>
              <input
                onChange={this.handleUpdate}
                placeholder="Username"
                name="username"
                value={this.state.username}
                style={styles.input}
              />
              <input
                onChange={this.handleUpdate}
                placeholder="Password"
                name="password"
                value={this.state.password}
                type="password"
                style={styles.input}
              />
              <div
                style={styles.button}
                onClick={() => this.login(value.onLogIn)}
              >
                <span style={styles.buttonText}>Sign In</span>
              </div>
            </div>
            <Link to="/mydashboard/signup">Sign Up</Link>
            <br />
          </div>
        )}
      </AuthContext.Consumer>
    )
  }
}

const styles = {
  input: {
    height: 40,
    margin: "10px 0px",
    padding: 7,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "rebeccapurple",
    padding: "15px 7px",
    cursor: "pointer",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
}

export default Signin
