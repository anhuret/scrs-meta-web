import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './header.js'
import { Footer } from './footer.js'
import { Space } from './space.js'
import { Mark } from './mark.js'
import css from '../style/main.module.css'

export const Main = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [show])

  return <div className={css.main}>{show ? <Site /> : <Load />}</div>
}

const Site = () => (
  <>
    <Header />
    <main className={css.view}>
      <Routes>
        <Route path="/statement" element={<Mark name="statement" />} />
        <Route path="/updates" element={<Mark name="updates" />} />
        <Route path="/statistics" element={<Mark name="statistics" />} />
        <Route path="/metadata" element={<Mark name="metadata" />} />
        <Route path="/about" element={<Mark name="about" />} />
        <Route path="/" element={<Space />} />
      </Routes>
    </main>
    <Footer />
  </>
)

const Load = () => (
  <div className={css.load}>
    <figure className={css.logo}>
      <img src={'/images/cardano.svg'} className={css.spin} />
    </figure>
  </div>
)
