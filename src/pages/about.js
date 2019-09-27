import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { sectionHeight } from "../utils/globalStyleObjects"
import About from "../components/aboutPage/About"
import Team from "../components/aboutPage/Team"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
  const members = data.allContentfulMember.nodes

  return (
    <Layout>
      <SEO title="О нас" />
      <section style={sectionHeight}></section>
      <About />
      <Team members={members} />
    </Layout>
  )
}

export default SecondPage
