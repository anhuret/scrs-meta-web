import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useStore } from '../store/store.js'
import css from '../style/main.module.css'
import { Space } from './space.js'
import { Statement } from './statement.js'

export const Main = () => {
  const [tip, setTip] = useStore('tip')

  return (
    <main className={css.main}>
      <Routes>
        <Route path="/statement" element={<Statement />} />
        <Route path="/" element={<Space />} />
      </Routes>
    </main>
  )
}
