import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tours from "../components/homePage/Tours"
import { TabletWidth } from "../utils/globalStyleObjects"
import { chunkArray } from "../utils/responsive"
import { useMediaPredicate } from "react-media-hook"

const ToursPage = () => {
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  const data = useStaticQuery(graphql`
    query {
      allContentfulUpcomingTours(sort: { fields: order, order: ASC }) {
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
    }
  `)

  const tours = data.allContentfulUpcomingTours.edges
  const TOURS_IN_ROW = minWidthTablet ? 2 : 1
  const chankedTours = chunkArray(tours, TOURS_IN_ROW)

  return (
    <Layout>
      <SEO title="Tours" />
      <Tours tours={chankedTours} />
    </Layout>
  )
}

export default ToursPage
