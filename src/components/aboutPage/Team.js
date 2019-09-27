import React from "react"
import MemberCard from "../MemberCard"

export default function Team({ chunkedMembers }) {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold my-8">НАША КОМАНДА</h2>
      {chunkedMembers.map((membersRow, idx) => {
        return (
          <div key={idx} className="flex -mx-8">
            {membersRow.map((member, memberIdx) => {
              const { picture, fullName, description, position } = member
              return (
                <MemberCard
                  key={memberIdx}
                  position={position}
                  fullName={fullName}
                  imgFluid={picture.fluid}
                  description={description.internal.content}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
