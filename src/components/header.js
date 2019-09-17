import React from "react"
import logo from "../images/logo.svg"

const Header = () => (
  <header className="fixed bg-white z-10 top-0 h-12 w-full flex items-center justify-center">
    <img src={logo} alt="Logo" className="h-full mb-0" />
  </header>
)

export default Header
