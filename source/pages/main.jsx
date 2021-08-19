import React from 'react'
import { Route, Routes } from 'react-router-dom'
import css from '../style/main.module.css'
import { Space } from './space.js'
import { View } from './view.js'

export const Main = () => {
  return (
    <main className={css.main}>
      <Routes>
        <Route path="/statement" element={<View name="statement" />} />
        <Route path="/updates" element={<View name="updates" />} />
        <Route path="/statistics" element={<View name="statistics" />} />
        <Route path="/metadata" element={<View name="metadata" />} />
        <Route path="/about" element={<View name="about" />} />
        <Route path="/" element={<Space />} />
      </Routes>
    </main>
  )
}
