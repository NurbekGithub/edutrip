import React from "react"
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

function About({ about }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  return (
    <section className="w-full bg-white lg:p-8 p-2" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">О НАС</h2>
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-2/5 w-full">
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
            <div className="md:w-3/5 w-full flex flex-col justify-center">
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
