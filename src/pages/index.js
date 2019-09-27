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
  const FEEDBACK_IN_SLIDE = 2
  const slides = chankArray(feedbacks, FEEDBACK_IN_SLIDE)

  // 2 tours in a row
  const TOURS_IN_ROW = 2
  const tours = chankArray(upcomingTours, TOURS_IN_ROW)
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
