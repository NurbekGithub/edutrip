import React from "react"
import MemberCard from "../MemberCard"

export default function Team({ chunkedMembers }) {
  return (
    <div className="container mx-auto">
      <h2 className="lg:text-4xl text-2xl font-extrabold lg:my-8 my-4 text-center lg:text-left">
        НАША КОМАНДА
      </h2>
      {chunkedMembers.map((membersRow, idx) => {
        return (
          <div
            key={idx}
            className="flex -mx-8 lg:flex-row flex-col justify-center items-center lg:items-stretch lg:justify-start"
          >
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
