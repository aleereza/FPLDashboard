import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import Main from "./main"
import Footer from "./footer"
import { Global } from "@emotion/core"
import { global } from "../../data/styles"
import { isLoggedIn, getCurrentUser } from "../../utils/auth"
import AuthContext from "./auth_context"

class Layout extends React.Component {
  state = { is_loggedin: isLoggedIn(), user: getCurrentUser() }

  handleLogIn = () => {
    this.setState({ is_loggedin: true, user: getCurrentUser() })
  }

  handleLogOut = () => {
    this.setState({ is_loggedin: false, user: {} })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          is_loggedin: this.state.is_loggedin,
          user: this.state.user,
          onLogIn: this.handleLogIn,
          onLogOut: this.handleLogOut,
        }}
      >
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Global styles={global} />
              <Header siteTitle={data.site.siteMetadata.title} />
              <Main>{this.props.children}</Main>
              <Footer />
            </>
          )}
        />
      </AuthContext.Provider>
    )
  }
}

// const Layout = ({ children }) => {

//   return (

//   )
// }

export default Layout
