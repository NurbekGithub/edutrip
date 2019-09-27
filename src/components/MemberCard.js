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
  const { fullName, position, imgFluid, description, isHorizontal } = props

  if (isHorizontal) {
    return (
      <div className="mx-8 flex w-1/2">
        <div>
          <Img fluid={imgFluid} style={imageStyle} className="mb-4 mr-8" />
        </div>
        <div>
          <p className="text-2xl font-thin mb-4">{fullName}</p>
          <p className="text-sm font-bold mb-4">{position}</p>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
      </div>
    )
  }
  return (
    <div style={wrapperStyle} className="mx-8">
      <Img fluid={imgFluid} style={imageStyle} className="mb-4" />
      <p className="text-2xl font-thin mb-4">{fullName}</p>
      <p className="text-sm font-bold mb-4">{position}</p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
  )
}
