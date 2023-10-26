"use client"

import { CameraPlus } from "@phosphor-icons/react"

export function Camera() {
  return (
    <>
      <div
      className="fixed bottom-4 w-full px-2"
      >
        <button
        className="
        bg-sky-500 w-full h-[50px] rounded-lg
        flex justify-center items-center
        ">
          <CameraPlus size={24}/>
        </button>
      </div>
    </>
  )
}