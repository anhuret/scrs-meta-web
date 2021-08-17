import React from 'react'
import { Header } from '../comps/header.js'
import { Footer } from '../comps/footer.js'
import { Main } from './main.js'
import css from '../style/home.module.css'

export const Home = () => (
  <div className={css.home}>
    <Header />
    <Main />
    <Footer />
  </div>
)
