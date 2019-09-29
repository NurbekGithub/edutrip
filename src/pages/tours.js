import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Router, Link } from "@reach/router"

const SomeSubPage = props => {
  return <div>Hi from SubPage with id: {props.id}</div>
}

const Tours = () => (
  <Layout>
    <SEO title="Tours" />
    <Link to="/tours/1">1</Link>
    <Router>
      <SomeSubPage path="/tours/:id" />
    </Router>
  </Layout>
)

export default Tours
