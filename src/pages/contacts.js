import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contacts from "../components/homePage/Contacts"

export default function contacts() {
  return (
    <Layout>
      <SEO title="Contacts" />
      <Contacts />
    </Layout>
  )
}
