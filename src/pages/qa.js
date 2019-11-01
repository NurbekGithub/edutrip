import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Questions from "../components/Questions"

const ToursPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulQuestion(sort: { fields: order, order: ASC }) {
        nodes {
          question
          childContentfulQuestionAnswerTextNode {
            answer
          }
        }
      }
    }
  `)
  const questions = data.allContentfulQuestion.nodes

  return (
    <Layout>
      <SEO title="Вопросы и ответы" />
      <Questions questions={questions} />
    </Layout>
  )
}

export default ToursPage
