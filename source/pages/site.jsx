import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './header.js'
import { Footer } from './footer.js'
import { Space } from './space.js'
import { View } from './view.js'
import css from '../style/site.module.css'

export const Site = () => (
  <div className={css.site}>
    <Header />
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
    <Footer />
  </div>
)
