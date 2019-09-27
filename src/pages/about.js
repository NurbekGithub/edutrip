import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { chunkArray } from "../utils/responsive"
import { sectionHeight } from "../utils/globalStyleObjects"
import About from "../components/aboutPage/About"
import Team from "../components/aboutPage/Team"
import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "AboutPageBackgroundImage" }) {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
      allContentfulMember {
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

  return (
    <Layout>
      <SEO title="О нас" />
      <section style={sectionHeight}>
        <Img fluid={bgImageFluid} className="w-full h-full" />
      </section>
      <About />
      <Team chunkedMembers={chunkedMembers} />
    </Layout>
  )
}

export default AboutPage
