import React from "react"
import { chunkArray } from "../utils/responsive"
import Layout from "../components/layout"

function TourCandy({ candy, imgFixed }) {
  console.log({ candy, imgFixed })
  return (
    <div className="flex items-center">
      <div className="rounded-full flex justify-center items-center w-32 h-32 bg-white mr-6 flex-shrink-0">
        <img src={imgFixed.src} className="rounded-full mb-0" />
      </div>
      <p className="text-xl text-teal-400">{candy}</p>
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
        <h2 className="text-4xl my-8">ФИШКИ ТУРА</h2>
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
      </div>
    </Layout>
  )
}
