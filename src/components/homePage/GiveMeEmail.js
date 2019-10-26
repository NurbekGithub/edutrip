import React, { useState } from "react"
import { TabletWidth } from "../../utils/globalStyleObjects"
import { useMediaPredicate } from "react-media-hook"
import { FaPaperPlane } from "react-icons/fa"
import { encode } from "punycode"

export default function GiveMeEmail() {
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  const [state, setState] = useState({ email: "" })

  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "email", ...state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <div className="container mx-auto">
      <h3 className="w-full font-bold text-xl sm:text-2xl text-center p-4">
        ПОДПИCАТЬСЯ НА НОВОСТИ
      </h3>
      <form
        onSubmit={handleSubmit}
        data-netlify="true"
        // name="email"
        // data-netlify="true"
        // data-netlify-honeypot="bot-field"
        className="w-full text-center flex mb-4"
        // action="https://formspree.io/edutravelcenter.kz@gmail.com"
        // method="POST"
      >
        <input type="hidden" name="form-name" value="email" />
        <input
          className="flex-1 appearance-none text-gray-700 border border-gray-200 py-2 px-4 h-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="e-mail"
          name="email"
          type="email"
          value={state.email}
          onChange={e => setState({ email: e.target.value })}
          required
        />
        <button
          type="submit"
          className="sm:w-auto bg-teal-400 hover:bg-teal-500 text-gray-100 font-bold h-10 px-4 flex items-center space-between"
        >
          {minWidthTablet && <p>Отправить &nbsp;&nbsp;</p>}
          <FaPaperPlane />
        </button>
      </form>
    </div>
  )
}
