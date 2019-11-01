import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import LeftSider from "./leftSider"
import RightSider from "./rightSider"

const Layout = ({ children }) => {
  const [isSiderOpen, setIsSiderOpen] = useState(false)
  const toggleIsSidbarOpen = () => {
    setIsSiderOpen(!isSiderOpen)
  }

  // close on esc keyup
  useEffect(() => {
    function handleKeyup(e) {
      if (e.code === "Escape") {
        setIsSiderOpen(false)
      }
    }
    window.addEventListener("keyup", handleKeyup)
    return () => {
      window.removeEventListener("keyup", handleKeyup)
    }
  }, [])

  return (
    <>
      <Header
        isSiderOpen={isSiderOpen}
        toggleIsSidbarOpen={toggleIsSidbarOpen}
      />
      <LeftSider
        isSiderOpen={isSiderOpen}
        toggleIsSidbarOpen={toggleIsSidbarOpen}
      />
      <main className="md:mx-12 mb-12 mt-16 bg-gray-200 m-1 sm:pb-24 overflow-x-hidden">
        {children}
      </main>
      <RightSider />
      {/* <CallButton /> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
