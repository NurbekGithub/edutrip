import React from "react"
import { FaFacebookF, FaInstagram, FaVk, FaYoutube } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function RightSider() {
  return (
    <aside className="fixed right-0 h-screen md:flex hidden items-center justify-center w-12 top-0">
      <div className="flex flex-col items-center">
        <OutboundLink
          href="https://www.facebook.com/EduTravel-1958334667515174/"
          className="py-2 text-gray-500 hover:text-teal-400"
        >
          <FaFacebookF />
        </OutboundLink>
        <OutboundLink
          href="https://instagram.com/edutravel_kz?igshid=1q5jmb15pc0jm"
          className="py-2 text-gray-500 hover:text-teal-400"
        >
          <FaInstagram />
        </OutboundLink>
        <OutboundLink
          href="https://vk.com/edutravelkz"
          className="py-2 text-gray-500 hover:text-teal-400"
        >
          <FaVk />
        </OutboundLink>
        <OutboundLink
          href="https://www.youtube.com/channel/UCVJAFGW-PCAJ4tjg83PEFig"
          className="py-2 text-gray-500 hover:text-teal-400"
        >
          <FaYoutube />
        </OutboundLink>
      </div>
    </aside>
  )
}
