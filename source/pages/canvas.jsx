import React, { useLayoutEffect } from 'react'

import css from './canvas.module.css'

export const Draw = () => {
  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(75.5, 50.5)
    ctx.lineTo(100.5, 75.5)
    ctx.lineTo(100.5, 25.5)
    ctx.stroke()
  })

  return (
    <canvas className={css.canvas} id="canvas">
      Canvas
    </canvas>
  )
}
