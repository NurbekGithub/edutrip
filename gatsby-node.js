/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const tourComponent = path.resolve("./src/templates/TourDetails.js")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query FetchTours {
      allContentfulUpcomingTours {
        nodes {
          slug
          tourCandies {
            candy
            img {
              fixed(height: 90, width: 90) {
                src
              }
            }
          }
          tourPrograms {
            day
            description {
              internal {
                content
              }
            }
            meta {
              events
            }
            descriptionImg {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const tours = result.data.allContentfulUpcomingTours.nodes

    tours.forEach(tour => {
      if (tour.slug) {
        createPage({
          path: tour.slug,
          component: tourComponent,
          context: {
            tour,
          },
        })
      }
    })
  })
}
