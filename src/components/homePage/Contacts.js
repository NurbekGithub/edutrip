import React from "react"
import ContactsMap from "../ContactsMap"

export default function Contacts({ contentfulContact }) {
  if (!contentfulContact) return null
  const { lat, lon } = contentfulContact.point
  const PATH_LINK = `http://2gis.kz/nur_sultan/center/${lon},${lat}/zoom/16/routeTab/rsType/bus/to/${lon},${lat}╎eduTravel_kz?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route`
  const PHOTO_LINK = `http://2gis.kz/nur_sultan/firm/70000001037377590/photos/70000001037377590/center/${lon},${lat}/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos`
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <ContactsMap point={contentfulContact.point} />
      </div>
      <div className="w-full lg:w-1/2 bg-yellow-400 border-l-2 p-12">
        <h2 className="text-2xl font-bold mb-4">Наши контакты</h2>
        {contentfulContact.ourLocation && (
          <>
            <p className="font-bold">Мы находимся</p>
            <p className="mb-2">{contentfulContact.ourLocation}</p>
          </>
        )}
        {contentfulContact.contacts && (
          <>
            <p className="font-bold">Контакты</p>
            {contentfulContact.contacts.map((contact, idx) => {
              return (
                <p className="mb-2" key={idx}>
                  <a href={`tel:${contact.telephone}`} className="underline">
                    {contact.telephone} &nbsp;&nbsp; {contact.name}
                  </a>
                </p>
              )
            })}
          </>
        )}
        <p>
          <a href={PATH_LINK} className="underline">
            Как до нас доехать?
          </a>
        </p>
      </div>
    </div>
  )
}
