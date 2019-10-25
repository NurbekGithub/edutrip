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
    <section className="w-full bg-white px-8 py-12 overflow-auto" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">О НАС</h2>
        <div className="flex">
          <img src={map2} alt="map" className="hidden md:block w-2/5" />
          {inView && (
            <div className="w-full md:w-3/5 flex flex-col justify-center">
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  <Countup params={{ end: 5 }} />
                </span>
                <span>ЛЕТ УСПЕШНОЙ РАБОТЫ</span>
              </p>
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  <Countup params={{ end: 23 }} />
                </span>
                <span>СОЗДАННЫХ СЕМЕЙ В ТУРАХ</span>
              </p>
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  +<Countup params={{ end: 150 }} />
                </span>
                <span>ОРГАНИЗОВАННЫХ ТУРОВ</span>
              </p>
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  +<Countup params={{ end: 5000 }} />
                </span>
                <span>ОТКРЫТЫХ ВИЗ</span>
              </p>
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  +<Countup params={{ end: 8000 }} />
                </span>
                <span>ДОВОЛЬНЫХ ТУРИСТОВ</span>
              </p>
              <p className="mb-4 md:font-bold text-sm md:text-base lg:text-xl flex justify-between sm:block">
                <span className="font-extrabold text-teal-400 sm:text-2xl lg:text-4xl sm:w-1/3 text-right sm:pr-8 inline-block">
                  +<Countup params={{ end: 800000 }} />
                </span>
                <span>КИЛОМЕТРОВ ПРЕОДОЛЕНО</span>
              </p>
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
