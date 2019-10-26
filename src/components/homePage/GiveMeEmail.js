import React from "react"
import { TabletWidth } from "../../utils/globalStyleObjects"
import { useMediaPredicate } from "react-media-hook"
import { FaPaperPlane } from "react-icons/fa"

export default function GiveMeEmail() {
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  return (
    <div className="container mx-auto">
      <h3 className="w-full font-bold text-xl sm:text-2xl text-center p-4">
        ПОДПИCАТЬСЯ НА НОВОСТИ
      </h3>
      <form
        action="https://formspree.io/edutravelcenter.kz@gmail.com"
        className="w-full text-center flex mb-4"
        method="POST"
      >
        <input
          className="flex-1 appearance-none text-gray-700 border border-gray-200 py-2 px-4 h-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="e-mail"
          name="email"
          type="email"
          required
        />
        <button className="sm:w-auto bg-teal-400 hover:bg-teal-500 text-gray-100 font-bold h-10 px-4 flex items-center space-between">
          {minWidthTablet && <p>Отправить &nbsp;&nbsp;</p>}
          <FaPaperPlane />
        </button>
      </form>
    </div>
  )
}
