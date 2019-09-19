import React, { useState } from "react"
import Modal from "react-modal"
import Button from "../components/Button"

export default function FeedbackModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Button
        className="h-12 normal-case bg-gray-400 hover:bg-teal-400 mr-6"
        onClick={() => setIsModalOpen(true)}
      >
        +Добавить отзыв
      </Button>
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
        <div className="bg-gray-100 w-full h-full flex justify-center p-8">
          <form
            action="https://formspree.io/edutravelcenter.kz@gmail.com"
            className="w-1/2 text-center"
            method="POST"
          >
            <h2 className="text-3xl mb-10 text-center">ДОБАВИТЬ ОТЗЫВ</h2>
            <input
              className="w-full mb-4 appearance-none bg-gray-200 text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="ФИО"
              name="FIO"
              required
            />
            <input
              className="w-full mb-4 appearance-none bg-gray-200 text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="e-mail"
              type="email"
              name="email"
            />
            <textarea
              className="w-full mb-4 appearance-none bg-gray-200 text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="отзыв"
              name="feedback"
              required
              rows={5}
            />
            <button className="bg-teal-400 hover:bg-teal-500 text-gray-100 font-bold py-2 px-4">
              Отправить
            </button>
          </form>
        </div>
      </Modal>
    </>
  )
}
