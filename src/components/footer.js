import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import { FaPhone } from "react-icons/fa"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        tel
      }
    }
  `)

  const tel = data.contentfulContact.tel
  return (
    <footer className="fixed bottom-0 h-12 px-12 flex items-center justify-between w-full text-teal-400 text-sm bg-white">
      {isMobile && (
        <a
          href={`tel:${tel}`}
          className="rounded-full w-8 h-8 bg-teal-400 border-gray-200 flex justify-center items-center"
        >
          <FaPhone color="white" size={16} />
        </a>
      )}
      <div>
        <span className="font-bold">ПН-ПТ</span> &nbsp; С 9:00 ДО 19:00
      </div>
    </footer>
  )
}
