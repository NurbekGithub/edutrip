import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

export default function Card({
  BgImage,
  contentColor,
  primaryText,
  dates,
  path,
  price,
}) {
  return (
    <div className="h-full relative card cursor-pointer">
      {BgImage}
      <div
        className={`absolute text-right left-0 top-0 shadow-md p-4 pt-5 mt-12 w-2/3 ${contentColor}`}
      >
        <h3 className="text-2xl font-extrabold text-white leading-tight mb-4 uppercase">
          {primaryText}
        </h3>
        <p className="text-sm font-light text-white mb-2">Доступные даты</p>
        <div className="mb-4">
          {dates.map(date => (
            <Button white key={date} className="mr-2">
              {date}
            </Button>
          ))}
        </div>
        <div className="text-white text-sm font-light mb-6">
          {path.join("→")}
        </div>
        <div className="flex items-center justify-end">
          <span className="font-bold text-white mr-4 tracking-wide">
            {price}
          </span>
          <Button primary>Подробнее</Button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  BgImage: PropTypes.node.isRequired,
  contentColor: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
}
