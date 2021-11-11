import { easing } from "@mui/material"
import React, { useState } from "react"

export default function Cursor() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener("mousemove", e => {
    setCursorX(e.clientX)
    setCursorY(e.clientY)
  })

  return (
    <>
      <div
        className='custom-cursor'
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}>
        <div className='layer-one'></div>
        <div className='layer-two'></div>
      </div>
    </>
  )
}
