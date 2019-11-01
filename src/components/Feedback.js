import React from "react"
import Img from "gatsby-image"
import DayJS from "dayjs"

export default function Feedback({
  name,
  text,
  imgFluid,
  feedbackTime,
  updatedAt,
}) {
  return (
    <div className="flex items-center bg-white py-8 px-4 select-none flex-1 mx-2">
      <div className="flex flex-col items-center mx-4 text-center">
        <div>
          <Img fluid={imgFluid} className="w-32 rounded-full h-32" />
        </div>
        <p className="text-xl font-extrabold">{name}</p>
        <hr className="h-1 w-full mt-2" />
        <p className="text-sm text-gray-600">
          {DayJS(feedbackTime || updatedAt).format("DD.MM.YYYY")}
        </p>
      </div>
      <p className="font-light text-sm text-gray-600">{text}</p>
    </div>
  )
}
