import React from "react"
import { chunkArray } from "../utils/responsive"
import Layout from "../components/layout"
import Button from "../components/Button"
import Image from "gatsby-image"

function TourCandy({ candy, imgFixed }) {
  return (
    <div className="flex items-center">
      <div className="rounded-full flex justify-center items-center w-32 h-32 bg-white mr-6 flex-shrink-0">
        <img src={imgFixed.src} className="rounded-full mb-0" />
      </div>
      <p className="text-xl text-teal-400">{candy}</p>
    </div>
  )
}

function TourProgram({ program }) {
  const {
    day,
    meta: { events },
    description: {
      internal: { content },
    },
    descriptionImg: { fluid },
  } = program
  return (
    <div className="bg-gray-300 p-8">
      <div className="flex mb-8">
        <div className="w-1/2 border-r-2 border-green-600">
          <figure className="rounded-full flex justify-center items-center text-white text-xl font-bold w-24 h-24 bg-teal-400">
            {day} ДЕНЬ
          </figure>
        </div>
        <div className="w-1/2 flex items-center pl-2">
          {events.map(event => (
            <Button white key={event} className="mr-2">
              {event}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex">
        <div
          className="w-1/2 border-r-2 border-green-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="w-1/2 pl-2">
          <Image fluid={fluid} style={{ minHeight: "300px" }} />
        </div>
      </div>
    </div>
  )
}

export default function TourDetails({ pageContext }) {
  const { tourCandies, tourPrograms } = pageContext.tour
  const TOUR_CANDIES_IN_ROW = 3
  const chunckedTourCandies = chunkArray(tourCandies, TOUR_CANDIES_IN_ROW)
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h2 className="text-4xl my-8 font-extrabold">ФИШКИ ТУРА</h2>
        {chunckedTourCandies.map((tourCandiesRow, idx) => (
          <div className="flex justyfy-between" key={idx}>
            {tourCandiesRow.map((tourCandy, candyIdx) => {
              const { candy, img } = tourCandy
              return (
                <div key={candyIdx} className={`w-1/${TOUR_CANDIES_IN_ROW}`}>
                  <TourCandy candy={candy} imgFixed={img.fixed} />
                </div>
              )
            })}
          </div>
        ))}
        <h2 className="text-4xl my-8 font-extrabold">ПРОГРАММА ТУРА</h2>
        {tourPrograms.map((program, idx) => (
          <TourProgram key={idx} program={program} />
        ))}
      </div>
    </Layout>
  )
}
