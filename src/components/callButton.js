import React, { useState } from "react"
import { FaPhone } from "react-icons/fa"
import Modal from "react-modal"
import { isMobile } from "react-device-detect"
import CallBackComponent from "./CallBackComponent"

Modal.setAppElement("#___gatsby")

export default function CallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (isMobile) {
    return (
      <a
        href="tel:+77072973038"
        className="call-button rounded-full w-24 h-24 bg-teal-400 border-gray-200 flex justify-center items-center"
      >
        <FaPhone color="white" size={38} />
      </a>
    )
  }
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="call-button rounded-full w-24 h-24 bg-teal-400 border-gray-200 flex justify-center items-center"
      >
        <FaPhone color="white" size={38} />
      </button>
      <Modal
        isOpen={isModalOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
          content: {
            top: "20%",
            left: "20%",
            width: "60vw",
            height: "60vh",
          },
        }}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <CallBackComponent />
      </Modal>
    </>
  )
}
