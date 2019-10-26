import React from "react"
import { Slider } from "react-burgers"
import { FaFacebookF, FaInstagram, FaVk } from "react-icons/fa"
import { Link } from "gatsby"

export default function LeftSider({ toggleIsSidbarOpen, isSiderOpen }) {
  const isOpenClass = `${isSiderOpen ? "open" : ""}`
  return (
    <>
      <aside className="fixed left-0 h-screen md:flex items-center justify-center w-12 top-0 hidden">
        <div
          className="flex flex-col cursor-pointer items-center justify-center"
          onClick={toggleIsSidbarOpen}
        >
          <span className="font-thin text-xs text-gray-500 vertical-text pl-8 select-none">
            МЕНЮ
          </span>
          <span>
            <Slider
              className="outline-none"
              lineHeight={2}
              width={20}
              padding={0}
              lineSpacing={4}
              color="#777"
              active={isSiderOpen}
            />
          </span>
        </div>
      </aside>
      <div
        className={`menu-overlay left-0 right-0 ${isOpenClass}`}
        onClick={toggleIsSidbarOpen}
      >
        <div
          className={`menu-content ${isOpenClass} bg-teal-400 text-white`}
          onClick={e => e.stopPropagation()}
        >
          <ul className="h-full flex flex-col justify-center">
            <li className="w-full">
              <Link
                to="/"
                className="block h-full py-2 text-center font-bold text-xl"
              >
                Главная
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/tours"
                className="block h-full py-2 text-center font-bold text-xl"
              >
                Календарь туров
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about"
                className="block h-full py-2 text-center font-bold text-xl"
              >
                О нас
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contacts"
                className="block h-full py-2 text-center font-bold text-xl"
              >
                Контакты
              </Link>
            </li>
            <li className="w-full flex justify-center mt-4">
              <a
                href="https://www.facebook.com/EduTravel-1958334667515174/"
                className="py-2 text-white-500 mx-3 hover:text-teal-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/edutravel_kz?igshid=1q5jmb15pc0jm"
                className="py-2 text-white-500 mx-3 hover:text-teal-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://vk.com/edutravelkz"
                className="py-2 text-white-500 mx-3 hover:text-teal-400"
              >
                <FaVk />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
