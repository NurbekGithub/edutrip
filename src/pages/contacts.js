import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Contacts from "../components/homePage/Contacts"

const ContactsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        contacts {
          name
          telephone
        }
        ourLocation
        point {
          lat
          lon
        }
      }
    }
  `)

  const contentfulContact = data.contentfulContact
  return (
    <Layout>
      <SEO title="Contacts" />
      <Contacts contentfulContact={contentfulContact} />
    </Layout>
  )
}

export default ContactsPage
