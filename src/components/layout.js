import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"

const Layout = ({ children }) => (
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
        <GlobalStyle />
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
