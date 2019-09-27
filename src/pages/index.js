import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { sectionHeight } from "../utils/globalStyleObjects"
import About from "../components/homePage/About"
import Tours from "../components/homePage/Tours"
import Feedbacks from "../components/homePage/Feedbacks"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeedbackSecond {
        edges {
          node {
            name
            updatedAt
            userImage {
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
                src
              }
            }
            feedbackText {
              feedbackText
            }
          }
        }
      }
      allContentfulUpcomingTours {
        edges {
          node {
            price
            title
            meta {
              path
              dates
            }
            bgImg {
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
                src
              }
            }
          }
        }
      }
    }
  `)

  const upcomingTours = data.allContentfulUpcomingTours.edges
  const feedbacks = data.allContentfulFeedbackSecond.edges

  // 2 slides in a row
  const slides = feedbacks.reduce((acc, feed, idx) => {
    const FEEDBACK_IN_SLIDE = 2
    const slideIndex = Math.floor(idx / FEEDBACK_IN_SLIDE)

    acc[slideIndex] = (acc[slideIndex] || []).concat(feed)
    return acc
  }, [])

  // 2 tours in a row
  const tours = upcomingTours.reduce((acc, tour, idx) => {
    const TOURS_IN_ROW = 2
    const tourIndex = Math.floor(idx / TOURS_IN_ROW)

    acc[tourIndex] = (acc[tourIndex] || []).concat(tour)
    return acc
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <section style={sectionHeight}></section>
      <section className="w-full" style={sectionHeight}>
        <h1>Hi people</h1>
      </section>
      <Tours tours={tours} />
      <About />
      <Feedbacks slides={slides} />
    </Layout>
  )
}

export default IndexPage
