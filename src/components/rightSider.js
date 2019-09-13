import React from "react"
import { FaFacebookF, FaInstagram, FaVk } from "react-icons/fa"

export default function RightSider() {
  return (
    <aside className="fixed right-0 h-screen flex items-center justify-center w-12 top-0">
      <div className="flex flex-col items-center">
        <a href="#" className="py-2 text-gray-500 hover:text-teal-400">
          <FaFacebookF />
        </a>
        <a href="#" className="py-2 text-gray-500 hover:text-teal-400">
          <FaInstagram />
        </a>
        <a href="#" className="py-2 text-gray-500 hover:text-teal-400">
          <FaVk />
        </a>
      </div>
    </aside>
  )
}
