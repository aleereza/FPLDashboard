import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import Main from "./main"
import Footer from "./footer"
import { Global } from "@emotion/core"
import { global } from "../../data/styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={global} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
