import React from "react"
import Img from "gatsby-image"

const imageStyle = {
  width: "275px",
  height: "275px",
}

const wrapperStyle = {
  width: "275px",
}

export default function MemberCard(props) {
  const { fullName, position, imgFluid, description } = props
  return (
    <div style={wrapperStyle}>
      <Img fluid={imgFluid} style={imageStyle} className="mb-4" />
      <p className="text-2xl font-thin mb-4">{fullName}</p>
      <p className="text-sm font-bold mb-4">{position}</p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
  )
}
