import React from "react"
import Button from "../Button"
import Card from "../Card"
import { Link } from "gatsby"

function Tours({ tours, isUpcoming }) {
  return (
    <section className="container mx-auto">
      <div className="flex px-8 justify-between mb-8">
        <h2 className="md:text-4xl text-2xl font-bold">
          {isUpcoming && "БЛИЖАЙШИЕ"} ТУРЫ
        </h2>
        {isUpcoming && (
          <Button
            primary
            Component={Link}
            to="/tours"
            className="flex items-center text-center"
          >
            Все туры
          </Button>
        )}
      </div>
      {tours.map((tour, idx) => (
        <div key={idx} className="flex justify-between -mx-3 mb-6">
          {tour.map(({ node }, idx) => (
            <div key={idx} className="w-full lg:w-1/2 px-3">
              <Card
                imgFluid={node.bgImg.fluid}
                contentColor={`card-content-${node.contentColor || "teal"}`}
                dates={node.meta.dates || []}
                path={node.meta.path}
                primaryText={node.title}
                price={node.price}
                slug={node.slug}
                isRightAligned={idx % 2 === 1}
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Tours
