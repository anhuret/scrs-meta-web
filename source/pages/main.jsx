import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/main.module.css'
import { Space } from './space.js'
import { Statistics } from './statistics.js'
import { View } from './view.js'

export const Main = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <main className={css.main}>
      <Routes>
        <Route path="/statement" element={<View name="statement" />} />
        <Route path="/updates" element={<View name="updates" />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/metadata" element={<View name="metadata" />} />
        <Route path="/about" element={<View name="about" />} />
        <Route path="/" element={<Space />} />
      </Routes>
    </main>
  )
}
