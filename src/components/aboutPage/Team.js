import React from "react"
import MemberCard from "../MemberCard"

export default function Team({ members }) {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold my-8">НАША КОМАНДА</h2>
      {members.map(member => {
        const { picture, fullName, description, position } = member
        return (
          <MemberCard
            position={position}
            fullName={fullName}
            imgFluid={picture.fluid}
            description={description.internal.content}
          />
        )
      })}
    </div>
  )
}
