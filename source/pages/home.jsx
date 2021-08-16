import React from 'react'
import { Header } from './header.js'
import { Footer } from './footer.js'
import { Main } from './main.js'
import css from './home.module.css'

export const Home = () => (
  <div className={css.home}>
    <Header />
    <Main />
    <Footer />
  </div>
)
