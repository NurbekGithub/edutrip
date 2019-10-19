import React from "react"

export default function Button({
  children,
  secondary,
  primary,
  white,
  className,
  Component,
  ...rest
}) {
  let colorClass = ""
  if (primary) {
    colorClass = "bg-red-600 hover:bg-teal-400"
  }
  if (secondary) {
    colorClass = "bg-teal-400 hover:bg-red-600"
  }
  if (white) {
    colorClass = "bg-gray-300 hover:bg-gray-400 text-gray-900"
  }
  if (Component) {
    return (
      <Component
        className={`rounded-full text-white px-6 text-sm font-bold uppercase py-1 ${colorClass} ${className}`}
        {...rest}
      >
        {children}
      </Component>
    )
  }
  return (
    <button
      className={`rounded-full text-white px-6 text-sm font-bold uppercase py-1 ${colorClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
