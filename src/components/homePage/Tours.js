import React from "react"
import Button from "../Button"
import Card from "../Card"

function Tours({ tours }) {
  return (
    <section className="container mx-auto">
      <div className="flex px-8 justify-between mb-8">
        <h2 className="text-4xl font-bold">БЛИЖАЙШИЕ ТУРЫ</h2>
        <Button primary>Все туры</Button>
      </div>
      {tours.map((tour, idx) => (
        <div key={idx} className="flex justify-between -mx-3 mb-6">
          {tour.map(({ node }, idx) => (
            <div key={idx} className="w-1/2 px-3">
              <Card
                imgFluid={node.bgImg.fluid}
                contentColor="card-content-teal"
                dates={["asd", "adsa"]}
                path={node.meta.path}
                primaryText={node.title}
                price={node.price}
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Tours
