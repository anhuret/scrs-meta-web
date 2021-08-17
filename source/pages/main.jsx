import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/main.module.css'
import { Space } from './space.js'
import { Statement } from './statement.js'
import { Updates } from './updates.js'
import { Statistics } from './statistics.js'
import { Metadata } from './metadata.js'
import { About } from './about.js'

export const Main = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <main className={css.main}>
      <Routes>
        <Route path="/statement" element={<Statement />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/metadata" element={<Metadata />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Space />} />
      </Routes>
    </main>
  )
}
