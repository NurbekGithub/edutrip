import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

const mapStyle = {
  height: "400px",
  overflow: "hidden",
}

export default function ContactsMap({ point }) {
  const position = [point.lat, point.lon]
  if (typeof window !== "undefined") {
    return (
      <div style={mapStyle}>
        <Map center={position} zoom={16}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Мы тут!</Popup>
          </Marker>
        </Map>
      </div>
    )
  }
  return null
}
