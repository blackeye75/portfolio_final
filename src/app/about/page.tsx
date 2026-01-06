"use client";
import MagnetLines from "../../components/MagnetLines"; 

import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center"><MagnetLines
      rows={13}
      columns={15}
      containerSize="100vmin"
      lineColor="green"
      lineWidth="0.8vmin"
      lineHeight="5vmin"
      baseAngle={0}
      style={{ margin: "2rem auto" }}
    /></div>
  )
}

export default Page