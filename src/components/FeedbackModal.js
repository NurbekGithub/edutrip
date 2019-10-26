import React, { useState } from "react"
import Modal from "react-modal"
import Button from "../components/Button"

export default function FeedbackModal({ minWidthTablet }) {
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
            left: minWidthTablet ? "20%" : 0,
            width: minWidthTablet ? "60vw" : "100vw",
            height: "60vh",
          },
        }}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className="bg-gray-100 w-full h-full flex justify-center p-8">
          <form
            name="feedback"
            data-netlify="true"
            className="lg:w-1/2 w-full text-center"
            method="POST"
          >
            <input type="hidden" name="form-name" value="feedback" />
            <h2 className="lg:text-3xl text-2xl mb-10 font-bold text-center">
              ДОБАВИТЬ ОТЗЫВ
            </h2>
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
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-gray-100 font-bold py-2 px-4"
            >
              Отправить
            </button>
          </form>
        </div>
      </Modal>
    </>
  )
}
