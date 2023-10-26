"use client"

import { useState } from "react"

export function Galery() {
  const [images, setImage] = useState([])

  return (
    <div className="w-full grid grid-cols-2 gap-2 p-4">
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
      <div className="w-full h-[200px] bg-zinc-600 rounded-lg" />
    </div>
  )
}