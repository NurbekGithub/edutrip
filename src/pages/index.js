import React from "react"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Countup from "../components/Countup"

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section className="section w-full bg-white p-8" ref={ref}>
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
      <div className="section" style={{ height: "100vh" }}></div>
      <section className="section w-full">
        <h1>Hi people</h1>
      </section>
      <About />
    </Layout>
  )
}

export default IndexPage
