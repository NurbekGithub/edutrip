import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { chunkArray } from "../utils/responsive"
import { sectionHeight, TabletWidth } from "../utils/globalStyleObjects"
import About from "../components/aboutPage/About"
import Team from "../components/aboutPage/Team"
import Img from "gatsby-image"
import { useMediaPredicate } from "react-media-hook"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "AboutPageBackgroundImage" }) {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
      allContentfulMember(sort: { fields: id, order: ASC }) {
        nodes {
          picture {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
              src
            }
          }
          fullName
          description {
            internal {
              content
            }
          }
          position
        }
      }
    }
  `)

  const MEMBER_IN_ROW = 3
  const members = data.allContentfulMember.nodes
  const chunkedMembers = chunkArray(members, MEMBER_IN_ROW)
  const bgImageFluid = data.contentfulAsset.fluid

  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  return (
    <Layout>
      <SEO title="О нас" />
      <section style={minWidthTablet ? sectionHeight : null}>
        <Img fluid={bgImageFluid} className="w-full h-full" />
      </section>
      <About />
      <Team chunkedMembers={chunkedMembers} />
    </Layout>
  )
}

export default AboutPage
