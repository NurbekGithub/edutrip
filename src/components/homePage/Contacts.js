import React from "react"
import ContactsMap from "../ContactsMap"

export default function Contacts() {
  const PATH_LINK =
    "http://2gis.kz/nur_sultan/center/71.433904,51.130771/zoom/16/routeTab/rsType/bus/to/71.433904,51.130771╎eduTravel_kz?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route"
  const PHOTO_LINK =
    "http://2gis.kz/nur_sultan/firm/70000001037377590/photos/70000001037377590/center/71.43389940261842,51.13126922397968/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos"
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <ContactsMap />
      </div>
      <div className="w-full lg:w-1/2 bg-yellow-400 border-l-2 p-12">
        <h2 className="text-2xl font-bold mb-4">Наши контакты</h2>
        <p className="font-bold">Адрес</p>
        <p className="mb-2">
          БЦ "Астаналык" Динмухамеда Кунаева, 336 этаж; 601 офис
        </p>
        <p>
          <a href={PATH_LINK} className="underline">
            Как до нас доехать?
          </a>
        </p>
      </div>
    </div>
  )
}
