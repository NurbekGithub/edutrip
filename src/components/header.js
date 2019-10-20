import React from "react"
import logo from "../images/logo.jpeg"
import { Link } from "gatsby"
import { Slider } from "react-burgers"

const Header = ({ toggleIsSidbarOpen, isSiderOpen }) => (
  <header className="fixed bg-white top-0 h-16 w-full flex items-center justify-center">
    <div
      className="sm:hidden absolute left-0 pl-4 flex cursor-pointer items-center justify-center"
      onClick={toggleIsSidbarOpen}
    >
      <span>
        <Slider
          className="outline-none"
          lineHeight={2}
          width={20}
          padding={0}
          lineSpacing={4}
          color="#777"
          active={isSiderOpen}
        />
      </span>
    </div>
    <Link to="/" className="h-full">
      <img src={logo} alt="Logo" className="h-full mb-0" />
    </Link>
  </header>
)

export default Header
