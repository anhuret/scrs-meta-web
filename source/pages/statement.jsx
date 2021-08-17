import React, { useState } from 'react'
import { useStore } from '../store/store.js'
import css from '../style/space.module.css'

export const Statement = () => {
  const [tip, setTip] = useStore('tip')

  return <section>Hello World</section>
}
