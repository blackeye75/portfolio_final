import React from 'react'

export const Underline = () => {
  return (
    <div><div
      className="
    h-px 
    w-[75vw] sm:w-[23vw] 
    tracking-tight sm:tracking-tighter 
    -mt-0.5 sm:-mt-0.9 
    bg-linear-to-r from-amber-500 via-orange-500 to-red-500
    origin-left
  "
      style={{
        transform: "scaleX(0)",
        animation: "underlineGrow 6s ease-out forwards",
      }}
    /></div>
  )
}
