import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Button from "./Button"

const imgStyle = {
  height: "400px",
}

export default function Card({
  imgFluid,
  contentColor,
  primaryText,
  dates,
  path,
  price,
  slug,
  isRightAligned,
}) {
  const classes = isRightAligned
    ? {
        contentWrapper: "right-0",
        price: "",
      }
    : {
        contentWrapper: "left-0 text-right",
        price: " justify-end",
      }
  return (
    <Link className="h-full" to={`/${slug}`}>
      <div className="h-full relative card">
        <Img fluid={imgFluid} className="h-full" style={imgStyle} />
        <div
          className={`absolute top-0 shadow-md p-4 pt-5 mt-12 w-full md:w-2/3 ${contentColor} ${classes.contentWrapper}`}
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
            {path.join(" → ")}
          </div>
          <div className={`flex items-center ${classes.price}`}>
            <span className="font-bold text-white mr-4 tracking-wide">
              {new Intl.NumberFormat("ru-RU").format(price)} ₸
            </span>
            <Button primary>Подробнее</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  imgFluid: PropTypes.string.isRequired,
  contentColor: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
}
