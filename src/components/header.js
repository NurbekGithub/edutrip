import React from "react"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

const Header = () => (
  <header className="fixed bg-white z-10 top-0 h-12 w-full flex items-center justify-center">
    <Link to="/" className="h-full">
      <img src={logo} alt="Logo" className="h-full mb-0" />
    </Link>
  </header>
)

export default Header
