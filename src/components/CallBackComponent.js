import React from "react"

export default function CallBackComponent() {
  return (
    <div className="bg-gray-100 w-full h-full flex justify-center items-center">
      <div>
        <h2 className="text-3xl text-thin mb-10">
          Хотите, перезвоним Вам за 30 секунд?
        </h2>
        <div className="flex">
          <input
            class="flex-1 appearance-none bg-gray-200 text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Ваш номер телефона"
          />
          <button className="bg-teal-400 hover:bg-teal-500 text-gray-100 font-bold py-2 px-4">
            Перезвоните
          </button>
        </div>
        <p className="text-gray-500 text-xs">Например: 067 000 00 00</p>
      </div>
    </div>
  )
}
