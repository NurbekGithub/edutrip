/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import LeftSider from "./leftSider"
import RightSider from "./rightSider"
import CallButton from "./callButton"

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
      <Header />
      <LeftSider />
      <main className="md:mx-12 mb-12 mt-16 bg-gray-200 m-1 pb-24 overflow-x-hidden">
        {children}
      </main>
      <RightSider />
      <CallButton />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
