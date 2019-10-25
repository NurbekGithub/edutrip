import React from "react"
import Countup from "../Countup"
import AnimatedCircle from "../AnimatedCircle"
import { useInView } from "react-intersection-observer"
import { sectionHeight, TabletWidth } from "../../utils/globalStyleObjects"
import map2 from "../../images/map2.svg"
import { useMediaPredicate } from "react-media-hook"

function About() {
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
          <img src={map2} alt="map" className="md:w-2/5 w-full" />
          {inView && (
            <div className="md:w-3/5 w-full flex flex-col justify-center">
              <div className="flex mt-4">
                <p className="flex items-center w-1/2 px-4 flex-col md:flex-row">
                  <AnimatedCircle
                    progress={67}
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
                    progress={52}
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
