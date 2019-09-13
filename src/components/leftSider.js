import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function LeftSider() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <aside className="fixed left-0 h-screen flex items-center justify-center w-12 top-0">
      <div className="flex flex-col cursor-pointer items-center justify-center">
        <span className="font-thin text-xs text-gray-500 vertical-text pl-8">
          МЕНЮ
        </span>
        <span>
          <FaBars />
        </span>
      </div>
    </aside>
  )
}
