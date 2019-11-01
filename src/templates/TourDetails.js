import React from "react"
import { chunkArray } from "../utils/responsive"
import Layout from "../components/layout"
import Button from "../components/Button"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"

function TourCandy({ candy, imgFixed }) {
  return (
    <div className="flex items-center">
      <div className="rounded-full flex justify-center items-center lg:w-32 lg:h-32 h-24 w-24 bg-white mr-6 flex-shrink-0">
        <img src={imgFixed.src} className="rounded-full mb-0" />
      </div>
      <p className="lg:text-xl text-teal-400">{candy}</p>
    </div>
  )
}

function TourProgram({ program }) {
  const {
    day,
    meta,
    description: {
      internal: { content },
    },
    descriptionImg,
  } = program
  const events = meta ? meta.events : []
  const fluid = descriptionImg ? descriptionImg.fluid : null
  return (
    <div className="bg-gray-300 lg:p-8 p-2">
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="w-full lg:w-1/2 lg:border-r-2 border-b lg:border-b-0 border-green-600 p-2">
          <figure className="rounded-full flex justify-center items-center text-white text-xl font-bold w-24 h-24 bg-teal-400">
            {day} ДЕНЬ
          </figure>
        </div>
        <div className="w-full lg:w-1/2 flex items-center p-2">
          {events.map(event => (
            <Button white key={event} className="mr-2">
              {event}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ReactMarkdown
          className="w-full lg:w-1/2 lg:border-r-2 border-green-600 p-2"
          source={content}
        />
        <div className="w-full lg:w-1/2 lg:pl-2">
          {fluid && <Image fluid={fluid} style={{ height: "300px" }} />}
        </div>
      </div>
    </div>
  )
}

export default function TourDetails({ pageContext }) {
  const { tourCandies, tourPrograms } = pageContext.tour
  const TOUR_CANDIES_IN_ROW = 3
  const chunckedTourCandies =
    tourCandies && chunkArray(tourCandies, TOUR_CANDIES_IN_ROW)
  return (
    <Layout>
      <div className="container mx-auto py-8">
        {tourCandies && (
          <>
            <h2 className="lg:text-4xl text-2xl my-8 font-extrabold">
              ФИШКИ ТУРА
            </h2>
            {chunckedTourCandies.map((tourCandiesRow, idx) => (
              <div className="flex justyfy-between" key={idx}>
                {tourCandiesRow.map((tourCandy, candyIdx) => {
                  const { candy, img } = tourCandy
                  return (
                    <div
                      key={candyIdx}
                      className={`w-1/${TOUR_CANDIES_IN_ROW}`}
                    >
                      <TourCandy candy={candy} imgFixed={img.fixed} />
                    </div>
                  )
                })}
              </div>
            ))}
          </>
        )}
        {tourPrograms && (
          <>
            <h2 className="lg:text-4xl text-2xl my-8 font-extrabold">
              ПРОГРАММА ТУРА
            </h2>
            {tourPrograms.map((program, idx) => (
              <TourProgram key={idx} program={program} />
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}
