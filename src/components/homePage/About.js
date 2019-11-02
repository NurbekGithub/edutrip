import React from "react"
import Countup from "../Countup"
import AnimatedCircle from "../AnimatedCircle"
import { useInView } from "react-intersection-observer"
import { TabletWidth } from "../../utils/globalStyleObjects"
import map2 from "../../images/map2.svg"
import mapIcon1 from "../../images/map-icon.svg"
import mapIcon2 from "../../images/map-icon2.svg"
import mapIcon3 from "../../images/map-icon3.svg"
import mapIcon4 from "../../images/map-icon4.svg"
import mapIcon5 from "../../images/map-icon5.svg"
import mapIcon6 from "../../images/map-icon6.svg"
import { useMediaPredicate } from "react-media-hook"

function CountAndText({ count, text }) {
  if (!count) return null
  return (
    <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
      <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
        {count[0] === "+" && "+"}
        <Countup params={{ end: count }} />
      </span>
      <span>{text}</span>
    </p>
  )
}

function About({ about }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  return (
    <section className="w-full bg-white px-8 py-12 overflow-auto" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">О НАС</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="relative lg:w-2/5 w-full">
            <img src={map2} alt="map" className="w-full" />
            <img
              src={mapIcon1}
              alt="map-icon"
              className="map-icon map-icon-1"
            />
            <img
              src={mapIcon2}
              alt="map-icon"
              className="map-icon map-icon-2"
            />
            <img
              src={mapIcon3}
              alt="map-icon"
              className="map-icon map-icon-3"
            />
            <img
              src={mapIcon4}
              alt="map-icon"
              className="map-icon map-icon-4"
            />
            <img
              src={mapIcon5}
              alt="map-icon"
              className="map-icon map-icon-5"
            />
            <img
              src={mapIcon6}
              alt="map-icon"
              className="map-icon map-icon-6"
            />
          </div>
          {inView && (
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              <CountAndText count={about.years} text="ГОДА УСПЕШНОЙ РАБОТЫ" />
              <CountAndText
                count={about.family}
                text="СОЗДАННЫХ СЕМЕЙ В ТУРАХ"
              />
              <CountAndText count={about.tours} text="ОРГАНИЗОВАННЫХ ТУРОВ" />
              <CountAndText count={about.visa} text="ОТКРЫТЫХ ВИЗ" />
              <CountAndText count={about.tourists} text="ДОВОЛЬНЫХ ТУРИСТОВ" />
              <CountAndText count={about.km} text="КИЛОМЕТРОВ ПРЕОДОЛЕНО" />
              <div className="flex mt-4">
                <p className="flex items-center w-1/2 px-4 flex-col md:flex-row">
                  <AnimatedCircle
                    progress={about.touristsPercentage}
                    progressColor="lightSeaGreen"
                    lineWidth="30"
                    size={minWidthTablet ? 280 : 120}
                    textColor="black"
                    bgColor="white"
                    responsive={minWidthTablet}
                  />
                  <span className="ml-6">
                    туристов открывают Европу впервыe с нами
                  </span>
                </p>
                <p className="flex items-center w-1/2 px-4 flex-col md:flex-row">
                  <AnimatedCircle
                    progress={about.travelPercentage}
                    progressColor="lightSeaGreen"
                    lineWidth="30"
                    size={minWidthTablet ? 280 : 120}
                    textColor="black"
                    bgColor="white"
                    responsive={minWidthTablet}
                  />
                  <span className="ml-6">
                    ездят с нами минимум 2 раза в год
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
