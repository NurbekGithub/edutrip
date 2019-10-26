import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { sectionHeight, TabletWidth } from "../utils/globalStyleObjects"
import About from "../components/homePage/About"
import Tours from "../components/homePage/Tours"
import Feedbacks from "../components/homePage/Feedbacks"
import { chunkArray } from "../utils/responsive"
import { useMediaPredicate } from "react-media-hook"
import Contacts from "../components/homePage/Contacts"

const IndexPage = () => {
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "HomePageBackgroundVideo" }) {
        file {
          url
        }
      }
      allContentfulFeedbackSecond(sort: { fields: id, order: DESC }) {
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
      allContentfulUpcomingTours(
        sort: { fields: order, order: ASC }
        limit: 4
      ) {
        edges {
          node {
            slug
            price
            title
            contentColor
            meta {
              path
              dates
            }
            bgImg {
              fluid {
                ...GatsbyContentfulFluid
                src
              }
            }
          }
        }
      }
      contentfulAbout {
        family
        km
        tourists
        touristsPercentage
        tours
        travelPercentage
        visa
        years
      }
    }
  `)

  const upcomingTours = data.allContentfulUpcomingTours.edges
  const feedbacks = data.allContentfulFeedbackSecond.edges
  const bgVideoURL = data.contentfulAsset.file.url
  const about = data.contentfulAbout

  // 2 slides in a row
  const FEEDBACK_IN_SLIDE = minWidthTablet ? 2 : 1
  const slides = chunkArray(feedbacks, FEEDBACK_IN_SLIDE)

  // 2 tours in a row
  const TOURS_IN_ROW = minWidthTablet ? 2 : 1
  const tours = chunkArray(upcomingTours, TOURS_IN_ROW)
  return (
    <Layout>
      <SEO title="Home" />
      <section
        style={minWidthTablet ? sectionHeight : null}
        className="mb-8 bg-gray-900"
      >
        <video
          playsInline
          width="100%"
          style={{ height: "100%" }}
          autoPlay="autoplay"
          loop
          muted
          src={bgVideoURL}
        />
      </section>
      <Tours tours={tours} isUpcoming />
      <About about={about} />
      <Feedbacks slides={slides} />
      <Contacts />
    </Layout>
  )
}

export default IndexPage
