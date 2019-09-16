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
      <h2 className="text-3xl font-bold">О НАС</h2>
      {inView && (
        <p>
          <Countup params={{ end: 12342312 }} />
        </p>
      )}
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
