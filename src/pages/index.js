import React from "react"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Countup from "../components/Countup"
import Button from "../components/Button"
import { sectionHeight } from "../utils/globalStyleObjects"
import Card from "../components/Card"
import Image from "../components/image"
import RightCard from "../components/RightCard"
import AnimatedCircle from "../components/AnimatedCircle"

import map2 from "../images/map2.svg"

const cardWrapperStyle = {
  height: "520px",
}

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section className="w-full bg-white p-8" style={sectionHeight} ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">О НАС</h2>
        <div className="flex">
          <img src={map2} alt="map" className="w-2/5" />
          {inView && (
            <div className="w-3/5 flex flex-col justify-center">
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  <Countup params={{ end: 5 }} />
                </span>
                ЛЕТ УСПЕШНОЙ РАБОТЫ
              </p>
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  <Countup params={{ end: 23 }} />
                </span>
                СОЗДАННЫХ СЕМЕЙ В ТУРАХ
              </p>
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  +<Countup params={{ end: 150 }} />
                </span>
                ОРГАНИЗОВАННЫХ ТУРОВ
              </p>
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  +<Countup params={{ end: 5000 }} />
                </span>
                ОТКРЫТЫХ ВИЗ
              </p>
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  +<Countup params={{ end: 8000 }} />
                </span>
                ДОВОЛЬНЫХ ТУРИСТОВ
              </p>
              <p className="mb-4 font-bold text-xl">
                <span className="font-extrabold text-teal-400 text-4xl w-1/3 text-right pr-8 inline-block">
                  +<Countup params={{ end: 800000 }} />
                </span>
                КИЛОМЕТРОВ ПРЕОДОЛЕНО
              </p>
              <div className="flex mt-4">
                <p className="flex items-center w-1/2 px-4">
                  <AnimatedCircle
                    progress={67}
                    progressColor="lightSeaGreen"
                    lineWidth="30"
                    size={120}
                    textColor="black"
                    bgColor="white"
                    responsive
                  />
                  <span className="ml-6">
                    туристов открывают Европу впервыe с нами
                  </span>
                </p>
                <p className="flex items-center w-1/2 px-4">
                  <AnimatedCircle
                    progress={52}
                    progressColor="lightSeaGreen"
                    lineWidth="30"
                    size={120}
                    textColor="black"
                    bgColor="white"
                    responsive
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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={sectionHeight}></div>
      <section className="w-full" style={sectionHeight}>
        <h1>Hi people</h1>
      </section>
      <section className="container mx-auto">
        <div className="flex px-8 justify-between mb-8">
          <h2 className="text-4xl font-bold">БЛИЖАЙШИЕ ТУРЫ</h2>
          <Button primary>Все туры</Button>
        </div>
        <div className="flex justify-between -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <Card
              BgImage={<Image imgName="Amsterdam.jpg" className="h-full" />}
              contentColor="card-content-teal"
              dates={["asd", "adsa"]}
              path={["p", "a", "t", "h"]}
              primaryText="asdasdasdsad asd asdas dasd asd asdasassdsdsa"
              price="300$"
            />
          </div>
          <div className="w-1/2 px-3" style={cardWrapperStyle}>
            <RightCard
              BgImage={<Image imgName="Amsterdam.jpg" className="h-full" />}
              contentColor="card-content-teal"
              dates={["asd", "adsa"]}
              path={["p", "a", "t", "h"]}
              primaryText="asdasdasdsad asd"
              price="300$"
            />
          </div>
        </div>
        <div className="flex justify-between -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <Card
              BgImage={<Image imgName="Amsterdam.jpg" className="h-full" />}
              contentColor="card-content-teal"
              dates={["asd", "adsa"]}
              path={["p", "a", "t", "h"]}
              primaryText="asdasdasdsad asd asdas dasd asd asdasassdsdsa"
              price="300$"
            />
          </div>
          <div className="w-1/2 px-3" style={cardWrapperStyle}>
            <RightCard
              BgImage={<Image imgName="Amsterdam.jpg" className="h-full" />}
              contentColor="card-content-teal"
              dates={["asd", "adsa"]}
              path={["p", "a", "t", "h"]}
              primaryText="asdasdasdsad asd"
              price="300$"
            />
          </div>
        </div>
      </section>
      <About />
    </Layout>
  )
}

export default IndexPage
